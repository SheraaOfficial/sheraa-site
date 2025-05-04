
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Users, BookOpen, BarChart, ArrowRight, Award, Star } from 'lucide-react';
import { ResourcesNav } from '@/components/resources/ResourcesNav';
import { ResourceInteraction } from '@/components/resources/ResourceInteraction';
import { useResourcesGame } from '@/components/resources/ResourcesGameContext';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { AchievementBadge } from '@/components/ui/achievement-badge';

interface ResourcesPageProps {
  section?: string;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ section }) => {
  const { trackResourceView } = useResourcesGame();
  
  useEffect(() => {
    // Consider the page visited after 3 seconds
    const timer = setTimeout(() => {
      trackResourceView('resources-overview');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [trackResourceView]);
  
  const renderSection = () => {
    switch (section) {
      case 'guides':
        return <div>Redirecting to GuidesPage...</div>;
      case 'advisory':
        return <div>Redirecting to AdvisoryPage...</div>;
      case 'articles':
        return <div>Redirecting to ArticlesPage...</div>;
      case 'impact-reports':
        return <div>Redirecting to ImpactReportsPage...</div>;
      default:
        return <ResourcesOverview />;
    }
  };

  return (
    <MainLayout>
      <ResourcesNav />
      <div className="container mx-auto px-4 py-12">
        {renderSection()}
      </div>
    </MainLayout>
  );
};

const ResourcesOverview: React.FC = () => {
  const { gameState } = useResourcesGame();
  
  const resourceCategories = [
    {
      title: "Guides & Toolkits",
      description: "Practical templates, checklists, and step-by-step guides covering essential business functions – from planning to execution.",
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      link: "/resources/guides",
      color: "bg-blue-50 border-blue-200",
      colorHover: "group-hover:bg-blue-100"
    },
    {
      title: "Advisory Services",
      description: "Connect with experienced mentors and subject matter experts for personalized guidance on your specific challenges.",
      icon: <Users className="h-10 w-10 text-green-500" />,
      link: "/resources/advisory",
      color: "bg-green-50 border-green-200",
      colorHover: "group-hover:bg-green-100"
    },
    {
      title: "Articles & Insights",
      description: "Stay informed with the latest trends, best practices, ecosystem news, and success stories from the Sheraa community and beyond.",
      icon: <BookOpen className="h-10 w-10 text-purple-500" />,
      link: "/resources/articles",
      color: "bg-purple-50 border-purple-200",
      colorHover: "group-hover:bg-purple-100"
    },
    {
      title: "Impact Reports",
      description: "Discover the collective achievements of the Sheraa ecosystem and the impact of entrepreneurship in Sharjah.",
      icon: <BarChart className="h-10 w-10 text-orange-500" />,
      link: "/resources/impact-reports",
      color: "bg-orange-50 border-orange-200",
      colorHover: "group-hover:bg-orange-100"
    },
  ];

  const featuredResource = {
    id: "featured-pitch-deck",
    title: "Ultimate Startup Pitch Deck Template",
    description: "A comprehensive, customizable template to help you create a compelling investor pitch deck. Includes detailed sections, design tips, and real-world examples.",
    type: "Template",
    link: "/resources/guides",
  };
  
  // Calculate overall completion percentage
  const totalCategories = 4; // guides, advisory, articles, reports
  const visitedCategories = new Set();
  
  gameState.resourcesViewed.forEach(resource => {
    if (resource.startsWith('guides-')) visitedCategories.add('guides');
    if (resource.startsWith('advisory-')) visitedCategories.add('advisory');
    if (resource.startsWith('articles-')) visitedCategories.add('articles');
    if (resource.startsWith('impact-')) visitedCategories.add('impact');
    if (resource === 'resources-overview') visitedCategories.add('overview');
  });
  
  const completionPercentage = (visitedCategories.size / (totalCategories + 1)) * 100;

  return (
    <>
      <div className="max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Your Entrepreneurial Toolkit: Knowledge & Support from Sheraa</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600">
            Building a successful venture requires more than just a great idea. Sheraa provides entrepreneurs with access to essential resources, 
            expert guidance, and timely insights to navigate the complexities of the startup journey. Explore our curated tools, advisory services, 
            and knowledge base designed to empower you at every stage.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="bg-sheraa-light/50 p-6 rounded-xl mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-amber-500" />
            Your Discovery Progress
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex-shrink-0">
              <ProgressCircle percentage={completionPercentage} size={80} color="stroke-sheraa-primary">
                <div className="text-lg font-bold">{Math.round(completionPercentage)}%</div>
              </ProgressCircle>
            </div>
            
            <div className="flex-grow">
              <h3 className="font-semibold mb-2">Resource Explorer</h3>
              <p className="text-sm text-gray-600 mb-3">
                Discover all resource categories to unlock achievements and earn points!
              </p>
              
              <div className="grid grid-cols-5 gap-2">
                {resourceCategories.map((category, idx) => (
                  <div 
                    key={idx} 
                    className={`text-xs text-center p-2 rounded ${visitedCategories.has(category.title.toLowerCase().split(' ')[0]) 
                      ? 'bg-sheraa-primary text-white' 
                      : 'bg-gray-200 text-gray-500'}`}
                  >
                    {category.title.split(' ')[0]}
                  </div>
                ))}
                <div 
                  className={`text-xs text-center p-2 rounded ${visitedCategories.has('overview') 
                    ? 'bg-sheraa-primary text-white' 
                    : 'bg-gray-200 text-gray-500'}`}
                >
                  Overview
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Your Achievements</h3>
          <div className="flex flex-wrap gap-3">
            <AchievementBadge type="explorer" level={1} achieved={gameState.achievements.explorer.achieved} />
            <AchievementBadge type="collector" level={1} achieved={gameState.achievements.collector.achieved} />
            <AchievementBadge type="expert" level={1} achieved={gameState.achievements.expert.achieved} />
            <AchievementBadge type="contributor" level={1} achieved={gameState.achievements.contributor.achieved} />
          </div>
        </div>
      </motion.div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {resourceCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
          >
            <Link to={category.link} className="group block h-full">
              <Card className={`border hover:shadow-md transition-all h-full ${category.color}`}>
                <CardContent className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-3 rounded-md bg-white/50 ${category.colorHover} transition-colors`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-sheraa-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center text-sheraa-primary font-medium group-hover:translate-x-1 transition-transform">
                        Explore {category.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Featured Resource */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="h-5 w-5 mr-2 text-amber-500 fill-amber-500" />
          Featured Resource
        </h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-sheraa-primary/10 p-8 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              >
                <FileText className="h-24 w-24 text-sheraa-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2 p-8">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {featuredResource.type}
              </span>
              <h3 className="text-2xl font-semibold mb-3">{featuredResource.title}</h3>
              <p className="text-gray-600 mb-6">{featuredResource.description}</p>
              <div className="flex justify-between items-center">
                <ResourceInteraction 
                  resourceId={featuredResource.id}
                  resourceType="guide"
                  resourceName={featuredResource.title}
                />
                <Button asChild>
                  <Link to={featuredResource.link}>Download Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Why Utilize Sheraa Resources */}
      <motion.div 
        className="bg-sheraa-light p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6">Why Utilize Sheraa Resources?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our resources are curated based on the real-world needs of founders within our ecosystem. They offer actionable advice, 
          leverage the expertise of our network, and provide insights specific to the Sharjah and UAE context, saving you time 
          and helping you avoid common pitfalls.
        </p>
        <Button asChild size="lg">
          <Link to="/resources/guides">Explore All Resources</Link>
        </Button>
      </motion.div>
    </>
  );
};

export default ResourcesPage;
