import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element (fade + slide up) the first time it scrolls into view.
 * Respects the user's reduced-motion preference by skipping straight to visible.
 */
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function revealStyle(visible) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };
}
