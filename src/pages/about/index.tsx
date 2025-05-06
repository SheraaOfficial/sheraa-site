import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import PageHeader
import PageHeader from './components/PageHeader';

const AboutPage = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Create parallax effect for some elements
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const hubs = [
    {
      name: "Sheraa HQ (SRTIP)",
      description: "Located within the Sharjah Research Technology and Innovation Park (SRTIP), our headquarters connects startups with cutting-edge research, technology facilities, and a dynamic innovation ecosystem.",
      address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/1AHDVr9SdAtyf9Qu9",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "AUS Hub",
      description: "Situated on the ground floor of the Library Building at the American University of Sharjah (AUS), this hub engages students and faculty, fostering early-stage innovation.",
      address: "Ground Floor, Library Building, American University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/9j1RwPzUGGmhpC9y5",
      mapPDF: "/lovable-uploads/aus-map.pdf",
      image: "https://images.unsplash.com/photo-1599403802665-144cfeddbb6a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "UOS Hub",
      description: "Located in the W3 Building at the University of Sharjah (UOS), this hub connects with another key academic institution, broadening our reach to young talent.",
      address: "W3 Building, University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4010",
      directions: "https://maps.app.goo.gl/7dtcpM2HwNzVH3Dx5",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="About Sheraa" 
        subtitle="Empowering entrepreneurs, building Sharjah's future."
      />
      
      {/* Introduction Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          style={{ y: y2, opacity: opacity1 }}
          className="absolute -right-20 top-20 w-72 h-72 bg-sheraa-primary/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute -left-20 bottom-0 w-80 h-80 bg-sheraa-primary/5 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Empowering Entrepreneurs, Building Sharjah's Future</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Sheraa (Sharjah Entrepreneurship Center), we are deeply inspired by Sharjah's unique ability to blend collective 
                strength and unity with individual expression and creativity. This synergy fuels our mission: to cultivate a world-class 
                entrepreneurship ecosystem in Sharjah, nurturing the next generation of innovators and supporting impactful ventures at 
                every stage of their journey.
              </p>

              <div className="bg-gradient-to-br from-sheraa-primary/10 to-sheraa-primary/5 rounded-xl p-8 mt-12 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-sheraa-primary text-center">Our Impact Since 2016</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-3xl font-bold text-sheraa-dark mb-1">180+</div>
                    <div className="text-sm text-gray-600">Startups Supported</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-3xl font-bold text-sheraa-dark mb-1">$248M+</div>
                    <div className="text-sm text-gray-600">Revenue Generated</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-3xl font-bold text-sheraa-dark mb-1">1,900+</div>
                    <div className="text-sm text-gray-600">Jobs Created</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-3xl font-bold text-sheraa-dark mb-1">71%</div>
                    <div className="text-sm text-gray-600">Startup Survival Rate</div>
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="default" size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                    <Link to="/about/impact" className="flex items-center gap-2">
                      Full Impact Report
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.03]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Approach: Founder-First, Community-Driven</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe entrepreneurs are the driving force of progress. Our "founder-first" philosophy guides everything we do, 
                ensuring our programs and resources are tailored to the real needs of those building businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We foster an inclusive, collaborative community where founders, mentors, investors, and industry leaders connect, 
                share knowledge, and support one another's growth. This network effect is central to the Sheraa experience, 
                providing invaluable connections and opportunities. The strength of this interconnected ecosystem provides 
                resilience and accelerates growth for participating startups.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm mt-10 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-6 text-sheraa-dark">Our Founder-First Principles</h3>
              <ul className="space-y-6">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Equity-Free Support</h4>
                    <p className="text-gray-600">We provide equity-free funding and support in many of our programs, allowing founders to maintain full ownership while receiving the resources they need to succeed.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Tailored Mentorship</h4>
                    <p className="text-gray-600">Every founder receives guidance specific to their unique challenges from our network of experienced mentors who have walked the entrepreneurial path before.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Community Integration</h4>
                    <p className="text-gray-600">We connect founders to a supportive ecosystem of peers, partners, and stakeholders for sustainable growth and collaborative innovation that benefits all.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -right-32 bottom-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To establish Sharjah as a leading global hub for entrepreneurship and innovation, 
                recognized for its supportive ecosystem, high-impact startups, and contribution to 
                a diversified, knowledge-based economy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our focus extends beyond mere company formation; we aim to cultivate changemakers 
                who address pressing challenges and contribute positively to society.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-tr from-sheraa-primary/10 to-transparent rounded-xl p-8 my-10 border border-sheraa-primary/20"
            >
              <h3 className="text-xl font-bold mb-6 text-sheraa-dark">Key Strategic Priorities</h3>
              <ul className="space-y-5">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">Building a thriving entrepreneurship ecosystem that nurtures innovation through collaboration and support</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">Supporting startups that contribute to economic diversification and create sustainable job opportunities</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">Fostering inclusive entrepreneurship with strong representation of women-led ventures and diverse founders</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                    <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">Creating sustainable businesses that address real-world challenges and build a more resilient future</p>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex justify-center">
              <GradientButton size="lg" asChild>
                <Link to="/programs" className="flex items-center gap-2">
                  Explore Our Programs 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="impact" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.03]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Impact</h2>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                Since our launch in 2016 under the patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, 
                Ruler of Sharjah, and the leadership of Chairperson H.E. Sheikha Bodour Bint Sultan Al Qasimi, 
                Sheraa has made a significant mark in the entrepreneurial ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">180+</div>
                <div className="text-sm text-gray-600">Startups Supported</div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">$248M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">$171M+</div>
                <div className="text-sm text-gray-600">Capital Raised</div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">1,900+</div>
                <div className="text-sm text-gray-600">Jobs Created</div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="gradient" size="lg" className="group">
                <Link to="/about/impact" className="flex items-center gap-2">
                  View Full Impact Report
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Hubs Section */}
      <section id="hubs" className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          style={{ y: y2 }}
          className="absolute -left-32 top-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Hubs</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Sheraa operates from strategic locations within Sharjah's vibrant academic and research 
                landscape, ensuring accessibility and fostering collaboration.
              </p>
            </motion.div>

            <div className="space-y-16">
              {hubs.map((hub, index) => (
                <motion.div 
                  key={hub.name} 
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-8 items-stretch"
                >
                  <motion.div 
                    className="w-full md:w-2/5 h-[250px] overflow-hidden rounded-xl shadow-md relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-sheraa-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                      src={hub.image} 
                      alt={hub.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy" 
                    />
                  </motion.div>
                  
                  <Card className="w-full md:w-3/5 border-sheraa-primary/10 shadow-md">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-3 text-sheraa-dark">{hub.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{hub.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-sheraa-primary shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">{hub.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-sheraa-primary shrink-0" />
                          <span className="text-sm text-gray-600">{hub.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button variant="default" size="sm" asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                          <a href={hub.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Get Directions <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        
                        {hub.mapPDF && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={hub.mapPDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              Download Map <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.02]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Leadership</h2>
              <p className="text-lg mb-0 leading-relaxed">
                Sheraa is guided by a visionary leadership team committed to empowering entrepreneurs and 
                strengthening Sharjah's ecosystem.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" 
                    alt="H.E. Sheikha Bodour Bint Sultan Al Qasimi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">H.E. Sheikha Bodour Bint Sultan Al Qasimi</h3>
                <p className="text-sheraa-primary mb-4">Chairperson</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                    alt="Najla Al Midfa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Najla Al Midfa</h3>
                <p className="text-sheraa-primary mb-4">Vice-Chairperson</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop" 
                    alt="Sara Al Nuaimi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sara Al Nuaimi</h3>
                <p className="text-sheraa-primary mb-4">Chief Executive Officer</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Advisors Section */}
      <section id="board" className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute right-0 bottom-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Board of Advisors</h2>
              <p className="text-lg mb-10 leading-relaxed">
                We benefit from the strategic guidance of a distinguished Board of Advisors, comprising 
                leaders from government, industry, academia, and the entrepreneurial community, ensuring 
                our initiatives remain aligned with national priorities and market needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-sheraa-primary/10 to-transparent rounded-xl p-8 border border-sheraa-primary/10 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8 text-center text-sheraa-dark">Advisory Board Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Government Relations</h4>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Industry Insights</h4>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Academic Research</h4>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Investment Strategy</h4>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Entrepreneurial Experience</h4>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                >
                  <h4 className="font-semibold mb-0">Global Connections</h4>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
