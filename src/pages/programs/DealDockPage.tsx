
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Calendar, Clock, Users, DollarSign, Target, Award } from 'lucide-react';

const DealDockPage = () => {
  const benefits = [
    "Direct access to POC opportunities with major corporations",
    "Funding support for proof-of-concept development",
    "Partnership facilitation with government entities",
    "Market validation through real customer projects",
    "Potential for long-term strategic partnerships"
  ];

  const timeline = [
    { title: "Applications Open", date: "Quarterly basis" },
    { title: "Challenge Announcement", date: "Month 1" },
    { title: "Solution Submission", date: "Month 2" },
    { title: "POC Development", date: "Month 3-6" },
    { title: "Results & Partnership", date: "Month 6+" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/programs" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-purple-50 text-purple-600 px-4 py-1 rounded-full inline-block mb-4 font-medium text-sm">
              Build Ventures
            </div>
            <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Deal Dock</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Connect with major corporations and government entities through real-world challenges. 
              Get direct access to proof-of-concept opportunities and strategic partnerships that can transform your startup.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                  <div className="font-medium text-gray-900 dark:text-white">3-6 Months</div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Funding</div>
                  <div className="font-medium text-gray-900 dark:text-white">POC Grants</div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Target</div>
                  <div className="font-medium text-gray-900 dark:text-white">Growth-Stage Startups</div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <Target className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Focus</div>
                  <div className="font-medium text-gray-900 dark:text-white">Market Access</div>
                </div>
              </div>
            </div>
            
            <GradientButton asChild size="lg" className="mb-4 w-full sm:w-auto">
              <Link to="/auth">Apply to Deal Dock</Link>
            </GradientButton>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=600&h=400"
                alt="Deal Dock Partnership"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-2xl md:text-3xl font-bold mb-4 text-center">Strategic Partnerships</div>
                <div className="text-center text-white/70 mb-4">Connect with major industry players</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Program Benefits */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">What You'll Gain</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Program Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-500 font-bold">
                        {index + 1}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-8 bottom-0 left-4 w-0.5 -ml-px bg-purple-100 dark:bg-purple-900"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Connect with Industry Leaders?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Deal Dock and get direct access to proof-of-concept opportunities with major corporations and government entities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild size="lg">
              <Link to="/auth">Apply Now</Link>
            </GradientButton>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact?inquiry=deal-dock">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default DealDockPage;
