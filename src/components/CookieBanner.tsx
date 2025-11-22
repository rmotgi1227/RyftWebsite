'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your experience.{' '}
              <button 
                onClick={() => setShowModal(true)}
                className="text-blue-500 underline hover:text-blue-600"
              >
                Learn more
              </button>
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Settings
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Reject
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-navy-900 text-white rounded-md hover:bg-navy-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div></div>
              <h2 className="text-xl font-semibold text-gray-800">Manage Cookie Consent</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              To provide the best experiences, we use technologies like cookies to store and/or access device information. 
              Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. 
              Not consenting or withdrawing consent, may adversely affect certain features and functions.
            </p>

            <div className="flex justify-center">
              <button
                onClick={acceptAll}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
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
        </div>
      )}
    </>
  );
}