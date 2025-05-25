
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, Handshake, Building2, TrendingUp, ArrowRight, 
  Sparkles, Globe, Heart, Zap, Crown, Star 
} from "lucide-react";

const CommunityPage: React.FC = () => {
  const communityOptions = [
    {
      title: "Join Our Community",
      subtitle: "Sheraa Membership",
      description: "Access essential resources, co-working spaces, and our vibrant network on your terms. Perfect for founders with market-ready products.",
      icon: Users,
      href: "/community/join",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      features: ["Co-working Access", "Network Events", "Expert Mentorship", "Investor Introductions"],
      popular: true
    },
    {
      title: "Partnership Opportunities", 
      subtitle: "Shape the Future Together",
      description: "Collaborate with Sheraa to drive innovation, access cutting-edge startups, and contribute to Sharjah's entrepreneurial ecosystem.",
      icon: Handshake,
      href: "/community/partnerships",
      color: "from-purple-500/20 to-purple-600/20", 
      iconColor: "text-purple-600",
      features: ["Corporate Partnerships", "Investment Opportunities", "Mentor Network", "Event Sponsorship"]
    },
    {
      title: "Our Startups",
      subtitle: "Innovation in Action",
      description: "Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. Connect with founders changing the world.",
      icon: Building2,
      href: "/community/startups",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600", 
      features: ["180+ Startups", "52% Women-Led", "$248M+ Revenue", "71% Survival Rate"]
    }
  ];

  const ecosystemStats = [
    { number: "140+", label: "Ecosystem Partners", icon: Globe },
    { number: "1,900+", label: "Jobs Created", icon: TrendingUp },
    { number: "18,000+", label: "Youth Upskilled", icon: Users },
    { number: "71%", label: "Startup Survival Rate", icon: Star }
  ];

  const partnerTypes = [
    {
      title: "Corporate Partners",
      description: "Industry leaders providing mentorship and market access",
      count: "50+ Partners",
      icon: Building2,
      color: "text-blue-600"
    },
    {
      title: "Government Entities",
      description: "Strategic partnerships with UAE government bodies",
      count: "15+ Entities", 
      icon: Crown,
      color: "text-purple-600"
    },
    {
      title: "Investor Network",
      description: "VCs, angels, and investment funds backing our startups",
      count: "40+ Investors",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Ecosystem Partners", 
      description: "Regional and global innovation hubs and accelerators",
      count: "30+ Partners",
      icon: Globe,
      color: "text-orange-600"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Heart className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Join Sharjah's Innovation Ecosystem
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Powered by Community, Strengthened by Partnership
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Sheraa, we believe that groundbreaking innovation happens through connection and collaboration. 
              Join our dynamic ecosystem of ambitious founders, seasoned mentors, strategic investors, and supportive partners.
            </p>
          </motion.div>

          {/* Community Options */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {communityOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group"
              >
                <Card className={`relative bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full overflow-hidden ${option.popular ? 'border-sheraa-primary/50 shadow-lg' : 'border-sheraa-primary/10 hover:border-sheraa-primary/30'}`}>
                  {option.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="relative z-10 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                    </div>
                    
                    <div className="text-sm font-bold text-sheraa-primary mb-2">
                      {option.subtitle}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {option.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {option.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Zap className="w-3 h-3 text-sheraa-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 group-hover:scale-105 transition-transform duration-300">
                      <Link to={option.href} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Ecosystem Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Impact That Speaks Volumes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We measure our success by the success of our founders and the growth of Sharjah's innovation ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-sheraa-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Network */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Our Diverse Partner Network
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Collaborating with leading organizations across industries to provide comprehensive support to our startups.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index), duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-sheraa-light/50 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30 border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <partner.icon className={`w-8 h-8 ${partner.color}`} />
                      </div>
                      <div className="text-sm font-bold text-sheraa-primary mb-2">
                        {partner.count}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{partner.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{partner.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-12">
                <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Become part of Sharjah's most vibrant entrepreneurial ecosystem and accelerate your journey to success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    <Link to="/community/join">Join as Member</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/community/partnerships">Become a Partner</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
