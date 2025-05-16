import { Github, Linkedin } from '@/components/ui/social-icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-4">Jaimin Maniyar</h3>
            <p className="text-background/80 mb-4">
              AI Software Solutions Engineer & Gen AI Specialist based in Bengaluru, India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/maniyar2jaimin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/maniyar2jaimin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-background transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-background/80 hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold mb-4">Technical Skills</h4>
            <ul className="space-y-2">
              <li className="text-background/80">Machine Learning</li>
              <li className="text-background/80">Deep Learning</li>
              <li className="text-background/80">Natural Language Processing</li>
              <li className="text-background/80">Computer Vision</li>
              <li className="text-background/80">Python</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold mb-4">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">TensorFlow</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">PyTorch</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">Scikit-learn</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">LangChain</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">SQL</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">Git/Gerrit</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">RAG</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">OpenCV</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">Linux</span>
              <span className="px-2 py-1 bg-background/10 rounded-md text-xs">Docker/Kubernetes</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60">
          <p>© {currentYear} Jaimin Maniyar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
