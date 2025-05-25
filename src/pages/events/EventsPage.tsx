
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Users, Globe, ArrowRight, Clock, MapPin, Video } from 'lucide-react';

const EventsPage: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-sheraa-dark dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Connect, Learn, and Be Inspired</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Sheraa </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">Events</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover opportunities to learn, network, and showcase your venture through 
              our signature events, workshops, and community meetups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/events/sef-landing" className="flex items-center gap-2">
                  Featured: SEF 2026
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="#upcoming">View All Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Event - SEF */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Featured Event
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The region's largest celebration of entrepreneurship
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 lg:p-12 text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      Sharjah Entrepreneurship Festival
                    </h3>
                    <p className="text-xl mb-6 text-purple-100">
                      SEF brings together thousands of entrepreneurs, investors, creators, 
                      and leaders from around the globe for inspiration, connection, and growth.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" />
                        <span>January 31 - February 1, 2026</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span>SRTIP, Sharjah</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5" />
                        <span>14,000+ Expected Attendees</span>
                      </div>
                    </div>

                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      <Link to="/events/sef-landing">Learn More About SEF</Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {[
                      { number: "300+", label: "Global Speakers" },
                      { number: "250+", label: "Activities" },
                      { number: "45", label: "Countries" },
                      { number: "10+", label: "Experience Zones" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section id="upcoming" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Types of Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From intimate workshops to large-scale festivals, we offer diverse opportunities for learning and networking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Workshops & Masterclasses",
                description: "Hands-on learning sessions with industry experts covering essential business skills.",
                icon: Video,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Networking Events",
                description: "Connect with fellow entrepreneurs, investors, and mentors in our ecosystem.",
                icon: Users,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Pitch Competitions",
                description: "Showcase your startup and compete for funding and recognition.",
                icon: Globe,
                color: "from-purple-500 to-purple-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Never Miss an Event
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with our latest events and be the first to know about exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/contact">Subscribe to Updates</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/events/calendar">View Event Calendar</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EventsPage;
