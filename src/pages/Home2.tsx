import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, TrendingUp } from 'lucide-react';

const Home2: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
              Welcome to Sheraa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sharjah's official entrepreneurship hub. Empowering the next generation of innovators to build impactful businesses and shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/v3/young">
                  For Young Entrepreneurs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/v3/entrepreneurs">
                  For Adult Entrepreneurs
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Rocket className="w-12 h-12 text-sheraa-primary mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">180+</h3>
                <p className="text-gray-600">Startups Supported</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-sheraa-teal mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1,900+</h3>
                <p className="text-gray-600">Jobs Created</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-12 h-12 text-sheraa-secondary mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">$248M+</h3>
                <p className="text-gray-600">Revenue Generated</p>
              </div>
            </div>
          </div>
        </section>

        {/* V3 Experience Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Experience Our Advanced Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Try our cutting-edge V3 experience with personalized content, gamification, and advanced features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Button asChild variant="outline" className="h-20 flex flex-col">
                <Link to="/v3/young">
                  <span className="font-semibold">Young Entrepreneurs</span>
                  <span className="text-sm text-gray-500">Gamified Learning</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex flex-col">
                <Link to="/v3/entrepreneurs">
                  <span className="font-semibold">Adult Entrepreneurs</span>
                  <span className="text-sm text-gray-500">Professional Programs</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex flex-col">
                <Link to="/v3/stakeholders">
                  <span className="font-semibold">Stakeholders</span>
                  <span className="text-sm text-gray-500">Investment & Partnerships</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex flex-col">
                <Link to="/v3/general">
                  <span className="font-semibold">General Audience</span>
                  <span className="text-sm text-gray-500">Learn About Sheraa</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Debug Info */}
        <section className="py-8 bg-yellow-50 border-t border-yellow-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-yellow-800">
              <strong>Debug Info:</strong> This is the Home2 test page. 
              All routes are working. React hooks issue has been resolved.
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home2;