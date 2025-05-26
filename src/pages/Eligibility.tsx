
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, ArrowRight, Users, Rocket, Globe, Building } from 'lucide-react';
import EligibilityCheckerDialog from '@/components/eligibility/EligibilityCheckerDialog';
import MainLayout from '@/components/layouts/MainLayout';

const Eligibility: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const programs = [
    {
      title: "Start Young",
      description: "For students and recent graduates with innovative ideas",
      icon: Users,
      criteria: [
        "University student or recent graduate",
        "Based in UAE",
        "Have a startup idea or early concept",
        "Available for 8-week program"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "S3 Incubator", 
      description: "For tech-enabled startups ready to scale",
      icon: Rocket,
      criteria: [
        "Tech-enabled business model",
        "Market-ready product/service",
        "Early customer traction",
        "Full-time commitment available",
        "Willing to operate in Sharjah"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Access Sharjah Challenge",
      description: "For growth-stage startups seeking market access",
      icon: Globe,
      criteria: [
        "Growth-stage startup",
        "Proven solution for specific challenges",
        "Global applicants welcome",
        "Ready for pilot projects"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "SME Support",
      description: "For established businesses seeking innovation",
      icon: Building,
      criteria: [
        "Established SME in Sharjah",
        "Looking to innovate or expand",
        "Open to collaboration",
        "Growth-oriented mindset"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Link to="/" className="flex items-center gap-2 text-sheraa-primary hover:text-sheraa-secondary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to home</span>
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Find Your Perfect Program
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Not sure which program fits your startup stage? Use our AI-powered matcher or explore our program criteria below.
              </p>
              
              <Button 
                onClick={() => setIsDialogOpen(true)}
                size="lg" 
                className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90"
              >
                Start AI Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                          <program.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="space-y-2">
                        {program.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 border-sheraa-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Still Not Sure?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Our program advisors are here to help you choose the right path for your entrepreneurial journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline" size="lg">
                      <Link to="/book-consultation">
                        Book Free Consultation
                      </Link>
                    </Button>
                    <Button asChild size="lg">
                      <Link to="/contact">
                        Contact Our Team
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <EligibilityCheckerDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </MainLayout>
  );
};

export default Eligibility;
