'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA_TRACKING_ID, hasAnalyticsConsent } from '@/lib/gtag';
import useCookieConsent from '@/hooks/useCookieConsent';

export default function GoogleAnalytics() {
  const { consent } = useCookieConsent();
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState<boolean>(false);

  useEffect(() => {
    // Only load analytics if tracking ID exists and user has consented
    const hasConsent = hasAnalyticsConsent();
    setShouldLoadAnalytics(!!GA_TRACKING_ID && hasConsent);
  }, [consent]);

  if (!shouldLoadAnalytics) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'secure;samesite=strict',
            });
          `,
        }}
      />
    </>
  );
}