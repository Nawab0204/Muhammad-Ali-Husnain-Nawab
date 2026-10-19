/**
 * Global Application State Management (React Context).
 * Decouples routing, modal triggers, toast notifications, and global interaction state.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { ToastNotification } from '../types';

interface AppContextType {
  currentPath: string;
  navigate: (path: string, options?: { replace?: boolean; scrollBehavior?: ScrollBehavior }) => void;
  isQuoteModalOpen: boolean;
  selectedService?: string;
  selectedLocation?: string;
  openQuoteModal: (service?: string, location?: string) => void;
  closeQuoteModal: () => void;
  toasts: ToastNotification[];
  addToast: (toast: Omit<ToastNotification, 'id'>) => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Synchronize browser back/forward buttons with currentPath
  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname || '/';
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Centralized navigate function
  const navigate = useCallback((path: string, options?: { replace?: boolean; scrollBehavior?: ScrollBehavior }) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const behavior = options?.scrollBehavior || 'smooth';

    if (typeof window !== 'undefined') {
      if (options?.replace) {
        window.history.replaceState({}, '', cleanPath);
      } else if (window.location.pathname !== cleanPath) {
        window.history.pushState({}, '', cleanPath);
      }
    }

    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior });
  }, []);

  const openQuoteModal = useCallback((service?: string, location?: string) => {
    setSelectedService(service);
    setSelectedLocation(location);
    setIsQuoteModalOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((toast: Omit<ToastNotification, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const newToast: ToastNotification = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    const duration = toast.duration || 5000;
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, [removeToast]);

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        isQuoteModalOpen,
        selectedService,
        selectedLocation,
        openQuoteModal,
        closeQuoteModal,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an <AppProvider>');
  }
  return context;
};

export default AppContext;
