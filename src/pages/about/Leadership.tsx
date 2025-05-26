
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedIn, Twitter, Mail } from 'lucide-react';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      title: "Chairperson",
      image: "/placeholder.svg",
      bio: "Visionary leader committed to empowering entrepreneurs and strengthening Sharjah's ecosystem.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Najla Al Midfa",
      title: "Vice-Chairperson", 
      image: "/placeholder.svg",
      bio: "Strategic advisor with extensive experience in business development and innovation.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sara Al Nuaimi",
      title: "Chief Executive Officer",
      image: "/placeholder.svg", 
      bio: "Dynamic operational director ensuring strategic alignment and effective execution of Sheraa's mission.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sara@sheraa.ae"
      }
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Our Leadership Team
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sheraa is guided by a visionary leadership team committed to empowering entrepreneurs and strengthening Sharjah's ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leaders.map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-sheraa-primary font-semibold mb-4">{leader.title}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{leader.bio}</p>
                      
                      <div className="flex justify-center gap-4">
                        {leader.social.linkedin && (
                          <a href={leader.social.linkedin} className="text-gray-400 hover:text-sheraa-primary transition-colors">
                            <LinkedIn className="w-5 h-5" />
                          </a>
                        )}
                        {leader.social.twitter && (
                          <a href={leader.social.twitter} className="text-gray-400 hover:text-sheraa-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {leader.social.email && (
                          <a href={`mailto:${leader.social.email}`} className="text-gray-400 hover:text-sheraa-primary transition-colors">
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Leadership;
