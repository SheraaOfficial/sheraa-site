
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Users, 
  Target, 
  Award, 
  Linkedin, 
  Mail, 
  ArrowLeft 
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutLeadershipPage: React.FC = () => {
  const leaders = [
    {
      name: "H.E. Sheikha Bodour Bint Sultan Al Qasimi",
      title: "Chairperson",
      image: "/lovable-uploads/leadership-1.jpg",
      bio: "H.E. Sheikha Bodour is a visionary leader committed to empowering entrepreneurs and strengthening Sharjah's innovation ecosystem.",
      achievements: ["UNESCO Goodwill Ambassador", "President of IPA", "Founder of Kalimat Group"],
      linkedin: "#",
      email: "#"
    },
    {
      name: "Najla Al Midfa",
      title: "Vice-Chairperson",
      image: "/lovable-uploads/leadership-2.jpg",
      bio: "Najla brings extensive experience in strategic leadership and economic development to guide Sheraa's mission.",
      achievements: ["Economic Development Expert", "Strategic Planning Specialist", "Innovation Advocate"],
      linkedin: "#",
      email: "#"
    },
    {
      name: "Sara Al Nuaimi",
      title: "Chief Executive Officer",
      image: "/lovable-uploads/leadership-3.jpg",
      bio: "Sara leads the operational excellence of Sheraa, ensuring effective execution of programs and strategic initiatives.",
      achievements: ["Entrepreneur Development Expert", "Program Management Leader", "Ecosystem Builder"],
      linkedin: "#",
      email: "#"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-teal/10 rounded-full blur-2xl" />
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
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
              <Crown className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-medium text-sheraa-primary">Leadership Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Visionary Leadership
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the exceptional leaders who guide Sheraa's mission to empower entrepreneurs 
              and build a thriving innovation ecosystem in Sharjah.
            </p>
          </motion.div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="group"
              >
                <Card className="h-full border border-sheraa-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-sheraa-primary to-sheraa-teal mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                        {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                      <Badge variant="secondary" className="bg-sheraa-primary/10 text-sheraa-primary">
                        {leader.title}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-sheraa-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {leader.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-1.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <a 
                          href={leader.linkedin} 
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={leader.email} 
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Leadership Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white border-none max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h2>
                <p className="text-xl mb-4 text-white/90">
                  "We believe in empowering the next generation of entrepreneurs through 
                  collaborative leadership, strategic vision, and unwavering commitment to innovation."
                </p>
                <p className="text-lg text-white/80">
                  Our leadership team combines decades of experience in entrepreneurship, 
                  economic development, and strategic planning to guide Sheraa's mission 
                  of building a world-class innovation ecosystem in Sharjah.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutLeadershipPage;
