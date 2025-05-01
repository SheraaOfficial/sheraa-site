
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Building2, ArrowRight, ExternalLink, Users, Globe, TrendingUp, Shield } from 'lucide-react';

const SMESupport: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Established Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">SME Support Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            Elevating Sharjah's SMEs through innovation, market access, and growth opportunities. 
            Our tailored support connects established businesses to the resources and networks needed to thrive 
            in today's competitive landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#partners">View Partners</a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">60,000+</h3>
            <p className="text-gray-600">SMEs in Sharjah</p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">Key</h3>
            <p className="text-gray-600">Economic Contributors</p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-orange-600 mb-2">Targeted</h3>
            <p className="text-gray-600">Support Mechanisms</p>
          </div>
        </div>

        {/* Why SME Support Matters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why SME Support Matters</h2>
          <div className="bg-gradient-to-r from-white to-orange-50 p-8 rounded-lg border border-orange-100">
            <p className="text-lg text-gray-700 mb-4">
              Small and Medium Enterprises (SMEs) are the backbone of Sharjah's economy, representing over 60,000 businesses 
              across diverse sectors. Supporting these established businesses alongside startups creates a more robust and 
              resilient economic landscape.
            </p>
            <p className="text-lg text-gray-700">
              By fostering innovation within existing businesses, we enhance competitiveness, create stable jobs, and contribute 
              to Sharjah's long-term economic diversification goals. Sheraa acts as a bridge, connecting SMEs to the resources 
              and networks often associated with the startup world.
            </p>
          </div>
        </div>

        {/* Areas of Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Areas of Support</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Sheraa facilitates access to support mechanisms crucial for SME growth through strategic partnerships
            with key organizations in the UAE ecosystem:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access to Finance</h3>
                <p className="text-gray-600 mb-4">
                  Connecting SMEs with financing solutions for working capital, equipment purchase, and expansion projects 
                  through partners like Emirates Development Bank (EDB), which offers preferential terms and incubation support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Working capital loans</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Equipment financing</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Expansion project funding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Market Access & Export Development</h3>
                <p className="text-gray-600 mb-4">
                  Facilitating connections to new markets, trade fairs, and export opportunities via collaborations with 
                  entities like the Sharjah Chamber of Commerce and Industry (SCCI) and Etihad Credit Insurance (ECI).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Trade fair participation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Export risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Market entry strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation & Technology Adoption</h3>
                <p className="text-gray-600 mb-4">
                  Encouraging the adoption of advanced manufacturing techniques, digital transformation, and sustainable practices 
                  through initiatives like the Center of Excellence (CoE) for Advanced Manufacturing and CPG.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Digital transformation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sustainable practices implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Advanced manufacturing techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Capacity Building & Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Providing access to workshops, training programs, and mentorship from industry experts facilitated 
                  by Sheraa and its partners (MoIAT, ECI).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Specialized workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Industry expert mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Leadership development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Can Benefit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who Can Benefit</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-600 mb-6">
              Established Small and Medium Enterprises based in or looking to expand into Sharjah, 
              particularly those operating in or seeking to innovate within sectors like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Advanced Manufacturing", "Consumer Packaged Goods", "Sustainability", 
                "Creative Industries", "Food & Beverage", "Travel & Tourism", "Education", "Healthcare"
              ].map((sector, idx) => (
                <div key={idx} className="flex items-center">
                  <Check size={16} className="text-orange-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Partners Section */}
        <div id="partners" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Key Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <span className="text-2xl font-bold text-gray-700">Emirates Development Bank</span>
              </div>
              <p className="text-gray-600 mb-4">
                Providing financing solutions and incubation support for SMEs to drive economic development.
              </p>
              <a href="#" className="text-sheraa-primary hover:underline flex items-center">
                View EDB Programs <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <span className="text-2xl font-bold text-gray-700">Sharjah Chamber of Commerce</span>
              </div>
              <p className="text-gray-600 mb-4">
                Facilitating market connections, trade opportunities, and business development services.
              </p>
              <a href="#" className="text-sheraa-primary hover:underline flex items-center">
                SCCI Resources <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <span className="text-2xl font-bold text-gray-700">Etihad Credit Insurance</span>
              </div>
              <p className="text-gray-600 mb-4">
                Providing vital support in financial risk mitigation for exporters and expanding businesses.
              </p>
              <a href="#" className="text-sheraa-primary hover:underline flex items-center">
                ECI Services <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center">
                <span className="text-2xl font-bold text-gray-700">Ministry of Industry & Advanced Technology</span>
              </div>
              <p className="text-gray-600 mb-4">
                Supporting the adoption of advanced technologies and innovation in manufacturing.
              </p>
              <a href="#" className="text-sheraa-primary hover:underline flex items-center">
                MoIAT Initiatives <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* How to Engage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How to Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">Explore Partnerships</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Learn more about our key partners (EDB, SCCI, ECI, MoIAT) and the specific support they offer.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <a href="#partners">View Partners</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">Join the Community</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Consider Sheraa Membership for access to networks and resources that can help your business grow.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/community/join">Learn About Membership</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Reach out to discuss your specific needs and how Sheraa can facilitate connections or support.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-orange-50 p-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Success Story</h2>
            <p className="text-xl text-gray-700 italic mb-6">
              "Sheraa's SME support program connected us with Emirates Development Bank, which provided the financing 
              we needed for our expansion. Their guidance on export opportunities also helped us enter two new markets 
              in the GCC region."
            </p>
            <div>
              <p className="font-semibold">Ahmed Al Naqbi</p>
              <p className="text-gray-600">CEO, Gulf Manufacturing Solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with Sheraa today to access the resources and support your SME needs to innovate and expand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SMESupport;
