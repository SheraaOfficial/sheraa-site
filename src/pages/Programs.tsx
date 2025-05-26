
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Rocket, Globe, Building, ArrowRight, 
  Target, Users, Lightbulb, Award
} from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Start Young",
      subtitle: "Startup Dojo & Dojo+",
      description: "Turn ideas into action. For aspiring student entrepreneurs.",
      icon: GraduationCap,
      color: "text-blue-600 bg-blue-50",
      link: "/programs/startup-dojo"
    },
    {
      title: "Grow Smart",
      subtitle: "S3 Incubator",
      description: "Scale your tech-enabled startup. For ventures with market traction.",
      icon: Rocket,
      color: "text-green-600 bg-green-50",
      link: "/programs/s3-incubator"
    },
    {
      title: "Build Ventures",
      subtitle: "Access Sharjah Challenge",
      description: "Solve industry challenges, win POCs. For growth-stage startups globally.",
      icon: Globe,
      color: "text-purple-600 bg-purple-50",
      link: "/programs/access-sharjah-challenge"
    },
    {
      title: "SME Support",
      subtitle: "Business Growth",
      description: "Innovate and expand your established business. For Sharjah-based SMEs.",
      icon: Building,
      color: "text-orange-600 bg-orange-50",
      link: "/programs/sme-support"
    }
  ];

  const benefits = [
    {
      title: "Founder-Focused",
      description: "We prioritize your needs, offering equity-free support and flexible engagement models.",
      icon: Target
    },
    {
      title: "Ecosystem Access",
      description: "Gain access to mentors, investors, corporate partners, and a vibrant community.",
      icon: Users
    },
    {
      title: "Stage-Specific Support",
      description: "Whether you're exploring an idea or scaling globally, we have a program for you.",
      icon: Lightbulb
    },
    {
      title: "Sharjah Advantage",
      description: "Leverage Sharjah's strategic location, business-friendly environment, and innovation clusters.",
      icon: Award
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
                Your Entrepreneurial Journey,<br />Empowered by Sheraa
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from ideation to global scaling. Our programs are designed to equip you with the skills, resources, connections, and funding opportunities needed to build a successful and impactful venture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Sheraa */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Sheraa Programs?</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <benefit.icon className="w-12 h-12 text-sheraa-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Program Pathway</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From idea to scale, we support entrepreneurs at every stage of their journey.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <program.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <p className="text-sheraa-primary font-semibold mb-4">{program.subtitle}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                      <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                        <Link to={program.link} className="flex items-center gap-2">
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

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of entrepreneurs who have transformed their ideas into successful ventures with Sheraa's support.
            </p>
            <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50">
              <Link to="/community/join" className="flex items-center gap-2">
                Apply to a Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default Programs;
