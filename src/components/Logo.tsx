
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

const Logo = ({ className, textClassName, showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        {/* Neural network node design for logo */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse-slow"></div>
        <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-background/90 flex items-center justify-center">
            <span className="text-base font-bold ai-gradient-text">JM</span>
          </div>
          {/* Connecting lines to simulate neural network */}
          <div className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-primary rounded-full"></div>
        </div>
      </div>
      {showText && (
        <span className={cn("ml-2 text-xl font-semibold hidden sm:inline-block", textClassName)}>
          Jaimin Maniyar
        </span>
      )}
    </div>
  );
};

export default Logo;
