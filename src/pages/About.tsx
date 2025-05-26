
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Users, MapPin, Trophy, Heart, Globe, Target,
  ArrowRight, Building, Calendar, Award
} from 'lucide-react';

const About: React.FC = () => {
  const hubs = [
    {
      name: "Sheraa HQ (SRTIP)",
      address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
      phone: "+971 6 509 4000",
      description: "Our headquarters connects startups with cutting-edge research and technology facilities."
    },
    {
      name: "AUS Hub",
      address: "Ground Floor, Library Building, American University of Sharjah",
      phone: "+971 6 509 4000",
      description: "Engaging students and faculty, fostering early-stage innovation."
    },
    {
      name: "UOS Hub", 
      address: "W3 Building, University of Sharjah",
      phone: "+971 6 509 4010",
      description: "Connecting with key academic institutions to broaden our reach to young talent."
    }
  ];

  const impact = [
    { number: "180+", label: "Startups Supported" },
    { number: "$248M+", label: "Revenue Generated" },
    { number: "$171M+", label: "Capital Raised" },
    { number: "1,900+", label: "Jobs Created" },
    { number: "52%", label: "Women-Led Startups" },
    { number: "18,000+", label: "Youth Upskilled" },
    { number: "140+", label: "Ecosystem Partners" },
    { number: "71%", label: "Startup Survival Rate" }
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
                Empowering Entrepreneurs,<br />Building Sharjah's Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective strength and unity with individual expression and creativity. This synergy fuels our mission to cultivate a world-class entrepreneurship ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach: Founder-First, Community-Driven</h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="text-left">
                  <Target className="w-12 h-12 text-sheraa-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Founder-First Philosophy</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe entrepreneurs are the driving force of progress. Our "founder-first" philosophy guides everything we do, ensuring our programs and resources are tailored to the real needs of those building businesses.
                  </p>
                </div>
                <div className="text-left">
                  <Users className="w-12 h-12 text-sheraa-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Community-Driven</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We foster an inclusive, collaborative community where founders, mentors, investors, and industry leaders connect, share knowledge, and support one another's growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact Since 2016</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Since our launch under the patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, Ruler of Sharjah, we have made a significant mark on the entrepreneurial landscape.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impact.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="text-center p-6 bg-white dark:bg-sheraa-dark rounded-2xl"
                >
                  <div className="text-3xl font-bold text-sheraa-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Hubs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Hubs: At the Heart of Innovation</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sheraa operates from strategic locations within Sharjah's vibrant academic and research landscape, ensuring accessibility and fostering collaboration.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {hubs.map((hub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <MapPin className="w-12 h-12 text-sheraa-primary mb-4" />
                      <h3 className="text-xl font-bold mb-4">{hub.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{hub.description}</p>
                      <div className="text-sm">
                        <p className="mb-2"><strong>Address:</strong> {hub.address}</p>
                        <p><strong>Phone:</strong> {hub.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Explore our programs, become part of our community, or partner with us to shape the future of entrepreneurship in Sharjah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50">
                <Link to="/programs" className="flex items-center gap-2">
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/community/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default About;
