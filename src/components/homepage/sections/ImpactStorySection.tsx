
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ImpactStorySection: React.FC = () => {
  const impactStories = [
    {
      icon: Users,
      number: "180+",
      label: "Startups Launched",
      story: "From bold ideas to market-ready ventures",
      color: "sheraa-primary",
      delay: 0
    },
    {
      icon: DollarSign,
      number: "$248M+",
      label: "Revenue Generated",
      story: "Creating real economic value across the region",
      color: "sheraa-teal",
      delay: 0.2
    },
    {
      icon: Target,
      number: "71%",
      label: "Survival Rate",
      story: "Far above industry average of 20%",
      color: "sheraa-orange",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/30 dark:to-sheraa-teal/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-sheraa-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-sheraa-orange/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sheraa-teal/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 mb-6">
            <Award className="w-5 h-5 text-sheraa-orange" />
            <span className="text-sm font-medium text-sheraa-primary">Our Impact Story</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
            Numbers That Tell Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Behind every statistic is a founder who dared to dream, a startup that solved real problems, 
            and a community that believed in <span className="font-semibold text-sheraa-primary">collective success</span>.
          </p>
        </motion.div>

        {/* Interactive impact showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStories.map((story, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: story.delay, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm rounded-3xl p-8 border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${story.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Floating icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-${story.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <story.icon className={`w-8 h-8 text-${story.color}`} />
                </div>
                
                {/* Animated number */}
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold text-${story.color} mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: story.delay + 0.3, type: "spring", bounce: 0.4 }}
                >
                  {story.number}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {story.label}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {story.story}
                </p>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${story.color} to-${story.color}/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey visualization */}
        <motion.div
          className="bg-gradient-to-r from-sheraa-primary/10 via-white to-sheraa-teal/10 dark:from-sheraa-primary/20 dark:via-sheraa-dark/50 dark:to-sheraa-teal/20 rounded-3xl p-8 md:p-12 border border-sheraa-primary/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              The Journey from Idea to Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every number represents a founder's journey, a community's growth, and Sharjah's rise as a global innovation hub.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sheraa-primary">1,900+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Jobs Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sheraa-teal">52%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Women-Led</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sheraa-orange">18K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Youth Upskilled</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sheraa-primary">140+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Partners</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="group border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 shadow-lg">
            <Link to="/about/impact" className="flex items-center gap-2">
              Read Our Impact Report
              <TrendingUp className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
