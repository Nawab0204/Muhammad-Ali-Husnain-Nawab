/**
 * Scalable, resilient API Client for BOTLYTICES.
 * Provides typed requests, automatic timeout aborts, status code handling, and error mapping.
 */

import { ApiResponse, ApiError } from '../types';
import { env } from '../config/env';
import { APP_CONSTANTS } from '../config/constants';

export class HttpClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor(baseUrl: string = env.apiBaseUrl, defaultTimeout: number = APP_CONSTANTS.TIMING.API_TIMEOUT_MS) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.defaultTimeout = defaultTimeout;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    customTimeout?: number
  ): Promise<ApiResponse<T>> {
    const url = endpoint.startsWith('http') ? endpoint : `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}`;
    const timeout = customTimeout || this.defaultTimeout;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...(options.headers || {}),
        },
      });

      clearTimeout(timer);

      let responseData: unknown = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        const errorData = responseData as { message?: string; errors?: Record<string, string> } | null;
        const apiError: ApiError = {
          message: errorData?.message || `HTTP Request failed with status ${response.status}`,
          statusCode: response.status,
          fieldErrors: errorData?.errors,
        };
        throw apiError;
      }

      return (
        (responseData as ApiResponse<T>) || {
          success: true,
          data: responseData as T,
          timestamp: new Date().toISOString(),
        }
      );
    } catch (error: unknown) {
      clearTimeout(timer);

      if (error && typeof error === 'object' && 'statusCode' in error) {
        throw error as ApiError;
      }

      if (error instanceof DOMException && error.name === 'AbortError') {
        const timeoutError: ApiError = {
          message: `Request timed out after ${timeout}ms. Please check your network connection.`,
          statusCode: 408,
        };
        throw timeoutError;
      }

      const networkError: ApiError = {
        message: error instanceof Error ? error.message : 'A network error occurred while communicating with the server.',
        statusCode: 0,
      };
      throw networkError;
    }
  }

  public async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public async post<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}

export const apiClient = new HttpClient();
export default apiClient;
