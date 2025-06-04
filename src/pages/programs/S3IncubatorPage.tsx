
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Rocket, Users, DollarSign, TrendingUp, Clock, Award, 
  CheckCircle, Star, ArrowRight, Calendar, MapPin, 
  Building, Globe, Lightbulb, Target, ChevronDown, 
  User, Briefcase, BookOpen, Heart
} from 'lucide-react';

const S3IncubatorPage: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const keyFeatures = [
    {
      icon: DollarSign,
      title: '$30,000 USD Equity-Free',
      description: 'Pre-seed funding through our unique revenue-sharing model',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: '6-Month Program',
      description: 'Intensive incubation with 25+ hours of personalized mentorship',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '30+ Expert Mentors',
      description: 'Access to our curated network of industry leaders and EIRs',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Direct connections to UAE, GCC, and international markets',
      color: 'text-sheraa-primary'
    }
  ];

  const curriculum = [
    {
      month: 1,
      title: 'Foundation & Validation',
      focus: 'Market Research & Product-Market Fit',
      modules: [
        'Customer Development & Validation',
        'Market Research Methodologies',
        'Competitive Analysis Framework',
        'MVP Development Strategy'
      ]
    },
    {
      month: 2,
      title: 'Business Model Design',
      focus: 'Revenue Streams & Unit Economics',
      modules: [
        'Business Model Canvas',
        'Revenue Stream Optimization',
        'Unit Economics & Pricing',
        'Financial Modeling Fundamentals'
      ]
    },
    {
      month: 3,
      title: 'Product Development',
      focus: 'Build & Iterate',
      modules: [
        'Agile Development Practices',
        'User Experience Design',
        'Product Roadmap Planning',
        'Technical Architecture'
      ]
    },
    {
      month: 4,
      title: 'Go-to-Market Strategy',
      focus: 'Marketing & Sales',
      modules: [
        'Digital Marketing Strategy',
        'Sales Process Development',
        'Channel Partner Strategy',
        'Brand Building & Positioning'
      ]
    },
    {
      month: 5,
      title: 'Scaling Operations',
      focus: 'Team & Operations',
      modules: [
        'Team Building & Hiring',
        'Operational Excellence',
        'Supply Chain Management',
        'Legal & Compliance'
      ]
    },
    {
      month: 6,
      title: 'Investment & Growth',
      focus: 'Fundraising & Expansion',
      modules: [
        'Investment Readiness',
        'Pitch Deck Mastery',
        'Investor Relations',
        'Demo Day Preparation'
      ]
    }
  ];

  const mentors = [
    {
      name: 'Sarah Al Nuaimi',
      title: 'CEO, Sheraa',
      expertise: 'Strategic Leadership, Ecosystem Development',
      image: '/lovable-uploads/sheraa-logo.png',
      bio: 'Leading Sheraa\'s mission to build the UAE\'s premier entrepreneurship ecosystem'
    },
    {
      name: 'Ahmed Hassan',
      title: 'Former VP, Careem',
      expertise: 'Product Management, Scaling Startups',
      image: '/lovable-uploads/sheraa-logo.png',
      bio: 'Scaled Careem from startup to $3.1B acquisition by Uber'
    },
    {
      name: 'Dr. Fatima Al Rashid',
      title: 'Director, ADGM',
      expertise: 'FinTech, Regulatory Strategy',
      image: '/lovable-uploads/sheraa-logo.png',
      bio: 'Leading financial innovation initiatives across the UAE'
    },
    {
      name: 'Omar Kassim',
      title: 'Founder, JadoPado',
      expertise: 'E-commerce, Exit Strategy',
      image: '/lovable-uploads/sheraa-logo.png',
      bio: 'Successfully exited JadoPado to Noon.com, now angel investor'
    }
  ];

  const timeline = [
    { phase: 'Application Review', duration: '2 weeks', description: 'Comprehensive evaluation of application and business potential' },
    { phase: 'Screening Interviews', duration: '1 week', description: 'Initial interviews with founding team and product demo' },
    { phase: 'Deep Dive Assessment', duration: '1 week', description: 'Detailed evaluation of team, market, product, and business model' },
    { phase: 'Final Selection', duration: '1 week', description: 'Investment committee review and final cohort selection' },
    { phase: 'Program Onboarding', duration: '1 week', description: 'Welcome week, mentor matching, and goal setting' }
  ];

  const eligibilityRequirements = [
    'Early-stage startup with market-ready product/service',
    'Demonstrable customer traction and initial revenue',
    'Scalable, tech-enabled business model',
    'Full-time founding team commitment',
    'Willingness to operate primarily from Sharjah/UAE',
    'Open to mentorship and collaborative feedback'
  ];

  const successMetrics = [
    { metric: '85%', label: 'Complete Program Successfully', icon: Award },
    { metric: '$2.5M', label: 'Average Funding Raised Post-Program', icon: TrendingUp },
    { metric: '92%', label: 'Still Operating After 2 Years', icon: Target },
    { metric: '150+', label: 'Jobs Created by Alumni', icon: Users }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5">
        {/* Hero Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-sheraa-primary/10 text-sheraa-primary hover:bg-sheraa-primary/20">
                <Rocket className="w-4 h-4 mr-2" />
                S3 Incubator - Flagship Program
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Sharjah Startup Studio
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                The UAE's first government-backed startup studio operating on a unique revenue-sharing model. 
                Get $30,000 equity-free funding and 6 months of intensive support to scale your startup.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 px-8 py-6 text-lg">
                  <Link to="/programs/s3-incubator/apply">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Apply Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                  <Link to="/contact?type=program-inquiry&program=s3">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Information Session
                  </Link>
                </Button>
              </div>

              {/* Key Features Grid */}
              <div className="grid md:grid-cols-4 gap-6">
                {keyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Card className="border border-gray-200/50 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-6 text-center">
                          <IconComponent className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                          <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Curriculum */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">6-Month Curriculum</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive, milestone-driven program designed to take your startup from validation to scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card 
                    className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                    onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-sheraa-primary text-white">Month {module.month}</Badge>
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedModule === index ? 'rotate-180' : ''}`} />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <p className="text-sheraa-primary font-medium">{module.focus}</p>
                    </CardHeader>
                    {expandedModule === index && (
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {module.modules.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Mentors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Learn from Industry Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get personalized guidance from our curated network of 30+ successful entrepreneurs, 
                industry experts, and Entrepreneurs-in-Residence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-sheraa-primary to-sheraa-teal flex items-center justify-center">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{mentor.name}</h3>
                      <p className="text-sheraa-primary font-medium mb-2">{mentor.title}</p>
                      <Badge variant="outline" className="mb-3 text-xs">{mentor.expertise}</Badge>
                      <p className="text-sm text-gray-600">{mentor.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Proven Impact</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our S3 alumni consistently achieve outstanding results, with high survival rates and significant funding milestones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center"
                  >
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-white/80" />
                    <div className="text-4xl font-bold mb-2">{metric.metric}</div>
                    <div className="text-white/90">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Application Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our selective process ensures we work with the most promising startups ready for rapid growth.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center mb-8 last:mb-0"
                >
                  <div className="w-12 h-12 bg-sheraa-primary text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-6">Eligibility Requirements</h2>
                <p className="text-xl text-gray-600">
                  Make sure your startup meets these criteria before applying.
                </p>
              </motion.div>

              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibilityRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Startup?</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
                Join the next cohort of S3 Incubator and get the funding, mentorship, and network 
                you need to build a category-defining company.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50 px-10 py-6 text-lg">
                  <Link to="/programs/s3-incubator/apply">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Application
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg">
                  <Link to="/contact?type=program-inquiry&program=s3">
                    Questions? Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default S3IncubatorPage;
