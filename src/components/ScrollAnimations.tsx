
import React, { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Throttle and optimize the observer
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Stop observing once activated for performance
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '100px'
        }
      );

      elements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    // Reduced delay for faster initialization
    const timer = setTimeout(observeElements, 50);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
};

export default ScrollAnimations;
