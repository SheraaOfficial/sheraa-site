
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQCategory = {
  id: string;
  name: string;
  faqs: FAQ[];
};

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const SEFFAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // FAQ data
  const faqCategories: FAQCategory[] = [
    {
      id: "registration",
      name: "Registration & Tickets",
      faqs: [
        {
          id: "reg-1",
          question: "How do I register for SEF'26?",
          answer: "Registration for SEF'26 can be completed online through our website. Navigate to the Registration page, fill out the required information, and submit your application. You'll receive a confirmation email with your ticket and additional details."
        },
        {
          id: "reg-2",
          question: "What are the ticket options and pricing?",
          answer: "SEF'26 offers several ticket options: General Admission (AED 450), Student Pass (AED 150), VIP Experience (AED 950), and Corporate Packages (starting from AED 2,500 for 5 passes). Early bird discounts are available until October 31, 2025."
        },
        {
          id: "reg-3",
          question: "Is my ticket transferable?",
          answer: "Yes, tickets are transferable up until January 15, 2026. To transfer your ticket, log into your account and follow the transfer instructions, or contact our support team at sef@sheraa.ae with the details of the new attendee."
        },
        {
          id: "reg-4",
          question: "Can I get a refund if I can't attend?",
          answer: "Refunds are available up to 30 days before the event (until December 31, 2025) with a 15% processing fee. After this date, refunds are not available, but you may transfer your ticket to another attendee."
        }
      ]
    },
    {
      id: "logistics",
      name: "Event Logistics",
      faqs: [
        {
          id: "log-1",
          question: "What are the event hours?",
          answer: "SEF'26 runs from 9:00 AM to 7:00 PM on both days (January 31 - February 1, 2026). Registration opens at 8:00 AM on both days, and we recommend arriving early on the first day to complete check-in smoothly."
        },
        {
          id: "log-2",
          question: "Where is the festival located?",
          answer: "SEF'26 will take place at the Sharjah Research, Technology, and Innovation Park (SRTIP). The address is: Research, Innovation, Technology Park - Sharjah - United Arab Emirates."
        },
        {
          id: "log-3",
          question: "Is parking available at the venue?",
          answer: "Yes, complimentary parking is available at SRTIP with over 1,000 spaces. Additional overflow parking will be available with shuttle service to the main venue."
        },
        {
          id: "log-4",
          question: "Is transportation provided?",
          answer: "Shuttle services will be available from key locations in Sharjah, Dubai, and Abu Dhabi. Details and reservation information will be shared with registered attendees closer to the event date."
        }
      ]
    },
    {
      id: "program",
      name: "Program & Content",
      faqs: [
        {
          id: "prog-1",
          question: "What types of sessions are included in SEF'26?",
          answer: "SEF'26 features a diverse range of content including keynote speeches, panel discussions, interactive workshops, masterclasses, pitch competitions, fireside chats, and networking sessions across multiple stages and experience zones."
        },
        {
          id: "prog-2",
          question: "Do I need to pre-register for specific sessions?",
          answer: "General admission grants access to all main stages and most content. However, some specialized workshops and masterclasses have limited capacity and require advance registration through the SEF mobile app, which will be available in December 2025."
        },
        {
          id: "prog-3",
          question: "Will presentations and session recordings be available after the event?",
          answer: "Select session recordings and presentation materials will be made available to registered attendees via the SEF digital platform approximately two weeks after the event. Not all sessions will be recorded due to speaker preferences."
        },
        {
          id: "prog-4",
          question: "How can I speak at or propose a session for SEF?",
          answer: "Speaker applications for SEF'26 are open until September 30, 2025. Visit the 'Be Part of SEF' section on our website to submit a speaker proposal or content idea for consideration by our programming team."
        }
      ]
    },
    {
      id: "startups",
      name: "Startups & Exhibitors",
      faqs: [
        {
          id: "start-1",
          question: "How can my startup participate in SEF'26?",
          answer: "Startups can participate in several ways: apply for the Startup Exhibition in Startup Town, enter the Pitch Competition (applications open in November 2025), or partner with Sheraa through our various programs. Visit the 'Be Part of SEF' section for details."
        },
        {
          id: "start-2",
          question: "What is the selection criteria for exhibiting startups?",
          answer: "Exhibiting startups are selected based on innovation, market potential, team strength, alignment with Sheraa's focus areas, and stage of development. We aim to showcase a diverse range of solutions across various industries and stages."
        },
        {
          id: "start-3",
          question: "What is included in a startup exhibition package?",
          answer: "The standard startup exhibition package includes a branded booth space, two exhibitor passes, inclusion in the digital startup directory, participation in networking events, and visibility to investors and partners. Premium packages with additional features are also available."
        },
        {
          id: "start-4",
          question: "How can I meet investors during SEF'26?",
          answer: "Registered startups can access the Investor Connect program, which facilitates curated meetings with relevant investors. The platform opens one month before the event to schedule meetings. Additionally, the Investors Lounge hosts informal networking opportunities throughout the festival."
        }
      ]
    },
    {
      id: "general",
      name: "General Information",
      faqs: [
        {
          id: "gen-1",
          question: "What should I wear to SEF'26?",
          answer: "SEF'26 has a smart casual dress code. We recommend comfortable footwear as you'll be walking between different zones and venues throughout the day. The weather in Sharjah in January is typically pleasant, but indoor venues may be air-conditioned."
        },
        {
          id: "gen-2",
          question: "Is there Wi-Fi available at the venue?",
          answer: "Yes, complimentary high-speed Wi-Fi will be available throughout the venue for all attendees. The network details will be provided in the event guide and displayed at various locations."
        },
        {
          id: "gen-3",
          question: "Are food and beverages available at the event?",
          answer: "Yes, SEF'26 features multiple food and beverage options at SEF Eats, including local and international cuisine, coffee shops, and refreshment stands. Both cash and card payments are accepted. Some offerings are included with your ticket, while others are available for purchase."
        },
        {
          id: "gen-4",
          question: "Is SEF'26 accessible for people with disabilities?",
          answer: "Yes, SEF'26 is designed to be accessible for all attendees. The venue has wheelchair accessibility, accessible restrooms, and dedicated support staff. If you have specific accommodation needs, please contact us at sef@sheraa.ae before the event to ensure we can support you fully."
        }
      ]
    },
    {
      id: "international",
      name: "International Attendees",
      faqs: [
        {
          id: "int-1",
          question: "Do I need a visa to attend SEF'26?",
          answer: "Depending on your nationality, you may need a visa to enter the UAE. Many countries are eligible for visa on arrival or electronic visas. Registered attendees can request a visa assistance letter to support their application. Visit the UAE government's official visa information portal for specific requirements based on your nationality."
        },
        {
          id: "int-2",
          question: "Are there recommended hotels near the venue?",
          answer: "Yes, we have negotiated special rates with several hotels in Sharjah and Dubai. Registered attendees will receive access to our accommodation portal with preferred rates and booking instructions. Hotels range from 3-star to 5-star options, with shuttle service to the venue from partner hotels."
        },
        {
          id: "int-3",
          question: "What airports are closest to the venue?",
          answer: "Sharjah International Airport (SHJ) is the closest airport, approximately 15 minutes from the venue. Dubai International Airport (DXB) is about 30 minutes away, while Dubai World Central (DWC) is approximately 45 minutes away. Airport transfer services will be available for pre-booking through our travel partner."
        },
        {
          id: "int-4",
          question: "Will translation services be available?",
          answer: "Main stage sessions will have Arabic-English simultaneous translation available. Some specialized sessions may be conducted in either Arabic or English only. The SEF mobile app and signage will be available in both languages."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search
  const filteredCategories = faqCategories.map(category => {
    const filteredFaqs = category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return {
      ...category,
      faqs: filteredFaqs
    };
  }).filter(category => category.faqs.length > 0);
  
  // Handle category click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };
  
  // Count total FAQs
  const totalFaqs = faqCategories.reduce((acc, category) => acc + category.faqs.length, 0);

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                Frequently Asked Questions
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about the Sharjah Entrepreneurship Festival 2026
            </p>
          </motion.div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              className="pl-10 py-6 text-lg"
              placeholder="Search for questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Categories and FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Category sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
              <h2 className="font-semibold text-lg text-sheraa-primary mb-4">Categories</h2>
              
              <div className="space-y-2">
                {faqCategories.map(category => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-sheraa-primary/10 text-sheraa-primary font-medium' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {category.faqs.length}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  {totalFaqs} questions answered
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ content */}
          <div className="md:col-span-3">
            {searchQuery ? (
              // Search results
              <div>
                <h2 className="text-xl font-semibold text-sheraa-primary mb-6">
                  Search Results {filteredCategories.length > 0 && `(${
                    filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)
                  } found)`}
                </h2>
                
                {filteredCategories.length > 0 ? (
                  <div className="space-y-8">
                    {filteredCategories.map(category => (
                      <div key={category.id}>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">{category.name}</h3>
                        
                        <Accordion type="single" collapsible className="space-y-4">
                          {category.faqs.map(faq => (
                            <AccordionItem 
                              key={faq.id} 
                              value={faq.id}
                              className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                            >
                              <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-600 pb-4 pt-0">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 mb-4">No results found for "{searchQuery}"</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>
            ) : activeCategory ? (
              // Selected category
              <div>
                {faqCategories.filter(cat => cat.id === activeCategory).map(category => (
                  <div key={category.id}>
                    <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">{category.name}</h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map(faq => (
                        <AccordionItem 
                          key={faq.id} 
                          value={faq.id}
                          className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                        >
                          <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pb-4 pt-0">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              // All categories
              <div className="space-y-12">
                {faqCategories.map(category => (
                  <div key={category.id} id={category.id}>
                    <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">{category.name}</h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map(faq => (
                        <AccordionItem 
                          key={faq.id} 
                          value={faq.id}
                          className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
                        >
                          <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pb-4 pt-0">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Still Have Questions */}
        <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-sheraa-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Get in touch with our team for personalized assistance with your questions about SEF'26.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button variant="outline">
                Email: sef@sheraa.ae
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Links */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events/sef/register" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Register Now</h4>
              <p className="text-gray-600 mt-2 text-sm">Secure your spot at the region's premier entrepreneurship festival.</p>
            </Link>
            
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
            </Link>
            
            <Link to="/events/sef/experience" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">SEF Experience</h4>
              <p className="text-gray-600 mt-2 text-sm">Discover the unique zones and experiences at SEF'26.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SEFFAQPage;
