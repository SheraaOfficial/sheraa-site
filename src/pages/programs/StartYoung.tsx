
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Users, Trophy, Lightbulb, 
  ArrowRight, Calendar, MapPin, Star,
  Target, Rocket, Award, BookOpen
} from 'lucide-react';

const StartYoung: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const programs = [
    {
      title: "Startup Dojo",
      duration: "8 Weeks",
      type: "Summer Incubation",
      description: "An intensive summer incubation program focused on transforming student ideas into viable entrepreneurial solutions.",
      features: [
        "Real-world business experience",
        "Hands-on training & mentorship",
        "Idea validation & development",
        "Team building & pitching",
        "Potential grants for top teams"
      ],
      eligibility: "University students and recent graduates from across the UAE",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Startup Dojo+",
      duration: "4 Weeks",
      type: "Accelerator Phase",
      description: "An intensive accelerator program for top-performing teams from Startup Dojo or similar initiatives.",
      features: [
        "Bespoke mentorship & guidance",
        "Business model refinement",
        "Market validation support",
        "Financial planning assistance",
        "Fast-track to S3 Incubator"
      ],
      eligibility: "High-potential student/alumni startups from Sheraa programs",
      icon: Rocket,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Early Foundation",
      description: "Build entrepreneurial skills and mindsets from university level"
    },
    {
      icon: Users,
      title: "Peer Network",
      description: "Connect with like-minded students and young entrepreneurs"
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Showcase opportunities and potential funding for top performers"
    },
    {
      icon: BookOpen,
      title: "Learning Path",
      description: "Clear progression to advanced Sheraa programs like S3"
    }
  ];

  const stats = [
    { number: "81%", label: "Emirati Youth Participation" },
    { number: "100+", label: "Students Trained Annually" },
    { number: "15+", label: "Universities Represented" },
    { number: "90%", label: "Program Completion Rate" }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={floatVariants}
                animate="animate"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.div variants={itemVariants}>
                <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold">
                  Youth Entrepreneurship Programs
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
              >
                Start Young<br />Shape Tomorrow
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Ignite your entrepreneurial potential with Sheraa's youth programs. From idea to execution, we nurture the next generation of innovators and changemakers.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                    Apply for Programs
                    <Star className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-blue-500/30 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-6 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-lg"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-blue-600 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Youth Programs</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive pathways designed to take student entrepreneurs from idea validation to market-ready ventures.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {programs.map((program, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-sheraa-dark dark:to-gray-900">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold">{program.title}</h3>
                          <Badge variant="outline" className="text-xs">{program.duration}</Badge>
                        </div>
                        
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{program.type}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{program.description}</p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {program.features.map((feature, featureIdx) => (
                                <li key={featureIdx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                  <Star className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Eligibility:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{program.eligibility}</p>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Start Young?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Nurturing entrepreneurial skills early creates a pipeline of future innovators and leaders, fostering a culture of innovation from the ground up.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 text-center bg-white dark:bg-sheraa-dark">
                      <CardContent className="p-8">
                        <motion.div 
                          className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <benefit.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Join hundreds of young entrepreneurs who have transformed their ideas into successful ventures. Your journey starts here, and the future starts now.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Calendar className="mr-2 w-5 h-5" />
                  Apply Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Users className="mr-2 w-5 h-5" />
                  Join Community
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default StartYoung;
