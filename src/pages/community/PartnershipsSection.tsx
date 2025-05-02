
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, UserCheck, Briefcase, Building, Heart } from 'lucide-react';

const PartnershipsSection = () => {
  const partnershipTypes = [
    {
      id: "corporate",
      title: "Corporate Partners",
      icon: Building,
      description: "Collaborate with Sheraa to drive innovation within your organization, access a pipeline of startups, and contribute to Sharjah's entrepreneurship ecosystem.",
      benefits: [
        "Access to curated startup pipeline in key sectors",
        "Customized innovation challenges & hackathons",
        "Integration with Sheraa's Centers of Excellence",
        "Branding & visibility at major events like SEF",
        "Employee engagement opportunities as mentors",
        "First look at emerging technologies & solutions"
      ],
      examples: "BEEAH, Air Arabia, Alef Group, Crescent Enterprises"
    },
    {
      id: "government",
      title: "Government & Public Sector",
      icon: Briefcase,
      description: "Align entrepreneurship initiatives with national priorities, co-develop challenges, and support policy development for innovation in Sharjah.",
      benefits: [
        "Strategic alignment with national innovation agendas",
        "Co-development of sector-specific challenges",
        "Access to talent & innovative solutions",
        "Policy feedback from the startup ecosystem",
        "Economic development & diversification support",
        "Smart city & sustainable development initiatives"
      ],
      examples: "Ministry of Climate Change, Sharjah Media City, SRTIP"
    },
    {
      id: "investors",
      title: "Investors",
      icon: Heart,
      description: "Gain access to vetted deal flow, co-invest alongside Sheraa partners, and connect with the region's most promising startups.",
      benefits: [
        "Curated access to qualified deal flow",
        "Early visibility into promising ventures",
        "Participation in pitch events & demo days",
        "Co-investment opportunities",
        "Participation as judges & mentors",
        "Portfolio company support services"
      ],
      examples: "CE-Ventures, Sandooq Al Watan"
    },
    {
      id: "mentors",
      title: "Mentors & Experts",
      icon: UserCheck,
      description: "Share your knowledge and experience by joining our advisor network, leading workshops, or providing pro-bono consultations.",
      benefits: [
        "Connection to innovative startups",
        "Industry & sector insights",
        "Network expansion opportunities",
        "Community recognition & visibility",
        "Personal & professional development",
        "Integration into Sheraa events"
      ],
      examples: "Industry experts, Successful entrepreneurs, Professionals"
    },
    {
      id: "academic",
      title: "Academic Institutions",
      icon: Lightbulb,
      description: "Partner on youth programs, research collaborations, and talent pipelines to nurture the next generation of innovators.",
      benefits: [
        "Student entrepreneurship programs",
        "Practical startup experience opportunities",
        "Research & commercialization pathways",
        "Innovation lab collaborations",
        "Industry connection for students & faculty",
        "Curriculum development insights"
      ],
      examples: "American University of Sharjah, University of Sharjah"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="gradient-warm" animation="shimmer" className="mb-3">Collaborate with Sheraa</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sheraa-dark">Partnership Opportunities</h2>
          <p className="text-gray-600">
            Sheraa thrives on collaboration. We partner with diverse organizations to build a robust and dynamic 
            entrepreneurial ecosystem in Sharjah. Explore how partnering with us can benefit your organization.
          </p>
        </motion.div>

        <Tabs defaultValue="corporate" className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {partnershipTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id} className="px-6 data-[state=active]:bg-sheraa-primary data-[state=active]:text-white">
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {partnershipTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-1"
                >
                  <Card className="bg-sheraa-light border-none h-full">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4 text-sheraa-primary">
                        <type.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-sheraa-dark">{type.title}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="mt-auto">
                        <h4 className="font-medium text-sheraa-dark mb-2">Examples:</h4>
                        <p className="text-gray-600 text-sm italic">{type.examples}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold mb-6 text-sheraa-dark">Partnership Benefits</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {type.benefits.map((benefit, index) => (
                          <div key={index} className="flex gap-3 p-4 bg-sheraa-light rounded-lg">
                            <div className="mt-1">
                              <div className="w-2 h-2 rounded-full bg-sheraa-primary"></div>
                            </div>
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 text-center">
                        <GradientButton>Become a {type.title.replace(/ &.*/, '')} Partner</GradientButton>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center max-w-2xl mx-auto p-8 bg-sheraa-light rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-sheraa-dark">Let's Discuss Your Partnership</h3>
          <p className="text-gray-600 mb-6">
            Interested in exploring how we can collaborate? Our partnerships team is ready to discuss 
            tailored opportunities that align with your organization's goals and our mission.
          </p>
          <GradientButton size="lg">Contact Our Partnerships Team</GradientButton>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-sheraa-dark">Our Esteemed Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  Partner Logo
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipsSection;
