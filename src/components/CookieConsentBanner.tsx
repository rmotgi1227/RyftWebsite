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
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1">
              <p className="text-navy-600 text-base leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                You can choose which categories of cookies you allow.{' '}
                <a 
                  href="/privacy/cookies" 
                  className="text-accent-600 hover:text-accent-700 underline"
                >
                  Learn more in our Cookie Policy
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                variant="secondary"
                size="md"
                onClick={handleManagePreferences}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Manage Preferences
              </Button>
              
              <Button
                variant="outline"
                size="md"
                onClick={rejectAll}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Reject All
              </Button>
              
              <Button
                variant="primary"
                size="md"
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