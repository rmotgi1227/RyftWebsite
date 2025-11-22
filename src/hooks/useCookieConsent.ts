'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  CookieConsentState,
  CookieCategory,
  DEFAULT_COOKIE_CONSENT,
  getCookieConsent,
  setCookieConsent,
  hasValidConsent,
} from '@/lib/cookieConsent';

interface UseCookieConsentReturn {
  consent: CookieConsentState;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (category: CookieCategory, value: boolean) => void;
  hideBanner: () => void;
  resetConsent: () => void;
  hasConsent: (category: CookieCategory) => boolean;
}

export default function useCookieConsent(): UseCookieConsentReturn {
  const [consent, setConsent] = useState<CookieConsentState>(DEFAULT_COOKIE_CONSENT);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Initialize consent state from localStorage
  useEffect(() => {
    const storedConsent = getCookieConsent();
    const hasValid = hasValidConsent();
    
    if (storedConsent && hasValid) {
      setConsent(storedConsent);
      setShowBanner(false);
    } else {
      setConsent(DEFAULT_COOKIE_CONSENT);
      setShowBanner(true);
    }
    
    setIsInitialized(true);
  }, []);

  const saveConsent = useCallback((newConsent: CookieConsentState) => {
    setConsent(newConsent);
    setCookieConsent(newConsent);
    setShowBanner(false);
  }, []);

  const acceptAll = useCallback(() => {
    const newConsent: CookieConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      version: consent.version,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  }, [consent.version, saveConsent]);

  const rejectAll = useCallback(() => {
    const newConsent: CookieConsentState = {
      necessary: true, // Always required
      analytics: false,
      marketing: false,
      version: consent.version,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  }, [consent.version, saveConsent]);

  const updateConsent = useCallback((category: CookieCategory, value: boolean) => {
    // Prevent disabling necessary cookies
    if (category === 'necessary' && !value) {
      return;
    }

    const newConsent: CookieConsentState = {
      ...consent,
      [category]: value,
      timestamp: Date.now(),
    };
    
    setConsent(newConsent);
  }, [consent]);

  const hideBanner = useCallback(() => {
    const newConsent: CookieConsentState = {
      ...consent,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  }, [consent, saveConsent]);

  const resetConsent = useCallback(() => {
    setConsent(DEFAULT_COOKIE_CONSENT);
    setShowBanner(true);
    setCookieConsent(DEFAULT_COOKIE_CONSENT);
  }, []);

  const hasConsent = useCallback((category: CookieCategory): boolean => {
    return consent[category] === true;
  }, [consent]);

  return {
    consent,
    showBanner: isInitialized && showBanner,
    acceptAll,
    rejectAll,
    updateConsent,
    hideBanner,
    resetConsent,
    hasConsent,
  };
}