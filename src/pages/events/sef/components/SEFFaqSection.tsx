
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEFFaqSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about the Sharjah Entrepreneurship Festival.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "When and where is SEF'26 taking place?",
              answer: "SEF'26 will take place on January 31 - February 1, 2026, at the Sharjah Research, Technology, and Innovation Park (SRTIP) in Sharjah, UAE."
            },
            {
              question: "How can I register for the event?",
              answer: "You can register for SEF'26 through our online registration platform. Early bird tickets will be available until October 2025."
            },
            {
              question: "Are there opportunities to pitch my startup at SEF?",
              answer: "Yes! SEF'26 features a dedicated Pitch Competition where startups can showcase their ventures and compete for significant funding. Applications will open in November 2025."
            },
            {
              question: "What is the dress code for SEF'26?",
              answer: "The dress code is smart-casual. We recommend comfortable attire as the festival involves moving between different venues and activities throughout the day."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="p-5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-lg text-sheraa-primary mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
              <Link to="/events/sef/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEFFaqSection;
