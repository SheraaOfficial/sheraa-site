
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, BookOpen, BarChart, ArrowRight } from 'lucide-react';

interface ResourcesPageProps {
  section?: string;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ section }) => {
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
      <div className="container mx-auto px-4 py-12">
        {renderSection()}
      </div>
    </MainLayout>
  );
};

const ResourcesOverview: React.FC = () => {
  const resourceCategories = [
    {
      title: "Guides & Toolkits",
      description: "Practical templates, checklists, and step-by-step guides covering essential business functions – from planning to execution.",
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      link: "/resources/guides",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Advisory Services",
      description: "Connect with experienced mentors and subject matter experts for personalized guidance on your specific challenges.",
      icon: <Users className="h-10 w-10 text-green-500" />,
      link: "/resources/advisory",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Articles & Insights",
      description: "Stay informed with the latest trends, best practices, ecosystem news, and success stories from the Sheraa community and beyond.",
      icon: <BookOpen className="h-10 w-10 text-purple-500" />,
      link: "/resources/articles",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Impact Reports",
      description: "Discover the collective achievements of the Sheraa ecosystem and the impact of entrepreneurship in Sharjah.",
      icon: <BarChart className="h-10 w-10 text-orange-500" />,
      link: "/resources/impact-reports",
      color: "bg-orange-50 border-orange-200"
    },
  ];

  const featuredResource = {
    title: "Ultimate Startup Pitch Deck Template",
    description: "A comprehensive, customizable template to help you create a compelling investor pitch deck. Includes detailed sections, design tips, and real-world examples.",
    type: "Template",
    link: "/resources/guides",
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Your Entrepreneurial Toolkit: Knowledge & Support from Sheraa</h1>
        <p className="text-lg text-gray-600">
          Building a successful venture requires more than just a great idea. Sheraa provides entrepreneurs with access to essential resources, 
          expert guidance, and timely insights to navigate the complexities of the startup journey. Explore our curated tools, advisory services, 
          and knowledge base designed to empower you at every stage.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {resourceCategories.map((category, idx) => (
          <Card key={idx} className={`border hover:shadow-md transition-all ${category.color}`}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button asChild variant="outline" className="group">
                    <Link to={category.link} className="flex items-center">
                      Explore {category.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Resource */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Resource</h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-sheraa-primary/10 p-8 flex items-center justify-center">
              <FileText className="h-24 w-24 text-sheraa-primary" />
            </div>
            <div className="md:col-span-2 p-8">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {featuredResource.type}
              </span>
              <h3 className="text-2xl font-semibold mb-3">{featuredResource.title}</h3>
              <p className="text-gray-600 mb-6">{featuredResource.description}</p>
              <Button asChild>
                <Link to={featuredResource.link}>Download Now</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Why Utilize Sheraa Resources */}
      <div className="bg-sheraa-light p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Why Utilize Sheraa Resources?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our resources are curated based on the real-world needs of founders within our ecosystem. They offer actionable advice, 
          leverage the expertise of our network, and provide insights specific to the Sharjah and UAE context, saving you time 
          and helping you avoid common pitfalls.
        </p>
        <Button asChild size="lg">
          <Link to="/resources/guides">Explore All Resources</Link>
        </Button>
      </div>
    </>
  );
};

export default ResourcesPage;
