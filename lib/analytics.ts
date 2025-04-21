'use client';

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track chart interactions
export const trackChartInteraction = (
  chartType: string,
  action: string,
  details?: Record<string, any>
) => {
  trackEvent('chart_interaction', {
    chart_type: chartType,
    action,
    ...details,
  });
};

// Track filter changes
export const trackFilterChange = (
  filterType: string,
  value: string | number
) => {
  trackEvent('filter_change', {
    filter_type: filterType,
    value,
  });
};

// Track data loading
export const trackDataLoad = (
  dataType: string,
  status: 'success' | 'error',
  duration?: number
) => {
  trackEvent('data_load', {
    data_type: dataType,
    status,
    duration,
  });
};

// Declare global types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
