
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Clock, Star, ArrowRight } from 'lucide-react';

const AdvisoryPage: React.FC = () => {
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
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Navigate your startup challenges with confidence by tapping into Sheraa's extensive network of mentors and subject matter experts.
              </p>
              
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/insights" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Back to Insights
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Advisory Services Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your On-Demand Advisors</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Gain access to over 30+ seasoned professionals covering a wide range of critical business areas. Whether you need help with legal complexities, fundraising strategies, marketing plans, or technical development, our experts provide actionable advice through personalized sessions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "30+ Experts", desc: "Experienced professionals" },
                    { icon: Clock, title: "1:1 Sessions", desc: "Personalized guidance" },
                    { icon: MessageCircle, title: "Real-time Support", desc: "Quick responses" },
                    { icon: Star, title: "Proven Results", desc: "Track record of success" }
                  ].map((item, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <item.icon className="w-8 h-8 text-sheraa-primary mx-auto mb-4" />
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                  <div className="space-y-4">
                    {[
                      "Legal & Compliance",
                      "Finance & Fundraising", 
                      "Marketing & Sales",
                      "Technology & Product",
                      "HR & Talent Acquisition",
                      "Operations & Strategy",
                      "Sector-Specific Guidance"
                    ].map((area, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AdvisoryPage;
