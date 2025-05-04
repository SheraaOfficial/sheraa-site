
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { 
  GraduationCap, Rocket, Globe, Building2, ArrowRight, 
  Users, Zap, Award, TrendingUp, Network 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ProgramsPageProps {
  section?: string;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ section }) => {
  const [activeSection, setActiveSection] = useState<string>(section || 'overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'start-young':
      case 'startup-dojo':
      case 'startup-dojo-plus':
      case 's3-incubator':
      case 'build-ventures':
      case 'access-sharjah-challenge':
      case 'sme-support':
        return null; // These sections have their own routes
      default:
        return <ProgramsOverview />;
    }
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-b from-sheraa-light to-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-sheraa-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-white shadow-sm">
              Program Pathways
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6 tracking-tight">
              Your Entrepreneurial Journey, Empowered by Sheraa
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from ideation to global scaling. 
              Our programs are designed to equip you with the skills, resources, connections, and funding opportunities needed 
              to build a successful and impactful venture in Sharjah and beyond.
            </p>
          </motion.div>
          
          {renderContent()}
        </div>
      </div>
    </MainLayout>
  );
};

// Programs Overview Component that shows all the available programs
const ProgramsOverview: React.FC = () => {
  // Benefits section
  const benefits = [
    {
      title: 'Founder-Focused',
      description: 'We prioritize your needs, offering equity-free support in many programs and flexible engagement models.',
      icon: <Users className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-xl" />,
      delay: 0.1
    },
    {
      title: 'Ecosystem Access',
      description: 'Gain unparalleled access to mentors, investors, corporate partners, government entities, and a vibrant community of peers.',
      icon: <Network className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-xl" />,
      delay: 0.2
    },
    {
      title: 'Stage-Specific Support',
      description: 'Whether you are a student exploring an idea, a startup validating your product, aiming for market expansion, or an established SME seeking innovation, we have a program for you.',
      icon: <Zap className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-xl" />,
      delay: 0.3
    },
    {
      title: 'Sharjah Advantage',
      description: 'Leverage Sharjah\'s strategic location, business-friendly environment, and thriving innovation clusters.',
      icon: <Award className="h-10 w-10 p-2 bg-amber-100 text-amber-600 rounded-xl" />,
      delay: 0.4
    }
  ];

  const pathwayStages = [
    {
      title: "Start Young",
      description: "For aspiring student entrepreneurs and youth",
      badge: "Student Pathway",
      icon: <GraduationCap className="text-blue-600" />,
      programs: [
        {
          name: "Startup Dojo",
          path: "/programs/startup-dojo",
          description: "An intensive 8-week summer incubation program focused on transforming student ideas into viable entrepreneurial solutions.",
          icon: "🚀"
        },
        {
          name: "Startup Dojo+",
          path: "/programs/startup-dojo-plus",
          description: "An intensive accelerator program for top-performing teams emerging from Startup Dojo.",
          icon: "⭐"
        }
      ],
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Grow Smart",
      description: "For ventures with market traction",
      badge: "Early-Stage",
      icon: <Rocket className="text-green-600" />,
      programs: [
        {
          name: "S3 Incubator",
          path: "/programs/s3-incubator",
          description: "Sheraa's flagship incubator providing $30,000 USD equity-free funding and comprehensive support.",
          icon: "💡"
        }
      ],
      color: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      title: "Build Ventures",
      description: "For growth-stage startups globally",
      badge: "Growth Stage",
      icon: <Globe className="text-purple-600" />,
      programs: [
        {
          name: "Access Sharjah Challenge",
          path: "/programs/access-sharjah-challenge",
          description: "A unique global competition for startups to address real-world challenges in Sharjah.",
          icon: "🌍"
        }
      ],
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "SME Support",
      description: "For established businesses seeking growth",
      badge: "Established",
      icon: <Building2 className="text-amber-600" />,
      programs: [
        {
          name: "SME Support",
          path: "/programs/sme-support",
          description: "Tailored resources for established Small and Medium Enterprises operating in Sharjah.",
          icon: "📈"
        }
      ],
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      textColor: "text-amber-600"
    }
  ];

  return (
    <>
      {/* Benefits Cards */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Sheraa Programs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-sheraa-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Pathway */}
      <section className="mb-20">
        <AnimatedGroup className="mb-10 text-center">
          <motion.h2 
            variants={{
              item: { opacity: 0, y: 20 },
              itemAnimate: { opacity: 1, y: 0 }
            }}
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            Our Program Pathway
          </motion.h2>
          <motion.p 
            variants={{
              item: { opacity: 0, y: 20 },
              itemAnimate: { opacity: 1, y: 0 }
            }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            From early ideation to global scaling, we offer tailored programs to support your venture at every stage.
          </motion.p>
        </AnimatedGroup>

        <div className="space-y-12 relative">
          {/* Connecting line between program stages */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sheraa-primary to-sheraa-secondary/30 hidden lg:block"></div>

          {pathwayStages.map((stage, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="relative lg:grid lg:grid-cols-8 gap-6 items-center">
                {/* Stage header - for mobile only */}
                <div className="lg:hidden mb-4">
                  <Badge className={`mb-2 ${stage.textColor} bg-white/80 border ${stage.borderColor}`}>{stage.badge}</Badge>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${stage.iconBg} ${stage.textColor}`}>
                      {stage.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${stage.textColor}`}>{stage.title}</h3>
                  </div>
                  <p className="text-gray-600">{stage.description}</p>
                </div>
                
                {/* Stage header - desktop version */}
                <div className="hidden lg:flex lg:col-span-2 flex-col items-end">
                  <Badge className={`mb-2 ${stage.textColor} bg-white/80 border ${stage.borderColor}`}>{stage.badge}</Badge>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-2xl font-bold ${stage.textColor}`}>{stage.title}</h3>
                    <div className={`p-2 rounded-lg ${stage.iconBg} ${stage.textColor} relative z-10`}>
                      {stage.icon}
                    </div>
                  </div>
                  <p className="text-gray-600 text-right">{stage.description}</p>
                </div>
                
                {/* Center connector - desktop only */}
                <div className="hidden lg:flex lg:col-span-1 justify-center relative">
                  <div className={`w-6 h-6 rounded-full ${stage.textColor} bg-white border-4 ${stage.borderColor} relative z-10`}></div>
                </div>
                
                {/* Programs */}
                <div className="lg:col-span-5">
                  <div className={`grid grid-cols-1 md:grid-cols-${stage.programs.length} gap-6`}>
                    {stage.programs.map((program, progIdx) => (
                      <Card key={progIdx} className={`${stage.color} border-0 hover:shadow-lg transition-all duration-300 overflow-hidden group`}>
                        <CardContent className="p-6 relative">
                          <div className={`absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary`}></div>
                          <div className="text-3xl mb-4">{program.icon}</div>
                          <h4 className="text-xl font-semibold mb-2">{program.name}</h4>
                          <p className="text-gray-600 mb-4">{program.description}</p>
                          <Button asChild variant="outline" className={`w-full group-hover:bg-white/50 transition-all ${stage.textColor} border-${stage.textColor.split('-')[1]}-300`}>
                            <Link to={program.path} className="flex justify-between items-center">
                              <span>Learn More</span>
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <motion.section 
        className="mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-100">
          <AccordionItem value="item-1" className="border-b border-gray-100">
            <AccordionTrigger className="px-6 hover:no-underline hover:text-sheraa-primary">
              How do I know which program is right for me?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Our programs are tailored to different stages of entrepreneurship. Students and first-time entrepreneurs should explore our Start Young programs, early-stage startups with some traction should consider S3 Incubator, growth-stage startups looking for market access should apply for Access Sharjah Challenge, and established SMEs can benefit from our SME Support initiatives. If you're still unsure, take our eligibility checker to get personalized recommendations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-100">
            <AccordionTrigger className="px-6 hover:no-underline hover:text-sheraa-primary">
              Do I need to be based in Sharjah to participate?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              While some of our programs require a Sharjah presence, others are open to entrepreneurs from anywhere. The Access Sharjah Challenge, for example, welcomes applications from global startups. Each program has specific eligibility criteria which are clearly outlined on their respective pages.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-100">
            <AccordionTrigger className="px-6 hover:no-underline hover:text-sheraa-primary">
              What kind of funding do Sheraa programs provide?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Our S3 Incubator provides $30,000 USD in equity-free funding, while the Access Sharjah Challenge offers substantial POC grants to implement solutions with partner organizations. Different programs have different funding structures, but our emphasis is always on non-dilutive support that allows founders to maintain ownership while growing their ventures.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center max-w-3xl mx-auto py-12 px-6 bg-gradient-to-br from-sheraa-light to-white rounded-2xl border border-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-600 mb-8">Find the right program for your stage and goals. Take our quick eligibility checker to get personalized recommendations.</p>
        <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-md">
          <Link to="/eligibility" className="flex items-center gap-2">
            <span>Check Your Eligibility</span>
            <TrendingUp className="w-5 h-5" />
          </Link>
        </Button>
      </motion.section>
    </>
  );
};

export default ProgramsPage;
