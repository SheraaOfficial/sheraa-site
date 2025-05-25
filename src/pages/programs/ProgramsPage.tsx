
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Rocket, Globe, Building2, ArrowRight, 
  Users, Zap, Award, TrendingUp, Network, Star, Handshake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EligibilityCheckerButton from "@/components/eligibility/EligibilityCheckerButton";

const ProgramsPage: React.FC = () => {
  const benefits = [
    {
      title: 'Founder-Focused',
      description: 'We prioritize your needs, offering comprehensive support and flexible engagement models.',
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1
    },
    {
      title: 'Ecosystem Access',
      description: 'Gain access to mentors, investors, corporate partners, and a vibrant community of peers.',
      icon: Network,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      delay: 0.2
    },
    {
      title: 'Stage-Specific Support',
      description: 'Whether student, startup, or SME - we have tailored programs for your journey.',
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50", 
      delay: 0.3
    },
    {
      title: 'Sharjah Advantage',
      description: 'Leverage Sharjah\'s strategic location, business environment, and innovation clusters.',
      icon: Award,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      delay: 0.4
    }
  ];

  const programs = [
    {
      title: "Start Young",
      subtitle: "Student & Youth Programs", 
      description: "Nurturing the next generation of innovators through education and mentorship programs.",
      link: "/programs/start-young",
      icon: GraduationCap,
      stats: "18k+ Youth Upskilled",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      badge: "Student Pathway"
    },
    {
      title: "S3 Incubator", 
      subtitle: "Sharjah Startup Studio",
      description: "Comprehensive support and funding to help startups achieve product-market fit and scale.",
      link: "/programs/s3-incubator",
      icon: Rocket,
      stats: "$30k Pre-seed Funding",
      color: "from-green-500/20 to-green-600/20", 
      iconColor: "text-green-600",
      badge: "Early-Stage"
    },
    {
      title: "Access Sharjah",
      subtitle: "Market Access Challenge",
      description: "Connect global startups with Sharjah's ecosystem through innovation challenges.",
      link: "/programs/access-sharjah-challenge",
      icon: Globe,
      stats: "Direct Market Access",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600", 
      badge: "Growth Stage"
    },
    {
      title: "Deal Dock",
      subtitle: "Investment Platform", 
      description: "Investment readiness and funding opportunities for high-potential startups.",
      link: "/programs/deal-dock",
      icon: Handshake,
      stats: "Investor Network",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-600",
      badge: "Investment Ready"
    },
    {
      title: "SME Support",
      subtitle: "Business Growth",
      description: "Tailored resources and connections for established SMEs seeking growth and innovation.",
      link: "/programs/sme-support", 
      icon: Building2,
      stats: "60k+ SMEs in Sharjah",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600",
      badge: "Established"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sheraa-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Star className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Program Pathways</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Your Entrepreneurial Journey, Empowered by Sheraa
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive pathways for entrepreneurs, providing tailored support from ideation to global scaling. 
              Our programs equip you with the skills, resources, connections, and opportunities needed to build 
              successful and impactful ventures.
            </p>
            
            {/* Eligibility Checker CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <EligibilityCheckerButton 
                variant="gradient"
                size="lg"
                text="Find Your Perfect Program"
              />
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Users className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Why Choose Sheraa Programs?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: benefit.delay }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full border border-gray-100 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-sheraa-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Programs Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Program Pathway</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From early ideation to global scaling, we offer tailored programs to support your venture at every stage.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {programs.map((program, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group"
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm overflow-hidden">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary rounded-t-lg" />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-8">
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <program.icon className={`w-10 h-10 ${program.iconColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl font-bold">{program.title}</h3>
                              <Badge className={`${program.iconColor} bg-white/80 border border-current/20`}>
                                {program.badge}
                              </Badge>
                            </div>
                            <div className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                              {program.stats}
                            </div>
                          </div>
                          <p className="text-base text-sheraa-primary font-medium mb-3">{program.subtitle}</p>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{program.description}</p>
                          
                          <Link 
                            to={program.link}
                            className="inline-flex items-center text-sheraa-primary hover:text-sheraa-secondary font-medium group"
                          >
                            Learn more 
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-3xl p-8 border border-sheraa-primary/10 backdrop-blur-sm mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Join hundreds of entrepreneurs who have transformed their ideas into successful ventures with Sheraa's support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EligibilityCheckerButton 
                  variant="gradient"
                  size="lg"
                  text="Get Program Recommendation"
                />
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Link to="/contact" className="flex items-center gap-2">
                    Speak to Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgramsPage;
