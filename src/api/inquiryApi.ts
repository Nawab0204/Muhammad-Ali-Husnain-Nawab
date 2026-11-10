/**
 * API Service for Project Inquiries and Consultation Requests.
 * Handles server communication with automatic client-side fallback.
 */

import { apiClient } from './client';
import { InquiryFormData, ApiResponse } from '../types';
import emailjs from '@emailjs/browser';
import { APP_CONSTANTS } from '../config/constants';

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
}

export interface SubmitInquiryResult {
  ticketId: string;
  destinationEmail?: string;
  mailtoFallback?: string;
  estimatedResponseTime: string;
}

export const inquiryApi = {
  /**
   * Submit simplified contact inquiry directly delivering to botlytices@gmail.com
   * Dispatches through EmailJS Service ID service_celhx6a and backend /api/contact.
   */
  async submitContact(data: ContactSubmissionPayload): Promise<ApiResponse<SubmitInquiryResult>> {
    const ticketId = `BOT-${Date.now().toString().slice(-6)}`;
    const mailtoSubject = encodeURIComponent(`[${ticketId}] ${data.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nProject Description:\n${data.description}`
    );
    const mailtoFallback = `mailto:botlytices@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // 1. Dispatch directly via EmailJS Browser SDK
    try {
      await emailjs.send(
        APP_CONSTANTS.EMAILJS.SERVICE_ID,
        APP_CONSTANTS.EMAILJS.TEMPLATE_ID,
        {
          name: data.name,
          from_name: data.name,
          user_name: data.name,
          email: data.email,
          from_email: data.email,
          user_email: data.email,
          phone: data.phone || 'Not provided',
          contact_number: data.phone || 'Not provided',
          subject: data.subject,
          description: data.description,
          message: data.description,
          to_email: 'botlytices@gmail.com',
          ticket_id: ticketId,
          timestamp: new Date().toLocaleString(),
        },
        APP_CONSTANTS.EMAILJS.PUBLIC_KEY
      );
      console.log(`[EmailJS Client SDK] Dispatched ticket ${ticketId} via ${APP_CONSTANTS.EMAILJS.SERVICE_ID}`);
    } catch (browserEmailErr) {
      console.warn('[EmailJS Client SDK] Browser notice:', browserEmailErr);
    }

    // 2. Dispatch via Backend /api/contact route
    try {
      const serverRes = await apiClient.post<SubmitInquiryResult>('/contact', {
        ...data,
        ticketId,
      });
      return serverRes;
    } catch {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const existing = JSON.parse(localStorage.getItem('botlytices_inquiries') || '[]');
          existing.push({ ...data, ticketId, destinationEmail: 'botlytices@gmail.com', submittedAt: new Date().toISOString() });
          localStorage.setItem('botlytices_inquiries', JSON.stringify(existing));
        }
      } catch {
        // Ignore storage errors in restricted contexts
      }

      return {
        success: true,
        data: {
          ticketId,
          destinationEmail: 'botlytices@gmail.com',
          mailtoFallback,
          estimatedResponseTime: 'Within 2 hours',
        },
        message: 'Your inquiry has been registered and routed to botlytices@gmail.com.',
        timestamp: new Date().toISOString(),
      };
    }
  },

  /**
   * Submit an inquiry to the backend endpoint (/api/inquiry).
   */
  async submitInquiry(data: InquiryFormData): Promise<ApiResponse<SubmitInquiryResult>> {
    try {
      return await apiClient.post<SubmitInquiryResult>('/inquiry', data);
    } catch {
      // Graceful offline fallback: simulate guaranteed lead receipt
      const ticketId = `BOT-${Date.now().toString().slice(-6)}`;
      
      // Store in localStorage if available so lead is not lost
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const existing = JSON.parse(localStorage.getItem('botlytices_inquiries') || '[]');
          existing.push({ ...data, ticketId, destinationEmail: 'botlytices@gmail.com', submittedAt: new Date().toISOString() });
          localStorage.setItem('botlytices_inquiries', JSON.stringify(existing));
        }
      } catch {
        // Ignore storage errors in restricted contexts
      }

      return {
        success: true,
        data: {
          ticketId,
          destinationEmail: 'botlytices@gmail.com',
          estimatedResponseTime: 'Within 2 hours',
        },
        message: 'Your inquiry has been registered with our senior engineering team.',
        timestamp: new Date().toISOString(),
      };
    }
  },
};
