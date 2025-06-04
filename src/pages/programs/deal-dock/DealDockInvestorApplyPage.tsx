
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Building, Users, CheckCircle } from 'lucide-react';

const DealDockInvestorApplyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Deal Dock Investor Application
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">
              Join Our Exclusive Investor Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get access to high-quality deal flow from the MENA region's most promising startups.
              This application form is for investors and investor groups.
            </p>
          </motion.div>

          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <Building className="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Investor Application Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're currently optimizing our investor onboarding process. Please contact our team directly 
                for personalized investor registration.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Contact Investor Relations
              </Button>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Why Join Deal Dock?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Quality Deal Flow</h4>
                <p className="text-gray-600">Access to pre-screened, high-potential startups from Sheraa's ecosystem</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Co-Investment</h4>
                <p className="text-gray-600">Opportunities to co-invest alongside other reputable investors and funds</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Due Diligence</h4>
                <p className="text-gray-600">Comprehensive startup vetting and due diligence support from our team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DealDockInvestorApplyPage;
