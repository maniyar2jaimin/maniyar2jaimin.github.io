
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BrainCircuit,
  Code,
  BarChartBig,
  Database,
  Network,
  Bot,
  CloudLightning,
  LineChart,
  Cpu,
  Binary
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python (NumPy, Pandas, Scikit-Learn, OpenCV)', level: 95, icon: <BrainCircuit className="h-5 w-5" /> },
    { name: 'Machine Learning (SVM, XGBoost, Random Forest)', level: 90, icon: <Network className="h-5 w-5" /> },
    { name: 'Deep Learning', level: 92, icon: <Code className="h-5 w-5" /> },
    { name: 'Data Science', level: 88, icon: <BarChartBig className="h-5 w-5" /> },
    { name: 'Generative AI (vLLM, RAG, LangChain)', level: 80, icon: <Database className="h-5 w-5" /> },
    { name: 'Natural Language Processing (NLP)', level: 87, icon: <Bot className="h-5 w-5" /> },
    { name: 'Computer Vision', level: 86, icon: <LineChart className="h-5 w-5" /> },
    { name: 'SQL', level: 80, icon: <CloudLightning className="h-5 w-5" /> },
    { name: 'PyTorch/TensorFlow', level: 89, icon: <Cpu className="h-5 w-5" /> },
    { name: 'Statistical Modelling', level: 80, icon: <Binary className="h-5 w-5" /> },
    { name: 'Algorithms & Data Structures', level: 84, icon: <Binary className="h-5 w-5" /> },
    { name: 'Exploratory Data Analysis (EDA)', level: 84, icon: <Binary className="h-5 w-5" /> },
  ];

  const statistics = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Publications', value: '3' },
    { label: 'Certifications', value: '8' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg" style={{ textIndent: '2em', textAlign: 'justify' }}>
              I've spent the last <span className="font-bold text-primary"> 7 Years </span> immersed in the captivating
              world of <span className="font-bold text-primary">Data Science and Artificial Intelligence</span>,
              where every project feels like an exhilarating new adventure. My journey began with a fascination for
              how machines can learn and create—an interest that led me to work on everything from optimizing
              Large Language Models (LLMs) like Llama3 to exploring innovative video generation techniques using
              Generative Adversarial Networks (GANs). Each experience has not only honed my technical skills but
              also fueled my passion for pushing boundaries.
            </p>
            <p className="text-lg" style={{ textAlign: 'justify' }}>
              Currently at Intel Corporation as an <span className="font-bold text-primary">AI Software Solutions Engineer</span>,
              I've had the opportunity to make significant strides in performance optimization. One of my proudest achievements
              was increasing the performance of LLMs by 2.5x on Intel Gaudi hardware through targeted optimizations
              in PyTorch—this breakthrough has been crucial for our major cloud service provider clients.
              I also developed an automated defect screening system during my time as a Deep Learning Researcher
              that achieved target Defects Per Million (DPM) rates of 2.5, significantly enhancing product quality
              assurance processes.
            </p>
            <p className="text-lg" style={{ textAlign: 'justify' }}>
              <span className="font-bold text-primary">Skills: Generative AI | Large Language Models | PyTorch |
                Performance Optimization | Machine Learning | Computer Vision </span>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="section-subheading mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="section-subheading mb-4">Statistics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {statistics.map((stat, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
