
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, Search, Filter } from 'lucide-react';

const GuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 
    'Business Planning', 
    'Financial Management', 
    'Marketing & Sales', 
    'Legal & Compliance', 
    'Operations & HR', 
    'Pitching & Fundraising',
    'Technology & Product'
  ];

  const resources = [
    {
      title: "Ultimate Pitch Deck Template",
      description: "Structure your winning investor pitch with this proven template. Includes key sections, design tips, and examples.",
      type: "Template",
      category: "Pitching & Fundraising",
      icon: <FileText className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Lean Canvas Template",
      description: "Map out your business model quickly and effectively with this single-page business plan alternative.",
      type: "Template",
      category: "Business Planning",
      icon: <FileText className="h-10 w-10 text-green-500" />
    },
    {
      title: "Financial Model for Early-Stage Startups",
      description: "A comprehensive Excel template for projecting revenues, expenses, and cash flow for your startup.",
      type: "Template",
      category: "Financial Management",
      icon: <FileText className="h-10 w-10 text-orange-500" />
    },
    {
      title: "Legal Compliance Checklist",
      description: "Essential checklist for startups to ensure compliance with UAE regulations and business requirements.",
      type: "Checklist",
      category: "Legal & Compliance",
      icon: <FileText className="h-10 w-10 text-red-500" />
    },
    {
      title: "Marketing Strategy Guide",
      description: "Step-by-step guide to developing an effective marketing strategy for your startup.",
      type: "Guide",
      category: "Marketing & Sales",
      icon: <FileText className="h-10 w-10 text-purple-500" />
    },
    {
      title: "Startup Hiring Toolkit",
      description: "Resources for building your team including job description templates, interview questions, and onboarding checklists.",
      type: "Toolkit",
      category: "Operations & HR",
      icon: <FileText className="h-10 w-10 text-teal-500" />
    },
    {
      title: "SMART Goals Framework",
      description: "Template and guide for setting Specific, Measurable, Achievable, Relevant, and Time-bound goals.",
      type: "Guide",
      category: "Business Planning",
      icon: <FileText className="h-10 w-10 text-blue-500" />
    },
    {
      title: "UAE Business Setup Guide",
      description: "Comprehensive guide to setting up your business in the UAE, including free zone vs. mainland options.",
      type: "Guide",
      category: "Legal & Compliance",
      icon: <FileText className="h-10 w-10 text-red-500" />
    },
    {
      title: "Product Development Roadmap",
      description: "Template for planning your product development process from concept to launch.",
      type: "Template",
      category: "Technology & Product",
      icon: <FileText className="h-10 w-10 text-indigo-500" />
    },
    {
      title: "Customer Acquisition Cost Calculator",
      description: "Excel template for calculating and tracking your customer acquisition costs across channels.",
      type: "Tool",
      category: "Marketing & Sales",
      icon: <FileText className="h-10 w-10 text-purple-500" />
    },
    {
      title: "Investment Readiness Checklist",
      description: "Assess your startup's readiness for investment and prepare for due diligence.",
      type: "Checklist",
      category: "Pitching & Fundraising",
      icon: <FileText className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Social Media Content Calendar",
      description: "Template for planning and organizing your social media content strategy.",
      type: "Template",
      category: "Marketing & Sales",
      icon: <FileText className="h-10 w-10 text-purple-500" />
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Practical Resources for Building Your Business</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Access a library of downloadable guides, templates, checklists, and toolkits designed to streamline your startup operations. 
            These resources cover key areas essential for entrepreneurial success.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search resources..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>
          <div className="flex-shrink-0">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, idx) => (
              <Card key={idx} className="border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-gray-50 p-2 rounded-md">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="inline-block bg-sheraa-light text-sheraa-primary px-2 py-0.5 rounded text-xs font-medium mb-2">
                        {resource.type}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 bg-sheraa-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't find what you need?</h3>
          <p className="text-gray-600 mb-6">Let us know what resources would be helpful for your entrepreneurial journey.</p>
          <Button asChild>
            <Link to="/contact?inquiry=resource-request">Suggest a Resource</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuidesPage;
