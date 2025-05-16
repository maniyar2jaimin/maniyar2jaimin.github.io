
import React, { useRef, useEffect, useState } from 'react';
import { useParallax } from '../contexts/ParallaxContext';

interface ParallaxSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  speed?: number; // Speed multiplier for parallax effect
  direction?: 'up' | 'down' | 'left' | 'right'; // Direction of parallax movement
  bgClassName?: string; // Optional class for the background
  intensity?: 'light' | 'medium' | 'strong'; // Intensity of the effect
  fadeIn?: boolean; // Whether to fade in the section as it enters the viewport
  rotate?: boolean; // Whether to add a slight rotation effect
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  className = '',
  children,
  speed = 0.1,
  direction = 'up',
  bgClassName = '',
  intensity = 'medium',
  fadeIn = true,
  rotate = false,
}) => {
  const { scrollY, windowHeight } = useParallax();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  // Adjust speed based on intensity
  const intensityFactor = intensity === 'light' ? 0.5 : intensity === 'strong' ? 2 : 1;
  const adjustedSpeed = speed * intensityFactor;

  // Update element position measurements
  useEffect(() => {
    if (!sectionRef.current) return;

    const updateMeasurements = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setOffsetTop(rect.top + window.scrollY);
        setElementHeight(rect.height);
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  // Check if section is visible
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < windowHeight - 100 && rect.bottom > 0;

      if (isInView && !hasBeenVisible) {
        setHasBeenVisible(true);
      }

      setIsVisible(isInView);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    return () => window.removeEventListener('scroll', checkVisibility);
  }, [windowHeight, hasBeenVisible]);

  // Calculate the relative scroll position for the element
  // This gives us a value from 0 to 1 as the element enters and exits the viewport
  const relativeScroll = Math.min(Math.max((scrollY - offsetTop + windowHeight) / (elementHeight + windowHeight), 0), 1);

  // Calculate transform values based on direction
  let transform = '';
  const moveDistance = 100 * adjustedSpeed; // Maximum distance to move in pixels

  switch (direction) {
    case 'up':
      transform = `translateY(${-moveDistance * relativeScroll}px)`;
      break;
    case 'down':
      transform = `translateY(${moveDistance * relativeScroll}px)`;
      break;
    case 'left':
      transform = `translateX(${-moveDistance * relativeScroll}px)`;
      break;
    case 'right':
      transform = `translateX(${moveDistance * relativeScroll}px)`;
      break;
  }

  // Add rotation if enabled
  if (rotate) {
    const rotation = (relativeScroll - 0.5) * 3 * adjustedSpeed;
    transform += ` rotate(${rotation}deg)`;
  }

  // Calculate opacity for fade-in effect - only apply after section is visible
  const opacity = fadeIn ? (hasBeenVisible ? 1 : 0.3) : 1;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {bgClassName && (
        <div
          className={`absolute inset-0 transition-transform will-change-transform ${bgClassName}`}
          style={{
            transform,
            opacity: isVisible ? 1 : 0.3,
            transition: 'transform 0.1s linear, opacity 0.5s ease-out'
          }}
        />
      )}
      <div
        className="relative z-10 transition-all"
        style={{
          opacity: hasBeenVisible ? opacity : 0,
          transform: hasBeenVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
