/**
 * Toast Notification Renderer.
 * Displays accessible floating notification alerts with smooth settling transitions.
 */

import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        const iconConfig = {
          success: { icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
          error: { icon: AlertCircle, color: 'text-red-500 bg-red-50' },
          warning: { icon: AlertTriangle, color: 'text-amber-500 bg-amber-50' },
          info: { icon: Info, color: 'text-[#006BFF] bg-[#F3F7FC]' },
        }[toast.type];

        const IconComponent = iconConfig.icon;

        return (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto bg-white border border-[#E6EBF2] shadow-xl shadow-slate-900/10 rounded-2xl p-4 flex items-start gap-3.5 transition-all transform translate-y-0 opacity-100"
          >
            <div className={`p-2 rounded-xl shrink-0 ${iconConfig.color}`}>
              <IconComponent className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <h4 className="text-sm font-semibold text-[#0A1020] truncate">{toast.title}</h4>
              {toast.message && (
                <p className="text-xs text-[#5D687A] mt-1 leading-relaxed">{toast.message}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
