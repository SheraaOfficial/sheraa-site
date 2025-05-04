
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Sparkles, ArrowRight, ChevronRight, Rocket } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StartYoungPage = () => {
  const backgroundStyle = {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url('/images/student-entrepreneurs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.15
  };

  // Animation variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">Ignite Your Potential</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Entrepreneurship for Youth & Students
          </p>
          <div className="w-24 h-1 bg-sheraa-secondary mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The journey to becoming an entrepreneur starts early. Sheraa's "Start Young" initiatives are designed to cultivate entrepreneurial mindsets, 
            equip young talent with essential skills, and provide a launchpad for innovative ideas emerging from university campuses 
            and the wider youth community in the UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <GradientButton asChild size="lg">
              <Link to="/programs/startup-dojo">Explore Startup Dojo</Link>
            </GradientButton>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs/startup-dojo-plus">Learn About Dojo+</Link>
            </Button>
          </div>
        </motion.div>

        <Tabs defaultValue="dojo" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="dojo">Startup Dojo</TabsTrigger>
            <TabsTrigger value="dojo-plus">Startup Dojo+</TabsTrigger>
          </TabsList>
          <TabsContent value="dojo">
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-sheraa-light/20">
              <CardContent className="pt-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold text-sheraa-primary mb-4 flex items-center">
                      <Rocket className="mr-2 h-6 w-6 text-sheraa-secondary" />
                      Startup Dojo
                    </h2>
                    <p className="text-gray-600 mb-6">
                      An intensive 8-week summer incubation program focused on transforming student ideas into viable entrepreneurial solutions. 
                      Participants gain real-world experience in starting and running a business through hands-on training and mentorship.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Who is it for?</h3>
                    <p className="text-gray-600 mb-6">
                      University students and recent graduates from across the UAE with promising startup ideas. 
                      Strong participation from Emirati youth is encouraged and has been significant (81% in 2023). 
                      Teams from diverse universities (AUS, UOS, others) participate.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Key Focus Areas</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li className="text-gray-600">Idea validation and problem-solution fit</li>
                      <li className="text-gray-600">Business model development</li>
                      <li className="text-gray-600">Market research and customer discovery</li>
                      <li className="text-gray-600">Pitching and presentation skills</li>
                      <li className="text-gray-600">Team building and leadership</li>
                    </ul>
                    
                    <Button asChild className="mt-4">
                      <Link to="/programs/startup-dojo" className="flex items-center">
                        Explore Startup Dojo
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="bg-sheraa-light rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Program Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Users className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Intensive Mentorship</h4>
                          <p className="text-sm text-gray-600">Learn from industry experts and successful entrepreneurs</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Sparkles className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Supportive Environment</h4>
                          <p className="text-sm text-gray-600">Develop and refine business ideas with peer feedback</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Users className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Valuable Networking</h4>
                          <p className="text-sm text-gray-600">Connect with peers and ecosystem players</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Pathway to Growth</h4>
                          <p className="text-sm text-gray-600">Potential access to further Sheraa programs and support</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Award className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Potential Grants</h4>
                          <p className="text-sm text-gray-600">Top teams may receive benefits like grants and commercial licenses</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-white p-4 rounded-lg border border-dashed border-sheraa-primary/30">
                      <h4 className="font-medium mb-2">Eligibility</h4>
                      <p className="text-sm text-gray-600">
                        Teams of university students/recent graduates based in the UAE. Specific criteria may vary per cohort.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dojo-plus">
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-sheraa-light/20">
              <CardContent className="pt-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold text-sheraa-primary mb-4 flex items-center">
                      <Rocket className="mr-2 h-6 w-6 text-sheraa-secondary" />
                      Startup Dojo+
                    </h2>
                    <p className="text-gray-600 mb-6">
                      An intensive accelerator program (e.g., 4 weeks) for top-performing teams emerging from Startup Dojo or similar early-stage initiatives. 
                      It offers bespoke attention to help validate and build concepts further.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Who is it for?</h3>
                    <p className="text-gray-600 mb-6">
                      High-potential student/alumni startups, often selected from Startup Dojo or other feeder programs like hackathons. 
                      Participants often represent diverse nationalities and sectors (AgriTech, EdTech, AI, HealthTech etc.).
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Key Focus Areas</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li className="text-gray-600">Business model refinement</li>
                      <li className="text-gray-600">Market validation techniques</li>
                      <li className="text-gray-600">Product design and development</li>
                      <li className="text-gray-600">Financial planning and projections</li>
                      <li className="text-gray-600">Pitch development and investor readiness</li>
                    </ul>
                    
                    <Button asChild className="mt-4">
                      <Link to="/programs/startup-dojo-plus" className="flex items-center">
                        Explore Startup Dojo+
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="bg-sheraa-light rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Program Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Users className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Focused Mentorship</h4>
                          <p className="text-sm text-gray-600">Get personalized guidance from industry experts</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Sparkles className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Funding Opportunities</h4>
                          <p className="text-sm text-gray-600">Top-performing teams may receive funding</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Rocket className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Fast-Track Application</h4>
                          <p className="text-sm text-gray-600">Consideration for Sheraa's S3 Incubator</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Showcase Opportunities</h4>
                          <p className="text-sm text-gray-600">Present at 'Seal the Deal' pitch event</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-4 bg-white p-2 rounded-full">
                          <Award className="h-5 w-5 text-sheraa-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Incubation Readiness</h4>
                          <p className="text-sm text-gray-600">Strengthen readiness for next-stage acceleration</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-white p-4 rounded-lg border border-dashed border-sheraa-primary/30">
                      <h4 className="font-medium mb-2">Eligibility</h4>
                      <p className="text-sm text-gray-600">
                        Primarily for standout teams from Sheraa's youth programs or partner initiatives.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Why Start Young?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Nurturing entrepreneurial skills early creates a pipeline of future innovators and leaders. By engaging students within their 
                  university environments (AUS, UOS hubs), Sheraa makes entrepreneurship accessible and integrates it with academic learning, 
                  fostering a culture of innovation from the ground up.
                </p>
                <p className="text-gray-600 mb-4">
                  This approach aligns with Sharjah's significant investment in education and talent development, ensuring a continuous flow 
                  of entrepreneurial talent contributing to the region's economic diversification and growth.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sheraa-light p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-sheraa-primary">81%</h3>
                    <p className="text-sm">Emirati Participation in 2023</p>
                  </div>
                  <div className="bg-sheraa-light p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-sheraa-primary">18k+</h3>
                    <p className="text-sm">Youth Upskilled</p>
                  </div>
                  <div className="bg-sheraa-light p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-sheraa-primary">8</h3>
                    <p className="text-sm">Weeks Intensive Training</p>
                  </div>
                  <div className="bg-sheraa-light p-4 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-sheraa-primary">15+</h3>
                    <p className="text-sm">University Partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary p-8 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Entrepreneurial Journey?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Take the first step toward becoming a successful entrepreneur and join Sheraa's Start Young programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90">
                <Link to="/eligibility">Check Eligibility</Link>
              </Button>
              <GradientButton asChild size="lg" className="bg-white text-sheraa-primary">
                <a href="mailto:info@sheraa.ae">Contact for University Partnerships</a>
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default StartYoungPage;
