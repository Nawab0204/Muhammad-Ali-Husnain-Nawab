/**
 * Centralized, type-safe environment configuration.
 * Decouples all environment variables from presentation and business logic.
 */

export interface AppEnv {
  appName: string;
  appUrl: string;
  isProduction: boolean;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  apiBaseUrl: string;
  enableAnalytics: boolean;
}

const getWindowOrigin = (): string => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://botlytices.com';
};

const resolveAppUrl = (): string => {
  // Check runtime injected env variables
  const rawUrl =
    (import.meta.env.VITE_APP_URL as string | undefined) ||
    (import.meta.env.APP_URL as string | undefined) ||
    getWindowOrigin();

  return rawUrl.replace(/\/+$/, '');
};

export const env: AppEnv = {
  appName: 'BOTLYTICES',
  appUrl: resolveAppUrl(),
  isProduction: import.meta.env.PROD || false,
  contactEmail: 'botlytices@gmail.com',
  contactPhone: '+92 340 0320020',
  contactAddress: 'Remote & On-Site International Technical Delivery',
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL as string | undefined) || '/api',
  enableAnalytics: import.meta.env.PROD || false,
};

export default env;
