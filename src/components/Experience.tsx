
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';
import { useTheme } from "@/hooks/use-theme";

const Timeline = ({ items, type }: {
  items: {
    title: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
  }[];
  type: 'work' | 'education';
}) => {
  const { theme } = useTheme();
  const IconComponent = type === 'work' ? Briefcase : GraduationCap;

  return (
    <div className="space-y-12 relative">
      {/* Vertical timeline line */}
      <div className={cn(
        "absolute left-7 top-8 bottom-8 w-[3px] rounded-full",
        type === 'work'
          ? "bg-gradient-to-b from-primary/20 via-primary/80 to-primary/20"
          : "bg-gradient-to-b from-accent/20 via-accent/80 to-accent/20"
      )}></div>

      {items.map((item, index) => (
        <div key={index} className="relative flex group">
          <div className={cn(
            "flex-shrink-0 z-10 p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110",
            type === 'work'
              ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
              : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground"
          )}>
            <IconComponent size={24} className="animate-pulse-slow" />
          </div>

          <Card className={cn(
            "ml-6 card-hover flex-1 overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl border-2",
            type === 'work'
              ? "border-primary/30 dark:border-primary/40 border-l-4 border-l-primary"
              : "border-accent/30 dark:border-accent/40 border-l-4 border-l-accent"
          )}>
            <div className={cn(
              "h-1.5 w-full",
              type === 'work'
                ? "bg-gradient-to-r from-primary/40 via-primary/90 to-primary/40"
                : "bg-gradient-to-r from-accent/40 via-accent/90 to-accent/40"
            )}></div>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                <Badge variant={type === 'work' ? "default" : "secondary"}
                  className={cn(
                      "text-xs font-medium",
                      type === 'work' ? "bg-primary/80" : "bg-accent/80"
                    )}>
                  {item.period}
                </Badge>
              </div>
              <p className={cn(
                "text-base mb-4 font-medium",
                type === 'work'
                  ? "text-primary dark:text-primary"
                  : "text-accent dark:text-accent"
              )}>{item.company}</p>
              <div className="space-y-3">
                {item.description.map((point, i) => (
                  <div key={i} className="flex items-start">
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0",
                      type === 'work' ? "bg-primary" : "bg-accent"
                    )}></div>
                    <p className="text-sm text-muted-foreground">{point}</p>
                  </div>
                ))}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={cn(
                      "px-2 py-0.5 text-xs rounded-md border border-border/50",
                      type === 'work' ? "bg-primary/80" : "bg-accent/80",
                      theme === 'light' ? "text-foreground/80" : "text-foreground"
                    )}
                    >
                      {skill}
                    </span>
                  ))}
                  {item.skills.length > 3 && (
                    <span
                      className={cn(
                      "px-2 py-0.5 text-xs rounded-md border bg-secondary border-border/50",
                      theme === 'light' ? "text-foreground/80" : "text-foreground"
                    )}
                    >
                      +{item.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Experience = () => {
  const workExperience = [
    {
      title: "AI Software Solutions Engineer",
      company: "Intel Corporation",
      period: "Apr 2021 - Present",
      description: [
        "Increased Large Language Model performance by 2.5x on Intel Gaudi hardware through targeted PyTorch optimizations, facilitating successful deployments for major cloud service provider clients.",
        "Architected a scalable model evaluation tool with a 70% core code contribution that was adopted in three global Intel sites, standardizing evaluation pipelines and enhancing assessment efficiency significantly.",
        "Resolved over 11 critical hardware/software interaction issues through in-depth diagnostic analysis using system telemetry and model logs to identify root causes of performance regressions in LLMs.",
        "Engineered an ML-driven script for Kubernetes environment setup that reduced data science workflow configuration time by 40%, from 30 minutes to just 18 minutes.",
        "Accelerated deep learning model debugging cycles by integrating Tensorboard plugins and PyTorch-Profiler, resulting in a remarkable 65% reduction in time taken to identify performance bottlenecks.",
        "Conducted A/B testing on optimization techniques leading to a validated 7% improvement in model inference latency without sacrificing accuracy through profiling and visualization tools.",
      ],
      skills: ["LLM Optimization", "PyTorch", "Kubernetes", "Performance Tuning", "Transformers"]
    },
    {
      title: "Deep Learning Software Engineer",
      company: "Intel Corporation",
      period: "May 2018 - Apr 2021",
      description: [
        "Developed and deployed an automated defect screening system utilizing a PyTorch image classification model that achieved target Defects Per Million (DPM) rates of 2.5, enhancing product quality assurance.",
        "Applied advanced machine learning and deep learning techniques to production datasets, generating critical diagnostic data that resolved flaws in neural network components, improving overall system stability by 95%.",
        "Authored custom Python kernels within TensorFlow and PyTorch frameworks to address critical hardware constraints, effectively boosting neural network latency on AI inference hardware by 2x compared to competitor performance.",
      ],
      skills: [ "Deep Learning", "Image Classification", "PyTorch", "TensorFlow", "Machine Learning"]
    }
  ];

  const educationHistory = [
    {
      title: "Master of Technology in Computer Science",
      company: "Vellore Institute of Technology (VIT University), Vellore, India",
      period: "May 2016 - Apr 2018",
      description: [
        "Specialized in Data Science and Artificial Intelligence",
        "Thesis: 'TTVGAN: Teach Machines to be creative: Video Synthesis from Text using Generative Adversarial Network'",
        "GPA: 9.31/10.0"
      ],
      skills: ["Data Science", "Machine Learning", "Text Mining", "Computer Vision", "NLP"]
    },
    {
      title: "Bachelor of Engineering in Computer Engineering",
      company: "Gujarat Technological University (GTU), Gandhinagar, India",
      period: "2016 - 2020",
      description: [
        "Focus on Computer Science fundamentals and software engineering",
        "Final year project: 'Kalarav: Step Towards Baby Care (Full Stack Web App)'",
        "GPA: 8.48/10.0"
      ],
      skills: ["Data Structures", "Algorithms", "Database Systems", "Computer Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="section-container relative z-10">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <Briefcase className="mr-3 text-primary" />
              <h3 className="section-subheading mb-0">Work Experience</h3>
            </div>
            <Timeline items={workExperience} type="work" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <GraduationCap className="mr-3 text-accent" />
              <h3 className="section-subheading mb-0 text-accent">Education</h3>
            </div>
            <Timeline items={educationHistory} type="education" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
