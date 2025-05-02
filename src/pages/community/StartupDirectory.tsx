
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter } from 'lucide-react';

interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  sector: string;
  program: string;
  stage: string;
  website: string;
}

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

const sectors = ['All', 'Sustainability', 'EdTech', 'FoodTech', 'WaterTech', 'Creative Industries', 'FinTech'];
const programs = ['All', 'S3 Incubator', 'Access Sharjah Challenge', 'Startup Dojo+', 'Startup Dojo'];
const stages = ['All', 'Idea', 'Pre-Seed', 'Seed', 'Growth', 'Scale'];

const StartupDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const filteredStartups = startups.filter(startup => {
    return (
      (searchTerm === '' || 
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        startup.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSector === 'All' || startup.sector === selectedSector) &&
      (selectedProgram === 'All' || startup.program === selectedProgram) &&
      (selectedStage === 'All' || startup.stage === selectedStage)
    );
  });

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
            <div className="flex flex-wrap gap-2">
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector} Sector</option>
                ))}
              </select>
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
              >
                {programs.map(program => (
                  <option key={program} value={program}>{program} Program</option>
                ))}
              </select>
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage} Stage</option>
                ))}
              </select>
              <Button variant="outline" size="icon" className="p-2" onClick={() => {
                setSearchTerm('');
                setSelectedSector('All');
                setSelectedProgram('All');
                setSelectedStage('All');
              }}>
                <Filter size={18} />
                <span className="sr-only">Reset filters</span>
              </Button>
            </div>
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

const StartupCard = ({ startup, index }: { startup: Startup; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16 border-2 border-gray-100">
              <AvatarImage src={startup.logo} alt={startup.name} />
              <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold">
                {startup.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-lg text-sheraa-primary">{startup.name}</h3>
              <div className="mt-1">
                <Badge variant="soft-coral">{startup.sector}</Badge>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{startup.description}</p>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Program</span>
              <span className="text-sm font-medium">{startup.program}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Stage</span>
              <span className="text-sm font-medium">{startup.stage}</span>
            </div>
            <a 
              href={startup.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sheraa-primary hover:underline text-sm"
            >
              Visit website →
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StartupDirectory;
