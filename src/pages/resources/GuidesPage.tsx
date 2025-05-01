
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, File, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GuidesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    'All', 
    'Business Planning', 
    'Financial Management',
    'Marketing & Sales',
    'Legal & Compliance',
    'Operations & HR',
    'Pitching & Fundraising',
    'Tech & Product'
  ];
  
  const resources = [
    {
      title: "Pitch Deck Template",
      description: "Structure your winning investor pitch with this proven template.",
      category: "Pitching & Fundraising",
      type: "template",
      icon: <FileText className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Lean Canvas Template",
      description: "Map out your business model quickly and effectively.",
      category: "Business Planning",
      type: "template",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Guide to Setting SMART Goals",
      description: "Define actionable objectives for your startup.",
      category: "Business Planning",
      type: "guide",
      icon: <File className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Financial Model Template",
      description: "Track your startup's finances with this comprehensive spreadsheet.",
      category: "Financial Management",
      type: "template",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Content Audit Checklist",
      description: "Evaluate and optimize your website content strategy.",
      category: "Marketing & Sales",
      type: "checklist",
      icon: <File className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Term Sheet Explainer",
      description: "Understand the key terms in investment agreements.",
      category: "Legal & Compliance",
      type: "guide",
      icon: <File className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Hiring Process Toolkit",
      description: "Templates and processes for building your team effectively.",
      category: "Operations & HR",
      type: "toolkit",
      icon: <FileText className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Customer Discovery Questionnaire",
      description: "Validate your product with effective customer interviews.",
      category: "Marketing & Sales",
      type: "template",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Investor Outreach Email Templates",
      description: "Professionally approach potential investors with these templates.",
      category: "Pitching & Fundraising",
      type: "template",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Product Roadmap Template",
      description: "Plan your product development with this strategic template.",
      category: "Tech & Product",
      type: "template",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Legal Compliance Checklist for UAE Startups",
      description: "Ensure your startup meets all legal requirements in the UAE.",
      category: "Legal & Compliance",
      type: "checklist",
      icon: <File className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Sharjah Business Setup Guide",
      description: "Step-by-step guide to establishing your business in Sharjah.",
      category: "Business Planning",
      type: "guide",
      icon: <File className="h-8 w-8 text-green-500" />,
    },
  ];
  
  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Practical Resources for Building Your Business</h1>
          <p className="text-lg text-gray-600">
            Access a library of downloadable guides, templates, checklists, and toolkits designed to streamline 
            your startup operations. These resources cover key areas essential for entrepreneurial success.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search resources..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Tabs defaultValue="All" className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <TabsList className="overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => category === 'All' || resource.category === category)
                  .map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
              </div>
              
              {filteredResources.filter(r => category === 'All' || r.category === category).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No resources found. Try a different search or category.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-sheraa-light p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Need a Specific Resource?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Let us know what resources would be helpful for your business.
          </p>
          <Button>Suggest a Resource</Button>
        </div>
      </div>
    </MainLayout>
  );
};

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    category: string;
    type: string;
    icon: React.ReactNode;
  };
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { title, description, category, type, icon } = resource;
  
  const getBgColor = (type: string) => {
    switch (type) {
      case 'template': return 'bg-blue-50';
      case 'guide': return 'bg-green-50';
      case 'checklist': return 'bg-orange-50';
      case 'toolkit': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className={`p-6 ${getBgColor(type)} flex items-center justify-between`}>
          <div className="flex items-center">
            {icon}
            <span className="ml-3 text-xs uppercase font-semibold text-gray-500">{type}</span>
          </div>
          <span className="text-xs bg-white py-1 px-2 rounded-full text-gray-600">{category}</span>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>
          
          <Button className="w-full mt-auto" variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuidesPage;
