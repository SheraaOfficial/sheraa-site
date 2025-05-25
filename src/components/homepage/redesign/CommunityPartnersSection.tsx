
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Handshake, ArrowRight } from "lucide-react";

const partners = [
  { name: "Bee'ah", category: "Sustainability", logo: "/placeholder.svg" },
  { name: "Air Arabia", category: "Travel & Tourism", logo: "/placeholder.svg" },
  { name: "Crescent Enterprises", category: "Social Entrepreneurship", logo: "/placeholder.svg" },
  { name: "Sharjah Media City", category: "Creative Economy", logo: "/placeholder.svg" },
  { name: "Sandooq Al Watan", category: "Emirati Innovators", logo: "/placeholder.svg" },
  { name: "SRTIP", category: "Deep Tech", logo: "/placeholder.svg" }
];

export const CommunityPartnersSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Powered by </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entrepreneurship thrives in collaboration. Sheraa connects you to a vibrant network of 
            founders, mentors, investors, corporate leaders, and government entities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-sheraa-light/20 to-blue-50/30 dark:from-sheraa-dark/50 dark:to-gray-900 border-0">
              <CardContent className="p-0">
                <Users className="w-16 h-16 text-sheraa-primary mb-6" />
                <h3 className="text-3xl font-bold text-sheraa-dark dark:text-white mb-4">
                  Join Our Community
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect with fellow entrepreneurs, access co-working spaces, and benefit from 
                  our network of mentors and industry experts. Membership provides flexible 
                  support tailored to your startup journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Free co-working access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Mentor network connections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-primary rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Exclusive events & workshops</span>
                  </li>
                </ul>
                <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                  <Link to="/community/join" className="flex items-center gap-2">
                    Explore Membership
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Partnership Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-sheraa-teal/10 to-green-50/30 dark:from-sheraa-teal/20 dark:to-gray-900 border-0">
              <CardContent className="p-0">
                <Handshake className="w-16 h-16 text-sheraa-teal mb-6" />
                <h3 className="text-3xl font-bold text-sheraa-dark dark:text-white mb-4">
                  Partnership Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Collaborate with Sheraa to access innovation, support emerging talent, and 
                  contribute to the region's economic growth. We invite organizations to shape 
                  Sharjah's entrepreneurial future.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-teal rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Corporate partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-teal rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Investment opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sheraa-teal rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Mentorship programs</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="border-sheraa-teal text-sheraa-teal hover:bg-sheraa-teal/10">
                  <Link to="/community/partnerships" className="flex items-center gap-2">
                    Partnership Opportunities
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-sheraa-dark dark:text-white mb-8">
            Our Founding Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-sheraa-dark/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <div className="w-8 h-8 bg-sheraa-primary/20 rounded"></div>
                </div>
                <h4 className="font-medium text-sheraa-dark dark:text-white text-sm mb-1">
                  {partner.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {partner.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
