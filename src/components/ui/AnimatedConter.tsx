import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCounter = ({ end = 100, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? end : 0,
    delay: 200,
    config: { duration: duration }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const counterElement = document.getElementById('counter');

    if (counterElement) {
      observer.observe(counterElement);
    } else {
      console.error("Counter element not found");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <animated.div id="counter">
      {number.to(n => Math.floor(n))}
    </animated.div>
  );
};

export default AnimatedCounter;