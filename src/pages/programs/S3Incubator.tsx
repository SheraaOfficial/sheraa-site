
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const S3Incubator: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 max-w-4xl">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Grow Smart
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">S3 Incubator: Sharjah Startup Studio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the Sharjah Startup Studio (S3), Sheraa's flagship incubator program and the UAE's first 
            government-backed startup studio operating on a unique revenue-sharing model. Over six months, we provide 
            a customized blend of strategic guidance, operational support, and unparalleled ecosystem access to help you 
            achieve product-market fit and scale effectively.
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

        {/* Key Benefits Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg mb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">The S3 Advantage: Equity-Free, Founder-First</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unlike traditional accelerators, S3 operates on a revenue-sharing model, providing $30,000 USD in 
              pre-seed funding without taking equity. This founder-first approach allows you to focus entirely on 
              building a sustainable and profitable business.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="#apply">
                <span className="text-lg">$30,000</span>
                <span className="ml-2">Equity-Free Funding</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div id="details" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Tabs defaultValue="who" className="mb-16">
              <TabsList className="mb-8">
                <TabsTrigger value="who">Who is S3 For?</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              
              <TabsContent value="who" className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Perfect Fit For Your Stage</h3>
                  <p className="text-gray-600 mb-6">
                    The S3 Incubator is meticulously designed for ambitious founders with tech-enabled, market-ready 
                    ventures poised for significant growth. Our program provides the ideal environment for startups 
                    meeting these criteria:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </span>
                          Stage
                        </h4>
                        <CardDescription>
                          Early-stage startups with a market-ready product/service, demonstrating early customer 
                          traction and revenue generation.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </span>
                          Business Model
                        </h4>
                        <CardDescription>
                          Scalable, tech-enabled ventures with strong potential for growth and significant market impact.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </span>
                          Team
                        </h4>
                        <CardDescription>
                          Dedicated full-time founder(s) and core team with technical capabilities. Must be coachable, 
                          collaborative, and open to feedback.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </span>
                          Location Focus
                        </h4>
                        <CardDescription>
                          Commitment to operating and scaling within Sharjah and the UAE, contributing to the local ecosystem.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Focus Sectors</h3>
                  <p className="text-gray-600 mb-6">
                    While we prioritize startups in our Centers of Excellence (CoE) focus areas, innovative ventures 
                    from other sectors with relevance to these areas are welcome to apply:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-sheraa-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Sustainability</h4>
                      <p className="text-sm text-gray-600">CleanTech, GreenTech, Circular Economy</p>
                    </div>
                    <div className="bg-sheraa-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Advanced Manufacturing</h4>
                      <p className="text-sm text-gray-600">Industry 4.0, Smart Factory, CPG</p>
                    </div>
                    <div className="bg-sheraa-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Creative Industries</h4>
                      <p className="text-sm text-gray-600">Media, Design, Entertainment, Arts</p>
                    </div>
                    <div className="bg-sheraa-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">EdTech</h4>
                      <p className="text-sm text-gray-600">Learning Solutions, Educational Platforms</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">What You Gain</h3>
                  
                  <div className="space-y-6">
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-sheraa-primary p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Personalized Playbook</h4>
                            <p className="text-white/80 text-sm">Tailored guidance for your specific needs</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              25 hours of tailored guidance from 30+ experienced mentors and Entrepreneurs-in-Residence (EIRs) 
                              to navigate your specific growth challenges. Bi-weekly check-ins ensure progress and accountability.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-green-600 p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Funding & Investment Readiness</h4>
                            <p className="text-white/80 text-sm">Financial support and investor access</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              $30,000 USD equity-free pre-seed funding to fuel your growth. Expert support in pitch preparation, 
                              investor relations, and introductions to Sheraa's network of VCs and angel investors. 
                              Opportunity to pitch at Demo Day in front of qualified investors.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-blue-600 p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Market & Partner Access</h4>
                            <p className="text-white/80 text-sm">Connections to potential clients</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              Warm introductions to Sheraa's CoE partners (industry leaders) and potential customers for pilot 
                              projects and strategic collaborations. Fast-track your market entry with the right connections.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-purple-600 p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Operational Support</h4>
                            <p className="text-white/80 text-sm">Everything you need to run your business</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              Free 1-year Sharjah business license, access to premium co-working spaces at Sheraa hubs, 
                              legal support (from contracts to term sheets), and guidance on scaling operations and teams efficiently. 
                              Access to talent from Sharjah's universities for internships and recruitment.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-sheraa-primary p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Exclusive Perks</h4>
                            <p className="text-white/80 text-sm">Value-added benefits</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              Over AED 3M+ ($800k+ USD) in software perks and discounts to power your startup's growth. 
                              Access to premium tools and platforms at a fraction of the regular cost.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="bg-orange-600 p-6 text-white">
                            <h4 className="font-semibold text-lg mb-1">Showcasing & Networking</h4>
                            <p className="text-white/80 text-sm">Visibility and connections</p>
                          </div>
                          <div className="p-6 col-span-3">
                            <p className="text-gray-600">
                              Showcase your venture at the prestigious Sharjah Entrepreneurship Festival (SEF) and potentially other roadshows. 
                              Immerse yourself in the Sharjah ecosystem during a dedicated week-long experience and leadership retreat.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Application Process</h3>
                  
                  <div className="relative">
                    {/* Progress bar */}
                    <div className="absolute left-16 top-0 h-full w-1 bg-gray-200 hidden md:block"></div>
                    
                    <div className="space-y-12">
                      <div className="relative flex items-start">
                        <div className="hidden md:flex flex-col items-center mr-6">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            1
                          </div>
                          <div className="h-full w-1 bg-sheraa-primary"></div>
                        </div>
                        <div className="md:hidden mr-4">
                          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            1
                          </div>
                        </div>
                        <div className="pb-6">
                          <h4 className="text-xl font-semibold mb-2">Apply Online</h4>
                          <p className="text-gray-600 mb-4">
                            Submit your application via the Sheraa website, providing details about your team, 
                            product/service, market, traction, and growth plans.
                          </p>
                          <p className="text-gray-500 text-sm">
                            <strong>Time:</strong> 30-45 minutes to complete the application form.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="hidden md:flex flex-col items-center mr-6">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            2
                          </div>
                          <div className="h-full w-1 bg-sheraa-primary"></div>
                        </div>
                        <div className="md:hidden mr-4">
                          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            2
                          </div>
                        </div>
                        <div className="pb-6">
                          <h4 className="text-xl font-semibold mb-2">Internal Assessment</h4>
                          <p className="text-gray-600 mb-4">
                            The Sheraa team reviews your application for alignment with our criteria, evaluating your solution, 
                            team capabilities, market potential, and fit with our focus sectors.
                          </p>
                          <p className="text-gray-500 text-sm">
                            <strong>Time:</strong> 1-2 weeks after submission.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="hidden md:flex flex-col items-center mr-6">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            3
                          </div>
                          <div className="h-full w-1 bg-sheraa-primary"></div>
                        </div>
                        <div className="md:hidden mr-4">
                          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            3
                          </div>
                        </div>
                        <div className="pb-6">
                          <h4 className="text-xl font-semibold mb-2">Screening Call</h4>
                          <p className="text-gray-600 mb-4">
                            Shortlisted founders present a product demo and answer initial questions about their 
                            venture, vision, and goals for the S3 program.
                          </p>
                          <p className="text-gray-500 text-sm">
                            <strong>Time:</strong> 30-minute call.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="hidden md:flex flex-col items-center mr-6">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            4
                          </div>
                          <div className="h-full w-1 bg-sheraa-primary"></div>
                        </div>
                        <div className="md:hidden mr-4">
                          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            4
                          </div>
                        </div>
                        <div className="pb-6">
                          <h4 className="text-xl font-semibold mb-2">Deep-Dive Call</h4>
                          <p className="text-gray-600 mb-4">
                            In-depth discussion focusing on Team dynamics, Market understanding, Product differentiation, 
                            and Business Model viability. This helps us understand your unique challenges and how we can best support you.
                          </p>
                          <p className="text-gray-500 text-sm">
                            <strong>Time:</strong> 60-minute in-depth interview.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-start">
                        <div className="hidden md:flex flex-col items-center mr-6">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            5
                          </div>
                        </div>
                        <div className="md:hidden mr-4">
                          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sheraa-primary text-white text-lg font-bold">
                            5
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Selection & Onboarding</h4>
                          <p className="text-gray-600 mb-4">
                            Final selection is made based on all evaluation criteria. Successful applicants receive an offer to join 
                            the S3 program and begin the onboarding process.
                          </p>
                          <p className="text-gray-500 text-sm">
                            <strong>Time:</strong> 1-2 weeks after Deep-Dive Call.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="timeline" className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Program Timeline</h3>
                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-semibold mb-3">Upcoming Cohort:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Applications Open</p>
                        <p className="font-semibold">April 2025</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Program Start</p>
                        <p className="font-semibold">June 2025</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Demo Day</p>
                        <p className="font-semibold">December 2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Timeline visualization */}
                    <div className="hidden md:block absolute top-0 left-[70px] h-full w-0.5 bg-gray-200"></div>
                    
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="hidden md:flex flex-col items-center mr-8">
                          <div className="h-8 w-8 rounded-full bg-sheraa-primary"></div>
                          <div className="h-full w-0.5 bg-sheraa-primary"></div>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="md:hidden h-6 w-6 rounded-full bg-sheraa-primary mr-3"></div>
                            <h4 className="font-semibold">Month 1: Onboarding & Alignment</h4>
                          </div>
                          <div className="pl-0 md:pl-0">
                            <ul className="list-disc ml-5 text-gray-600 space-y-1">
                              <li>Program kickoff and orientation</li>
                              <li>Founder assessment and goal setting</li>
                              <li>Tailored playbook development</li>
                              <li>Mentor matching and initial consultations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="hidden md:flex flex-col items-center mr-8">
                          <div className="h-8 w-8 rounded-full bg-sheraa-primary"></div>
                          <div className="h-full w-0.5 bg-sheraa-primary"></div>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="md:hidden h-6 w-6 rounded-full bg-sheraa-primary mr-3"></div>
                            <h4 className="font-semibold">Months 2-3: Product-Market Fit & Growth Strategy</h4>
                          </div>
                          <div className="pl-0 md:pl-0">
                            <ul className="list-disc ml-5 text-gray-600 space-y-1">
                              <li>Intensive product refinement based on user feedback</li>
                              <li>Market strategy development and execution</li>
                              <li>Customer acquisition and retention optimization</li>
                              <li>Financial modeling and growth planning</li>
                              <li>Mid-program progress review</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="hidden md:flex flex-col items-center mr-8">
                          <div className="h-8 w-8 rounded-full bg-sheraa-primary"></div>
                          <div className="h-full w-0.5 bg-sheraa-primary"></div>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="md:hidden h-6 w-6 rounded-full bg-sheraa-primary mr-3"></div>
                            <h4 className="font-semibold">Months 4-5: Scaling & Investment Readiness</h4>
                          </div>
                          <div className="pl-0 md:pl-0">
                            <ul className="list-disc ml-5 text-gray-600 space-y-1">
                              <li>Operational scaling and team development</li>
                              <li>Business development and partnership cultivation</li>
                              <li>Pitch deck refinement and investment strategy</li>
                              <li>Investor introductions and pitch practice</li>
                              <li>Participation in Sharjah Entrepreneurship Festival (SEF)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="hidden md:flex flex-col items-center mr-8">
                          <div className="h-8 w-8 rounded-full bg-sheraa-primary"></div>
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="md:hidden h-6 w-6 rounded-full bg-sheraa-primary mr-3"></div>
                            <h4 className="font-semibold">Month 6: Demo Day & Beyond</h4>
                          </div>
                          <div className="pl-0 md:pl-0">
                            <ul className="list-disc ml-5 text-gray-600 space-y-1">
                              <li>Final pitch preparation and rehearsals</li>
                              <li>Demo Day showcase to investors and partners</li>
                              <li>Post-program planning and support strategy</li>
                              <li>Alumni network onboarding</li>
                              <li>Continued access to Sheraa's resources and network</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Success Stories Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">S3 Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-1">Manhat</h4>
                    <p className="text-sm text-gray-500 mb-3">Sustainability / Water Technology</p>
                    <p className="text-gray-600 mb-4">
                      Pioneering water generation through solar distillation, Manhat secured $3.2M in funding after 
                      graduating from S3, revolutionizing sustainable water solutions in arid regions.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/community/startups">Read Story</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-1">Arabee</h4>
                    <p className="text-sm text-gray-500 mb-3">EdTech / Language Learning</p>
                    <p className="text-gray-600 mb-4">
                      An innovative Arabic language platform for children, Arabee expanded to 15 countries and secured 
                      partnerships with major educational institutions after participating in the S3 Incubator.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/community/startups">Read Story</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link to="/community/startups" className="text-sheraa-primary hover:underline inline-flex items-center">
                  View More Success Stories
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div id="apply" className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Applications for the 2025 cohort will open in April 2025. Register your interest now to be notified when applications open.
                </p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                    <Link to="/eligibility">Check Eligibility & Apply</Link>
                  </Button>
                </motion.div>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Program Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">Startups Supported</p>
                      <p className="text-sheraa-primary font-bold">60+</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-sheraa-primary h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">Funding Secured</p>
                      <p className="text-sheraa-primary font-bold">$48M+</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-sheraa-primary h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">Survival Rate</p>
                      <p className="text-sheraa-primary font-bold">82%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-sheraa-primary h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">Women-Led Startups</p>
                      <p className="text-sheraa-primary font-bold">52%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-sheraa-primary h-full rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">How does the revenue-sharing model work?</h4>
                    <p className="text-sm text-gray-600">
                      Instead of taking equity, S3 uses a revenue-share agreement where startups contribute a small percentage 
                      of their revenue for a limited period after achieving specified milestones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Can international startups apply?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, international startups can apply if they're willing to establish a presence in Sharjah and 
                      contribute to the local ecosystem.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">What happens after the program ends?</h4>
                    <p className="text-sm text-gray-600">
                      Graduates become part of the Sheraa alumni network, with continued access to resources, 
                      events, and potential follow-on funding opportunities.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <Link to="/contact" className="text-sheraa-primary hover:underline text-sm">
                    Have more questions? Contact us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default S3Incubator;
