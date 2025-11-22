'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function usePageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    if (GA_TRACKING_ID && cookieConsent === 'accepted' && window.gtag) {
      const search = searchParams ? searchParams.toString() : '';
      const url = pathname + (search ? `?${search}` : '');
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
}