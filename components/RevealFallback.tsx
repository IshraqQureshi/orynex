'use client';

import { useEffect } from 'react';

// Scroll-driven CSS animations (animation-timeline: view()) are not available in
// Safari/Firefox yet. There, reveal .rv/.rv-l/.rv-s elements with one observer.
export default function RevealFallback() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: view()')) return;

    const root = document.documentElement;
    const els = document.querySelectorAll<HTMLElement>('.rv, .rv-l, .rv-s');
    root.classList.add('js-reveal');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
