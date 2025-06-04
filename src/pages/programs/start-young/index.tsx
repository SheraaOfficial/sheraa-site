
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  School, Users, Calendar, Award, 
  TrendingUp, Rocket, Clock, User, Quote,
  CheckCircle, ArrowRight
} from 'lucide-react';
import {
  HeroSection,
  StatsSection,
  ProcessSteps,
  TestimonialSection,
  type StatItem,
  type ProcessStep,
  type Testimonial
} from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

const StartYoungPage: React.FC = () => {
  const programStats: StatItem[] = [
    { icon: Users, number: '500+', label: 'Students Graduated', color: 'text-blue-600' },
    { icon: Award, number: '81%', label: 'Emirati Participation', color: 'text-green-600' },
    { icon: TrendingUp, number: 'AED 2M+', label: 'Student Funding Raised', color: 'text-purple-600' },
    { icon: Rocket, number: '45+', label: 'Startups Launched', color: 'text-orange-600' }
  ];

  const pathwaySteps: ProcessStep[] = [
    {
      step: 1,
      title: 'Startup Dojo',
      duration: '8 weeks',
      description: 'Summer intensive program for university students',
      details: ['Business validation', 'MVP development', 'Pitch skills']
    },
    {
      step: 2,
      title: 'Startup Dojo+',
      duration: '4 weeks',
      description: 'Accelerator phase for top performers',
      details: ['Refined business model', 'Market validation', 'Funding readiness']
    },
    {
      step: 3,
      title: 'S3 Incubator',
      duration: '6 months',
      description: 'Full incubation with equity-free funding',
      details: ['AED 30K funding', 'Market traction', 'Investment readiness']
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Fatima Al-Zahra',
      program: 'Startup Dojo 2023',
      startup: 'EcoLearn',
      achievement: 'Raised AED 200K seed funding',
      quote: 'Startup Dojo transformed my environmental education idea into a funded startup. The mentorship was incredible and the network opened doors I never imagined.'
    },
    {
      name: 'Mohammed Bin Rashid',
      program: 'Startup Dojo+ 2023',
      startup: 'HealthTech Solutions',
      achievement: 'Accepted into S3 Incubator',
      quote: 'The intensive 4-week Dojo+ program prepared me perfectly for the next level. Now we\'re scaling with S3 and targeting regional expansion.'
    },
    {
      name: 'Aisha Rahman',
      program: 'Startup Dojo 2022',
      startup: 'AgriSmart',
      achievement: 'Partnership with 15 farms',
      quote: 'From university student to agritech entrepreneur in 8 weeks. The program taught me everything from customer discovery to fundraising.'
    }
  ];

  const curriculum = [
    {
      week: 'Weeks 1-2',
      title: 'Ideation & Validation',
      description: 'Transform raw ideas into viable business concepts',
      topics: ['Design Thinking', 'Market Research', 'Customer Discovery', 'Problem-Solution Fit'],
      deliverable: 'Validated Business Concept'
    },
    {
      week: 'Weeks 3-4',
      title: 'Business Model Design',
      description: 'Build sustainable and scalable business models',
      topics: ['Business Model Canvas', 'Revenue Streams', 'Cost Structure', 'Value Propositions'],
      deliverable: 'Complete Business Model'
    },
    {
      week: 'Weeks 5-6',
      title: 'Product Development',
      description: 'Create and test minimum viable products',
      topics: ['MVP Development', 'User Testing', 'Product Iteration', 'Technical Planning'],
      deliverable: 'Working MVP'
    },
    {
      week: 'Weeks 7-8',
      title: 'Go-to-Market & Pitching',
      description: 'Launch strategies and investor presentations',
      topics: ['Marketing Strategy', 'Sales Channels', 'Pitch Deck Creation', 'Financial Projections'],
      deliverable: 'Final Pitch & Launch Plan'
    }
  ];

  const mentors = [
    {
      name: 'Dr. Sarah Al-Mansoori',
      role: 'Serial Entrepreneur',
      expertise: 'EdTech & FinTech',
      experience: '15+ years, 3 successful exits',
      bio: 'Former CEO of regional EdTech unicorn, now angel investor and startup mentor.'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Product Leader',
      expertise: 'Product Management',
      experience: 'Ex-Careem, Ex-Noon',
      bio: 'Led product teams at major regional tech companies, expert in scaling products.'
    },
    {
      name: 'Layla Khalil',
      role: 'Marketing Director',
      expertise: 'Digital Marketing',
      experience: '12+ years in growth',
      bio: 'Growth marketing expert who has scaled startups from 0 to millions of users.'
    },
    {
      name: 'Omar Al-Rashid',
      role: 'Tech Entrepreneur',
      expertise: 'Deep Tech & AI',
      experience: 'PhD in AI, 2 tech startups',
      bio: 'AI researcher turned entrepreneur, specializes in deep tech commercialization.'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        {/* Hero Section */}
        <HeroSection
          badge={{
            text: 'Start Young Initiative',
            icon: School,
            gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
          }}
          title="Turn Ideas Into Action"
          subtitle="Nurturing the next generation of innovators through hands-on entrepreneurship education and real-world startup experience for university students across the UAE."
          actions={[
            {
              label: 'Apply for Startup Dojo',
              href: '/programs/startup-dojo/apply',
              icon: Rocket
            },
            {
              label: 'Learn More',
              href: '/contact?type=start-young',
              variant: 'outline'
            }
          ]}
          backgroundVariant="gradient"
        />

        {/* Stats Section */}
        <StatsSection
          title="Impact That Speaks Volumes"
          subtitle="Our commitment to youth entrepreneurship translates into tangible results across the UAE."
          stats={programStats}
          columns={4}
          variant="gradient"
        />

        {/* Program Pathway */}
        <ProcessSteps
          title="Your Entrepreneurial Journey"
          subtitle="A structured pathway from student to successful entrepreneur, with support at every stage."
          steps={pathwaySteps}
          variant="vertical"
          showConnectors={true}
        />

        {/* Detailed Program Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="curriculum" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">8-Week Curriculum</TabsTrigger>
                <TabsTrigger value="mentors">Expert Mentors</TabsTrigger>
                <TabsTrigger value="testimonials">Success Stories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curriculum" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Startup Dojo Curriculum</h3>
                    <p className="text-xl text-gray-600">
                      Intensive 8-week program designed to take you from idea to market-ready startup
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    {curriculum.map((module, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <Badge className="mb-2 bg-blue-100 text-blue-800">{module.week}</Badge>
                              <h4 className="text-xl font-bold mb-2">{module.title}</h4>
                              <p className="text-gray-600">{module.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-green-600">Deliverable</div>
                              <div className="text-sm text-gray-600">{module.deliverable}</div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.map((topic, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mentors" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">Learn from the Best</h3>
                    <p className="text-xl text-gray-600">
                      Industry veterans and successful entrepreneurs guide your journey
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {mentors.map((mentor, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold mb-1">{mentor.name}</h4>
                              <div className="text-blue-600 font-medium mb-2">{mentor.role}</div>
                              <div className="flex gap-4 text-sm text-gray-600 mb-3">
                                <span><strong>Focus:</strong> {mentor.expertise}</span>
                                <span><strong>Experience:</strong> {mentor.experience}</span>
                              </div>
                              <p className="text-sm text-gray-600">{mentor.bio}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="testimonials" className="mt-8">
                <TestimonialSection
                  title="Student Success Stories"
                  subtitle="Real students, real startups, real impact"
                  testimonials={testimonials}
                  variant="carousel"
                  backgroundVariant="gradient"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Join hundreds of students who have transformed their ideas into successful startups.
              Applications for Summer 2025 cohort open in March.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-6 text-lg">
                <Link to="/programs/startup-dojo/apply">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Apply Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg">
                <Link to="/contact?type=start-young">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StartYoungPage;
