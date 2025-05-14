
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Sparkles } from '@/components/ui/sparkles';

const SEFAttendeeSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-6">Who Should Attend?</h2>
            <p className="text-lg text-gray-600 mb-8">
              SEF'26 offers value for everyone in the entrepreneurial ecosystem, from aspiring founders to 
              seasoned investors looking for the next big opportunity.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Entrepreneurs & Startup Founders",
                  description: "Connect with investors, mentors, and potential customers to grow your business."
                },
                {
                  title: "Investors & VCs",
                  description: "Discover promising startups and innovative solutions across various sectors."
                },
                {
                  title: "Students & Young Talents",
                  description: "Explore entrepreneurship paths and connect with potential employers or co-founders."
                },
                {
                  title: "Corporate Innovators",
                  description: "Find startup partners and stay ahead of disruptive industry trends."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#9b87f5] font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-sheraa-primary">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild variant="default" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/events/sef/who-should-attend">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#F97316]/40" />
            <div className="absolute inset-0 bg-[#1A1F2C]/50" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <Sparkles className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to join SEF'26?</h3>
              </Sparkles>
              <p className="text-white/90 text-center mb-8">
                Secure your spot at the region's largest entrepreneurship gathering.
              </p>
              
              <GradientButton asChild variant="shimmer" size="lg" className="shadow-glow">
                <Link to="/events/sef/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFAttendeeSection;
