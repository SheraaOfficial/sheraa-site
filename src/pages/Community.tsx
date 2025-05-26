
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Users, Handshake, Star, ArrowRight, 
  Building, Lightbulb, Globe, Heart
} from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = [
    { number: "180+", label: "Startups in Portfolio" },
    { number: "140+", label: "Ecosystem Partners" },
    { number: "52%", label: "Women-Led Startups" },
    { number: "18,000+", label: "Youth Engaged" }
  ];

  const communityFeatures = [
    {
      title: "Vibrant Startup Network",
      description: "Connect with ambitious founders building the future across key sectors",
      icon: Lightbulb,
      link: "/community/startups"
    },
    {
      title: "Join Our Community",
      description: "Become a member and access exclusive resources, events, and networking",
      icon: Users,
      link: "/community/join"
    },
    {
      title: "Partnership Opportunities", 
      description: "Collaborate with us to drive innovation and shape the ecosystem",
      icon: Handshake,
      link: "/community/partnerships"
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Powered by Community,<br />Strengthened by Partnership
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Entrepreneurship thrives in collaboration. Sheraa connects you to a vibrant network of founders, mentors, investors, corporate leaders, and government entities, all dedicated to fostering innovation in Sharjah.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/community/join" className="flex items-center gap-2">
                    Join Our Community
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Link to="/community/partnerships">Partnership Opportunities</Link>
                </Button>
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {communityStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-sheraa-primary/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Power of Our Network</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our ecosystem is built on the principle that collective strength fuels individual success. By joining Sheraa, you tap into a powerful network designed to accelerate growth and unlock opportunities.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {communityFeatures.map((feature, idx) => (
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
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
                      <Button asChild variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                        <Link to={feature.link} className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20 max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <Heart className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Built on Collaboration</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    This interconnectedness is not just a feature; it's the foundation of how we create impact, providing startups with the validation, resources, and market access needed to thrive. With over 140 diverse partners, our reach extends across industries and borders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Community;
