import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollDownArrowProps {
  targetId: string;
  className?: string;
}

const ScrollDownArrow = ({ targetId, className }: ScrollDownArrowProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled past 30% of viewport height
      setIsVisible(window.scrollY < window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTarget}
      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer z-10",
        "bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16",
        className
      )}
      aria-label="Scroll to about section"
    >
      <span className="text-xs sm:text-sm mb-1 sm:mb-2 text-muted-foreground">Scroll Down</span>
      <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6" />
    </button>
  );
};

export default ScrollDownArrow;
