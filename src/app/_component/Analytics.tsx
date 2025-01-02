'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // @ts-expect-error ignore
    if (typeof window !== 'undefined' && window.gtag) {
      // @ts-expect-error ignore
      window.gtag('config', 'G-5CV9XZMTD4', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
