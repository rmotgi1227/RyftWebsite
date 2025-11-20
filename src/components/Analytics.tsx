'use client';

import GoogleAnalytics from './GoogleAnalytics';
import usePageView from '@/hooks/usePageView';

export default function Analytics() {
  usePageView();

  return <GoogleAnalytics />;
}