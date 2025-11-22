'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';
import useCookieConsent from '@/hooks/useCookieConsent';
import CookiePreferencesModal from '@/components/CookiePreferencesModal';

interface CookieConsentBannerProps {
  className?: string;
}

export default function CookieConsentBanner({ className = '' }: CookieConsentBannerProps) {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState<boolean>(false);

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-navy-200 shadow-2xl ${className}`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                {/* Cookie Icon */}
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  Cookie Preferences
                </h3>
              </div>
              
              <p className="text-navy-600 text-sm lg:text-base leading-relaxed max-w-3xl">
                We use cookies to enhance your experience on our website. 
                Necessary cookies are essential for basic functionality, while analytics cookies help us understand how you use our site. 
                You can manage your preferences or learn more in our{' '}
                <a 
                  href="/privacy/cookies" 
                  className="text-accent-600 hover:text-accent-700 underline font-medium"
                >
                  Cookie Policy
                </a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleManagePreferences}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Manage Preferences
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Reject All
              </Button>
              
              <Button
                variant="primary"
                size="sm"
                onClick={acceptAll}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>

        {/* Preferences Modal */}
        <CookiePreferencesModal 
          isOpen={showPreferences}
          onClose={() => setShowPreferences(false)}
        />
      </motion.div>
    </AnimatePresence>
  );
}