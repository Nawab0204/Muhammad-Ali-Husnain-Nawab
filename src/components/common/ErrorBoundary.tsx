/**
 * Enterprise React Error Boundary.
 * Catches unhandled runtime exceptions and renders a polished, branded recovery view.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error securely
    console.error('[BOTLYTICES Error Boundary caught an exception]:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[500px] flex items-center justify-center p-6 bg-[#F7F9FC]">
          <div className="max-w-md w-full bg-white border border-[#E6EBF2] rounded-2xl p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-bold text-[#0A1020] mb-2">
              {this.props.fallbackTitle || 'Something interrupted this view'}
            </h2>

            <p className="text-sm text-[#5D687A] mb-6 leading-relaxed">
              {this.props.fallbackMessage ||
                'Our application encountered an unexpected runtime issue. Please try refreshing the screen or returning to the home page.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#006BFF] hover:bg-[#087CFF] text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#E6EBF2] hover:bg-slate-50 text-[#0A1020] text-sm font-medium rounded-xl transition-all"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
