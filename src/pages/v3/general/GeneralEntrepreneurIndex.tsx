import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Users, MessageCircle, Play, Download } from "lucide-react";

const GeneralEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            For Aspiring Entrepreneurs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Entrepreneurial Education
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Learn the fundamentals of entrepreneurship, connect with like-minded individuals, 
            and take the first steps toward building your own venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Learning Journey Starts Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your path and start building the skills every entrepreneur needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Startup Blueprint</h3>
                <p className="text-gray-600 mb-4">
                  Self-paced online courses covering entrepreneurship fundamentals.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Play className="h-4 w-4 text-emerald-500 mr-2" />
                    900+ users enrolled
                  </div>
                  <div className="flex items-center text-sm">
                    <Download className="h-4 w-4 text-emerald-500 mr-2" />
                    Downloadable resources
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="h-4 w-4 text-emerald-500 mr-2" />
                    Arabic & English courses
                  </div>
                </div>
                <Button className="w-full">Access Courses</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Events & Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Join our regular events to learn from experts and network with peers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                    Weekly workshops
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    Expert speakers
                  </div>
                  <div className="flex items-center text-sm">
                    <MessageCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Interactive sessions
                  </div>
                </div>
                <Link to="/events">
                  <Button className="w-full">View Events</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Access</h3>
                <p className="text-gray-600 mb-4">
                  Connect with entrepreneurs, mentors, and industry experts.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-purple-500 mr-2" />
                    200+ active members
                  </div>
                  <div className="flex items-center text-sm">
                    <MessageCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Discussion forums
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-purple-500 mr-2" />
                    Networking events
                  </div>
                </div>
                <Link to="/community">
                  <Button className="w-full">Join Community</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-600 mb-8">
              Take our quick assessment to get personalized recommendations for your entrepreneurial journey.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Entrepreneurial Readiness Assessment</h3>
              <p className="text-gray-600 mb-6">
                Answer a few questions about your background, interests, and goals to receive customized guidance.
              </p>
              <Button size="lg" className="mb-4">
                Take Assessment (3 minutes)
              </Button>
              <div className="text-sm text-gray-500">
                Get instant results and recommended next steps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Resources to Get You Started
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download templates, guides, and tools used by successful entrepreneurs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Business Plan Template</h4>
                <p className="text-sm text-gray-600">Professional template to structure your business idea</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Market Research Guide</h4>
                <p className="text-sm text-gray-600">Step-by-step guide to validate your market</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Pitch Deck Template</h4>
                <p className="text-sm text-gray-600">Create compelling presentations for investors</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-bold mb-2">Financial Model</h4>
                <p className="text-sm text-gray-600">Excel template for financial projections</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/insights">
              <Button variant="outline" size="lg">
                Browse All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter & Upcoming Events */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get the latest insights, event invitations, and entrepreneurship tips delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold">Entrepreneurship 101 Workshop</div>
                  <div className="text-sm text-gray-600">March 15, 2024 • Online</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold">Startup Pitch Night</div>
                  <div className="text-sm text-gray-600">March 22, 2024 • SRTIP</div>
                </div>
              </div>
              <Link to="/events" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mt-4">
                View all events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Join our community of aspiring entrepreneurs and start building the skills you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GeneralEntrepreneurIndex;