
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Search, MessageCircle } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const GeneralFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Do I need a business degree to be an entrepreneur?",
      answer: "Not at all! While business education can be helpful, many successful entrepreneurs come from diverse backgrounds. What matters most is your willingness to learn, adapt, and solve problems. We provide all the educational resources you need to build business knowledge, regardless of your academic background.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "How much money do I need to start a business?",
      answer: "The amount varies greatly depending on your business type. Many successful businesses start with very little capital - sometimes just a few hundred dollars. We'll help you understand different funding options including bootstrapping, grants, loans, and investment. The key is starting lean and growing gradually.",
      category: "Funding"
    },
    {
      id: 3,
      question: "What if my English or Arabic isn't perfect?",
      answer: "Language shouldn't be a barrier to entrepreneurship! Our community is multilingual and supportive. We offer resources in both Arabic and English, and our mentors speak multiple languages. Plus, many successful businesses operate primarily in local languages or serve specific linguistic communities.",
      category: "Community"
    },
    {
      id: 4,
      question: "Can I start a business while working full-time?",
      answer: "Absolutely! Many entrepreneurs start as 'side hustles' while maintaining their day jobs. This approach actually reduces risk and provides financial stability. We offer flexible programs, evening events, and weekend workshops designed for working professionals. You can build your business gradually until it's ready to become your primary focus.",
      category: "Getting Started"
    },
    {
      id: 5,
      question: "What support does Sheraa provide to beginners?",
      answer: "Sheraa offers comprehensive support for beginners including free educational courses, mentorship programs, networking events, co-working spaces, and access to funding opportunities. We also provide legal and business setup guidance, connection to industry experts, and a supportive community of fellow entrepreneurs.",
      category: "Support"
    },
    {
      id: 6,
      question: "How do I know if my idea is good?",
      answer: "A good business idea solves a real problem that people are willing to pay to solve. We provide idea validation tools, market research guidance, and feedback from experienced entrepreneurs. Our interactive courses will teach you how to test your idea with potential customers before investing significant time or money.",
      category: "Validation"
    },
    {
      id: 7,
      question: "What if I don't have a business idea yet?",
      answer: "That's perfectly fine! Many successful entrepreneurs didn't start with a specific idea. We offer exploration workshops, industry overviews, and problem-identification exercises to help you discover opportunities. Sometimes the best ideas come from understanding problems in industries you're already familiar with.",
      category: "Getting Started"
    },
    {
      id: 8,
      question: "Is entrepreneurship right for everyone?",
      answer: "Entrepreneurship requires certain characteristics like resilience, adaptability, and willingness to take calculated risks. However, entrepreneurial skills can be learned and developed. Our assessment tools help you understand your strengths and areas for growth. Remember, there are many different types of entrepreneurship - from tech startups to local service businesses.",
      category: "Self-Assessment"
    },
    {
      id: 9,
      question: "How long does it take to build a successful business?",
      answer: "There's no fixed timeline as it depends on many factors including your industry, business model, market conditions, and personal circumstances. Some businesses become profitable within months, while others take years to mature. We focus on helping you build sustainable, long-term success rather than quick wins.",
      category: "Expectations"
    },
    {
      id: 10,
      question: "What if I fail?",
      answer: "Failure is a natural part of the entrepreneurial journey and often leads to valuable learning and future success. The key is to fail fast, fail cheap, and learn from each experience. Our community provides emotional support, practical guidance for pivoting or starting over, and connections to help you bounce back stronger.",
      category: "Mindset"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Common Questions About Getting Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to the most common questions from aspiring entrepreneurs. 
            Don't see your question? Ask our community!
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0826D]/50 focus:border-[#A0826D]"
            />
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium text-[#A0826D] bg-[#A0826D]/10 px-2 py-1 rounded-full mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-[#A0826D]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No FAQs found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or browse all questions.
            </p>
            <Button
              onClick={() => setSearchTerm("")}
              variant="outline"
              className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
            >
              Show All FAQs
            </Button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-[#A0826D]/5 to-transparent rounded-2xl"
        >
          <MessageCircle className="w-12 h-12 text-[#A0826D] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#374151] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our community is here to help! Ask your question and get answers 
            from experienced entrepreneurs and mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white">
              Ask the Community
            </Button>
            <Button
              variant="outline"
              className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
            >
              Schedule 1-on-1 Help
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeneralFAQSection;
