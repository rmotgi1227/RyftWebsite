'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import useCookieConsent from '@/hooks/useCookieConsent';
import { COOKIE_CATEGORIES, CookieCategory } from '@/lib/cookieConsent';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function CookiePreferencesModal({ 
  isOpen, 
  onClose, 
  className = '' 
}: CookiePreferencesModalProps) {
  const { consent, updateConsent, hideBanner, hasConsent } = useCookieConsent();
  const [localConsent, setLocalConsent] = useState(consent);

  // Update local state when consent changes
  useEffect(() => {
    setLocalConsent(consent);
  }, [consent]);

  const handleToggle = (category: CookieCategory) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    
    setLocalConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    // Update each category that changed
    Object.entries(localConsent).forEach(([key, value]) => {
      if (key !== 'version' && key !== 'timestamp' && typeof value === 'boolean') {
        const category = key as CookieCategory;
        if (consent[category] !== value) {
          updateConsent(category, value);
        }
      }
    });
    
    hideBanner();
    onClose();
  };

  const handleAcceptAll = () => {
    setLocalConsent(prev => ({
      ...prev,
      analytics: true,
      marketing: true,
    }));
    
    updateConsent('analytics', true);
    updateConsent('marketing', true);
    hideBanner();
    onClose();
  };

  const handleRejectAll = () => {
    setLocalConsent(prev => ({
      ...prev,
      analytics: false,
      marketing: false,
    }));
    
    updateConsent('analytics', false);
    updateConsent('marketing', false);
    hideBanner();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden ${className}`}
          >
            {/* Header */}
            <div className="p-6 text-center">
              <div className="flex items-center justify-between mb-4">
                <div></div>
                <h2 className="text-2xl font-semibold text-gray-800">Manage Cookie Consent</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto">
                To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions.
              </p>
            </div>

            {/* Content - Hide complex toggles, just show simple accept button */}
            <div className="px-6 pb-6">
              <div className="flex justify-center">
                <button
                  onClick={handleAcceptAll}
                  className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Accept
                </button>
              </div>
              
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <a href="/terms" className="text-blue-500 hover:text-blue-600 underline">
                  Licensing Agreement and Terms of Use
                </a>
                <a href="/privacy" className="text-blue-500 hover:text-blue-600 underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}