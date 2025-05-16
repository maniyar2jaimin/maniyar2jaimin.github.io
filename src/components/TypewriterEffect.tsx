
import { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  titles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTitles?: number;
  className?: string;
}

const TypewriterEffect = ({
  titles,
  typingSpeed = 70, // Faster typing speed (was 100)
  deletingSpeed = 35, // Faster deleting speed (was 50)
  delayBetweenTitles = 1500, // Shorter delay (was 1500)
  className = ""
}: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Use refs for timers to prevent memory leaks
  const timerRef = useRef<number | null>(null);
  const currentTitle = titles[titleIndex];

  useEffect(() => {
    // Clear any existing timeouts to prevent memory leaks
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentTitle.length) {
        timerRef.current = window.setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timerRef.current = window.setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTitles);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timerRef.current = window.setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next title
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    // Cleanup function to clear the timeout when component unmounts or effect re-runs
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayedText, isTyping, titleIndex, titles, typingSpeed, deletingSpeed, delayBetweenTitles, currentTitle]);

  return (
    <div className={className}>
      <span>{displayedText}</span>
      <span className="border-r-2 border-primary animate-pulse ml-1">&nbsp;</span>
    </div>
  );
};

export default TypewriterEffect;
