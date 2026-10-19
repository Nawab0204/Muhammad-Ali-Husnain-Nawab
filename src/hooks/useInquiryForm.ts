/**
 * Custom Hook for Inquiry / Consultation Form Management.
 * Extracts validation, network submission, error handling, and state machine from UI components.
 */

import { useState, useCallback } from 'react';
import { InquiryFormData, FormValidationErrors, SubmissionStatus } from '../types';
import { inquiryService } from '../services/inquiryService';
import { inquiryApi } from '../api/inquiryApi';
import { useApp } from '../context/AppContext';

interface UseInquiryFormOptions {
  defaultService?: string;
  defaultLocation?: string;
  onSuccess?: () => void;
}

export const useInquiryForm = (options: UseInquiryFormOptions = {}) => {
  const { addToast } = useApp();
  const [formData, setFormData] = useState<InquiryFormData>(() =>
    inquiryService.getInitialFormData(options.defaultService, options.defaultLocation)
  );
  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [ticketId, setTicketId] = useState<string | null>(null);

  // Field change handler
  const setFieldValue = useCallback(<K extends keyof InquiryFormData>(field: K, value: InquiryFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for field on change
    setErrors((prev) => {
      if (prev[field as keyof FormValidationErrors]) {
        const next = { ...prev };
        delete next[field as keyof FormValidationErrors];
        return next;
      }
      return prev;
    });
  }, []);

  // Toggle service selection in array
  const toggleService = useCallback((serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== serviceName)
        : [...prev.selectedServices, serviceName];
      return { ...prev, selectedServices: updated };
    });

    setErrors((prev) => {
      if (prev.selectedServices) {
        const next = { ...prev };
        delete next.selectedServices;
        return next;
      }
      return prev;
    });
  }, []);

  // Form submission handler
  const submit = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // 1. Validation phase
    setStatus('validating');
    const validationErrors = inquiryService.validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('idle');
      addToast({
        type: 'error',
        title: 'Please check the required form fields',
        message: 'Some fields require your attention before we can process your inquiry.',
      });
      return false;
    }

    // 2. Submission phase
    setStatus('submitting');
    try {
      const sanitizedData = inquiryService.prepareForSubmission(formData);
      const response = await inquiryApi.submitInquiry(sanitizedData);

      if (response.success) {
        setStatus('success');
        setTicketId(response.data?.ticketId || 'BOT-CONFIRMED');
        addToast({
          type: 'success',
          title: 'Consultation Request Received!',
          message: `Ticket ${response.data?.ticketId || 'BOT-CONFIRMED'} registered. Our senior engineering team will respond within 2 hours.`,
        });

        if (options.onSuccess) {
          options.onSuccess();
        }
        return true;
      } else {
        setStatus('error');
        addToast({
          type: 'error',
          title: 'Submission Issue',
          message: response.message || 'We could not submit your request. Please try again.',
        });
        return false;
      }
    } catch (err: unknown) {
      setStatus('error');
      const msg = err && typeof err === 'object' && 'message' in err ? String(err.message) : 'An unexpected error occurred.';
      addToast({
        type: 'error',
        title: 'Connection Issue',
        message: msg,
      });
      return false;
    }
  }, [formData, addToast, options]);

  // Reset form
  const reset = useCallback(() => {
    setFormData(inquiryService.getInitialFormData(options.defaultService));
    setErrors({});
    setStatus('idle');
    setTicketId(null);
  }, [options.defaultService]);

  return {
    formData,
    errors,
    status,
    ticketId,
    setFieldValue,
    toggleService,
    submit,
    reset,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
  };
};
