
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Building, 
  Briefcase, 
  GraduationCap, 
  ArrowLeft,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { BoardMemberCard } from "./components/BoardMemberCard";
import { BoardStats } from "./components/BoardStats";

const AboutBoardPage: React.FC = () => {
  const boardMembers = [
    {
      name: "Dr. Ahmed Al Qasimi",
      title: "Board Member",
      organization: "Government Representative",
      sector: "Public Sector",
      icon: Building,
      expertise: ["Strategic Planning", "Economic Development", "Policy Making"]
    },
    {
      name: "Sarah Johnson",
      title: "Independent Director",
      organization: "Tech Ventures LLC",
      sector: "Technology",
      icon: Briefcase,
      expertise: ["Technology Innovation", "Venture Capital", "Digital Transformation"]
    },
    {
      name: "Prof. Mohammed Hassan",
      title: "Academic Representative",
      organization: "American University of Sharjah",
      sector: "Education",
      icon: GraduationCap,
      expertise: ["Research & Development", "Higher Education", "Innovation Management"]
    },
    {
      name: "Fatima Al Zahra",
      title: "Industry Expert",
      organization: "Crescent Enterprises",
      sector: "Business",
      icon: Briefcase,
      expertise: ["Corporate Strategy", "Business Development", "Market Expansion"]
    },
    {
      name: "Omar Al Mansoori",
      title: "Entrepreneurship Advocate",
      organization: "Emirates Foundation",
      sector: "Non-Profit",
      icon: Users,
      expertise: ["Community Development", "Youth Empowerment", "Social Innovation"]
    },
    {
      name: "Dr. Amina Khalil",
      title: "Innovation Specialist",
      organization: "Sharjah Research Institute",
      sector: "Research",
      icon: GraduationCap,
      expertise: ["Innovation Systems", "Technology Transfer", "IP Management"]
    }
  ];

  const sectorColors = {
    "Public Sector": "bg-blue-100 text-blue-700",
    "Technology": "bg-purple-100 text-purple-700", 
    "Education": "bg-green-100 text-green-700",
    "Business": "bg-orange-100 text-orange-700",
    "Non-Profit": "bg-teal-100 text-teal-700",
    "Research": "bg-indigo-100 text-indigo-700"
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6 text-sheraa-primary hover:bg-sheraa-primary/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to About</span>
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Board of Advisors</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Strategic Guidance Council
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinguished Board of Advisors comprises 17 leaders from government, industry, 
              academia, and the entrepreneurial community, ensuring our initiatives remain aligned 
              with national priorities and market needs.
            </p>
          </motion.div>

          <BoardStats />

          {/* Board Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {boardMembers.map((member, index) => (
              <BoardMemberCard
                key={index}
                member={member}
                index={index}
                sectorColors={sectorColors}
              />
            ))}
          </div>

          {/* Board Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Our Advisory Mission</h2>
                <p className="text-xl mb-4 text-white/90">
                  "Providing strategic direction and ensuring Sheraa's programs deliver 
                  maximum impact for entrepreneurs and the broader Sharjah ecosystem."
                </p>
                <p className="text-lg text-white/80">
                  Our Board of Advisors brings together diverse perspectives from across 
                  sectors to guide our strategic decisions, validate our approaches, and 
                  ensure our initiatives create lasting value for the entrepreneurial community.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutBoardPage;
