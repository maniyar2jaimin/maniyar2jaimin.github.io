import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: 'Fish Image Classification',
      description: 'Enhanced real-time object detection for the Nature Conservancy fishery monitoring using YOLOv5, achieving a 15% improvement in mAP (mean Average Precision) on edge devices through model quantization.',
      skills: ['Computer Vision', 'YOLOv5', 'Python', 'Pytorch Lighting'],
      category: 'Computer Vision',
      image: '/fish_classification.png',
      detailedDescription: 'Enhanced real-time object detection for the Nature Conservancy fishery monitoring using YOLOv5, achieving a 15% improvement in mAP (mean Average Precision) on edge devices through model quantization.'
    },
    {
      title: 'TTVGAN: Teach Machines to be creative: Video Synthesis from Text using Generative Adversarial Network',
      description: 'Developed a NLP based system to synthesis small video using text prompts with help of generative networks which can precisely generate image and motion ',
      skills: ['NLP', 'GAN', 'Computer Vision', 'Video Synthesis', 'Text Mining'],
      category: 'Natural Language Processing & Computer Vision',
      image: '/dribbble.gif',
      detailedDescription: 'Visual Information or visual representation can be captured by human brain very easily over the textual data. Using recent advancement in adversarial learning and deep learning, we are able to generate images and videos from algorithm at some level. Using this as a prior we proposed the framework called Text to Video Generative Adversarial Network (TTVGAN) for generation of video as per given text input sentence containing a simple subject, object, and verb formation. The proposed framework generates the video using three key content from English sentence subject, Object, Verb (SVO Triplet) and convert it to action, actor and scene than using this input triplet, framework will generate the video. Video generation is the main part of framework which is accomplished by sampling a video frames from small video clips and adding noise sequentially over time using recurrent neural network into it. Now for better supervision over the generated content of the video we use the above said SVO triplet as condition parameter in adversarial training. With this, we also use context features from sentence to generate visually perfect video. Experimental result on the Human action Dataset (KTH dataset) and custom animation dataset are quite impressive with actions which are significantly different than each other. Our Proposed framework is able to generate small video with length ranging from 2 seconds to 5 seconds from modeled train data very well. This is the initial version of the work in which we tried to achieve simple small videos for easily described actions like walking, jumping, waving of hand etc.'
    },
    {
      title: 'Innovative Monitoring System for TeleICU Patients using Video Processing & Deep Learning',
      description: 'Implemented a computer vision system to remotely monitor ICU patients using video processing and advance classification and segmentation techniques ',
      skills: ['Computer Vision', 'PyTorch', 'OpenCV', 'Edge Computing', 'Video Processing'],
      category: 'Computer Vision',
      image: '/patient_monitoring.png',
      detailedDescription: 'The Patients in Critical condition need intense monitoring and care. With ICU an Intensive Care unit we can provide this type of care to the patient. But nowadays shortage of Intensivist and Critical Care nurses is the major problem faced by the hospitals. To overcome such problems TeleICU (remotely handled ICU) centers are currently available. With the help of TeleICU control center, one can monitor the patients in Critical Care unit and can assist the person or doctor available at the physical location. TeleICU can provide round the clock monitoring. The person who is monitoring the patient from TeleICU control center should be proactive in monitoring. Another issue is one person can only able to monitor one patient at a time. So, this research aims to develop the system which overcomes the issues in current TeleICU system. For reducing the workload of the person in the control center and to automate some of the humans handled task we need the machine based interface which will take the decisions automatically and can able to collaborate with the existing system. The proposed system in this paper is developed for such TeleICU systems. The system presented in this research is able to identify the type of persons available in the ICU room with that it can automatically detect the several unusual activities done by the patient. As soon as any unusual activity is detected system will take real time decision and will notify the same to control center based on the type of activity and persons available in the ICU Room. To develop this system video processing and deep learning networks are used.'
    },
    {
      title: 'SMS Classification',
      description: 'Engineered AI-driven text classification pipeline utilizing NLP techniques, achieving a 95% accuracy rate in categorizing SMS messages during the Samsung-organized hackathon, demonstrating rapid model development skills.',
      skills: ['Spam Detection', 'XGBoost', 'Text classification', 'Feature Engineering', 'NLP', 'spaCY'],
      category: 'Machine Learning',
      image: 'https://miro.medium.com/v2/1*oLszsXod-dV2c1NBqa8k7w.jpeg',
      detailedDescription: 'Engineered AI-driven text classification pipeline utilizing NLP techniques, achieving a 95% accuracy rate in categorizing SMS messages during the Samsung-organized hackathon, demonstrating rapid model development skills.'
    }
  ];

  interface Project {
    title: string;
    description: string;
    detailedDescription: string;
    skills: string[];
    category: string;
    image: string;
  }

  // Determine color class based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-primary/10 text-primary border-primary/30';
      case 'Natural Language Processing & Computer Vision':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/30';
      case 'Computer Vision':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/30';
      case 'Data Science':
        return 'bg-green-500/10 text-green-500 border-green-500/30';
      default:
        return 'bg-accent/10 text-accent border-accent/30';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">Featured Projects</h2>

        {/* Carousel Fix: Move navigation buttons outside CarouselContent and ensure correct positioning */}
        <div className="relative w-full max-w-5xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1.5">
                  <Card
                    className="overflow-hidden card-hover h-full flex flex-col cursor-pointer backdrop-blur-sm bg-card/80 border-t-2 transition-all duration-300"
                    style={{ borderColor: `hsl(var(--${project.category === 'Computer Vision' ? 'primary' : 'accent'}))` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <AspectRatio ratio={16/9} className="overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <img
                        src={`${project.image}?w=600&h=400&auto=format&fit=crop&q=80`}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </AspectRatio>

                    <CardContent className="p-5 flex-grow flex flex-col">
                      <Badge className={cn("mb-3 self-start border", getCategoryColor(project.category))}>
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 line-clamp-1">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-0.5 bg-secondary text-xs rounded-md border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 3 && (
                          <span className="px-2 py-0.5 bg-secondary text-xs rounded-md border border-border/50">
                            +{project.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Move navigation buttons here for correct positioning */}
            <CarouselPrevious className="left-2 md:-left-2 absolute top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="right-2 md:-right-2 absolute top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
        </div>

        {/* Modal Dialog Fix: Set max height and make content scrollable */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <Badge className={cn("w-fit mt-2 border", getCategoryColor(selectedProject.category))}>
                    {selectedProject.category}
                  </Badge>
                </DialogHeader>
                <div className="mt-4 space-y-6 overflow-y-auto pr-2" style={{ maxHeight: "75vh" }}>
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                    <img
                      src={`${selectedProject.image}?w=1200&h=675&auto=format&fit=crop&q=80`}
                      alt={selectedProject.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Project Overview</h3>
                    <DialogDescription className="text-base">
                      {selectedProject.detailedDescription}
                    </DialogDescription>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium w-1/3">Category</TableCell>
                        <TableCell>{selectedProject.category}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Impact</TableCell>
                        <TableCell>
                          {selectedProject.description.split(',').pop()?.trim() || 'Significant improvements in efficiency and outcomes'}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
