/**
 * Hook personalizado para micro interacciones durante el scroll
 */

import { useEffect, useState } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
  isScrolling: boolean;
}

export const useScrollInteractions = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'down',
    scrollProgress: 0,
    isScrolling: false,
  });

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(currentScrollY / maxScroll, 1);
      
      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up',
        scrollProgress,
        isScrolling: Math.abs(currentScrollY - lastScrollY) > 0,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
};
