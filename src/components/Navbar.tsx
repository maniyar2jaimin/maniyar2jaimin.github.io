
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/social-icon';
import { useTheme } from '@/hooks/use-theme';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHeroSection, setPastHeroSection] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolled(scrollPosition > 20);
      setPastHeroSection(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check for page load with hash
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });

      // Update URL without page reload
      window.history.pushState({}, '', target);
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/maniyar2jaimin',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/maniyar2jaimin',
      label: 'LinkedIn'
    }
  ];

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    {
      'bg-white/80 dark:bg-background/80 backdrop-blur-md py-2 shadow-sm': isScrolled,
      'bg-transparent py-4': !isScrolled,
      'opacity-0 pointer-events-none': !isScrolled && !pastHeroSection
    }
  );

  return (
    <header className={navbarClasses}>
      <div className="container flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center"
          onClick={(e) => handleNavLinkClick(e, '#home')}
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href)}
              className="px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Media Links & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              size="icon"
              variant="ghost"
              className="rounded-full"
              asChild
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavLinkClick(e, item.href);
                    // Close the sheet programmatically?
                    // This will be handled automatically by the Sheet component
                  }}
                  className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center mt-4 border-t pt-4 justify-between px-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    size="icon"
                    variant="ghost"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
