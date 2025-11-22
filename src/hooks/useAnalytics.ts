'use client';

export default function useAnalytics() {
  const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    if (cookieConsent === 'accepted' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('click', 'engagement', `${buttonName}${location ? ` - ${location}` : ''}`);
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent('form_submit', 'engagement', `${formName} - ${success ? 'success' : 'error'}`);
  };

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', 'navigation', pageName);
  };

  const trackContact = (method: string) => {
    trackEvent('contact', 'engagement', method);
  };

  const trackDemo = (source: string) => {
    trackEvent('demo_request', 'conversion', source);
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackPageView,
    trackContact,
    trackDemo,
  };
}