
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Briefcase, Code, BarChart, FileText, Bulb } from 'lucide-react';

const AdvisoryPage = () => {
  // Sample advisors data
  const advisors = [
    {
      name: "Sarah Al Amiri",
      title: "Technology Strategy Advisor",
      expertise: "Deep Tech, AI, Space Technology",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mohammed Rahman",
      title: "Investment & Finance Mentor",
      expertise: "Venture Capital, Financial Modeling",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Leila Janah",
      title: "Marketing & Growth Expert",
      expertise: "Digital Marketing, Brand Development",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Omar Al Busaidy",
      title: "Operations & Strategy Consultant",
      expertise: "Scaling, Process Optimization",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Fatima Hassan",
      title: "Legal Advisor",
      expertise: "Business Setup, IP Protection",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      name: "Raj Kapoor",
      title: "Product Development Specialist",
      expertise: "UX/UI, Product Management",
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    }
  ];

  const expertiseAreas = [
    { name: "Legal", icon: Briefcase, color: "text-blue-500", bgColor: "bg-blue-50" },
    { name: "Finance & Fundraising", icon: BarChart, color: "text-green-500", bgColor: "bg-green-50" },
    { name: "Marketing & Sales", icon: Bulb, color: "text-purple-500", bgColor: "bg-purple-50" },
    { name: "Technology & Product", icon: Code, color: "text-red-500", bgColor: "bg-red-50" },
    { name: "HR & Talent", icon: Users, color: "text-amber-500", bgColor: "bg-amber-50" },
    { name: "Operations & Strategy", icon: FileText, color: "text-teal-500", bgColor: "bg-teal-50" }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Expert Guidance When You Need It Most</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Navigate your startup challenges with confidence by tapping into Sheraa's extensive network of mentors and subject matter experts. 
            Our advisory services provide personalized, one-on-one support tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Meet Your On-Demand Advisors</h2>
            <p className="text-gray-600 mb-6">
              Gain access to over 30+ seasoned professionals covering a wide range of critical business areas. Whether you need 
              help with legal complexities, fundraising strategies, marketing plans, technical development, or HR processes, 
              our experts are here to provide actionable advice through personalized sessions.
            </p>

            <Card className="border-none bg-gradient-to-br from-white to-sheraa-light shadow-md mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4 list-decimal pl-5">
                  <li className="text-gray-600">Eligible Sheraa members and program participants receive advisory credits or facilitated introductions.</li>
                  <li className="text-gray-600">Browse our expert network and select advisors based on your specific needs.</li>
                  <li className="text-gray-600">Schedule dedicated 1:1 sessions at a time that works for you.</li>
                  <li className="text-gray-600">Come prepared with specific questions to maximize your session value.</li>
                  <li className="text-gray-600">Implement expert advice and track your progress.</li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {expertiseAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className={`p-2 rounded-full ${area.bgColor}`}>
                    <area.icon className={`h-4 w-4 ${area.color}`} />
                  </div>
                  <span className="font-medium text-gray-700">{area.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Entrepreneurs-in-Residence (EIRs)</h3>
            <p className="text-gray-600 mb-6">
              Startups participating in select programs like the S3 Incubator benefit from regular check-ins and strategic 
              guidance from dedicated Entrepreneurs-in-Residence (EIRs). EIRs provide consistent mentorship and help keep 
              you accountable to your goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advisors.map((advisor, idx) => (
                <Card key={idx} className="border overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[3/2] bg-gray-100">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{advisor.name}</h3>
                    <p className="text-sheraa-primary text-sm mb-1">{advisor.title}</p>
                    <p className="text-gray-500 text-xs">{advisor.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-sheraa-light rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Benefits of Sheraa Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Personalized Solutions</h3>
              <p className="text-gray-600">Get advice specific to your unique business context and challenges.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-600">Move beyond theory with practical steps you can implement immediately.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Network Expansion</h3>
              <p className="text-gray-600">Build relationships with experienced professionals in your industry.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Avoid Costly Mistakes</h3>
              <p className="text-gray-600">Leverage expert knowledge to make informed decisions for your business.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How to Access Advisory Services</h2>
          <p className="text-gray-600 mb-8">
            Advisory services are primarily available to startups participating in Sheraa programs (like S3 Incubator) and 
            through Sheraa Membership benefits. Check program details or membership benefits for eligibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none bg-gradient-to-br from-sheraa-primary/5 to-sheraa-secondary/5">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-sheraa-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Join a Sheraa Program</h3>
                <p className="text-gray-600 mb-6">
                  Enroll in one of our incubator or accelerator programs to get direct access to our advisor network.
                </p>
                <Button asChild>
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-to-br from-sheraa-primary/5 to-sheraa-secondary/5">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-sheraa-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Become a Sheraa Member</h3>
                <p className="text-gray-600 mb-6">
                  Join our membership program to access advisory services and other benefits for your startup.
                </p>
                <Button asChild>
                  <Link to="/community/join">Learn About Membership</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-sheraa-primary to-sheraa-secondary p-8 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Expert Advice?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Take the first step toward solving your business challenges with guidance from experienced professionals.
          </p>
          <GradientButton asChild variant="white" size="lg">
            <Link to="/contact?inquiry=advisory">Contact Us About Advisory</Link>
          </GradientButton>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdvisoryPage;
