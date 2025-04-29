
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Map, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BeamsBackground } from '@/components/ui/beams-background';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <BeamsBackground intensity="subtle" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch with Sheraa</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  We're here to help you connect with Sharjah's entrepreneurship ecosystem. 
                  Whether you have questions about our programs, want to explore partnership 
                  opportunities, inquire about membership, or simply learn more, please reach out.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ContactCard
                icon={<MapPin className="w-8 h-8" />}
                title="Visit Us"
                content={(
                  <>
                    <p className="mb-2"><strong>Sheraa HQ (SRTIP):</strong></p>
                    <p>Sharjah Research Technology and Innovation Park, Sharjah, UAE</p>
                    <a href="#" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
                    
                    <p className="mt-4 mb-2"><strong>AUS Hub:</strong></p>
                    <p>Ground Floor, Library Building, American University of Sharjah</p>
                    <a href="#" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
                    
                    <p className="mt-4 mb-2"><strong>UOS Hub:</strong></p>
                    <p>W3 Building, University of Sharjah</p>
                    <a href="#" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
                  </>
                )}
              />
              
              <ContactCard
                icon={<Phone className="w-8 h-8" />}
                title="Contact Information"
                content={(
                  <>
                    <p className="mb-2"><strong>General Inquiries:</strong></p>
                    <p>Email: <a href="mailto:info@sheraa.ae" className="text-sheraa-primary hover:underline">info@sheraa.ae</a></p>
                    <p className="mt-2">Phone: <a href="tel:+97165094000" className="text-sheraa-primary hover:underline">+971 6 509 4000</a></p>
                    
                    <p className="mt-4 mb-2"><strong>SRTIP Hub:</strong> +971 6 509 4000</p>
                    <p className="mt-2 mb-2"><strong>AUS Hub:</strong> +971 6 509 4000</p>
                    <p className="mt-2 mb-2"><strong>UOS Hub:</strong> +971 6 509 4010</p>
                  </>
                )}
              />
              
              <ContactCard
                icon={<Clock className="w-8 h-8" />}
                title="Operating Hours"
                content={(
                  <>
                    <p className="mb-2"><strong>Sunday - Thursday:</strong></p>
                    <p>9:00 AM - 5:00 PM</p>
                    
                    <p className="mt-4 mb-2"><strong>Friday - Saturday:</strong></p>
                    <p>Closed</p>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <a href="#" className="text-gray-700 hover:text-sheraa-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="text-gray-700 hover:text-sheraa-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                      </a>
                      <a href="#" className="text-gray-700 hover:text-sheraa-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                    </div>
                  </>
                )}
              />
            </div>

            <div className="bg-sheraa-light rounded-xl p-8 md:p-10 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-sheraa-dark mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <Input id="fullName" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input id="phone" placeholder="+971 XX XXX XXXX" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">I am a... *</label>
                    <select id="inquiryType" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Student / Aspiring Entrepreneur</option>
                      <option>Startup Founder</option>
                      <option>Established Business Owner</option>
                      <option>Investor</option>
                      <option>Corporate / Government Entity</option>
                      <option>Academic Institution</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiryAbout" className="block text-sm font-medium text-gray-700 mb-1">My inquiry is about... *</label>
                    <select id="inquiryAbout" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Programs & Eligibility</option>
                      <option>Membership Information</option>
                      <option>Partnership Opportunities</option>
                      <option>Events & Festival</option>
                      <option>Media Inquiry</option>
                      <option>General Information</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <Textarea id="message" placeholder="Please provide details about your inquiry..." className="min-h-[120px]" required />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="rounded border-gray-300 text-sheraa-primary focus:ring-sheraa-primary h-4 w-4" required />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <div className="text-center">
                  <Button variant="gradient" size="lg" className="px-12">
                    Submit Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-sheraa-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-sheraa-dark mb-4">Find Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our hubs are strategically located within Sharjah's vibrant academic and research landscape, ensuring accessibility and fostering collaboration.</p>
            </div>
            
            <div className="rounded-xl overflow-hidden h-[400px] shadow-lg">
              {/* Placeholder for the map - would be replaced with an actual map component */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Map className="w-16 h-16 text-gray-400" />
                <span className="ml-4 text-gray-500 text-lg">Interactive Map Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ContactCard = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4 text-sheraa-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-sheraa-dark">{title}</h3>
      <div className="text-gray-600">
        {content}
      </div>
    </div>
  );
};

export default ContactPage;
