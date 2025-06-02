
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SEFFAQ: React.FC = () => {
  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is the Sharjah Entrepreneurship Festival (SEF)?",
          answer: "SEF is the region's largest entrepreneurship festival, hosted annually by Sheraa. It brings together 14,000+ attendees from 45+ countries for two days of inspiration, learning, and high-impact networking at SRTIP, Sharjah."
        },
        {
          question: "When and where is SEF 2026?",
          answer: "SEF 2026 will take place on January 31 - February 1, 2026, at the Sharjah Research, Technology and Innovation Park (SRTIP) in Sharjah, UAE."
        },
        {
          question: "Who should attend SEF?",
          answer: "SEF is designed for entrepreneurs, investors, students, corporates, government officials, and anyone passionate about innovation and startups. Whether you're just starting your entrepreneurial journey or scaling a global business, SEF offers value for all stages."
        }
      ]
    },
    {
      category: "Registration & Tickets",
      questions: [
        {
          question: "When will registration open for SEF 2026?",
          answer: "Registration details and early bird pricing will be announced soon. Sign up for notifications to be the first to know when tickets become available."
        },
        {
          question: "What types of passes are available?",
          answer: "We offer three pass types: General Access (perfect for entrepreneurs and students), Premium Access (enhanced experience with exclusive benefits), and VIP Experience (ultimate SEF experience with exclusive privileges)."
        },
        {
          question: "Are there discounts available?",
          answer: "Yes! We offer special discounts for students, group packages for teams of 5+, and corporate rates. Early bird pricing will also be available for a limited time."
        },
        {
          question: "What's included in my ticket?",
          answer: "All tickets include access to main stages, experience zones, SEF Souq, networking areas, and the official SEF mobile app. Premium and VIP passes include additional exclusive benefits and access."
        }
      ]
    },
    {
      category: "Event Experience",
      questions: [
        {
          question: "What can I expect at SEF 2026?",
          answer: "Experience 300+ global speakers, 10+ dynamic zones (Startup Town, Investors Lounge, Creative Zone, etc.), 60+ workshops at SEF Academy, 250+ activities, and unparalleled networking opportunities with innovators from around the world."
        },
        {
          question: "What are the Experience Zones?",
          answer: "SEF features diverse zones including Startup Town (startup showcase), Investors Lounge (funding opportunities), Made in Sharjah (local innovations), Creative Zone (arts & media), Sustainability Hub, SEF Academy (workshops), SEF Souq (artisan showcase), and SEF Eats (culinary experiences)."
        },
        {
          question: "Will there be networking opportunities?",
          answer: "Absolutely! SEF is built around networking with 320+ curated investor meetings, dedicated networking spaces, zone-specific activities, and informal networking during breaks and meals."
        },
        {
          question: "Can I showcase my startup at SEF?",
          answer: "Yes! Startup Town offers opportunities to showcase your venture, participate in pitch competitions, and connect with potential investors and partners. Application details for startup showcases will be announced with registration."
        }
      ]
    },
    {
      category: "Practical Information",
      questions: [
        {
          question: "How do I get to SRTIP?",
          answer: "SRTIP is easily accessible from Dubai and other emirates. Detailed transportation information, including shuttle services and parking details, will be provided closer to the event date."
        },
        {
          question: "Will there be food and beverages available?",
          answer: "Yes! SEF Eats will offer diverse culinary experiences featuring local and international flavors. Various dining options will be available throughout the venue, included in your pass."
        },
        {
          question: "Is accommodation provided?",
          answer: "VIP Experience pass holders receive accommodation support. We'll also provide recommended hotels and special rates for other attendees closer to the event."
        },
        {
          question: "Will sessions be recorded or livestreamed?",
          answer: "Select main stage sessions may be recorded and made available post-event. Some sessions may be livestreamed for broader accessibility. Details will be announced with the full agenda."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about registration, venue, schedule, and what to expect at SEF 2026.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-sheraa-sef-primary">
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem 
                    key={questionIndex} 
                    value={`${categoryIndex}-${questionIndex}`}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:text-sheraa-sef-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-accent/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help! 
            Reach out to us and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@sheraa.ae" 
              className="inline-flex items-center justify-center px-6 py-3 bg-sheraa-sef-primary text-white rounded-lg hover:bg-sheraa-sef-primary/90 transition-colors"
            >
              Contact Our Team
            </a>
            <a 
              href="tel:+97165094000" 
              className="inline-flex items-center justify-center px-6 py-3 border border-sheraa-sef-primary text-sheraa-sef-primary rounded-lg hover:bg-sheraa-sef-primary/10 transition-colors"
            >
              Call Us: +971 6 509 4000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFAQ;
