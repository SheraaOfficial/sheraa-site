
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Users, Rocket, Check, ArrowRight, ChevronRight, Star } from 'lucide-react';

const StartupDojoPlusPage = () => {
  const backgroundStyle = {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url('/images/startup-dojo-plus.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.15
  };

  // Animation variants
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

  const successStories = [
    {
      name: "EcoTech",
      founder: "Fatima Al Suwaidi",
      description: "Developed a smart recycling solution that uses AI to sort waste automatically",
      achievement: "Secured AED 500,000 in seed funding after Dojo+",
      sector: "CleanTech",
      logo: "/placeholder.svg"
    },
    {
      name: "StudyBuddy",
      founder: "Omar Khalil",
      description: "Created a peer-to-peer tutoring platform for university students",
      achievement: "Expanded to 5 universities with 2,000+ active users",
      sector: "EdTech",
      logo: "/placeholder.svg"
    },
    {
      name: "FreshBox",
      founder: "Layla Ahmad",
      description: "Farm-to-door subscription service for locally grown produce",
      achievement: "Featured in Forbes Middle East's top startups to watch",
      sector: "AgriTech",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-sheraa-light px-3 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-4">
                Advanced Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">Startup Dojo+</h1>
              <p className="text-xl text-gray-600 mb-6">
                Take your validated idea to the next level with intensive acceleration and expert support.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>4-week program</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>Invitation-based</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>For high-potential teams</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Startup Dojo+ is an intensive accelerator program for top-performing teams emerging from Startup Dojo or similar 
                early-stage initiatives. It offers bespoke attention to help validate and build concepts further, preparing teams 
                for potential entry into the S3 Incubator and investor engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton asChild size="lg">
                  <Link to="/eligibility">Check Eligibility</Link>
                </GradientButton>
                <Button asChild variant="outline" size="lg">
                  <Link to="/programs/start-young">Back to Start Young</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sheraa-primary to-sheraa-secondary p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-6">Path to Success</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Intensive Acceleration</h3>
                    <p className="text-white/80 text-sm">4 weeks of focused mentorship and skill development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Validation</h3>
                    <p className="text-white/80 text-sm">Refine business model with industry specialist guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Investor Connections</h3>
                    <p className="text-white/80 text-sm">Showcase to potential investors and partners</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">S3 Incubator Fast Track</h3>
                    <p className="text-white/80 text-sm">Priority consideration for Sheraa's flagship incubator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16 bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="program">
            <TabsList className="w-full grid grid-cols-3 rounded-none bg-gray-50 p-0 h-auto">
              <TabsTrigger value="program" className="py-4 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none">
                Program Structure
              </TabsTrigger>
              <TabsTrigger value="benefits" className="py-4 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="eligibility" className="py-4 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none">
                Eligibility
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="program" className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Program Structure</h2>
              <p className="text-gray-600 mb-6">
                Startup Dojo+ offers a concentrated 4-week acceleration experience designed to rapidly advance promising ventures. 
                The program is structured to maximize growth and investor readiness in a short timeframe.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Week 1: Strategy Refinement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Comprehensive business model review</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">One-on-one sessions with industry experts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Market positioning and competitor analysis</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Week 2: Product Validation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Advanced customer validation techniques</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Product development workshops</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">MVP refinement with technical mentors</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Week 3: Growth & Scaling</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Marketing and customer acquisition strategies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Financial modeling and projections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Operational scaling frameworks</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Week 4: Investor Readiness</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Investment pitch creation and refinement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">One-on-one pitch practice sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">'Seal the Deal' pitch event with investors</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-sheraa-light p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Post-Program Support</h3>
                <p className="text-gray-600">
                  After completing Startup Dojo+, teams continue to receive support from Sheraa through:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-sheraa-primary mr-2" />
                    <span className="text-gray-600">Fast-track application to S3 Incubator</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-sheraa-primary mr-2" />
                    <span className="text-gray-600">Ongoing monthly check-ins with program managers</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-sheraa-primary mr-2" />
                    <span className="text-gray-600">Access to Sheraa's network of partners and investors</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-sheraa-primary mr-2" />
                    <span className="text-gray-600">Invitation to showcase at Sheraa events and the annual SEF festival</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Program Benefits</h2>
              <p className="text-gray-600 mb-8">
                Startup Dojo+ provides a concentrated set of high-impact benefits designed to accelerate your startup's growth 
                and increase your chances of securing investment and achieving sustainable success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-sheraa-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Focused Mentorship</h3>
                    <p className="text-sm text-gray-600">
                      Get personalized guidance from industry experts and entrepreneurs who have successfully scaled businesses.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Funding Opportunities</h3>
                    <p className="text-sm text-gray-600">
                      Top-performing teams may receive funding and investment opportunities through Sheraa's network of investors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <Rocket className="h-6 w-6 text-sheraa-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Fast-Track Access</h3>
                    <p className="text-sm text-gray-600">
                      Priority consideration for Sheraa's prestigious S3 Incubator program with more extensive support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-sheraa-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Showcase Opportunities</h3>
                    <p className="text-sm text-gray-600">
                      Present at 'Seal the Deal' pitch event with investors and potential partners in attendance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-sheraa-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Incubation Readiness</h3>
                    <p className="text-sm text-gray-600">
                      Strengthen your team and venture for the next stage of acceleration and market growth.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-sheraa-light flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-sheraa-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Specialized Resources</h3>
                    <p className="text-sm text-gray-600">
                      Access to market research tools, software credits, and other resources to support your growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <blockquote className="border-l-4 border-sheraa-primary pl-4 italic text-gray-600">
                "Startup Dojo+ gave us exactly what we needed - focused attention on the areas where we were struggling. 
                The mentors didn't just give advice; they rolled up their sleeves and helped us work through our challenges."
                <footer className="mt-2 font-medium not-italic">— Mohammed Al Zarooni, Founder, TechSolutions</footer>
              </blockquote>
            </TabsContent>
            
            <TabsContent value="eligibility" className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Eligibility & Selection</h2>
              <p className="text-gray-600 mb-6">
                Startup Dojo+ is designed for high-potential early-stage startups ready to accelerate their growth. 
                The program is highly selective, focusing on teams that have demonstrated commitment and initial traction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Who Can Apply</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Graduates of Startup Dojo or similar early-stage programs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Standout teams from university hackathons and innovation competitions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Early-stage founders with validated ideas and initial prototypes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Student or recent graduate entrepreneurs with promising traction</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Selection Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Demonstrated product-market fit with some validation data</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Strong founding team with complementary skills</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Innovative solution addressing a clear market need</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Potential for significant growth and scalability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sheraa-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">Commitment to full participation in the intensive program</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-sheraa-light p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Selection Process</h3>
                <ol className="mt-3 space-y-2 list-decimal pl-5">
                  <li className="text-gray-600">
                    <span className="font-medium">Nomination/Application</span>: Teams are typically nominated by Sheraa mentors or partners, though exceptional teams may apply directly
                  </li>
                  <li className="text-gray-600">
                    <span className="font-medium">Initial Review</span>: Assessment of business model, team composition, and current traction
                  </li>
                  <li className="text-gray-600">
                    <span className="font-medium">Interview</span>: In-depth discussion with the Sheraa team about growth vision and challenges
                  </li>
                  <li className="text-gray-600">
                    <span className="font-medium">Final Selection</span>: Top teams receive invitation to join the cohort
                  </li>
                </ol>
                
                <div className="mt-4 p-4 bg-white rounded-lg border border-dashed border-gray-300">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Note:</span> Due to the intensive nature of the program, cohorts are kept small 
                    (typically 5-8 startups) to ensure personalized attention and high-quality support.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <Card key={idx} className="border overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-8">
                    <img 
                      src={story.logo} 
                      alt={story.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-xl text-sheraa-primary">{story.name}</h3>
                      <span className="inline-block bg-sheraa-light px-2 py-0.5 rounded text-xs font-medium text-sheraa-primary">
                        {story.sector}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{story.achievement}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                      <p className="text-sm text-gray-500">
                        Founder: {story.founder}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-secondary to-sheraa-primary p-10 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Take Your Startup to the Next Level</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Ready to accelerate your growth? Apply to Startup Dojo+ or start with our foundational Startup Dojo program.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <GradientButton asChild size="lg" className="bg-white text-sheraa-primary">
                <Link to="/eligibility">Check Eligibility</Link>
              </GradientButton>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/programs/s3-incubator" className="flex items-center">
                  Explore S3 Incubator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default StartupDojoPlusPage;
