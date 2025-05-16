import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16 ai-gradient-text">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">maniyar7jaimin@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+91 97266 71513</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden h-64 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.885552429016!2d77.65991476788799!3d12.9035167833525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148ffd8b54d7%3A0x1cbef59041685ff3!2sHarlur%20Main%20Rd%2C%20Harlur%2C%20Karnataka%20560102%2C%20India!5e0!3m2!1sen!2sus!4v1715692356403!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Bengaluru, Karnataka, India"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
