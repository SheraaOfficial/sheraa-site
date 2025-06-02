
import { SearchResult } from '@/types/search';
import { enhancedStartupsData } from '@/data/enhancedStartupsData';
import { successStories } from '@/data/successStories';
import { testimonials } from '@/data/testimonials';

// Create search index from all content
const createSearchIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];

  // Add startups to search index
  enhancedStartupsData.forEach(startup => {
    results.push({
      id: startup.id,
      type: 'startup',
      title: startup.name,
      description: startup.description,
      path: `/community/startups?highlight=${startup.id}`,
      relevanceScore: 0,
      tags: [startup.sector, startup.program, startup.stage, ...startup.technologies]
    });
  });

  // Add programs to search index
  const programs = [
    {
      id: 'start-young',
      title: 'Start Young - Startup Dojo',
      description: 'Youth entrepreneurship programs for university students',
      path: '/programs/start-young'
    },
    {
      id: 's3-incubator',
      title: 'S3 Incubator',
      description: 'Our flagship 6-month equity-free incubation program',
      path: '/programs/s3-incubator'
    },
    {
      id: 'access-sharjah-challenge',
      title: 'Access Sharjah Challenge',
      description: 'Global competition for growth-stage startups',
      path: '/programs/access-sharjah-challenge'
    },
    {
      id: 'deal-dock',
      title: 'Deal Dock',
      description: 'Exclusive investment platform for investors',
      path: '/programs/deal-dock'
    }
  ];

  programs.forEach(program => {
    results.push({
      id: program.id,
      type: 'program',
      title: program.title,
      description: program.description,
      path: program.path,
      relevanceScore: 0
    });
  });

  // Add events to search index
  results.push({
    id: 'sef-2026',
    type: 'event',
    title: 'Sharjah Entrepreneurship Festival 2026',
    description: 'The region\'s largest entrepreneurship festival',
    path: '/events/sef',
    relevanceScore: 0,
    tags: ['conference', 'networking', 'speakers', 'workshops']
  });

  // Add insights/resources to search index
  const insights = [
    {
      id: 'guides',
      title: 'Guides & Toolkits',
      description: 'Practical resources for building your business',
      path: '/insights/guides'
    },
    {
      id: 'advisory',
      title: 'Advisory Services',
      description: 'Expert guidance from mentors and industry leaders',
      path: '/insights/advisory'
    },
    {
      id: 'articles',
      title: 'Articles & Insights',
      description: 'Latest trends and expert perspectives',
      path: '/insights/articles'
    }
  ];

  insights.forEach(insight => {
    results.push({
      id: insight.id,
      type: 'insight',
      title: insight.title,
      description: insight.description,
      path: insight.path,
      relevanceScore: 0
    });
  });

  return results;
};

const searchIndex = createSearchIndex();

export const searchContent = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay for realistic UX
  await new Promise(resolve => setTimeout(resolve, 150));

  const lowercaseQuery = query.toLowerCase();
  
  const results = searchIndex
    .map(item => {
      let score = 0;
      
      // Title exact match (highest score)
      if (item.title.toLowerCase().includes(lowercaseQuery)) {
        score += 100;
      }
      
      // Description match
      if (item.description.toLowerCase().includes(lowercaseQuery)) {
        score += 50;
      }
      
      // Tags match
      if (item.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))) {
        score += 25;
      }
      
      // Partial word matches
      const queryWords = lowercaseQuery.split(' ');
      queryWords.forEach(word => {
        if (item.title.toLowerCase().includes(word)) score += 10;
        if (item.description.toLowerCase().includes(word)) score += 5;
      });
      
      return { ...item, relevanceScore: score };
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10); // Limit to top 10 results

  return results;
};
