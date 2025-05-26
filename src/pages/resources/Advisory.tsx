
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, MessageSquare, Calendar, Award, 
  Target, TrendingUp, Building, Code, 
  DollarSign, Scale, BookOpen, Heart
} from 'lucide-react';

const Advisory: React.FC = () => {
  const expertiseAreas = [
    { area: "Legal & Compliance", icon: Scale, experts: 5 },
    { area: "Finance & Fundraising", icon: DollarSign, experts: 8 },
    { area: "Marketing & Sales", icon: TrendingUp, experts: 6 },
    { area: "Technology & Product", icon: Code, experts: 7 },
    { area: "HR & Talent", icon: Users, experts: 4 },
    { area: "Operations & Strategy", icon: Building, experts: 6 }
  ];

  const advisors = [
    {
      name: "Sarah Al Mahmoud",
      expertise: "Legal & Corporate Compliance",
      experience: "15+ years",
      specialties: ["UAE Business Law", "Startup Compliance", "IP Protection"],
      image: "/placeholder.svg",
      sessions: "200+"
    },
    {
      name: "Ahmed Hassan", 
      expertise: "Venture Capital & Fundraising",
      experience: "12+ years",
      specialties: ["Series A-C Funding", "Angel Investment", "Financial Modeling"],
      image: "/placeholder.svg",
      sessions: "150+"
    },
    {
      name: "Fatima Al Zahra",
      expertise: "Digital Marketing & Growth",
      experience: "10+ years", 
      specialties: ["Performance Marketing", "Brand Building", "Customer Acquisition"],
      image: "/placeholder.svg",
      sessions: "180+"
    }
  ];

  const benefits = [
    {
      title: "Personalized Solutions",
      description: "Get advice specific to your unique business context and challenges",
      icon: Target
    },
    {
      title: "Actionable Insights", 
      description: "Move beyond theory with practical steps you can implement immediately",
      icon: TrendingUp
    },
    {
      title: "Network Expansion",
      description: "Build relationships with experienced professionals in your industry",
      icon: Users
    },
    {
      title: "Avoid Costly Mistakes",
      description: "Leverage expert knowledge to make informed decisions and save resources",
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
                Expert Guidance<br />When You Need It Most
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Navigate your startup challenges with confidence by tapping into Sheraa's extensive network of mentors and subject matter experts. Get personalized, one-on-one support tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Book Advisory Session
                </Button>
                <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Users className="mr-2 w-4 h-4" />
                  View All Experts
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">30+ Experts Across Key Areas</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Whether you need help with legal complexities, fundraising strategies, marketing plans, or technical development, our experts provide actionable advice through personalized sessions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {expertiseAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <area.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{area.area}</h3>
                      <div className="text-2xl font-bold text-sheraa-primary mb-2">{area.experts}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Expert Advisors</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Advisors */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your On-Demand Advisors</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Connect with seasoned professionals who have been in your shoes and successfully navigated the challenges you're facing.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advisors.map((advisor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-sheraa-dark">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <img 
                          src={advisor.image} 
                          alt={advisor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                      <p className="text-sheraa-primary font-semibold mb-2">{advisor.expertise}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{advisor.experience}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {advisor.specialties.map((specialty, specIdx) => (
                          <Badge key={specIdx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        {advisor.sessions} mentoring sessions completed
                      </div>
                      
                      <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Sheraa Advisory</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-sheraa-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EIR Section */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-12">
                  <BookOpen className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Entrepreneurs-in-Residence (EIRs)</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Startups participating in select programs like the S3 Incubator benefit from regular check-ins and strategic guidance from dedicated Entrepreneurs-in-Residence (EIRs). EIRs provide consistent mentorship and help keep you accountable to your goals.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <h4 className="font-semibold mb-3">How to Access Advisory Services:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Available to startups in Sheraa programs (like S3)</li>
                        <li>• Accessible through Sheraa Membership benefits</li>
                        <li>• Facilitated introductions to relevant experts</li>
                        <li>• Dedicated 1:1 sessions with advisory credits</li>
                      </ul>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold mb-3">What to Expect:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>• 25+ hours of tailored guidance</li>
                        <li>• Bi-weekly check-ins for accountability</li>
                        <li>• Access to 30+ experienced mentors</li>
                        <li>• Industry-specific expertise</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Explore Our Programs
                    </Button>
                    <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                      <Heart className="mr-2 w-4 h-4" />
                      Become a Mentor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Advisory;
