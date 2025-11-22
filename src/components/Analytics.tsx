'use client';

import { Suspense } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import CookieBanner from './CookieBanner';
import usePageView from '@/hooks/usePageView';

function AnalyticsContent() {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <CookieBanner />
    </>
  );
}

export default function Analytics() {
  return (
    <Suspense fallback={<CookieBanner />}>
      <AnalyticsContent />
    </Suspense>
  );
}