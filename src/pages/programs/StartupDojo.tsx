
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StartupDojo: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Start Young
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">Startup Dojo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            An intensive 8-week summer incubation program focused on transforming student ideas into 
            viable entrepreneurial solutions. Participants gain real-world experience in starting and 
            running a business through hands-on training and mentorship.
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
            <h3 className="text-4xl font-bold text-blue-600 mb-2">8</h3>
            <p className="text-gray-600">Week Intensive Program</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">81%</h3>
            <p className="text-gray-600">Emirati Youth Participation</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
            <p className="text-gray-600">Hands-on Learning</p>
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
                    The journey to becoming an entrepreneur starts early. Sheraa's "Start Young" initiatives, 
                    including the Startup Dojo program, are designed to cultivate entrepreneurial mindsets, 
                    equip young talent with essential skills, and provide a launchpad for innovative ideas 
                    emerging from university campuses and the wider youth community in the UAE.
                  </p>
                  <p className="text-gray-600">
                    Startup Dojo is an intensive 8-week summer incubation program focused on transforming student ideas 
                    into viable entrepreneurial solutions. Participants gain real-world experience in starting 
                    and running a business through hands-on training and mentorship.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Focus Areas</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>Idea validation and refinement</li>
                    <li>Business model development</li>
                    <li>Market research and customer discovery</li>
                    <li>Pitching and presentation skills</li>
                    <li>Team building and leadership</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="eligibility">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Who Can Apply</h3>
                  <p className="text-gray-600 mb-4">
                    Startup Dojo is open to university students and recent graduates from across the UAE with promising 
                    startup ideas. We strongly encourage Emirati youth to apply, with significant participation 
                    (81% in 2023) from Emirati founders.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">Eligibility Criteria</h4>
                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                      <li>Teams of university students or recent graduates (graduated within the last 2 years)</li>
                      <li>Based in the UAE</li>
                      <li>Have a business idea or early-stage concept</li>
                      <li>Committed to attending all program sessions and workshops</li>
                      <li>Team members from diverse universities are welcome (AUS, UOS, and beyond)</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Program Benefits</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Expert Training</h4>
                      <p className="text-gray-600">
                        Intensive training sessions and workshops led by industry experts and successful entrepreneurs.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Dedicated Mentorship</h4>
                      <p className="text-gray-600">
                        Personalized guidance from experienced mentors who will help refine your business idea.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Networking Opportunities</h4>
                      <p className="text-gray-600">
                        Connect with peers, ecosystem players, and potential collaborators.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Program Progression</h4>
                      <p className="text-gray-600">
                        Potential pathway to further Sheraa programs, including Startup Dojo+ for standout teams.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Potential Funding</h4>
                      <p className="text-gray-600">
                        Top-performing teams may receive grants and commercial licenses.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">Workspace Access</h4>
                      <p className="text-gray-600">
                        Access to Sheraa's co-working spaces during the program duration.
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
                      <h4 className="text-xl font-semibold mb-1">Applications Open</h4>
                      <p className="text-gray-500 text-sm mb-2">April 2025</p>
                      <p className="text-gray-600">Submit your application with your team and idea details.</p>
                    </div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Application Review</h4>
                      <p className="text-gray-500 text-sm mb-2">May 2025</p>
                      <p className="text-gray-600">Applications reviewed and shortlisted teams selected.</p>
                    </div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Program Kickoff</h4>
                      <p className="text-gray-500 text-sm mb-2">June 2025</p>
                      <p className="text-gray-600">Official program start with orientation and initial workshops.</p>
                    </div>
                    
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">8-Week Intensive Program</h4>
                      <p className="text-gray-500 text-sm mb-2">June - August 2025</p>
                      <p className="text-gray-600">Core program with workshops, mentoring sessions, and milestone check-ins.</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-0 bg-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                      <h4 className="text-xl font-semibold mb-1">Demo Day</h4>
                      <p className="text-gray-500 text-sm mb-2">August 2025</p>
                      <p className="text-gray-600">Final presentations and showcase of developed solutions. Top teams selected for Startup Dojo+.</p>
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
                  Applications for the 2025 cohort will open in April 2025. Register your interest now to be notified when applications open.
                </p>
                <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/eligibility">Register Interest</Link>
                </Button>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">EcoTech Solutions</h4>
                    <p className="text-sm text-gray-600">
                      "Startup Dojo helped us refine our sustainable packaging idea and connect with our first corporate client."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">StudyBuddy App</h4>
                    <p className="text-sm text-gray-600">
                      "From a classroom project to a funded startup with 5,000 users – Startup Dojo made it possible."
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
                  Have questions about the Startup Dojo program?
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

export default StartupDojo;
