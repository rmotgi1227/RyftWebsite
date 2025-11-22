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
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <p className="text-navy-600 text-base leading-relaxed">
                We use cookies to enhance your experience. 
                <a 
                  href="/privacy/cookies" 
                  className="text-accent-600 hover:text-accent-700 underline ml-1"
                >
                  Learn more
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-shrink-0">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleManagePreferences}
                className="text-sm px-4 py-2"
              >
                Settings
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="text-sm px-4 py-2"
              >
                Reject
              </Button>
              
              <Button
                variant="primary"
                size="sm"
                onClick={acceptAll}
                className="text-sm px-4 py-2"
              >
                Accept
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