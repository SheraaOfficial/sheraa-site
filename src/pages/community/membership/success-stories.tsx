import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Quote, TrendingUp, Users, DollarSign, Award,
  ArrowRight, Star, Zap, Target, Crown, Sparkles, Trophy, ArrowLeft
} from 'lucide-react';

const SuccessStories: React.FC = () => {
  const successStories = [
    {
      id: 1,
      founderName: 'Sarah Al-Zahra',
      founderTitle: 'CEO & Co-founder',
      companyName: 'EduTech Solutions',
      industry: 'EdTech',
      membershipTier: 'Founder',
      storyHighlight: 'From idea to $2M Series A in 18 months',
      quote: "Sheraa's mentorship network was instrumental in helping us navigate the challenges of scaling our EdTech platform. The investor introductions alone saved us months of fundraising.",
      metrics: [
        { label: 'Revenue Growth', value: '500%', icon: TrendingUp },
        { label: 'Team Size', value: '15 → 45', icon: Users },
        { label: 'Funding Raised', value: '$2.1M', icon: DollarSign },
        { label: 'Markets Entered', value: '3 Countries', icon: Target }
      ],
      image: '/api/placeholder/300/300',
      joinedDate: 'March 2022',
      achievements: [
        'Closed Series A funding round',
        'Expanded to 3 new markets',
        'Hired 30+ team members',
        'Won Best EdTech Startup 2023'
      ]
    },
    {
      id: 2,
      founderName: 'Ahmed Hassan',
      founderTitle: 'Founder & CTO',
      companyName: 'GreenTech Innovations',
      industry: 'Sustainability',
      membershipTier: 'Scale',
      storyHighlight: 'Built the region\'s first carbon-neutral logistics platform',
      quote: "The Scale membership gave us access to C-level mentors who helped us think strategically about international expansion. We went from regional to global in under a year.",
      metrics: [
        { label: 'CO2 Reduced', value: '10K Tons', icon: Zap },
        { label: 'Enterprise Clients', value: '50+', icon: Users },
        { label: 'Valuation', value: '$15M', icon: Crown },
        { label: 'Awards Won', value: '5', icon: Award }
      ],
      image: '/api/placeholder/300/300',
      joinedDate: 'January 2021',
      achievements: [
        'Raised $5M Series B',
        'Partnership with major logistics companies',
        'Expanded to 8 countries',
        'Won UAE Sustainability Award'
      ]
    },
    {
      id: 3,
      founderName: 'Fatima Al-Rashid',
      founderTitle: 'Co-founder & CEO',
      companyName: 'HealthFirst',
      industry: 'HealthTech',
      membershipTier: 'Founder',
      storyHighlight: 'Revolutionizing healthcare delivery in underserved communities',
      quote: "Sheraa's community is unmatched. The peer-to-peer learning and collaboration opportunities have been invaluable for our growth and problem-solving approach.",
      metrics: [
        { label: 'Patients Served', value: '100K+', icon: Users },
        { label: 'Healthcare Centers', value: '25', icon: Target },
        { label: 'Monthly Growth', value: '35%', icon: TrendingUp },
        { label: 'Team Members', value: '60', icon: Users }
      ],
      image: '/api/placeholder/300/300',
      joinedDate: 'August 2022',
      achievements: [
        'Secured government partnerships',
        'Launched telemedicine platform',
        'Expanded to rural areas',
        'Featured in Forbes Middle East'
      ]
    }
  ];

  const impactStats = [
    { label: 'Success Stories', value: '150+', description: 'Member companies that achieved major milestones' },
    { label: 'Total Funding', value: '$120M+', description: 'Raised by Sheraa member startups' },
    { label: 'Job Creation', value: '2,500+', description: 'Jobs created by member companies' },
    { label: 'Market Expansion', value: '25+', description: 'Countries entered by members' }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl"
            animate={{ 
              y: [-20, 20, -20],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"
            animate={{ 
              y: [20, -20, 20],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-8">
              <Crown className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Member Success Stories
              </span>
              <Sparkles className="w-4 h-4 text-sheraa-teal" />
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-500 bg-clip-text text-transparent">
                From Ideas to
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sheraa-orange bg-clip-text text-transparent">
                Global Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover how Sheraa members have transformed their startups into industry leaders, 
              raised millions in funding, and created thousands of jobs across the region.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (0.1 * index) }}
                  className="text-center"
                >
                  <Card className="p-6 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
                    <CardContent className="p-0">
                      <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Inspiring Journeys
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real stories from real founders who leveraged Sheraa's ecosystem to achieve extraordinary results.
              </p>
            </motion.div>

            <div className="space-y-16">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Story Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="h-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <Badge className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-0">
                            {story.membershipTier} Member
                          </Badge>
                          <Badge variant="outline" className="border-sheraa-primary/30 text-sheraa-primary">
                            {story.industry}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">{story.companyName}</h3>
                        <p className="text-lg text-sheraa-primary font-semibold mb-4">{story.storyHighlight}</p>
                        
                        <div className="flex items-start gap-4 mb-6">
                          <Quote className="w-6 h-6 text-sheraa-primary flex-shrink-0 mt-1" />
                          <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                            "{story.quote}"
                          </p>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full flex items-center justify-center text-white font-bold">
                            {story.founderName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold">{story.founderName}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{story.founderTitle}</div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h4 className="font-semibold mb-4 text-sheraa-primary">Key Achievements:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {story.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Metrics */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="grid grid-cols-2 gap-4">
                      {story.metrics.map((metric, idx) => {
                        const IconComponent = metric.icon;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                          >
                            <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-lg transition-all duration-300">
                              <CardContent className="p-6 text-center">
                                <IconComponent className="w-8 h-8 mx-auto mb-3 text-sheraa-primary group-hover:scale-110 transition-transform" />
                                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {metric.label}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Badge variant="outline" className="border-sheraa-primary/30 text-sheraa-primary">
                        Member since {story.joinedDate}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="mb-8"
              >
                <Trophy className="w-20 h-20 mx-auto text-yellow-300" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Your Success Story Starts Here
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                Join the ranks of successful entrepreneurs who chose Sheraa as their growth partner. 
                Your breakthrough moment is just one application away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 px-10 py-6 text-lg font-semibold shadow-2xl">
                  <Link to="/community/membership/apply">
                    <Crown className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg backdrop-blur-sm">
                  <Link to="/community/membership">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Membership
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuccessStories;
