
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = [
    {
      title: 'Product Assurance and Security White Belt',
      issuer: 'Intel Corporation',
      date: 'February 2022',
      description: 'Advanced certification for product assurance and security in SDL.',
      category: 'Security'
    },
    {
      title: 'Medical Image Analysis Online Course Conducted by IIT Kharagpur',
      issuer: 'NPTEL',
      date: 'August 2018',
      description: 'Specialized certification for analyzing medical images using advanced DL techniques.',
      category: 'Computer Vision'
    },
    {
      title: 'Reinforcement Learning Specialization by IIT Madras',
      issuer: 'NPTEL',
      date: 'March 2018',
      description: 'Certification in reinforcement learning techniques and applications.',
      category: 'Reinforcement Learning'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <Badge className="mb-3">{certificate.category}</Badge>
                <h3 className="text-xl font-bold mb-1">{certificate.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-muted-foreground">{certificate.issuer}</p>
                  <p className="text-sm text-muted-foreground">{certificate.date}</p>
                </div>
                <p className="text-muted-foreground">{certificate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
