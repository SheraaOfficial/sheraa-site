
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Your Entrepreneurial Journey, Empowered by Sheraa</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from ideation to global scaling. 
            Our programs are designed to equip you with the skills, resources, connections, and funding opportunities needed 
            to build a successful and impactful venture in Sharjah and beyond.
          </p>
        </div>
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

// Programs Overview Component that shows all the available programs
const ProgramsOverview: React.FC = () => {
  const pathwayStages = [
    {
      title: "Start Young",
      description: "For aspiring student entrepreneurs and youth",
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
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
      textColor: "text-blue-600"
    },
    {
      title: "Grow Smart",
      description: "For ventures with market traction",
      programs: [
        {
          name: "S3 Incubator",
          path: "/programs/s3-incubator",
          description: "Sheraa's flagship incubator providing $30,000 USD equity-free funding and comprehensive support.",
          icon: "💡"
        }
      ],
      color: "bg-gradient-to-r from-green-500 to-emerald-400",
      textColor: "text-green-600"
    },
    {
      title: "Build Ventures",
      description: "For growth-stage startups globally",
      programs: [
        {
          name: "Access Sharjah Challenge",
          path: "/programs/access-sharjah-challenge",
          description: "A unique global competition for startups to address real-world challenges in Sharjah.",
          icon: "🌍"
        }
      ],
      color: "bg-gradient-to-r from-purple-500 to-violet-400",
      textColor: "text-purple-600"
    },
    {
      title: "SME Support",
      description: "For established businesses seeking growth",
      programs: [
        {
          name: "SME Support",
          path: "/programs/sme-support",
          description: "Tailored resources for established Small and Medium Enterprises operating in Sharjah.",
          icon: "📈"
        }
      ],
      color: "bg-gradient-to-r from-orange-500 to-amber-400",
      textColor: "text-orange-600"
    }
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-12">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Sheraa Programs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Founder-Focused', description: 'We prioritize your needs, offering equity-free support in many programs and flexible engagement models.' },
            { title: 'Ecosystem Access', description: 'Gain unparalleled access to mentors, investors, corporate partners, government entities, and a vibrant community of peers.' },
            { title: 'Stage-Specific Support', description: 'Whether you're a student exploring an idea, a startup validating your product, aiming for market expansion, or an established SME seeking innovation, we have a program for you.' },
            { title: 'Sharjah Advantage', description: 'Leverage Sharjah's strategic location, business-friendly environment, and thriving innovation clusters.' }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-sheraa-primary">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Program Pathway</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-16"
      >
        {pathwayStages.map((stage, idx) => (
          <motion.div key={idx} variants={itemVariants} className="group">
            <div className={`w-full h-2 ${stage.color} rounded-full mb-4`}></div>
            <h3 className={`text-2xl font-bold mb-2 ${stage.textColor} group-hover:scale-105 transition-transform`}>{stage.title}</h3>
            <p className="text-gray-600 mb-6">{stage.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stage.programs.map((program, progIdx) => (
                <Card key={progIdx} className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                  <div className="p-6">
                    <div className="text-3xl mb-4">{program.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{program.name}</h4>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button asChild variant="outline" className="w-full mt-2">
                      <Link to={program.path} className="flex justify-between items-center">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
        <p className="text-gray-600 mb-6">Find the right program for your stage and goals.</p>
        <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
          <Link to="/eligibility">Check Your Eligibility</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProgramsPage;
