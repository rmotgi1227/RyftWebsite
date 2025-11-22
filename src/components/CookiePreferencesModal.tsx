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
            className={`relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden ${className}`}
          >
            {/* Header */}
            <div className="border-b border-navy-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900">Cookie Preferences</h2>
                    <p className="text-sm text-navy-600">Manage your cookie settings</p>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-navy-400 hover:text-navy-600 hover:bg-navy-50 rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[50vh]">
              <p className="text-navy-600 leading-relaxed">
                We use different types of cookies to enhance your experience on our website. 
                You can choose which categories of cookies you'd like to allow.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {Object.values(COOKIE_CATEGORIES).map((category) => {
                  const isEnabled = localConsent[category.id];
                  const canToggle = !category.required;

                  return (
                    <div
                      key={category.id}
                      className="border border-navy-100 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-navy-900">
                              {category.name}
                            </h3>
                            {category.required && (
                              <span className="text-xs bg-navy-100 text-navy-700 px-2 py-1 rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-navy-600 leading-relaxed">
                            {category.description}
                          </p>
                        </div>

                        {/* Toggle Switch */}
                        <button
                          onClick={() => canToggle && handleToggle(category.id)}
                          disabled={!canToggle}
                          className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 ${
                            isEnabled 
                              ? 'bg-accent-600' 
                              : 'bg-navy-200'
                          } ${
                            !canToggle 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'cursor-pointer'
                          }`}
                          aria-pressed={isEnabled}
                          aria-label={`Toggle ${category.name}`}
                        >
                          <span
                            className={`inline-block w-4 h-4 transform transition-transform duration-200 bg-white rounded-full ${
                              isEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-navy-50 rounded-lg p-4">
                <p className="text-sm text-navy-600">
                  For more details about how we use cookies, please see our{' '}
                  <a 
                    href="/privacy/cookies" 
                    className="text-accent-600 hover:text-accent-700 underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-navy-100 p-6">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto"
                >
                  Reject All
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto"
                >
                  Accept All
                </Button>
                
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}