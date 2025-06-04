
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { School, Book, CheckCircle } from 'lucide-react';

const StartupDojoApplyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-500 text-white">
              <School className="w-4 h-4 mr-2" />
              Student Program Application
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Startup Dojo Application
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your ideas into action with our intensive 8-week summer incubation program
              designed exclusively for university students and recent graduates.
            </p>
          </motion.div>

          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <School className="w-20 h-20 text-blue-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Applications Opening Soon</h2>
              <p className="text-gray-600 mb-6">
                The next cohort of Startup Dojo will begin in Summer 2025. Applications will open in March 2025.
                Join our waitlist to be notified when applications open.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Join Waitlist
              </Button>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Program Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Book className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Mentorship & Training</h4>
                <p className="text-gray-600">Learn from experienced entrepreneurs and industry experts</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <School className="w-10 h-10 text-green-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Market Validation</h4>
                <p className="text-gray-600">Test and validate your ideas with real customers and market research</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Startup Resources</h4>
                <p className="text-gray-600">Access workspace, tools, and resources to build your startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StartupDojoApplyPage;
