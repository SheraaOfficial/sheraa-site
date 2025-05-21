
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Laptop, TrendingUp, Users, Calendar, Zap, Heart, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DealDock: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-sheraa-primary/5 to-white dark:from-sheraa-primary/20 dark:to-gray-900 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-r from-sheraa-primary/10 to-purple-400/10 rounded-full filter blur-3xl opacity-60" />
          <div className="absolute left-1/4 bottom-1/3 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-purple-400/10 rounded-full filter blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-sheraa-primary/10 dark:bg-sheraa-primary/20 text-sheraa-primary font-medium text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                For Startups Seeking Investment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sheraa-dark dark:text-white">
                Deal Dock
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Access a curated network of investors, strategic advice, and personalized support to secure the funding you need to scale your startup.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/eligibility">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/programs">Explore All Programs</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-sheraa-primary/10 rounded-full filter blur-3xl" />
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-sheraa-primary">Deal Dock</h3>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm font-medium rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-sheraa-primary" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Applications</p>
                        <p className="font-medium dark:text-white">Open Year-Round</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-sheraa-primary" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">For</p>
                        <p className="font-medium dark:text-white">Pre-Series A Startups</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Laptop className="w-5 h-5 text-sheraa-primary" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Format</p>
                        <p className="font-medium dark:text-white">Investment Readiness & Matchmaking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark dark:text-white">
              What Deal Dock Offers
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A comprehensive program designed to bridge the gap between promising startups and strategic investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-sheraa-primary" />,
                title: "Investor Network",
                description: "Access to Sheraa's extensive network of VCs, angel investors, and strategic corporate partners actively seeking opportunities."
              },
              {
                icon: <BarChart className="w-10 h-10 text-sheraa-primary" />,
                title: "Investment Readiness",
                description: "Expert guidance to refine your pitch, financial models, and business strategy to maximize appeal to investors."
              },
              {
                icon: <Heart className="w-10 h-10 text-sheraa-primary" />,
                title: "Personalized Matching",
                description: "Custom matching with investors whose portfolios and investment theses align with your startup's vision and sector."
              },
              {
                icon: <Calendar className="w-10 h-10 text-sheraa-primary" />,
                title: "Investor Showcases",
                description: "Regular opportunities to present to curated groups of investors through exclusive pitch events."
              },
              {
                icon: <Zap className="w-10 h-10 text-sheraa-primary" />,
                title: "Due Diligence Support",
                description: "Assistance navigating due diligence processes, term sheets, and investment documentation."
              },
              {
                icon: <Laptop className="w-10 h-10 text-sheraa-primary" />,
                title: "Post-Investment Growth",
                description: "Continued support to help you leverage new capital effectively for sustainable growth."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-sheraa-primary/10 dark:bg-sheraa-primary/20 p-3 rounded-xl inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-sheraa-dark dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Application Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sheraa-dark dark:text-white">
                Who Should Apply
              </h2>
              <div className="space-y-5">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-sheraa-dark dark:text-white">Ideal Candidates</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-0.5">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Pre-Series A startups with demonstrated product-market fit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-0.5">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Revenue-generating businesses seeking capital to scale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-0.5">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Startups with scalable business models and clear growth plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-0.5">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Tech-enabled ventures with innovative solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-sheraa-dark dark:text-white">Investment Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {["EdTech", "HealthTech", "FinTech", "SaaS", "E-commerce", "Sustainability", "AI & Deep Tech", "Creative Industries"].map((area, index) => (
                      <span key={index} className="px-3 py-1.5 bg-sheraa-primary/10 dark:bg-sheraa-primary/20 text-sheraa-primary text-sm font-medium rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-sheraa-dark dark:text-white">How to Apply</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Submit Application",
                      description: "Complete our online application detailing your startup, traction, and funding needs."
                    },
                    {
                      step: "02",
                      title: "Screening & Evaluation",
                      description: "Our team reviews applications to assess investment readiness and alignment with program criteria."
                    },
                    {
                      step: "03",
                      title: "Preparation Phase",
                      description: "Selected startups work with mentors to refine pitches and prepare investment materials."
                    },
                    {
                      step: "04",
                      title: "Investor Matching",
                      description: "We facilitate introductions to relevant investors from our network based on mutual fit."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-sheraa-primary/10 dark:bg-sheraa-primary/20 rounded-full flex items-center justify-center text-sheraa-primary font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-sheraa-dark dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to="/eligibility">Apply to Deal Dock</Link>
                  </Button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Applications are reviewed on a rolling basis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-sheraa-primary/10 dark:bg-sheraa-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sheraa-dark dark:text-white">
              Ready to Secure Investment for Your Startup?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Join Deal Dock and connect with investors who believe in your vision. Our experienced team will guide you through every step of the investment journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/eligibility">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DealDock;
