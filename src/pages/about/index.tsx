
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import PageHeader
import PageHeader from './components/PageHeader';

const AboutPage = () => {
  const location = useLocation();

  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Empowering Entrepreneurs, Building Sharjah's Future</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Sheraa (Sharjah Entrepreneurship Center), we are deeply inspired by Sharjah's unique ability to blend collective 
              strength and unity with individual expression and creativity. This synergy fuels our mission: to cultivate a world-class 
              entrepreneurship ecosystem in Sharjah, nurturing the next generation of innovators and supporting impactful ventures at 
              every stage of their journey.
            </p>

            <div className="bg-sheraa-primary/10 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-sheraa-primary">Our Impact Since 2016</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">180+</div>
                  <div className="text-sm text-gray-600">Startups Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">$248M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">1,900+</div>
                  <div className="text-sm text-gray-600">Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">71%</div>
                  <div className="text-sm text-gray-600">Startup Survival Rate</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild variant="gradient" className="group">
                  <Link to="/about/impact" className="flex items-center gap-2">
                    Full Impact Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Approach: Founder-First, Community-Driven</h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe entrepreneurs are the driving force of progress. Our "founder-first" philosophy guides everything we do, 
              ensuring our programs and resources are tailored to the real needs of those building businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We foster an inclusive, collaborative community where founders, mentors, investors, and industry leaders connect, 
              share knowledge, and support one another's growth. This network effect is central to the Sheraa experience, 
              providing invaluable connections and opportunities. The strength of this interconnected ecosystem provides 
              resilience and accelerates growth for participating startups.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm mt-8">
              <h3 className="text-xl font-bold mb-4 text-sheraa-dark">Our Founder-First Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Equity-Free Support</h4>
                    <p className="text-gray-600">We provide equity-free funding and support in many of our programs, allowing founders to maintain full ownership.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tailored Mentorship</h4>
                    <p className="text-gray-600">Every founder receives guidance specific to their unique challenges from our network of experienced mentors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Community Integration</h4>
                    <p className="text-gray-600">We connect founders to a supportive ecosystem of peers, partners, and stakeholders for sustainable growth.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To establish Sharjah as a leading global hub for entrepreneurship and innovation, 
                recognized for its supportive ecosystem, high-impact startups, and contribution to 
                a diversified, knowledge-based economy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-6">
                Our focus extends beyond mere company formation; we aim to cultivate changemakers 
                who address pressing challenges and contribute positively to society.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-sheraa-primary/5 rounded-xl p-6 md:p-8 my-10">
              <h3 className="text-xl font-bold mb-4 text-sheraa-dark">Key Strategic Priorities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <p>Building a thriving entrepreneurship ecosystem that nurtures innovation</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <p>Supporting startups that contribute to economic diversification</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <p>Fostering inclusive entrepreneurship with strong representation of women-led ventures</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                  </div>
                  <p>Creating sustainable businesses that address real-world challenges</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Impact</h2>
            <p className="text-lg text-gray-700 mb-10">
              Since our launch in 2016 under the patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, 
              Ruler of Sharjah, and the leadership of Chairperson H.E. Sheikha Bodour Bint Sultan Al Qasimi, 
              Sheraa has made a significant mark in the entrepreneurial ecosystem.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-sheraa-primary mb-1">180+</div>
                <div className="text-sm text-gray-600">Startups Supported</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-sheraa-primary mb-1">$248M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-sheraa-primary mb-1">$171M+</div>
                <div className="text-sm text-gray-600">Capital Raised</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-sheraa-primary mb-1">1,900+</div>
                <div className="text-sm text-gray-600">Jobs Created</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button asChild variant="gradient" size="lg" className="group">
                <Link to="/about/impact" className="flex items-center gap-2">
                  View Full Impact Report
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hubs Section */}
      <section id="hubs" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Hubs</h2>
              <p className="text-lg text-gray-700">
                Sheraa operates from strategic locations within Sharjah's vibrant academic and research 
                landscape, ensuring accessibility and fostering collaboration.
              </p>
            </motion.div>

            <div className="space-y-8">
              {hubs.map((hub, index) => (
                <motion.div 
                  key={hub.name} 
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-6 items-center"
                >
                  <div className="w-full md:w-1/3 h-[200px] overflow-hidden rounded-xl">
                    <img 
                      src={hub.image} 
                      alt={hub.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy" 
                    />
                  </div>
                  <Card className="w-full md:w-2/3 border-sheraa-primary/10">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2 text-sheraa-dark">{hub.name}</h3>
                      <p className="text-gray-600 mb-4">{hub.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-sheraa-primary shrink-0 mt-1" />
                          <span className="text-sm">{hub.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-5 h-5 text-sheraa-primary shrink-0" />
                          <span className="text-sm">{hub.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={hub.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                        
                        {hub.mapPDF && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={hub.mapPDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              Download Map <ExternalLink className="w-3 h-3 ml-1" />
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
      <section id="leadership" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Leadership</h2>
            <p className="text-lg mb-12">
              Sheraa is guided by a visionary leadership team committed to empowering entrepreneurs and 
              strengthening Sharjah's ecosystem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" 
                    alt="H.E. Sheikha Bodour Bint Sultan Al Qasimi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">H.E. Sheikha Bodour Bint Sultan Al Qasimi</h3>
                <p className="text-sheraa-primary mb-4">Chairperson</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                    alt="Najla Al Midfa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Najla Al Midfa</h3>
                <p className="text-sheraa-primary mb-4">Vice-Chairperson</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop" 
                    alt="Sara Al Nuaimi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sara Al Nuaimi</h3>
                <p className="text-sheraa-primary mb-4">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Advisors Section */}
      <section id="board" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Board of Advisors</h2>
            <p className="text-lg mb-8">
              We benefit from the strategic guidance of a distinguished Board of Advisors, comprising 
              leaders from government, industry, academia, and the entrepreneurial community, ensuring 
              our initiatives remain aligned with national priorities and market needs.
            </p>
            
            <div className="bg-sheraa-primary/5 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Advisory Board Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Government Relations</h4>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Industry Insights</h4>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Academic Research</h4>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Investment Strategy</h4>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Entrepreneurial Experience</h4>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Global Connections</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
