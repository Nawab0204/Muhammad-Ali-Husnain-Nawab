/**
 * Business logic service for lead capture, contact forms, and validation.
 * Keeps UI components free of complex regex validation and sanitization logic.
 */

import { InquiryFormData, FormValidationErrors } from '../types';

export const inquiryService = {
  /**
   * Default empty form state
   */
  getInitialFormData(defaultService?: string, defaultLocation?: string): InquiryFormData {
    return {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      location: defaultLocation || '',
      selectedServices: defaultService ? [defaultService] : [],
      timeline: '1 - 2 Months',
      budgetTier: '$5,000 - $15,000',
      preferredContactMethod: 'Email',
      message: defaultLocation ? `We are inquiring regarding digital services in ${defaultLocation}.` : '',
    };
  },

  /**
   * Sanitizes text inputs by trimming and stripping dangerous characters
   */
  sanitizeString(val: string): string {
    return val.trim().replace(/[<>]/g, '');
  },

  /**
   * Validates email address against RFC standard pattern
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(email.trim());
  },

  /**
   * Validates international phone format (at least 7 digits, permits +, -, spaces, parentheses)
   */
  isValidPhone(phone: string): boolean {
    if (!phone.trim()) return true; // Phone is optional in quick modal
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  },

  /**
   * Comprehensive validation rules for inquiry submissions
   */
  validate(data: InquiryFormData): FormValidationErrors {
    const errors: FormValidationErrors = {};

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Please provide your full name or representative name.';
    }

    // Email validation
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.email = 'Please provide a valid business email address.';
    }

    // Phone validation
    if (data.phone && !this.isValidPhone(data.phone)) {
      errors.phone = 'Please provide a valid phone number (7-15 digits).';
    }

    // Services validation
    if (!data.selectedServices || data.selectedServices.length === 0) {
      errors.selectedServices = 'Please select at least one service division or interest.';
    }

    return errors;
  },

  /**
   * Sanitizes all form fields before transmission
   */
  prepareForSubmission(data: InquiryFormData): InquiryFormData {
    return {
      ...data,
      name: this.sanitizeString(data.name),
      email: data.email.trim().toLowerCase(),
      phone: this.sanitizeString(data.phone),
      companyName: this.sanitizeString(data.companyName),
      message: this.sanitizeString(data.message),
    };
  },
};
