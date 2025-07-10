import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, TrendingUp, CheckCircle } from "lucide-react";

const AdultEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sheraa-blue to-sheraa-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            For Adult Entrepreneurs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Scale Your Startup with Sheraa
          </h1>
          <p className="text-xl md:text-2xl text-sheraa-blue-100 max-w-3xl mx-auto mb-8">
            Join our proven programs designed for serious entrepreneurs ready to build, 
            launch, and scale their ventures in Sharjah and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sheraa-blue hover:bg-gray-100">
              Take Program Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sheraa-blue">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Programs Designed for Your Stage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're validating your idea or ready to scale, we have the right program for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-sheraa-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">S3 Incubator</h3>
                <p className="text-gray-600 mb-4">
                  6-month intensive program for tech-enabled startups with market traction.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    $30K equity-free funding
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert mentorship
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Market access
                  </li>
                </ul>
                <Link to="/programs/s3-incubator">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-sheraa-orange mb-4" />
                <h3 className="text-xl font-bold mb-3">Access Sharjah Challenge</h3>
                <p className="text-gray-600 mb-4">
                  Global competition for growth-stage startups to solve real challenges.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    POC funding up to $68K
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Corporate partnerships
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Market validation
                  </li>
                </ul>
                <Link to="/programs/access-sharjah-challenge">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-sheraa-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">Sheraa Membership</h3>
                <p className="text-gray-600 mb-4">
                  Flexible support for founders with market-ready products.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Co-working access
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Networking events
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert advisory
                  </li>
                </ul>
                <Link to="/community/membership">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Real Impact, Real Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sheraa-blue mb-2">180+</div>
              <div className="text-gray-600">Startups Supported</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sheraa-orange mb-2">$248M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sheraa-teal mb-2">$171M+</div>
              <div className="text-gray-600">Capital Raised</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-sheraa-navy mb-2">71%</div>
              <div className="text-gray-600">Survival Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sheraa-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-sheraa-blue-100 max-w-2xl mx-auto mb-8">
            Join hundreds of entrepreneurs who have transformed their ideas into successful ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sheraa-blue hover:bg-gray-100">
              Apply to Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sheraa-blue">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdultEntrepreneurIndex;