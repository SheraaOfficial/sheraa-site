
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layouts/MainLayout';
import { ArrowRight, Users, Building, Globe } from 'lucide-react';

interface CommunityPageProps {
  section?: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ section }) => {
  const [activeSection, setActiveSection] = useState<string>(section || 'overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'join':
        return <MembershipSection />;
      case 'startups':
        return <StartupsSection />;
      case 'partnerships':
        return <PartnershipsSection />;
      default:
        return <CommunityOverview />;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Join Sharjah's Thriving Innovation Ecosystem</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            At Sheraa, we believe that groundbreaking innovation happens through connection and collaboration. 
            We are the central hub uniting Sharjah's dynamic ecosystem of ambitious founders, seasoned mentors, 
            strategic investors, forward-thinking corporations, and supportive government entities.
          </p>
        </div>

        {/* Navigation tabs for different sections */}
        {section && (
          <div className="flex gap-2 mb-8">
            <Button 
              variant="outline"
              size="sm"
              asChild
            >
              <Link to="/community">Back to Overview</Link>
            </Button>
          </div>
        )}
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

// Community Overview Component
const CommunityOverview: React.FC = () => {
  const sections = [
    {
      title: "Become a Sheraa Member",
      description: "Access essential resources, co-working spaces, and our vibrant network on your terms. Sheraa Membership offers a flexible pathway to support for founders with a market-ready product, without the commitment of a structured program.",
      icon: Users,
      link: "/community/join",
      linkText: "Explore Membership Benefits",
      color: "bg-[#9b87f5]/10",
      textColor: "text-[#9b87f5]"
    },
    {
      title: "Meet the Changemakers",
      description: "Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. Our portfolio spans key sectors like Sustainability, EdTech, Creative Industries, Advanced Manufacturing, and more, generating significant economic value and creating thousands of jobs.",
      icon: Globe,
      link: "/community/startups", 
      linkText: "Discover Our Startups",
      color: "bg-[#D946EF]/10",
      textColor: "text-[#D946EF]"
    },
    {
      title: "Shape the Future: Partnership Opportunities",
      description: "Collaboration is key to building a world-class ecosystem. We invite corporations, government entities, investors, and experienced mentors to partner with Sheraa. Contribute your expertise, access innovation, and play a vital role in shaping Sharjah's entrepreneurial future.",
      icon: Building,
      link: "/community/partnerships",
      linkText: "Explore Partnership Opportunities",
      color: "bg-[#0EA5E9]/10",
      textColor: "text-[#0EA5E9]"
    }
  ];

  return (
    <div className="mt-8">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The Power of Our Network</h2>
        <p className="text-lg text-gray-600">
          Our ecosystem is built on the principle that collective strength fuels individual success. By joining Sheraa, 
          you tap into a powerful network designed to accelerate growth, foster partnerships, and unlock opportunities. 
          This interconnectedness is not just a feature; it's the foundation of how we create impact, providing startups 
          with the validation, resources, and market access needed to thrive. With over 140 diverse partners, our reach 
          extends across industries and borders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {sections.map((section, idx) => (
          <Card key={idx} className="border shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-8">
              <div className={`w-12 h-12 rounded-full ${section.color} flex items-center justify-center mb-4`}>
                <section.icon className={`h-6 w-6 ${section.textColor}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-600 mb-8">{section.description}</p>
              <Button asChild variant="outline" className="group w-full">
                <Link to={section.link} className="flex items-center justify-center">
                  {section.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-secondary/5 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Join Our Community?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're a startup seeking support, an established company looking to innovate, or an investor 
          searching for the next big thing, the Sheraa community is where you belong.
        </p>
        <GradientButton asChild size="lg">
          <Link to="/contact">Get Involved Today</Link>
        </GradientButton>
      </div>
    </div>
  );
};

// Membership Section
const MembershipSection: React.FC = () => {
  const benefits = [
    {
      category: "Workspace & Facilities",
      items: [
        "Free Co-working Access - Utilize inspiring co-working spaces at Sheraa HQ (SRTIP) and university hubs (AUS & UOS)."
      ]
    },
    {
      category: "Network & Connections",
      items: [
        "Community Platform Access - Connect with fellow founders, mentors, and the Sheraa team via our exclusive Slack workspace.",
        "Investor & Partner Introductions - Get facilitated connections to VCs, angel investors, potential customers, and corporate/government partners.",
        "Mentor & Expert Network - Access our network of subject matter experts, coaches, and mentors for guidance.",
        "Exclusive Event Invitations - Receive invitations to key ecosystem events, conferences, and potential speaking opportunities."
      ]
    },
    {
      category: "Resources & Support",
      items: [
        "Perks & Credits - Benefit from credits for free or discounted services (limited time) to help get started.",
        "Discounted Professional Services - Access vetted service providers (legal, HR, accounting, marketing, IT, business setup) at preferential rates."
      ]
    },
    {
      category: "Cost Savings",
      items: [
        "Subsidized Free Zone Incorporation - Take advantage of discounted packages for setting up your business in a Sharjah free zone (starting from $600 USD)."
      ]
    }
  ];

  return (
    <div className="mt-8">
      <div className="mb-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Unlock Your Potential: Flexible Support with Sheraa Membership</h2>
        <p className="text-lg text-gray-600">
          Designed for founders with a product in the market, Sheraa Membership provides flexible, on-demand 
          access to the resources and connections you need to grow, without the structure of a long-term program. 
          It's the ideal way to stay connected to Sharjah's vibrant ecosystem and tap into support as required.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="border bg-sheraa-light">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4">Who is Membership For?</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Founders with a launched product or service.</li>
              <li>Startups seeking community, networking, and ad-hoc resources.</li>
              <li>Entrepreneurs desiring flexibility and connection without program commitment.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
          <div className="space-y-8">
            {benefits.map((benefit, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-sheraa-primary mb-2">{benefit.category}</h4>
                <ul className="space-y-2 list-disc pl-5">
                  {benefit.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
        <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
        <ol className="space-y-4 list-decimal pl-5">
          <li>Ensure you meet the eligibility criteria (founder with a market-ready product).</li>
          <li>Complete the online application form, providing details about your startup.</li>
          <li>The Sheraa team will review your application and contact you regarding the outcome.</li>
        </ol>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6">Ready to Join Sheraa's Community?</h3>
        <GradientButton asChild size="lg">
          <Link to="/contact?inquiry=membership">Apply for Membership Today</Link>
        </GradientButton>
      </div>
    </div>
  );
};

// Startups Section
const StartupsSection: React.FC = () => {
  const startups = [
    { name: "Baytuki", sector: "PropTech", description: "Digital platform revolutionizing property management for landlords and tenants." },
    { name: "Exhale", sector: "Wellness", description: "Mental wellness app providing guided meditation and stress-relief tools." },
    { name: "KRISPR", sector: "AgriTech", description: "Sustainable farming solutions using vertical farming technology." },
    { name: "Lune", sector: "FinTech", description: "Carbon footprint tracking for financial transactions and banking." },
    { name: "Manhat", sector: "CleanTech", description: "Solar water distillation technology to address water scarcity challenges." },
    { name: "Arabee", sector: "EdTech", description: "Arabic language learning platform for children using interactive methods." },
    { name: "Esaal", sector: "HealthTech", description: "Telemedicine platform connecting patients with healthcare professionals." },
    { name: "Green Future Project", sector: "Sustainability", description: "SaaS platform for corporate net-zero carbon initiatives." },
    { name: "Candam Technologies", sector: "Waste Management", description: "AI-powered waste management solutions for smart cities." },
    { name: "Mr Draper", sector: "Retail", description: "Personalized styling and clothing subscription service for men." },
    { name: "Boksha", sector: "E-commerce", description: "Marketplace for local and regional fashion designers in the MENA region." },
    { name: "El Grocer", sector: "Food & Beverage", description: "Grocery delivery platform connecting local stores with consumers." }
  ];

  const sectors = [
    "All Sectors", "Sustainability", "EdTech", "FinTech", "HealthTech", 
    "AgriTech", "Food & Beverage", "Retail", "Creative Industries", "Advanced Manufacturing"
  ];

  const [selectedSector, setSelectedSector] = useState("All Sectors");

  const filteredStartups = selectedSector === "All Sectors" 
    ? startups 
    : startups.filter(startup => startup.sector === selectedSector);

  return (
    <div className="mt-8">
      <div className="mb-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Innovation in Action: The Sheraa Startup Portfolio</h2>
        <p className="text-lg text-gray-600">
          Sheraa is proud to support a dynamic and diverse portfolio of over 180 startups. These ventures are tackling challenges, 
          creating jobs, generating significant revenue ($248M+), and attracting substantial investment ($171M+). Explore the 
          innovative companies building the future from Sharjah.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Filter by Sector</h3>
        <div className="flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <Button
              key={sector}
              variant={selectedSector === sector ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSector(sector)}
              className="mb-2"
            >
              {sector}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredStartups.map((startup, idx) => (
          <Card key={idx} className="border hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{startup.name}</h3>
                <span className="text-xs bg-sheraa-background-soft px-2 py-1 rounded-full">{startup.sector}</span>
              </div>
              <p className="text-gray-600">{startup.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="border bg-gradient-to-br from-white to-sheraa-light">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">For Investors & Partners</h3>
            <p className="text-gray-600 mb-6">
              Interested in investing in or collaborating with our portfolio companies? 
              Sheraa facilitates connections between investors, corporate partners, and promising startups.
            </p>
            <Button asChild>
              <Link to="/contact?inquiry=investment">Contact Our Partnerships Team</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border bg-gradient-to-br from-white to-sheraa-light">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Join Them?</h3>
            <p className="text-gray-600 mb-6">
              Start your own journey with Sheraa's support. Explore our programs and find the right fit for your 
              entrepreneurial stage.
            </p>
            <Button asChild>
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-sheraa-light p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-center">Success Stories</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h4 className="font-semibold text-lg">El Grocer</h4>
              <p className="text-gray-600">Grocery Delivery Platform</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            "Through Sheraa's accelerator program, we secured a critical partnership with Sharjah Coop that 
            transformed our distribution capabilities. The mentorship and connections were invaluable to our growth."
          </p>
          <p className="font-medium">
            Achievements: $7M+ funding raised | 200,000+ users | Expanded to 3 emirates
          </p>
        </div>
      </div>
    </div>
  );
};

// Partnerships Section
const PartnershipsSection: React.FC = () => {
  const partnershipTypes = [
    {
      type: "Corporate Partners",
      description: "Sponsor programs or events, provide industry expertise, offer pilot opportunities for startups, become a CoE partner, offer perks/services to our community.",
      examples: "BEEAH, Crescent Enterprises, Air Arabia, Alef Group"
    },
    {
      type: "Government & Public Sector",
      description: "Collaborate on strategic initiatives, co-develop challenges, align programs with national agendas, support policy development.",
      examples: "Ministry of Climate Change and Environment, Sharjah Research Technology and Innovation Park (SRTIP)"
    },
    {
      type: "Investors",
      description: "Gain access to vetted deal flow through pitch events, Demo Days, and curated introductions. Co-invest alongside Sheraa partners. Participate as judges or mentors.",
      examples: "CE-Ventures, Angel Investors, Venture Capital Firms"
    },
    {
      type: "Mentors & Experts",
      description: "Share your knowledge and experience by joining our advisor network. Lead workshops or masterclasses. Provide pro-bono consultations.",
      examples: "Industry Leaders, Subject Matter Experts, Successful Entrepreneurs"
    }
  ];

  return (
    <div className="mt-8">
      <div className="mb-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Collaborate with Sheraa: Invest in Sharjah's Innovative Future</h2>
        <p className="text-lg text-gray-600">
          Sheraa thrives on collaboration. We partner with a diverse range of organizations – from government bodies and 
          multinational corporations to investors and academic institutions – to build a robust and dynamic entrepreneurial 
          ecosystem in Sharjah. Partnering with Sheraa offers unique opportunities to access innovation, support emerging talent, 
          and contribute to the region's economic growth.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Why Partner with Sheraa?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Access Innovation", description: "Tap into a curated pipeline of vetted startups across key sectors for potential investment, pilot projects, or acquisition opportunities." },
            { title: "Drive Strategic Goals", description: "Collaborate on initiatives aligned with your corporate social responsibility objectives, industry challenges, or national strategic priorities." },
            { title: "Enhance Brand Visibility", description: "Position your organization as a leader in innovation and a key supporter of the regional entrepreneurship ecosystem." },
            { title: "Connect with Talent", description: "Engage with bright, entrepreneurial talent emerging from Sharjah's strong academic base and Sheraa's youth programs." },
            { title: "Shape the Ecosystem", description: "Contribute your expertise as a mentor, advisor, or speaker, playing a direct role in nurturing the next generation of successful ventures." }
          ].map((benefit, idx) => (
            <Card key={idx} className="border hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-sheraa-primary">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Opportunities for Collaboration</h3>
        <div className="space-y-6">
          {partnershipTypes.map((type, idx) => (
            <Card key={idx} className="border">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">{type.type}</h4>
                <p className="text-gray-600 mb-2">{type.description}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Examples:</span> {type.examples}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Our Esteemed Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {Array(8).fill(0).map((_, idx) => (
            <div key={idx} className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-medium">Partner Logo</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6">Become a Partner</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can collaborate to achieve shared goals and make a lasting impact on Sharjah's entrepreneurial ecosystem.
        </p>
        <GradientButton asChild size="lg">
          <Link to="/contact?inquiry=partnership">Become a Sheraa Partner</Link>
        </GradientButton>
      </div>
    </div>
  );
};

export default CommunityPage;
