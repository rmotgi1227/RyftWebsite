'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function GoogleAnalytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState<boolean>(false);

  useEffect(() => {
    // Check if user consented to analytics cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    setShouldLoadAnalytics(!!GA_TRACKING_ID && cookieConsent === 'accepted');
  }, []);

  if (!GA_TRACKING_ID || !shouldLoadAnalytics) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}