
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, BookOpen, ArrowRight, Download } from 'lucide-react';

interface ResourcesPageProps {
  section?: string;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ section }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>(section || 'all');
  
  // Sample resources for demonstration
  const sampleResources = [
    {
      id: 1,
      title: "Startup Pitch Deck Template",
      description: "Structure your winning investor pitch with this proven template.",
      category: "guides",
      type: "template",
      downloadLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Lean Canvas Template",
      description: "Map out your business model quickly and effectively with this template.",
      category: "guides",
      type: "template",
      downloadLink: "#"
    },
    {
      id: 3,
      title: "Guide to Setting SMART Goals",
      description: "Define actionable objectives for your startup with this comprehensive guide.",
      category: "guides",
      type: "guide",
      downloadLink: "#"
    },
    {
      id: 4,
      title: "Content Audit Checklist",
      description: "Evaluate and optimize your website content strategy with this detailed checklist.",
      category: "guides",
      type: "checklist",
      downloadLink: "#"
    },
    {
      id: 5,
      title: "Financial Model for Tech Startups",
      description: "A detailed financial model template specifically designed for technology startups.",
      category: "guides",
      type: "template",
      downloadLink: "#"
    },
    {
      id: 6,
      title: "How to Validate Your Startup Idea",
      description: "Learn practical methods to validate your business idea before investing significant resources.",
      category: "articles",
      type: "article",
      readLink: "#"
    },
    {
      id: 7,
      title: "Founder Stories: Scaling with Sheraa",
      description: "Inspiring stories of founders who successfully scaled their ventures with Sheraa's support.",
      category: "articles",
      type: "case-study",
      readLink: "#"
    },
    {
      id: 8,
      title: "Raising Capital in MENA: 2025 Guide",
      description: "Everything you need to know about securing funding in the Middle East and North Africa region.",
      category: "articles",
      type: "guide",
      readLink: "#",
      featured: true
    },
    {
      id: 9,
      title: "Sheraa Impact Report 2024",
      description: "Comprehensive analysis of Sheraa's ecosystem impact and startup achievements.",
      category: "impact-reports",
      type: "report",
      downloadLink: "#",
      featured: true
    }
  ];

  // Filter resources based on search query and active section
  const filteredResources = sampleResources.filter(resource => {
    const matchesQuery = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSection = activeSection === 'all' || resource.category === activeSection;
    return matchesQuery && matchesSection;
  });

  // Get featured resources
  const featuredResources = sampleResources.filter(resource => resource.featured);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Your Entrepreneurial Toolkit</h1>
          <p className="text-lg text-gray-600 max-w-4xl mb-8">
            Building a successful venture requires more than just a great idea. Explore our curated tools, 
            expert guidance, and timely insights designed to empower you at every stage of your entrepreneurial journey.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured resources section */}
        {!searchQuery && activeSection === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium py-1 px-2 rounded-full w-fit mb-2">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    {resource.downloadLink && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={resource.downloadLink}>
                          <Download className="mr-2 h-4 w-4" /> Download
                        </a>
                      </Button>
                    )}
                    {resource.readLink && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={resource.readLink}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Resource categories */}
        <div>
          <Tabs
            defaultValue="all"
            value={activeSection}
            onValueChange={setActiveSection}
            className="w-full"
          >
            <div className="border-b">
              <TabsList className="mx-auto">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="guides">Guides & Toolkits</TabsTrigger>
                <TabsTrigger value="advisory">Advisory Services</TabsTrigger>
                <TabsTrigger value="articles">Articles & Insights</TabsTrigger>
                <TabsTrigger value="impact-reports">Impact Reports</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="pt-6">
              {searchQuery && filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No resources found matching "{searchQuery}"</p>
                </div>
              )}
              
              {!searchQuery && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <Link to="/resources/guides" className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow group-hover:border-sheraa-primary/30">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                          <FileText className="text-blue-600" />
                        </div>
                        <CardTitle>Guides & Toolkits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Practical templates, checklists, and step-by-step guides covering essential business functions – 
                          from planning to execution.
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="ghost" className="group-hover:text-sheraa-primary transition-colors">
                          <Link to="/resources/guides">
                            Explore Guides & Toolkits <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                  
                  <Link to="/resources/advisory" className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow group-hover:border-sheraa-primary/30">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                        <CardTitle>Advisory Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Connect with experienced mentors and subject matter experts for personalized guidance on your 
                          specific challenges.
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="ghost" className="group-hover:text-sheraa-primary transition-colors">
                          <Link to="/resources/advisory">
                            Access Advisory Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                  
                  <Link to="/resources/articles" className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow group-hover:border-sheraa-primary/30">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                          <BookOpen className="text-purple-600" />
                        </div>
                        <CardTitle>Articles & Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Stay informed with the latest trends, best practices, ecosystem news, and success stories from 
                          the Sheraa community and beyond.
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="ghost" className="group-hover:text-sheraa-primary transition-colors">
                          <Link to="/resources/articles">
                            Read Articles & Insights <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              )}
              
              {filteredResources.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {filteredResources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium py-1 px-2 rounded-full w-fit mb-2">
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </div>
                        <CardTitle>{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        {resource.downloadLink && (
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <a href={resource.downloadLink}>
                              <Download className="mr-2 h-4 w-4" /> Download
                            </a>
                          </Button>
                        )}
                        {resource.readLink && (
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <a href={resource.readLink}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            {/* Additional tab contents for the specific resource categories */}
            <TabsContent value="guides" className="pt-6">
              <ResourcesGuidesContent resources={filteredResources} searchQuery={searchQuery} />
            </TabsContent>
            
            <TabsContent value="advisory" className="pt-6">
              <ResourcesAdvisoryContent />
            </TabsContent>
            
            <TabsContent value="articles" className="pt-6">
              <ResourcesArticlesContent resources={filteredResources} searchQuery={searchQuery} />
            </TabsContent>
            
            <TabsContent value="impact-reports" className="pt-6">
              <ResourcesImpactReportsContent />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Newsletter subscription */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest resources, event invitations, and ecosystem updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white" />
              <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Component for the Guides & Toolkits tab content
const ResourcesGuidesContent: React.FC<{resources: any[], searchQuery: string}> = ({ resources, searchQuery }) => {
  const guidesResources = resources.filter(r => r.category === 'guides');
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Guides & Toolkits</h2>
        <p className="text-gray-600">
          Access a library of downloadable guides, templates, checklists, and toolkits designed to 
          streamline your startup operations.
        </p>
      </div>
      
      {searchQuery && guidesResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No guides or toolkits found matching "{searchQuery}"</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guidesResources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium py-1 px-2 rounded-full w-fit mb-2">
                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
              </div>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={resource.downloadLink}>
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Looking for Something Specific?</h3>
        <p className="text-gray-600 mb-6">
          Can't find what you need? Let us know what resources would be helpful for your venture.
        </p>
        <Button asChild variant="outline">
          <Link to="/contact">Suggest a Resource</Link>
        </Button>
      </div>
    </div>
  );
};

// Component for the Advisory Services tab content
const ResourcesAdvisoryContent: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Expert Guidance When You Need It Most</h2>
        <p className="text-gray-600">
          Navigate your startup challenges with confidence by tapping into Sheraa's extensive network of mentors 
          and subject matter experts. Our advisory services provide personalized, one-on-one support tailored to 
          your specific needs.
        </p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Meet Your On-Demand Advisors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <CardTitle>Legal Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get guidance on company formation, contracts, intellectual property protection, and compliance matters.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <CardTitle>Finance & Fundraising</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive advice on financial modeling, valuation, investor readiness, and funding strategies.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
              <CardTitle>Marketing & Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn strategies for go-to-market planning, digital marketing, customer acquisition, and brand building.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">1</div>
            <h4 className="font-semibold mb-2">Select Your Area of Need</h4>
            <p className="text-gray-600">
              Identify the specific challenge or question you need help with.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">2</div>
            <h4 className="font-semibold mb-2">Schedule a Session</h4>
            <p className="text-gray-600">
              Book time with the appropriate expert through our platform.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">3</div>
            <h4 className="font-semibold mb-2">Receive Personalized Advice</h4>
            <p className="text-gray-600">
              Meet virtually or in-person for a focused advisory session.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Who Can Access Advisory Services?</h3>
          <p className="text-gray-600 mb-6">
            Advisory services are primarily available to startups participating in Sheraa programs (like S3) 
            and through Sheraa Membership benefits.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/community/join">Learn About Membership</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Become a Sheraa Mentor</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Are you an experienced professional interested in sharing your expertise with emerging entrepreneurs? 
          Join our network of mentors and advisors.
        </p>
        <Button asChild variant="outline">
          <Link to="/community/partnerships">Apply to Become a Mentor</Link>
        </Button>
      </div>
    </div>
  );
};

// Component for the Articles & Insights tab content
const ResourcesArticlesContent: React.FC<{resources: any[], searchQuery: string}> = ({ resources, searchQuery }) => {
  const articlesResources = resources.filter(r => r.category === 'articles');
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Articles & Insights</h2>
        <p className="text-gray-600">
          Explore the latest trends, expert perspectives, success stories, and practical advice shaping 
          the entrepreneurial landscape in Sharjah, the UAE, and beyond.
        </p>
      </div>
      
      {searchQuery && articlesResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles or insights found matching "{searchQuery}"</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articlesResources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium py-1 px-2 rounded-full w-fit mb-2">
                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
              </div>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={resource.readLink}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link to="/resources/articles">View All Articles</Link>
        </Button>
      </div>
    </div>
  );
};

// Component for the Impact Reports tab content
const ResourcesImpactReportsContent: React.FC = () => {
  const impactReports = [
    {
      id: 1,
      year: 2024,
      title: "Sheraa Impact Report 2024",
      description: "A comprehensive look at Sheraa's ecosystem impact and startup achievements throughout 2024.",
      imageUrl: "https://images.unsplash.com/photo-1551186913-6773fe8b0978",
      downloadLink: "#"
    },
    {
      id: 2,
      year: 2023,
      title: "Sheraa Impact Report 2023",
      description: "Highlighting the growth and developments in Sharjah's entrepreneurial ecosystem during 2023.",
      imageUrl: "https://images.unsplash.com/photo-1551186913-6773fe8b0978",
      downloadLink: "#"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Impact Reports</h2>
        <p className="text-gray-600">
          Discover the collective achievements of the Sheraa ecosystem and the impact of entrepreneurship in Sharjah 
          through our detailed annual reports.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {impactReports.map((report) => (
          <div key={report.id} className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:w-2/5 h-52 md:h-auto">
              <img 
                src={report.imageUrl} 
                alt={`Cover for ${report.title}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-sheraa-primary/10 text-sheraa-primary text-xs font-medium py-1 px-2 rounded-full mb-2">
                  {report.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                <p className="text-gray-600 mb-6">{report.description}</p>
              </div>
              <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <a href={report.downloadLink}>
                  <Download className="mr-2 h-4 w-4" /> Download Report
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-sheraa-primary mb-2">180+</h4>
              <p className="text-gray-600 text-sm">Startups Supported</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-sheraa-primary mb-2">$248M+</h4>
              <p className="text-gray-600 text-sm">Revenue Generated</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-sheraa-primary mb-2">$171M+</h4>
              <p className="text-gray-600 text-sm">Capital Raised</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-sheraa-primary mb-2">1,900+</h4>
              <p className="text-gray-600 text-sm">Jobs Created</p>
            </div>
          </div>
          <Link to="/about/impact" className="text-sheraa-primary hover:underline font-medium inline-flex items-center">
            View Complete Impact Story <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
