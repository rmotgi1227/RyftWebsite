'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/gtag';

export default function usePageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (gtag.GA_TRACKING_ID) {
      const search = searchParams ? searchParams.toString() : '';
      const url = pathname + (search ? `?${search}` : '');
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);
}