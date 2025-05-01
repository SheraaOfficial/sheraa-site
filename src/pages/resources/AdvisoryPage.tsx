
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, UserCircle2, Users2, ExternalLink } from 'lucide-react';

const AdvisoryPage: React.FC = () => {
  const expertAreas = [
    {
      title: "Legal",
      experts: 5,
      icon: <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
      </div>,
      description: "Business setup, contracts, intellectual property, compliance with UAE regulations",
    },
    {
      title: "Finance & Fundraising",
      experts: 7,
      icon: <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bar-chart-big"><path d="M3 3v18h18"></path><rect x="7" y="8" width="2" height="8"></rect><rect x="11" y="6" width="2" height="10"></rect><rect x="15" y="4" width="2" height="12"></rect><rect x="19" y="2" width="2" height="14"></rect></svg>
      </div>,
      description: "Financial modeling, investor pitch preparation, fundraising strategies, valuation",
    },
    {
      title: "Marketing & Sales",
      experts: 6,
      icon: <div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 13Z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
      </div>,
      description: "Growth strategies, digital marketing, branding, customer acquisition",
    },
    {
      title: "Technology & Product",
      experts: 8,
      icon: <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </div>,
      description: "Product development, tech architecture, user experience, development resources",
    },
    {
      title: "HR & Talent",
      experts: 4,
      icon: <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center">
        <Users2 size={24} />
      </div>,
      description: "Recruitment, team building, company culture, compensation planning",
    },
    {
      title: "Operations & Strategy",
      experts: 5,
      icon: <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-workflow"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><path d="M7 10v4"></path><path d="M17 10v4"></path><path d="M10 7h4"></path><path d="M10 17h4"></path></svg>
      </div>,
      description: "Business operations, scaling strategies, process optimization",
    },
  ];
  
  const featuredExperts = [
    {
      name: "Sara Al Marzooqi",
      title: "Legal Advisor",
      specialty: "UAE Business Law & IP",
      image: "/placeholder.svg",
      sessions: 35,
    },
    {
      name: "Omar Khan",
      title: "Investment Specialist",
      specialty: "Venture Capital & Fundraising",
      image: "/placeholder.svg",
      sessions: 48,
    },
    {
      name: "Nadia Rahman",
      title: "Marketing Director",
      specialty: "Digital Growth & Branding",
      image: "/placeholder.svg",
      sessions: 62,
    },
  ];
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Expert Guidance When You Need It Most</h1>
          <p className="text-lg text-gray-600">
            Navigate your startup challenges with confidence by tapping into Sheraa's extensive network of mentors and 
            subject matter experts. Our advisory services provide personalized, one-on-one support tailored to your specific needs.
          </p>
        </div>
        
        {/* Meet Your On-Demand Advisors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Your On-Demand Advisors</h2>
          <div className="bg-sheraa-light p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-6">
                  Gain access to over 30+ seasoned professionals covering a wide range of critical business areas. 
                  Whether you need help with legal complexities, fundraising strategies, marketing plans, technical development, 
                  or HR processes, our experts are here to provide actionable advice through personalized sessions.
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <UserCircle2 className="text-sheraa-primary" size={20} />
                    <span className="text-gray-700">30+ Industry Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-sheraa-primary" size={20} />
                    <span className="text-gray-700">1:1 Personalized Sessions</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Eligible Sheraa members and program participants receive advisory credits or facilitated introductions 
                  to connect with relevant experts for dedicated one-on-one sessions.
                </p>
              </div>
              
              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-sheraa-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span>Select your area of need from our expert categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-sheraa-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span>Request a session through your Sheraa program coordinator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-sheraa-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span>Get matched with the perfect advisor for your specific challenge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-sheraa-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <span>Schedule and attend your advisory session</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertAreas.map((area, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  {area.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="text-sm text-sheraa-primary">{area.experts} Expert Advisors</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                <Button variant="outline" className="w-full text-sheraa-primary border-sheraa-primary/30 hover:bg-sheraa-primary/5">
                  Request Advisor
                </Button>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Entrepreneurs-in-Residence */}
        <div className="mb-16 bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Entrepreneurs-in-Residence (EIRs)</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Startups participating in select programs like the S3 Incubator benefit from regular check-ins and 
                strategic guidance from dedicated Entrepreneurs-in-Residence (EIRs).
              </p>
              <p className="text-gray-700 mb-6">
                EIRs provide consistent mentorship and help keep you accountable to your goals, offering insights 
                based on their own entrepreneurial journeys and industry expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/programs/s3-incubator">Learn About S3 Incubator</Link>
                </Button>
                <Button variant="outline">
                  <Link to="/programs" className="flex items-center">
                    View All Programs <ExternalLink size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Calendar size={18} className="mr-2 text-sheraa-primary" /> 
                  EIR Engagement
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                    <span>Bi-weekly check-in sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                    <span>Milestone-based progress tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                    <span>Strategic guidance on critical decisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                    <span>Network introductions as needed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                    <span>Growth planning and execution support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Experts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredExperts.map((expert, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                  <p className="text-sheraa-primary">{expert.title}</p>
                  <p className="text-gray-500 text-sm mb-4">Specialty: {expert.specialty}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{expert.sessions} Sessions Completed</span>
                    <Button variant="ghost" size="sm">View Profile</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Benefits of Sheraa Advisory */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Benefits of Sheraa Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personalized Solutions",
                description: "Get advice specific to your unique business context and challenges.",
              },
              {
                title: "Actionable Insights",
                description: "Move beyond theory with practical steps you can implement immediately.",
              },
              {
                title: "Network Expansion",
                description: "Build relationships with experienced professionals in your industry.",
              },
              {
                title: "Avoid Costly Mistakes",
                description: "Leverage expert knowledge to make informed decisions for your business.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* How to Access */}
        <div className="bg-sheraa-primary/10 p-8 rounded-lg text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How to Access</h2>
          <p className="text-gray-700 mb-6">
            Advisory services are primarily available to startups participating in Sheraa programs (like S3) 
            and through Sheraa Membership benefits. Check program details or membership benefits for eligibility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/community/join">Become a Member</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/community/partnerships">Become a Sheraa Mentor</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdvisoryPage;
