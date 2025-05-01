
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Building, Briefcase, TrendingUp, Users, Handshake } from 'lucide-react';

const SMESupport = () => {
  const supportAreas = [
    {
      title: "Access to Finance",
      description: "Connecting SMEs with financing solutions for working capital, equipment purchase, and expansion projects through partners like Emirates Development Bank (EDB), which offers preferential terms and incubation support.",
      icon: <Briefcase className="h-8 w-8 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      title: "Market Access & Export Development",
      description: "Facilitating connections to new markets, trade fairs, and export opportunities via collaborations with entities like the Sharjah Chamber of Commerce and Industry (SCCI) and Etihad Credit Insurance (ECI).",
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      color: "bg-green-50"
    },
    {
      title: "Innovation & Technology Adoption",
      description: "Encouraging the adoption of advanced manufacturing techniques, digital transformation, and sustainable practices through initiatives like the Center of Excellence (CoE) for Advanced Manufacturing and CPG.",
      icon: <Building className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Capacity Building & Mentorship",
      description: "Providing access to workshops, training programs, and mentorship from industry experts facilitated by Sheraa and its partners (MoIAT, ECI).",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      title: "Networking & Collaboration",
      description: "Integrating SMEs into the broader Sheraa ecosystem, enabling connections with startups, potential corporate clients, and government entities through events and networking platforms.",
      icon: <Handshake className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-50"
    }
  ];

  const partnerLogos = [
    { name: "Emirates Development Bank", logo: "/placeholder.svg" },
    { name: "Sharjah Chamber of Commerce and Industry", logo: "/placeholder.svg" },
    { name: "Etihad Credit Insurance", logo: "/placeholder.svg" },
    { name: "Ministry of Industry and Advanced Technology", logo: "/placeholder.svg" }
  ];

  const testimonials = [
    {
      quote: "Sheraa's connections helped us secure crucial financing for our manufacturing expansion. The guidance we received through the process was invaluable.",
      name: "Ahmad Al Hashmi",
      company: "Gulf Precision Manufacturing",
      image: "/placeholder.svg"
    },
    {
      quote: "The export development program opened new markets for our products across the GCC. We've seen a 40% increase in international sales since working with Sheraa.",
      name: "Layla Mahmoud",
      company: "Organic Delights",
      image: "/placeholder.svg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/programs" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-orange-50 text-orange-600 px-4 py-1 rounded-full inline-block mb-4 font-medium text-sm">
              SME Support
            </div>
            <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Elevating Sharjah's SMEs: Driving Growth and Innovation</h1>
            <p className="text-lg text-gray-600 mb-6">
              Small and Medium Enterprises (SMEs) are the bedrock of Sharjah's vibrant economy, representing over 60,000 businesses 
              across diverse sectors. Sheraa recognizes the crucial role of SMEs and extends its ecosystem support to help established 
              businesses innovate, adapt, and achieve sustainable growth.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold mb-4">Why SME Support Matters</h3>
              <p className="text-gray-600 mb-0">
                Supporting SMEs alongside startups creates a more robust and resilient economic landscape. By fostering innovation 
                within existing businesses, we enhance competitiveness, create stable jobs, and contribute to Sharjah's long-term 
                economic diversification goals. Sheraa acts as a bridge, connecting SMEs to the resources and networks often 
                associated with the startup world.
              </p>
            </div>
            
            <GradientButton asChild size="lg" className="mb-4 w-full sm:w-auto">
              <Link to="/contact?inquiry=sme-support">Get SME Support</Link>
            </GradientButton>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="SME Business Operations"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-2xl md:text-3xl font-bold mb-4 text-center">Grow Your Established Business</div>
                <div className="text-center text-white/70 mb-4">Access resources, connections, and innovation pathways</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Areas of Support */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Areas of Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((area, index) => (
              <Card key={index} className="border hover:shadow-md transition-all h-full">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Who Can Benefit */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Who Can Benefit</h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 mb-6">
              Established Small and Medium Enterprises based in or looking to expand into Sharjah, particularly those operating in 
              or seeking to innovate within sectors like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Advanced Manufacturing", "Consumer Packaged Goods", "Sustainability", "Food & Beverage", 
                "Creative Industries", "Healthcare", "Education", "Technology"].map((sector, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-amber-100 text-center">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership Approach */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Partnership Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <p className="text-gray-600 mb-6">
                Sheraa facilitates access to support mechanisms crucial for SME growth through strategic partnerships with key 
                organizations. These collaborations enable us to provide comprehensive resources tailored to the needs of 
                established businesses looking to innovate and expand.
              </p>
              <p className="text-gray-600 mb-6">
                Our partners bring specialized expertise in areas such as financing, export development, advanced manufacturing, 
                and innovation adoption - creating a robust ecosystem of support for Sharjah's SMEs. By leveraging these 
                partnerships, we can connect your business to the specific resources and opportunities needed for your 
                growth journey.
              </p>
              <p className="text-gray-600">
                The powerful combination of Sheraa's entrepreneurial mindset and our partners' industry-specific knowledge 
                creates a unique environment where established businesses can thrive, innovate, and expand both locally 
                and internationally.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Partners</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {partnerLogos.map((partner, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-32">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border hover:shadow-md transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* How to Engage */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">How to Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-3">Explore Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  Learn more about our key partners and the specific support they offer through Sheraa.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/community/partnerships">View Partnerships</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-3">Join the Community</h3>
                <p className="text-gray-600 text-sm">
                  Consider Sheraa Membership for access to networks, resources, and support services.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/community/join">Learn About Membership</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-3">Attend Events</h3>
                <p className="text-gray-600 text-sm">
                  Participate in SEF and other Sheraa events for networking and learning opportunities.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/events">Browse Events</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Reach out to discuss your specific needs and how Sheraa can facilitate connections or support.
                </p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/contact?inquiry=sme-support">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with Sheraa's network of resources and partners designed to help established SMEs innovate, 
            grow, and contribute to Sharjah's dynamic economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild size="lg">
              <Link to="/contact?inquiry=sme-support">Get SME Support</Link>
            </GradientButton>
            <Button asChild variant="outline" size="lg">
              <Link to="/community/partnerships">Learn About Our Partners</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SMESupport;
