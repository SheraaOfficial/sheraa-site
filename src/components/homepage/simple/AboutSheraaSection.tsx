import React from 'react';
import { motion } from 'framer-motion';

const AboutSheraaSection: React.FC = () => {
  const paragraphs = [
    "Sheraa is a global tech ecosystem of startups, investors, corporate trailblazers and future focused government entities. We connect out-of-the-box thinkers with the resources, capital, commercial opportunities, and mentorship they need to bring their visionary ideas to life and unleash their full potential.",
    
    "Whether you're an enterprising founder with a big idea or a flourishing start-up ready to take your next step, Sheraa supports your start-up's growth throughout your entrepreneurial journey. Our programs help you tap into our vast ecosystem with access to subsidized housing, office space, medical insurance, and extensive network of partners.",
    
    "We are impact-makers. We are driven by an unshakable determination to bring to life transformative ideas that will change the world – and we strive to bring together others who share this ambition. Together, we are committed to boosting Sharjah's flourishing technology sector, making the city the region's leading innovation hub.",
    
    "Sheraa is based in the flourishing emirate of Sharjah, in the city's prestigious Sharjah Research Technology and Innovation Park. Sharjah's strategic location makes it a critical business hub connecting investors and founders from the East and West while its business-friendly environment attracts companies across every sector. We hope you'll join us here!"
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSheraaSection;