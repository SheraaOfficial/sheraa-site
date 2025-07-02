
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Building, Plus, Star, TrendingUp, 
  Users, Globe, ArrowRight, Sparkles, ExternalLink
} from 'lucide-react';
import { featuredStartups } from '@/components/startups/startupsData';
import StartupSubmissionForm from '@/components/startups/StartupSubmissionForm';

const StartupDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');
  const [selectedStage, setSelectedStage] = useState('All Stages');

  const sectors = [
    "All Sectors", "Sustainability", "EdTech", "HealthTech", "AgriTech", 
    "FinTech", "Creative Industries", "Advanced Manufacturing", "Food & Beverage",
    "Retail", "Travel & Tourism", "Deep Tech"
  ];

  const programs = [
    "All Programs", "S3 Incubator", "Access Sharjah Challenge", 
    "Startup Dojo", "Startup Dojo+", "Community Member"
  ];

  const stages = [
    "All Stages", "Idea", "Pre-Seed", "Seed", "Series A", "Growth", "Scale"
  ];

  const filteredStartups = useMemo(() => {
    return featuredStartups.filter(startup => {
      const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'All Sectors' || startup.sector === selectedSector;
      const matchesProgram = selectedProgram === 'All Programs' || startup.tags?.includes(selectedProgram);
      
      return matchesSearch && matchesSector && matchesProgram;
    });
  }, [searchTerm, selectedSector, selectedProgram, selectedStage]);

  const stats = [
    { icon: Building, number: '180+', label: 'Startups Supported', color: 'text-sheraa-primary' },
    { icon: TrendingUp, number: '$248M+', label: 'Revenue Generated', color: 'text-green-600' },
    { icon: Users, number: '1,900+', label: 'Jobs Created', color: 'text-blue-600' },
    { icon: Globe, number: '71%', label: 'Survival Rate', color: 'text-purple-600' }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-primary/5 via-sheraa-teal/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-8">
                <Sparkles className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                  Startup Directory
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Innovation in Action
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our dynamic portfolio of innovative startups that are transforming industries, creating jobs, and generating significant impact across the region.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <StartupSubmissionForm trigger={
                  <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 px-8 py-6">
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Your Startup
                  </Button>
                } />
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 px-8 py-6">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center"
                  >
                    <Card className="p-6 border border-gray-200/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                        <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50 dark:bg-sheraa-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search startups by name, description, or sector..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>

              {/* Filter Chips */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Sector:</span>
                  {sectors.map((sector) => (
                    <Badge 
                      key={sector}
                      variant={selectedSector === sector ? "default" : "outline"}
                      className={`cursor-pointer px-3 py-1 text-xs ${
                        selectedSector === sector 
                          ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' 
                          : 'hover:bg-sheraa-primary/10'
                      }`}
                      onClick={() => setSelectedSector(sector)}
                    >
                      {sector}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Program:</span>
                  {programs.map((program) => (
                    <Badge 
                      key={program}
                      variant={selectedProgram === program ? "default" : "outline"}
                      className={`cursor-pointer px-3 py-1 text-xs ${
                        selectedProgram === program 
                          ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' 
                          : 'hover:bg-sheraa-primary/10'
                      }`}
                      onClick={() => setSelectedProgram(program)}
                    >
                      {program}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    Showing {filteredStartups.length} of {featuredStartups.length} startups
                  </p>
                  <StartupSubmissionForm trigger={
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit Startup
                    </Button>
                  } />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 8) }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-6">
                      {/* Logo/Image */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {startup.logo ? (
                          <img src={startup.logo} alt={startup.name} className="w-12 h-12 object-contain" />
                        ) : (
                          <Building className="w-8 h-8 text-sheraa-primary" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-bold text-lg mb-2 group-hover:text-sheraa-primary transition-colors">
                        {startup.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {startup.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          {startup.sector}
                        </Badge>
                        {startup.tags?.slice(0, 1).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {startup.website ? (
                          <Button variant="ghost" size="sm" asChild className="hover:bg-sheraa-primary/10">
                            <a href={startup.website} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Visit
                            </a>
                          </Button>
                        ) : (
                          <div />
                        )}
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredStartups.length === 0 && (
              <div className="text-center py-12">
                <Building className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No startups found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedSector('All Sectors');
                  setSelectedProgram('All Programs');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Portfolio?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our vibrant ecosystem of innovative startups and get the support you need to scale your venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/programs" className="flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/community/join">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StartupDirectory;
