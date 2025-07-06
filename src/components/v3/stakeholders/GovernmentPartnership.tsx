import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Building, 
  Users, 
  FileCheck,
  Handshake,
  Crown,
  Globe,
  ArrowRight
} from "lucide-react";

const GovernmentPartnership: React.FC = () => {
  const partnerships = [
    {
      ministry: "Ministry of Economy",
      partnership: "National Innovation Strategy",
      status: "Active",
      description: "Strategic alignment with UAE's economic diversification goals",
      impact: "300+ businesses supported",
      icon: Building
    },
    {
      ministry: "Sharjah Investment Development Authority",
      partnership: "Foreign Investment Facilitation",
      status: "Active", 
      description: "Streamlined licensing and setup for international partners",
      impact: "$50M+ investments facilitated",
      icon: Globe
    },
    {
      ministry: "UAE Central Bank",
      partnership: "FinTech Regulatory Sandbox",
      status: "Active",
      description: "Regulatory guidance for financial technology startups",
      impact: "15 FinTech companies licensed",
      icon: Shield
    }
  ];

  const certifications = [
    {
      title: "ISO 27001 Certified",
      description: "Information Security Management",
      issuer: "International Standards Organization"
    },
    {
      title: "Sharia Compliance Certificate", 
      description: "Islamic Finance Advisory Board",
      issuer: "UAE Islamic Affairs Authority"
    },
    {
      title: "Government Excellence Award",
      description: "Innovation in Economic Development",
      issuer: "UAE Government Excellence Program"
    }
  ];

  const boardMembers = [
    {
      name: "H.E. Sheikha Bodour Al Qasimi",
      title: "Chairperson",
      credentials: "UNESCO Goodwill Ambassador",
      expertise: "Cultural Development & Innovation"
    },
    {
      name: "Najla Al Midfa",
      title: "Vice-Chairperson", 
      credentials: "Former Government Official",
      expertise: "Strategic Planning & Governance"
    },
    {
      name: "Sara Al Nuaimi",
      title: "Chief Executive Officer",
      credentials: "Harvard Business School",
      expertise: "Ecosystem Development"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Crown className="w-8 h-8 text-[#F59E0B] mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B]">
              Government Partnership & Authority
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Official endorsements, strategic alliances, and regulatory compliance 
            ensuring trust and transparency for all stakeholders.
          </motion.p>
        </div>

        {/* Government Partnerships */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1E293B] mb-6">
              Strategic Government Alliances
            </h3>
            
            <div className="space-y-6">
              {partnerships.map((partnership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1E293B]/10 flex items-center justify-center flex-shrink-0">
                          <partnership.icon className="w-6 h-6 text-[#1E293B]" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-[#1E293B]">
                              {partnership.ministry}
                            </h4>
                            <Badge className="bg-green-100 text-green-700">
                              {partnership.status}
                            </Badge>
                          </div>
                          
                          <h5 className="font-medium text-gray-800 mb-2">
                            {partnership.partnership}
                          </h5>
                          
                          <p className="text-gray-600 text-sm mb-3">
                            {partnership.description}
                          </p>
                          
                          <div className="flex items-center text-[#F59E0B]">
                            <Award className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{partnership.impact}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1E293B] mb-6">
              Certifications & Compliance
            </h3>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-2 border-[#F59E0B]/20 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center">
                          <FileCheck className="w-5 h-5 text-[#F59E0B]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1E293B]">{cert.title}</h4>
                          <p className="text-sm text-gray-600">{cert.description}</p>
                          <p className="text-xs text-gray-500">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Royal Patronage Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="border-2 border-[#F59E0B] shadow-xl bg-gradient-to-br from-[#F59E0B]/5 to-[#1E293B]/5">
                <CardContent className="p-6 text-center">
                  <Crown className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#1E293B] mb-2">
                    Royal Patronage
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Under the distinguished patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, 
                    Ruler of Sharjah, ensuring highest standards of governance and strategic alignment.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white"
                  >
                    View Official Charter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Board of Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1E293B]/5 to-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1E293B] mb-4">
              Distinguished Board of Advisors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              17 distinguished leaders from government, industry, and academia providing 
              strategic guidance and ensuring alignment with national priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1E293B]/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#1E293B]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1E293B] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[#F59E0B] font-medium text-sm mb-2">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {member.credentials}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {member.expertise}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B]/5"
            >
              <Handshake className="mr-2 h-4 w-4" />
              View Full Board Directory
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentPartnership;