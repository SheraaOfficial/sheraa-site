
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import StartupCard from '@/components/startups/StartupCard';
import { featuredStartups } from '@/components/startups/startupsData';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, Building } from 'lucide-react';

const StartupDirectory: React.FC = () => {
  const isMobile = useIsMobile();
  
  const sectors = [
    "All Sectors", "Sustainability", "EdTech", "HealthTech", "AgriTech", 
    "FinTech", "Creative Industries", "Advanced Manufacturing", "Food & Beverage"
  ];

  const programs = [
    "All Programs", "S3 Incubator", "Access Sharjah Challenge", "Startup Dojo", "Community Member"
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
                Innovation in Action<br />The Sheraa Startup Portfolio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Sheraa is proud to support a dynamic and diverse portfolio of over 180 startups. These ventures are tackling challenges, creating jobs, generating significant revenue, and attracting substantial investment.
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search startups by name or keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sheraa-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filter
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Sections */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Sector:</span>
                {sectors.map((sector, idx) => (
                  <Badge 
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1 text-xs ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                  >
                    {sector}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Program:</span>
                {programs.map((program, idx) => (
                  <Badge 
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1 text-xs ${idx === 0 ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' : 'hover:bg-sheraa-primary/10'}`}
                  >
                    {program}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Startup Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredStartups.map((startup, index) => (
                  <StartupCard 
                    key={startup.id}
                    startup={startup} 
                    index={index} 
                    isMobile={isMobile} 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <Building className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Portfolio Impact</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  {[
                    { metric: "180+", label: "Startups Supported" },
                    { metric: "$248M+", label: "Revenue Generated" },
                    { metric: "$171M+", label: "Capital Raised" },
                    { metric: "71%", label: "Survival Rate" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-sheraa-primary mb-2">{stat.metric}</div>
                      <div className="text-sm font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This showcase serves as a testament to the talent within our ecosystem and a vital resource for potential investors and partners seeking collaboration opportunities. These figures demonstrate the scale and effectiveness of Sheraa's programs and the significant economic contribution of its supported ventures.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StartupDirectory;
