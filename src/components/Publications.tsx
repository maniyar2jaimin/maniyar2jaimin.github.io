
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      title: 'Screening Deep Learning Inference Accelerators at the Production Lines',
      journal: 'CS & IT Conference Proceedings',
      date: 'Nov 2022',
      description: 'Designed and delivered a critical AI inference test application used in manufacturing to screen defective hardware. Implemented a robust golden reference strategy that, when deployed at scale, directly contributed to achieving challenging Defects Per Million (DPM) quality targets for customers.',
      link: 'https://csitcp.org/paper/12/1219csit11.pdf',
      category: 'Conference Paper'
    },
    {
      title: 'Personalized Virtual School Environment Using Classifier Algorithm and Semantic Advisor-Assisting Framework',
      journal: 'Scopus Index Journal - AJPCR',
      date: 'May 2017',
      description: 'Created a personalized virtual school platform utilizing Machine Learning to profile students and dynamically select learning materials based on individual context. This web-based system provided an adaptive educational experience tailored to diverse abilities, enabling flexible, home-based learning and addressing varied student needs.',
      link: 'https://innovareacademics.in/journals/index.php/ajpcr/article/view/19585',
      category: 'Research Paper'
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">Publications</h2>

        <div className="space-y-6">
          {publications.map((publication, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <Badge className="w-fit mb-3 md:mb-0">{publication.category}</Badge>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                      <p className="text-primary font-medium">{publication.journal}</p>
                      <p className="text-sm text-muted-foreground">{publication.date}</p>
                    </div>
                    <p className="text-muted-foreground mb-4">{publication.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={publication.link} target="_blank" rel="noopener noreferrer">
                        Read Publication
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
