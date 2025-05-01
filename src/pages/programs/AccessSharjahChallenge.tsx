
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AccessSharjahChallenge: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 max-w-4xl">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Build Ventures
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">
            Access Sharjah Challenge (ASC)
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A unique global competition inviting growth-stage startups to address specific, real-world challenges 
            faced by leading entities in Sharjah. Connect with key decision-makers, secure substantial funding, and 
            gain direct market access through proof-of-concept implementation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/eligibility">Apply Now</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>
        </div>

        {/* Current Challenge Banner */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-px">
            <div className="bg-white dark:bg-gray-950 rounded-[calc(0.75rem-1px)] p-8 sm:p-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ASC 2025 Focus Areas</h2>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600">
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4"></path>
                          <path d="M12 8.9V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3.9"></path>
                          <path d="M10 9v12"></path>
                          <path d="M14 9v14"></path>
                          <path d="M14 14h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2"></path>
                          <path d="M10 13H7.5a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 1 0 3H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">AgriTech</h3>
                        <p className="text-gray-600">
                          Innovations in sustainable farming, precision agriculture, food security solutions, and crop optimization technologies.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600">
                          <rect x="2" y="2" width="20" height="8" rx="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Livestock Health</h3>
                        <p className="text-gray-600">
                          Technologies for monitoring animal health, improving breeding practices, ensuring biosecurity, and sustainable feed solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">In collaboration with Department of Agriculture and Livestock</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">Endorsed by Ministry of Climate Change and Environment</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-purple-700">Key Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600 mr-2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span className="text-gray-700">AED 250,000 ($68,000) POC grant per winner</span>
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600 mr-2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span className="text-gray-700">Direct implementation with challenge partners</span>
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-purple-600 mr-2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span className="text-gray-700">Market entry support and business setup assistance</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/eligibility">Apply for ASC 2025</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">How Access Sharjah Challenge Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>The Challenge Process</CardTitle>
                <CardDescription>
                  ASC follows a structured process to identify and support the most promising solutions for Sharjah's challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600 mr-4">1</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenge Definition</h3>
                      <p className="text-gray-600 mb-2">
                        Each year, ASC focuses on critical sectors aligned with Sharjah's strategic priorities. Sheraa collaborates with 
                        prominent partners to define specific challenges requiring innovative solutions.
                      </p>
                      <p className="text-gray-500 text-sm">
                        <strong>Examples:</strong> Sustainable agriculture, livestock health monitoring, waste management solutions, carbon footprint reduction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600 mr-4">2</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Global Call for Solutions</h3>
                      <p className="text-gray-600 mb-2">
                        Startups from around the world are invited to apply with innovative, scalable solutions addressing 
                        the year's challenge areas. Applications undergo thorough evaluation based on solution effectiveness, 
                        team capability, scalability, and potential impact.
                      </p>
                      <p className="text-gray-500 text-sm">
                        <strong>Requirements:</strong> Growth-stage startups with proven solutions, willingness to implement in Sharjah.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600 mr-4">3</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Startup Readiness Sprint</h3>
                      <p className="text-gray-600 mb-2">
                        Shortlisted startups participate in an intensive preparation program to refine their solution 
                        for the Sharjah context, develop implementation plans, and prepare compelling pitches.
                      </p>
                      <p className="text-gray-500 text-sm">
                        <strong>Activities:</strong> Mentorship sessions, workshops, pitch refinement, and partner meetings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600 mr-4">4</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Pitch Day & Selection</h3>
                      <p className="text-gray-600 mb-2">
                        Finalists present their solutions to a judging panel comprising challenge partners and industry experts. 
                        Winners are selected based on solution fit, implementation feasibility, and potential impact.
                      </p>
                      <p className="text-gray-500 text-sm">
                        <strong>Prize:</strong> AED 250,000 ($68,000) grant per winner to implement Proof-of-Concept.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600 mr-4">5</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">POC Implementation & Showcase</h3>
                      <p className="text-gray-600 mb-2">
                        Winners receive funding and support to implement their solution with challenge partners in Sharjah. 
                        Successful implementations are showcased at major events, with potential for long-term partnerships.
                      </p>
                      <p className="text-gray-500 text-sm">
                        <strong>Duration:</strong> Typically 3-6 months for implementation with continued support.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>2025 Timeline</CardTitle>
                  <CardDescription>
                    Key dates for the current Access Sharjah Challenge cycle
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">April 15, 2025</p>
                        <p className="text-gray-600">Applications Open</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">June 30, 2025</p>
                        <p className="text-gray-600">Applications Close</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">July 15, 2025</p>
                        <p className="text-gray-600">Finalists Announced</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">August 1-15, 2025</p>
                        <p className="text-gray-600">Startup Readiness Sprint</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">August 30, 2025</p>
                        <p className="text-gray-600">Pitch Day</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">October, 2025</p>
                        <p className="text-gray-600">GITEX Showcase</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">September 2025 - February 2026</p>
                        <p className="text-gray-600">POC Implementation</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-2 bg-purple-600 mr-4 rounded"></div>
                      <div>
                        <p className="font-medium">March, 2026</p>
                        <p className="text-gray-600">Implementation Showcase</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Note: Dates are subject to minor adjustments. Registered participants will be notified of any changes.
                  </p>
                </CardFooter>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Who Should Apply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">
                        <span className="font-medium">Growth-stage startups</span> with proven solutions in AgriTech or Livestock Health
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">
                        <span className="font-medium">Global companies</span> looking to enter the MENA market through Sharjah
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">
                        <span className="font-medium">Innovative ventures</span> ready to implement real-world solutions with major partners
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="text-green-600 mr-2 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <p className="text-gray-600">
                        <span className="font-medium">Businesses seeking</span> POC funding and validation from established entities
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Past Winners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Success Stories from Previous Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="h-64 lg:h-auto bg-gray-200"></div>
                <div className="p-8 lg:col-span-2">
                  <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Waste Management
                  </div>
                  <h4 className="text-xl font-bold mb-2">Candam Technologies</h4>
                  <p className="text-gray-600 mb-4">
                    Implemented an AI-powered waste management solution with BEEAH Group, optimizing collection routes 
                    and improving recycling rates by 42%. Following a successful POC, Candam secured a long-term contract 
                    and established their regional headquarters in Sharjah.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Ahmed Al-Naqbi</p>
                      <p className="text-sm text-gray-500">Co-founder & CEO</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-600 italic">
                    "Access Sharjah Challenge gave us more than funding – it provided direct access to decision-makers 
                    and real-world implementation opportunities that accelerated our growth."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="h-64 lg:h-auto bg-gray-200"></div>
                <div className="p-8 lg:col-span-2">
                  <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Net Zero Solutions
                  </div>
                  <h4 className="text-xl font-bold mb-2">Green Future Project</h4>
                  <p className="text-gray-600 mb-4">
                    Partnered with Sharjah Sustainable City to deploy their innovative carbon tracking and reduction SaaS 
                    platform, helping residents reduce their carbon footprint by 25%. The successful implementation led to 
                    expansion across multiple sustainable development projects in the UAE.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Sophia Chen</p>
                      <p className="text-sm text-gray-500">Founder</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-600 italic">
                    "The mentorship, funding, and implementation opportunity through ASC helped us validate our solution 
                    in a real environment, which was crucial for our subsequent expansion."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Application Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Join the ranks of innovative companies solving real-world challenges and gaining access to the 
                    thriving Sharjah market. Applications for ASC 2025 are now open.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Submit your application by June 30, 2025</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Present your solution to key decision-makers</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Win AED 250,000 ($68,000) to implement your POC</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                      <Link to="/eligibility">Check Eligibility & Apply Now</Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Application Requirements</h3>
                  <div>
                    <h4 className="font-semibold mb-2">Company Information</h4>
                    <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Company profile and registration details</li>
                      <li>Team composition and key members' credentials</li>
                      <li>Financial information and funding history</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution Details</h4>
                    <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Detailed description of your solution</li>
                      <li>Evidence of implementation and results achieved</li>
                      <li>Alignment with the focus area challenges</li>
                      <li>Implementation plan for Sharjah context</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Supporting Materials</h4>
                    <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                      <li>Pitch deck or presentation</li>
                      <li>Video demonstration of your solution (optional)</li>
                      <li>References or testimonials from clients</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Challenge Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, idx) => (
              <div key={idx} className="h-32 bg-gray-100 flex items-center justify-center rounded-lg">
                <div className="text-gray-400 text-sm">Partner Logo</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/community/partnerships" className="inline-flex items-center text-sheraa-primary hover:underline font-medium">
              Interested in becoming a challenge partner?
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Is this program only for UAE-based companies?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No, ASC is a global challenge open to startups from anywhere in the world. International startups 
                  are encouraged to apply if they have solutions relevant to the challenge areas and are willing to 
                  implement their POC in Sharjah. Sheraa provides support with business setup and market entry for 
                  international winners.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>What stage should my startup be at to apply?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ASC is designed for growth-stage startups with a market-ready product or service that has been 
                  implemented and validated in at least one market. Your solution should be beyond the prototype stage 
                  and ready for real-world implementation with the challenge partners in Sharjah.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How does the POC funding work?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Winners receive equity-free grant funding of AED 250,000 ($68,000) specifically for implementing 
                  their proof-of-concept with the challenge partner in Sharjah. The funds are disbursed in milestones 
                  based on the implementation plan and progress. This funding covers technology deployment, customization, 
                  and operational costs during the POC phase.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>What happens after the challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Successful POCs often lead to long-term contracts or partnerships with the challenge partners. 
                  Additionally, winners receive support in establishing their presence in Sharjah through business 
                  setup assistance, further funding opportunities, and integration into the Sheraa ecosystem with 
                  access to its network and resources for continued growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/contact">Have More Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccessSharjahChallenge;
