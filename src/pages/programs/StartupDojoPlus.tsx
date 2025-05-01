
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const StartupDojoPlus: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Start Young - Advanced
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">Startup Dojo+</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            An intensive 4-week accelerator program for top-performing teams emerging from Startup Dojo 
            and other youth initiatives. Offering bespoke attention to help validate and build concepts further.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/eligibility">Apply Now</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#details">Program Details</a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">4</h3>
            <p className="text-gray-600">Week Intensive Program</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">Top 10%</h3>
            <p className="text-gray-600">Teams Selected</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">85%</h3>
            <p className="text-gray-600">Proceed to Next Stage</p>
          </div>
        </div>

        {/* Main Content */}
        <div id="details" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="eligibility">Who Can Apply</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Program Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Startup Dojo+ is an intensive accelerator program designed for high-potential student/alumni 
                    startups, often selected from Startup Dojo or other feeder programs like hackathons. The 
                    program offers focused mentorship and resources to help these promising teams validate their 
                    concepts further and prepare for market entry.
                  </p>
                  <p className="text-gray-600">
                    With a diverse range of participants representing various nationalities and sectors 
                    (AgriTech, EdTech, AI, HealthTech, etc.), the program provides a collaborative environment 
                    for innovation and growth.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Focus Areas</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>Business model refinement and iteration</li>
                    <li>Market validation techniques</li>
                    <li>Product design and development</li>
                    <li>Financial planning and resource allocation</li>
                    <li>Advanced pitch development and delivery</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="eligibility">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Who Can Apply</h3>
                  <p className="text-gray-600 mb-4">
                    Startup Dojo+ is primarily for standout teams from Sheraa's youth programs or partner initiatives. 
                    Participants typically represent the top performers from initial programs like Startup Dojo, 
                    university hackathons, or other early-stage entrepreneurship initiatives.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">Eligibility Criteria</h4>
                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                      <li>Successful completion of Startup Dojo or equivalent early-stage programs</li>
                      <li>Demonstrated commitment and progress on your startup concept</li>
                      <li>Teams with complementary skills (technical, business, design)</li>
                      <li>Clear potential for market traction and scalability</li>
                      <li>Availability to participate fully in the 4-week intensive program</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Program Benefits</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Focused Mentorship</h4>
                      <p className="text-gray-600">
                        Receive personalized guidance from industry experts tailored to your specific business model and sector.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Funding Opportunities</h4>
                      <p className="text-gray-600">
                        Top-performing teams may receive seed funding to advance their concepts to the next stage.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Fast-Track Application</h4>
                      <p className="text-gray-600">
                        Priority consideration for Sheraa's S3 Incubator and other advanced programs.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Showcase Opportunity</h4>
                      <p className="text-gray-600">
                        Present your refined concept at the 'Seal the Deal' pitch event to investors and potential partners.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Market Validation</h4>
                      <p className="text-gray-600">
                        Access to customer discovery resources and potential pilot opportunities.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Networking</h4>
                      <p className="text-gray-600">
                        Connect with alumni entrepreneurs, investors, and industry experts in Sheraa's wider ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="timeline">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Program Timeline</h3>
                  <div className="relative">
                    {/* Timeline events */}
                    <div className="absolute h-full w-0.5 bg-blue-200 left-2.5 top-0"></div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Selection Phase</h4>
                      <p className="text-gray-500 text-sm mb-2">Following Startup Dojo Demo Day</p>
                      <p className="text-gray-600">Top teams from Startup Dojo are invited to apply for Dojo+</p>
                    </div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Kickoff Week</h4>
                      <p className="text-gray-500 text-sm mb-2">Week 1</p>
                      <p className="text-gray-600">Program orientation, business model refinement, and mentor matching</p>
                    </div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Development Phase</h4>
                      <p className="text-gray-500 text-sm mb-2">Weeks 2-3</p>
                      <p className="text-gray-600">Intensive work on product design, market validation, and financial planning</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">'Seal the Deal' Pitch Event</h4>
                      <p className="text-gray-500 text-sm mb-2">Week 4</p>
                      <p className="text-gray-600">Final presentations to investors, partners, and Sheraa leadership with funding decisions announced</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Applications for Startup Dojo+ are by invitation for top performers from the Startup Dojo program. Complete Startup Dojo to be considered.
                </p>
                <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/programs/startup-dojo">Join Startup Dojo First</Link>
                </Button>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">TechEd Solutions</h4>
                    <p className="text-sm text-gray-600">
                      "Startup Dojo+ helped us refine our EdTech solution and connect with our first school clients."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">GreenBin</h4>
                    <p className="text-sm text-gray-600">
                      "We secured $50,000 in seed funding after our Dojo+ pitch event presentation."
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <Link to="/community/startups" className="text-sheraa-primary hover:underline text-sm">
                    View more success stories →
                  </Link>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about the Startup Dojo+ program?
                </p>
                <Link to="/contact" className="text-sheraa-primary hover:underline block">
                  Get in touch with our team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StartupDojoPlus;
