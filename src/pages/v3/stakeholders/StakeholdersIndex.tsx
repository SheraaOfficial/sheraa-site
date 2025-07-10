import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Building, Handshake, Target, PieChart } from "lucide-react";

const StakeholdersIndex: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            For Stakeholders & Partners
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partner with Sharjah's Innovation Hub
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
            Join leading corporations, investors, and government entities in building 
            the region's most dynamic entrepreneurship ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              Explore Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              View Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategic Partnership Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose how you want to engage with our ecosystem and make an impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Corporate Partners</h3>
                <p className="text-gray-600 mb-4">
                  Access innovation, provide challenges, and discover next-gen solutions.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>• Sponsor programs and events</li>
                  <li>• Provide pilot opportunities</li>
                  <li>• Access to startup deal flow</li>
                  <li>• Brand visibility at SEF</li>
                </ul>
                <Link to="/community/partnerships">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Investors</h3>
                <p className="text-gray-600 mb-4">
                  Connect with vetted startups and promising investment opportunities.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>• Curated deal flow access</li>
                  <li>• Demo Day participation</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Due diligence support</li>
                </ul>
                <Link to="/programs/deal-dock">
                  <Button className="w-full">Join Deal Dock</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Handshake className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Government & Public Sector</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate on strategic initiatives and policy development.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>• Co-develop challenges</li>
                  <li>• Align with national agendas</li>
                  <li>• Support policy development</li>
                  <li>• Economic impact reporting</li>
                </ul>
                <Button className="w-full">Get in Touch</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Ecosystem Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our partners benefit from being part of a thriving innovation ecosystem with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">180+</div>
              <div className="text-gray-600">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">$248M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1,900+</div>
              <div className="text-gray-600">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">140+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Partner Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">BEEAH Group</h4>
                    <p className="text-sm text-gray-600">Sustainability Partner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Partnered through Access Sharjah Challenge to implement innovative recycling 
                  solutions with startups like Candam Technologies.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <PieChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Crescent Enterprises</h4>
                    <p className="text-sm text-gray-600">Investment Partner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  CE-Ventures provides funding and mentorship to high-potential startups 
                  in our ecosystem, driving social entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Partnership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner with Sheraa?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Access Innovation</h4>
                    <p className="text-gray-600">
                      Tap into a curated pipeline of vetted startups across key sectors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Strategic Alignment</h4>
                    <p className="text-gray-600">
                      Align with Sharjah's economic diversification and innovation goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Talent Development</h4>
                    <p className="text-gray-600">
                      Engage with bright entrepreneurial talent from Sharjah's universities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Building className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Brand Visibility</h4>
                    <p className="text-gray-600">
                      Position your organization as an innovation leader at major events like SEF.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Handshake className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Market Access</h4>
                    <p className="text-gray-600">
                      Help startups scale while solving your organization's challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <PieChart className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Measurable Impact</h4>
                    <p className="text-gray-600">
                      Track your contribution to economic growth and job creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Centers of Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partner with us in key industry sectors driving Sharjah's economic growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Greentech and environmental solutions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Advanced Manufacturing</h4>
                <p className="text-sm text-gray-600">Industry 4.0 and smart manufacturing</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Creative Industries</h4>
                <p className="text-sm text-gray-600">Media, arts, and digital content</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-bold mb-2">EdTech</h4>
                <p className="text-sm text-gray-600">Educational technology and innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape the Future of Innovation?
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Join leading organizations in building Sharjah's entrepreneurship ecosystem 
            and creating lasting economic impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              Explore Partnerships
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default StakeholdersIndex;