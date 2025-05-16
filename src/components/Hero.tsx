
import { Button } from '@/components/ui/button';
import ScrollDownArrow from './ScrollDownArrow';
import TypewriterEffect from './TypewriterEffect';
import Logo from './Logo';
import { Github, Linkedin } from '@/components/ui/social-icon';
import { ThemeToggle } from './ThemeToggle';
import { useParallax } from '../contexts/ParallaxContext';
import { useTheme } from "@/hooks/use-theme";

const Hero = () => {
  const titles = [
    "AI Software Solutions Engineer",
    "Generative AI Expert",
    "Data Scientist",
    "NLP Specialist",
    "Computer Vision Engineer"
  ];

  const { scrollY, scrollProgress } = useParallax();
  const { theme } = useTheme();

  // Calculate parallax transformation values with more dramatic effects
  const textTransform = `translateY(${scrollY * -0.15}px)`;
  const codeBlockTransform = `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.01}deg)`;
  const backgroundTransform = `translateY(${scrollY * 0.05}px)`;
  const titleOpacity = Math.max(0, 1 - (scrollProgress * 2));

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 z-0 transition-transform"
        style={{ transform: backgroundTransform }}
      ></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl z-0 transition-all"
        style={{
          transform: `${backgroundTransform} scale(${1 + scrollY * 0.001})`,
          opacity: 0.7 - scrollProgress * 0.3
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl z-0 transition-all"
        style={{
          transform: `${backgroundTransform} scale(${1 + scrollY * 0.002})`,
          opacity: 0.7 - scrollProgress * 0.3
        }}
      ></div>

      <div className="absolute top-4 left-4 z-20">
        <Logo />
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-3 z-20">
        <a href="https://github.com/jaiminmaniyar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://linkedin.com/in/jaimin-maniyar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
        </a>
        <ThemeToggle />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            className="lg:col-span-7 space-y-6 animate-fade-in px-4 sm:px-0 transition-all"
            style={{
              transform: textTransform,
              opacity: titleOpacity,
              transition: 'transform 0.1s linear'
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span>Hi, I'm </span>
              <span className="ai-gradient-text">Jaimin Maniyar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground">
              <TypewriterEffect titles={titles} typingSpeed={50} />
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Specializing in building innovative machine learning solutions and AI systems that drive business value and technological advancement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button size="lg" variant="accent" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/resume_may_25.pdf">Resume Download</a>
              </Button>
            </div>
          </div>
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-0 transition-all"
            style={{
              transform: codeBlockTransform,
              transition: 'transform 0.1s linear'
            }}
          >
            <div className="relative w-full max-w-md">
              {/* Enhanced code block with better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-xl animate-pulse-slow"></div>
              <div className={`relative rounded-xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'shadow-primary/20' : 'shadow-gray-400/40'} border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                {/* Terminal header */}
                <div className={`flex items-center p-3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <p className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>ai_engineer.js</p>
                  </div>
                </div>

                <div className={`${theme === 'dark' ? 'bg-slate-800/95' : 'bg-white'} p-4`}>
                  <pre className={`font-mono text-xs sm:text-sm overflow-x-auto p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-900/80' : 'bg-gray-50'}`}>
                    <code>
                      <span className={`text-blue-600 ${theme === 'dark' ? 'text-blue-400' : ''}`}>class</span> <span className={`text-green-600 ${theme === 'dark' ? 'text-green-400' : ''}`}>AIEngineer</span> {'{'}
                        <br />{'  '}<span className={`text-blue-600 ${theme === 'dark' ? 'text-blue-400' : ''}`}>constructor</span>() {'{'}
                        <br />{'    '}this.<span className={`text-purple-600 ${theme === 'dark' ? 'text-purple-400' : ''}`}>name</span> = <span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>"Jaimin Maniyar"</span>;
                        <br />{'    '}this.<span className={`text-purple-600 ${theme === 'dark' ? 'text-purple-400' : ''}`}>skills</span> = [<span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>"ML"</span>, <span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>"AI"</span>, <span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>"DataScience"</span>];
                        <br />{'    '}this.<span className={`text-purple-600 ${theme === 'dark' ? 'text-purple-400' : ''}`}>experience</span> = <span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>7</span>;
                        <br />{'  }{'}
                        <br />
                        <br />{'  '}<span className={`text-green-600 ${theme === 'dark' ? 'text-green-400' : ''}`}>solveProblems</span>() {'{'}
                        <br />{'    '}<span className={`text-blue-600 ${theme === 'dark' ? 'text-blue-400' : ''}`}>return</span> <span className={`text-orange-600 ${theme === 'dark' ? 'text-orange-400' : ''}`}>"Innovative Solutions"</span>;
                        <br />{'  }{'}
                        <br />{'}'}
                      </code>
                    </pre>
                  </div>

                  <div className={`${theme === 'dark' ? 'bg-slate-800/95' : 'bg-white'} px-4 pb-3 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                    <div className="flex items-center pt-2 text-xs">
                      <div className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                        <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
                        <span>Execution completed</span>
                      </div>
                      <div className="ml-auto text-gray-400">
                        ⌘ + R to run
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollDownArrow targetId="about" />
    </section>
  );
};

export default Hero;
