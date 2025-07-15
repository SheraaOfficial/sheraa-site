import React from 'react';
import { motion } from 'framer-motion';

const EcosystemPartnersSection: React.FC = () => {
  // Authentic Sheraa partners based on research
  const partners = [
    'Bee\'ah Group', 'Air Arabia', 'Crescent Enterprises', 'Sharjah Media City',
    'Sandooq Al Watan', 'SRTIP', 'Alef Group', 'American University of Sharjah',
    'University of Sharjah', 'Emirates Development Bank', 'Sharjah Chamber of Commerce',
    'Ministry of Climate Change & Environment', 'CE-Ventures', 'Endeavor UAE',
    'Sharjah Sustainable City', 'BEEAH Group'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const partnerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We're more powerful when we{' '}
            <span className="text-primary relative">
              work together
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We're growing our diverse community of partners to accelerate business growth 
            in Sharjah's flourishing tech sector. Together, we're building an ecosystem 
            where innovation thrives.
          </motion.p>
        </motion.div>

        {/* Ecosystem Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Ecosystem Partners", value: "140+" },
            { label: "Mentors & Experts", value: "160+" },
            { label: "Corporate Partners", value: "50+" },
            { label: "Government Entities", value: "15+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={partnerVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full flex items-center justify-center text-center shadow-sm hover:shadow-md">
                <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {partner}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Become a Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our ecosystem and help shape the future of entrepreneurship in Sharjah. 
              Partner with us to access innovation, support emerging talent, and drive regional growth.
            </p>
            <motion.button 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemPartnersSection;