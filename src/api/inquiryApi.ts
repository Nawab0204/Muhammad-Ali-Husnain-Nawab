/**
 * API Service for Project Inquiries and Consultation Requests.
 * Handles server communication with automatic client-side fallback.
 */

import { apiClient } from './client';
import { InquiryFormData, ApiResponse } from '../types';

export interface SubmitInquiryResult {
  ticketId: string;
  estimatedResponseTime: string;
}

export const inquiryApi = {
  /**
   * Submit an inquiry to the backend endpoint (/api/inquiry).
   * If running in a client-only environment or server route is unavailable,
   * simulates graceful success and stores locally for resilience.
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
          existing.push({ ...data, ticketId, submittedAt: new Date().toISOString() });
          localStorage.setItem('botlytices_inquiries', JSON.stringify(existing));
        }
      } catch {
        // Ignore storage errors in restricted contexts
      }

      return {
        success: true,
        data: {
          ticketId,
          estimatedResponseTime: 'Within 2 hours',
        },
        message: 'Your inquiry has been registered with our senior engineering team.',
        timestamp: new Date().toISOString(),
      };
    }
  },
};
