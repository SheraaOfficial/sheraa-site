import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter } from 'lucide-react';
import { StartupFilters } from './components/StartupFilters';
import { StartupCard } from './components/StartupCard';
import { useStartupFiltering } from './hooks/useStartupFiltering';
import { Startup } from './types/startup';

// Sample startup data - in a real app, this would come from an API
const startups: Startup[] = [
  {
    id: '1',
    name: 'Green Future Project',
    description: 'Pioneering sustainable solutions for environmental challenges across the UAE. Our innovative approach combines technology with eco-conscious practices.',
    logo: '/placeholder.svg',
    sector: 'Sustainability',
    program: 'Access Sharjah Challenge',
    stage: 'Growth',
    website: 'https://example.com/greenfuture'
  },
  {
    id: '2',
    name: 'Arabee',
    description: 'Revolutionary Arabic language learning platform using AI and gamification to make education engaging and effective for modern learners.',
    logo: '/placeholder.svg',
    sector: 'EdTech',
    program: 'S3 Incubator',
    stage: 'Seed',
    website: 'https://example.com/arabee'
  },
  {
    id: '3',
    name: 'KRISPR',
    description: 'Transforming the future of food technology with innovative solutions for sustainable agriculture and food production systems.',
    logo: '/placeholder.svg',
    sector: 'FoodTech',
    program: 'S3 Incubator',
    stage: 'Seed',
    website: 'https://example.com/krispr'
  },
  {
    id: '4',
    name: 'Manhat',
    description: 'Innovative water technology solutions addressing water scarcity through sustainable desalination processes.',
    logo: '/placeholder.svg',
    sector: 'WaterTech',
    program: 'Access Sharjah Challenge',
    stage: 'Growth',
    website: 'https://example.com/manhat'
  },
  {
    id: '5',
    name: 'Palmade',
    description: 'Digital platform connecting artisans with global markets, preserving cultural heritage while enabling sustainable livelihoods.',
    logo: '/placeholder.svg',
    sector: 'Creative Industries',
    program: 'Startup Dojo+',
    stage: 'Pre-Seed',
    website: 'https://example.com/palmade'
  },
  {
    id: '6',
    name: 'Lune',
    description: 'FinTech solution providing personalized carbon footprint tracking and sustainability insights for consumers and businesses.',
    logo: '/placeholder.svg',
    sector: 'FinTech',
    program: 'S3 Incubator',
    stage: 'Growth',
    website: 'https://example.com/lune'
  }
];

const StartupDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { 
    filteredStartups, 
    selectedSector, 
    selectedProgram, 
    selectedStage,
    setSelectedSector,
    setSelectedProgram,
    setSelectedStage,
    resetFilters
  } = useStartupFiltering(startups, searchTerm);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark">Our Startups Showcase</h2>
          <p className="text-gray-600">
            Explore the innovative companies building the future from Sharjah. These ventures are 
            tackling challenges, creating jobs, generating significant revenue, and attracting substantial investment.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <StartupFilters
              selectedSector={selectedSector}
              selectedProgram={selectedProgram}
              selectedStage={selectedStage}
              onSectorChange={setSelectedSector}
              onProgramChange={setSelectedProgram}
              onStageChange={setSelectedStage}
              onResetFilters={resetFilters}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup, index) => (
              <StartupCard key={startup.id} startup={startup} index={index} />
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No startups match your filters. Please try different criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupDirectory;
