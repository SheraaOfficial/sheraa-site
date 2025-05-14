
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When and where is SEF'26 taking place?",
    answer: "SEF'26 will take place on January 31 - February 1, 2026, at the Sharjah Research, Technology, and Innovation Park (SRTIP) in Sharjah, UAE."
  },
  {
    question: "How can I register for the event?",
    answer: "You can register for SEF'26 through our online registration platform. We offer different ticket types including General Admission, VIP, and Student tickets. Early bird tickets will be available until October 2025."
  },
  {
    question: "Are there opportunities to pitch my startup at SEF?",
    answer: "Yes! SEF'26 features a dedicated Pitch Competition where startups can showcase their ventures and compete for significant funding. Applications will open in November 2025. Follow our social media channels for announcements."
  },
  {
    question: "What is the dress code for SEF'26?",
    answer: "The dress code is smart-casual. We recommend comfortable attire as the festival involves moving between different venues and activities throughout the day."
  },
  {
    question: "Will there be parking available at the venue?",
    answer: "Yes, SRTIP offers ample parking for attendees. Additionally, we will provide shuttle services from major locations in Sharjah and Dubai."
  }
];

const SEFFAQ = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-[#9b87f5] mb-4">
            Have Questions?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to commonly asked questions about the Sharjah Entrepreneurship Festival.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-[#1A1F2C] font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/5 group">
              <Link to="/events/sef/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 p-6 border border-gray-200 rounded-xl bg-white text-center"
          >
            <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-5">Our team is happy to help you with any questions about the festival.</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFFAQ;
