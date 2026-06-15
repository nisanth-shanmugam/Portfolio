import { useEffect, useRef } from 'react';

/**
 * A hook that observes elements and adds an 'in-view' class when they enter the viewport.
 * @param {Object} options - IntersectionObserver configuration options.
 * @returns {Function} A ref callback function to attach to elements that should animate.
 */
export default function useScrollReveal(options = {}) {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Stop observing after the transition triggers
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.triggerOnce === false) {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [options]);

  const addToReveal = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToReveal;
}
