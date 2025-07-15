import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, MapPin } from 'lucide-react';

const ChangemakersAboutSection: React.FC = () => {
  const paragraphs = [
    {
      icon: Lightbulb,
      text: "Sheraa is a global tech ecosystem of startups, investors, corporate trailblazers and future focused government entities. We connect out-of-the-box thinkers with the resources, capital, commercial opportunities, and mentorship they need to bring their visionary ideas to life and unleash their full potential."
    },
    {
      icon: Users,
      text: "Whether you're an enterprising founder with a big idea or a flourishing start-up ready to take your next step, Sheraa supports your start-up's growth throughout your entrepreneurial journey. Our programs help you tap into our vast ecosystem with access to subsidized housing, office space, medical insurance, and extensive network of partners."
    },
    {
      icon: Target,
      text: "We are impact-makers. We are driven by an unshakable determination to bring to life transformative ideas that will change the world – and we strive to bring together others who share this ambition. Together, we are committed to boosting Sharjah's flourishing technology sector, making the city the region's leading innovation hub."
    },
    {
      icon: MapPin,
      text: "Sheraa is based in the flourishing emirate of Sharjah, in the city's prestigious Sharjah Research Technology and Innovation Park. Sharjah's strategic location makes it a critical business hub connecting investors and founders from the East and West while its business-friendly environment attracts companies across every sector. We hope you'll join us here!"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Building a community of{' '}
            <span className="text-primary relative">
              changemakers
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover what drives us and how we're shaping the future of entrepreneurship in Sharjah and beyond.
          </motion.p>
        </motion.div>

        {/* Paragraphs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              variants={paragraphVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <paragraph.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.p 
                      className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                    >
                      {paragraph.text}
                    </motion.p>
                  </div>
                </div>

                {/* Progress indicator */}
                <motion.div
                  className="w-0 h-1 bg-primary rounded-full mt-6 group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to be part of something bigger?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our community of changemakers and transform your innovative ideas into impactful businesses. 
              The future starts with you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
              
              <motion.button 
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChangemakersAboutSection;