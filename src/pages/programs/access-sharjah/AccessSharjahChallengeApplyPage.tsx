
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Target, Zap } from 'lucide-react';

const AccessSharjahChallengeApplyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <Globe className="w-4 h-4 mr-2" />
              Global Startup Competition
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
              Access Sharjah Challenge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Solve real-world challenges from Sharjah's leading organizations and win
              significant POC funding and direct market access.
            </p>
          </motion.div>

          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <Target className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">2025 Challenge Applications</h2>
              <p className="text-gray-600 mb-6">
                Applications for the 2025 Access Sharjah Challenge will open in January 2025.
                The focus areas will include AgriTech and Livestock Health innovations.
                Join our notification list to be alerted when applications open.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Get Notified
              </Button>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Challenge Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">AED 250K Grant</h4>
                <p className="text-gray-600">Win substantial POC implementation funding with no equity taken</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Target className="w-10 h-10 text-green-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Direct Client Access</h4>
                <p className="text-gray-600">Implement your solution with major Sharjah organizations</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Globe className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Market Entry</h4>
                <p className="text-gray-600">Fast-track your entry into the UAE market with our support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccessSharjahChallengeApplyPage;
