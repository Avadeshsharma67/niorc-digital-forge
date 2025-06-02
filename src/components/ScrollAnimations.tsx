
import React, { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      elements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    // Wait for DOM to be ready
    const timer = setTimeout(observeElements, 100);

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
