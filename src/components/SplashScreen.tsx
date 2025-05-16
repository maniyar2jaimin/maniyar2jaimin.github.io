
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface SplashScreenProps {
  minDisplayTime?: number; // Minimum time to display splash screen (ms)
}

const SplashScreen = ({ minDisplayTime = 1500 }: SplashScreenProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Track when all content is loaded
    const handleLoad = () => {
      // Set a timeout to ensure minimum display time
      setTimeout(() => {
        setIsLoaded(true);
        
        // Add a slight delay before completely hiding the splash screen
        setTimeout(() => {
          setIsHidden(true);
        }, 500);
      }, minDisplayTime);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [minDisplayTime]);

  if (isHidden) {
    return null;
  }

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <div className="relative w-32 h-32">
        {/* Neural network animation in the background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 relative">
            {/* Pulsing circles representing AI nodes */}
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-primary/40 rounded-full animate-ping"></div>
            <div className="absolute inset-4 bg-accent/40 rounded-full animate-pulse"></div>
            
            {/* Logo in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Logo className="scale-150" showText={false} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold ai-gradient-text mb-2">Jaimin Maniyar</h2>
        <div className="flex items-center space-x-2 mt-4">
          <div className="h-1 w-1 bg-primary rounded-full animate-pulse"></div>
          <div className="h-1 w-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="h-1 w-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
