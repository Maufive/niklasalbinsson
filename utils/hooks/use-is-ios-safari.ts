'use client';

import { useState, useEffect } from 'react';

export default function useIsIosSafari() {
  const [isIOSSafari, setIsIOSSafari] = useState<boolean>(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    setIsIOSSafari(iOSSafari);
  }, []);

  return { isIOSSafari };
}
