import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Trophy, Rocket, Users, Star } from "lucide-react";

const YoungEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            For Young Entrepreneurs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Your Ideas Into Reality 🚀
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
            Join Sheraa's youth programs and transform from student to successful entrepreneur. 
            Learn, build, and launch your startup with our support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Meet Young Founders
            </Button>
          </div>
        </div>
      </section>

      {/* Programs for Youth */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Entrepreneurial Journey Starts Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From idea validation to launching your first startup, we're with you every step of the way.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Lightbulb className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Startup Dojo</h3>
                <p className="text-gray-600 mb-4">
                  8-week summer incubation program for university students with promising ideas.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Intensive training & mentorship
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Cash grants for winners
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Path to advanced programs
                  </div>
                </div>
                <Link to="/programs/startup-dojo">
                  <Button className="w-full">Join Startup Dojo</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Rocket className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Startup Dojo+</h3>
                <p className="text-gray-600 mb-4">
                  Accelerator program for serious student teams ready to build their MVP.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-blue-500 mr-2" />
                    4-week intensive acceleration
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-blue-500 mr-2" />
                    Equity-free funding
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-blue-500 mr-2" />
                    Fast-track to S3 Incubator
                  </div>
                </div>
                <Link to="/programs/startup-dojo-plus">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Challenges & Competitions */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Startup Challenges</h3>
              <p className="text-gray-600">
                Participate in themed competitions and showcase your innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-lg font-semibold mb-2">Ecopreneurship Program</div>
                <div className="text-sm text-gray-600 mb-4">Greentech startup challenges</div>
                <Badge variant="secondary">Sustainable Innovation</Badge>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-lg font-semibold mb-2">Pioneers of the Future</div>
                <div className="text-sm text-gray-600 mb-4">Emerging tech solutions</div>
                <Badge variant="secondary">Deep Tech</Badge>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-lg font-semibold mb-2">Startup Sharjah</div>
                <div className="text-sm text-gray-600 mb-4">Weekend bootcamp</div>
                <Badge variant="secondary">Rapid Prototyping</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Students to Successful Founders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet young entrepreneurs who turned their university projects into thriving businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Naqraa</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Online marketplace for refurbished books
                </p>
                <Badge variant="outline">AUS Graduate</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Azure3DP</h4>
                <p className="text-sm text-gray-600 mb-3">
                  3D printing marketplace platform
                </p>
                <Badge variant="outline">AUS Researcher</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">More Success Stories</h4>
                <p className="text-sm text-gray-600 mb-3">
                  85 participants, 8 winners, 7 businesses launched
                </p>
                <Badge variant="outline">Startup Dojo</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Sheraa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Young Entrepreneurs Choose Sheraa
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">18,000+</div>
              <div className="text-gray-600">Youth Upskilled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">81%</div>
              <div className="text-gray-600">Emirati Participation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">University Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">35+</div>
              <div className="text-gray-600">Training Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Entrepreneurial Journey?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Join thousands of young entrepreneurs who have transformed their ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Apply to Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Explore Challenges
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default YoungEntrepreneurIndex;