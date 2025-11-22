'use client';

import { Suspense } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import CookieConsentBanner from './CookieConsentBanner';
import usePageView from '@/hooks/usePageView';

function AnalyticsContent() {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <CookieConsentBanner />
    </>
  );
}

export default function Analytics() {
  return (
    <Suspense fallback={<CookieConsentBanner />}>
      <AnalyticsContent />
    </Suspense>
  );
}