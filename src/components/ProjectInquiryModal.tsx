/**
 * Modal consultation / quote request component.
 * Uses useInquiryForm hook to decouple form validation and submission logic from presentation.
 */

import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import tabLogo from '../assets/images/botlytices-tab-logo.png';
import { useInquiryForm } from '../hooks/useInquiryForm';
import { APP_CONSTANTS } from '../config/constants';
import { Button } from './common/Button';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultLocation?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultLocation,
}) => {
  const {
    formData,
    errors,
    status,
    ticketId,
    setFieldValue,
    submit,
    reset,
    isSubmitting,
    isSuccess,
  } = useInquiryForm({
    defaultService,
    defaultLocation,
  });

  useEffect(() => {
    if (defaultService) {
      setFieldValue('selectedServices', [defaultService]);
    }
    if (defaultLocation) {
      setFieldValue('location', defaultLocation);
      setFieldValue(
        'message',
        formData.message || `We are inquiring regarding digital services in ${defaultLocation}.`
      );
    }
  }, [defaultService, defaultLocation, setFieldValue]);

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#07152E]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-white border border-[#E6EBF2] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative my-auto">
        <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E6EBF2] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={tabLogo}
              alt="BOTLYTICES"
              className="w-7 h-7 object-contain rounded-md"
            />
            <div>
              <div className="text-xs font-bold text-[#0A1020]">
                Start a Project · Request Consultation
              </div>
              <div className="text-[11px] text-[#5D687A]">
                Web · IT Support · Digital Presence · AI · Security
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white border border-[#E6EBF2] text-[#5D687A] hover:text-[#0A1020] hover:border-[#006BFF] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F3F7FC] border border-[#E6EBF2] text-[#006BFF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1020]">
                Project Consultation Request Registered
              </h3>
              <p className="text-sm text-[#5D687A] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#0A1020]">{formData.name}</span>. Your brief for{' '}
                <span className="font-semibold text-[#006BFF]">
                  {formData.selectedServices.join(', ') || 'Technical Services'}
                </span>{' '}
                has been recorded under ticket{' '}
                <code className="text-xs font-mono font-bold text-[#006BFF] bg-blue-50 px-2 py-0.5 rounded">
                  {ticketId}
                </code>
                . A senior solution engineer will contact you via{' '}
                <span className="font-semibold text-[#0A1020]">{formData.preferredContactMethod}</span> within 2 hours.
              </p>
              <div className="pt-4">
                <Button onClick={handleClose} variant="primary" size="md">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFieldValue('name', e.target.value)}
                    placeholder="Jane Doe"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all ${
                      errors.name ? 'border-red-400' : 'border-[#E6EBF2]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="inquiry-company" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="inquiry-company"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFieldValue('companyName', e.target.value)}
                    placeholder="Acme Inc."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-location" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Target City / Service Location
                  </label>
                  <input
                    id="inquiry-location"
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => setFieldValue('location', e.target.value)}
                    placeholder="e.g. London, Los Angeles, Sydney"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                    placeholder="you@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all ${
                      errors.email ? 'border-red-400' : 'border-[#E6EBF2]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFieldValue('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] transition-all ${
                      errors.phone ? 'border-red-400' : 'border-[#E6EBF2]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="inquiry-service"
                    value={formData.selectedServices[0] || APP_CONSTANTS.CONTACT_SERVICES[0]}
                    onChange={(e) => setFieldValue('selectedServices', [e.target.value])}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  >
                    {APP_CONSTANTS.CONTACT_SERVICES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-budget" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                    Estimated Budget Tier
                  </label>
                  <select
                    id="inquiry-budget"
                    value={formData.budgetTier}
                    onChange={(e) => setFieldValue('budgetTier', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF]"
                  >
                    {APP_CONSTANTS.BUDGET_TIERS.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['Email', 'Phone', 'WhatsApp'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFieldValue('preferredContactMethod', method)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        formData.preferredContactMethod === method
                          ? 'bg-[#F3F7FC] border-[#006BFF] text-[#006BFF]'
                          : 'bg-[#F8FAFC] border-[#E6EBF2] text-[#5D687A]'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-[#0A1020] mb-1.5">
                  Project Brief &amp; Requirements
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFieldValue('message', e.target.value)}
                  placeholder="Describe your current tech challenges, goals, or desired launch timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E6EBF2] text-sm text-[#0A1020] focus:outline-none focus:bg-white focus:border-[#006BFF] resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  className="w-full py-3.5"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Technical Consultation
                </Button>

                <div className="flex items-center justify-center gap-3 text-xs text-[#5D687A] pt-1">
                  <span>Or reach us directly:</span>
                  <a
                    href="https://wa.me/923557181347?text=Hello%20BOTLYTICES%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                  <span>·</span>
                  <a
                    href="tel:+923400320020"
                    className="inline-flex items-center gap-1 font-semibold text-[#0A1020] hover:text-[#006BFF]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#006BFF]" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInquiryModal;
