
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ParallaxContextType {
  scrollY: number;
  windowHeight: number;
  windowWidth: number;
  scrollProgress: number; // Overall scroll progress (0 to 1)
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
  windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
  scrollProgress: 0,
});

export const useParallax = () => useContext(ParallaxContext);

export const ParallaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  // Calculate document height
  useEffect(() => {
    const updateDocumentHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setDocumentHeight(height);
    };

    updateDocumentHeight();
    window.addEventListener('resize', updateDocumentHeight);
    return () => window.removeEventListener('resize', updateDocumentHeight);
  }, []);

  // Handle scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Calculate scroll progress (0 to 1)
    const maxScroll = documentHeight - windowDimensions.height;
    const currentProgress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
    setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
  }, [documentHeight, windowDimensions.height]);

  // Handle resize
  const handleResize = useCallback(() => {
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize
    handleScroll();
    handleResize();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <ParallaxContext.Provider
      value={{
        scrollY,
        windowHeight: windowDimensions.height,
        windowWidth: windowDimensions.width,
        scrollProgress
      }}
    >
      {children}
    </ParallaxContext.Provider>
  );
};