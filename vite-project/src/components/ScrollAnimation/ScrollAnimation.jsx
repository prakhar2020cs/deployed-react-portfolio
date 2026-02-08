import { useState, useEffect } from 'react';

const ScrollAnimation = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element, delay]);

  return (
    <div
      ref={setElement}
      className={`${className || ''} ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-12'}`}
      style={{
        transition: `all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;