
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

interface Startup {
  id: string;
  name: string;
  description: string;
  sector: string;
  stage: string;
  logo?: string;
}

const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'EcoTech Solutions',
    description: 'Sustainable technology for waste management and circular economy solutions.',
    sector: 'Sustainability',
    stage: 'Growth'
  },
  {
    id: '2',
    name: 'EduLearn AI',
    description: 'AI-powered personalized learning platform for K-12 education.',
    sector: 'EdTech',
    stage: 'Seed'
  },
  {
    id: '3',
    name: 'HealthTrack Pro',
    description: 'Digital health monitoring and telemedicine platform.',
    sector: 'HealthTech',
    stage: 'Pre-Seed'
  },
  {
    id: '4',
    name: 'AgriSmart',
    description: 'IoT solutions for precision agriculture and crop optimization.',
    sector: 'AgriTech',
    stage: 'Growth'
  },
  {
    id: '5',
    name: 'FinFlow',
    description: 'Digital payments and financial inclusion platform for SMEs.',
    sector: 'FinTech',
    stage: 'Seed'
  },
  {
    id: '6',
    name: 'Creative Hub',
    description: 'Platform connecting creative professionals with businesses.',
    sector: 'Creative',
    stage: 'Pre-Seed'
  }
];

const StartupsCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {mockStartups.map((startup) => (
          <Card key={startup.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-sheraa-primary/20">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sheraa-primary to-sheraa-coral rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-sheraa-primary transition-colors" />
              </div>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-sheraa-primary transition-colors">
                {startup.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {startup.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {startup.sector}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {startup.stage}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StartupsCarousel;
