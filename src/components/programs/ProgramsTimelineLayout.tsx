
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, Rocket, Globe, Building2, ArrowRight,
  CheckCircle, Clock, DollarSign, Users, Target, Award
} from "lucide-react";

interface Program {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  duration: string;
  commitment: string;
  funding: string;
  outcomes: string[];
  stats: string;
  link: string;
  position: 'left' | 'right';
}

const programs: Program[] = [
  {
    id: "start-young",
    stage: "Stage 1: Foundation",
    title: "Start Young",
    subtitle: "Build Your Foundation",
    description: "Perfect for students and aspiring entrepreneurs. Learn fundamentals, validate ideas, and build your entrepreneurial mindset.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    duration: "8 weeks",
    commitment: "Part-time",
    funding: "Grants available",
    outcomes: ["Business fundamentals", "Idea validation", "Network building", "Pitch skills"],
    stats: "18k+ youth trained",
    link: "/programs/start-young",
    position: 'left'
  },
  {
    id: "s3-incubator",
    stage: "Stage 2: Validation",
    title: "S3 Incubator", 
    subtitle: "Scale Your Startup",
    description: "Our flagship program. Get $30k equity-free funding and 6 months of intensive support to achieve product-market fit.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    duration: "6 months",
    commitment: "Full-time",
    funding: "$30k equity-free",
    outcomes: ["Equity-free funding", "Mentor network", "Market validation", "Investor readiness"],
    stats: "180+ startups supported",
    link: "/programs/s3-incubator",
    position: 'right'
  },
  {
    id: "access-sharjah",
    stage: "Stage 3: Market Access",
    title: "Access Sharjah Challenge",
    subtitle: "Unlock Market Opportunities",
    description: "Connect with Sharjah's ecosystem through real industry challenges with direct POC opportunities and funding.",
    icon: Globe,
    color: "from-purple-500 to-violet-500", 
    duration: "3-6 months",
    commitment: "Project-based",
    funding: "POC grants up to $68k",
    outcomes: ["Direct market access", "POC funding", "Government connections", "Industry validation"],
    stats: "Direct POCs with major partners",
    link: "/programs/access-sharjah-challenge",
    position: 'left'
  },
  {
    id: "sme-support",
    stage: "Stage 4: Growth & Scale",
    title: "SME Support",
    subtitle: "Innovation & Expansion",
    description: "For established businesses ready to innovate. Access partnerships, funding, and market expansion opportunities.",
    icon: Building2,
    color: "from-orange-500 to-red-500",
    duration: "Ongoing",
    commitment: "Flexible",
    funding: "Partnership access & financing",
    outcomes: ["Innovation support", "Partnership access", "Market expansion", "Resource connections"],
    stats: "60k+ SMEs in Sharjah",
    link: "/community/partnerships",
    position: 'right'
  }
];

export const ProgramsTimelineLayout: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Entrepreneurial Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow a proven path from idea to scale. Each stage builds on the previous, 
            providing exactly what you need to move forward.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 h-full hidden lg:block" />
          
          {programs.map((program, index) => {
            const Icon = program.icon;
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50, x: program.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-16 lg:mb-24 ${
                  program.position === 'left' 
                    ? 'lg:pr-1/2 lg:text-right' 
                    : 'lg:pl-1/2 lg:ml-auto lg:text-left'
                } lg:w-1/2`}
              >
                {/* Timeline Node */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-current rounded-full z-10 hidden lg:block"
                     style={{ color: `hsl(${index * 90}, 70%, 50%)` }} />
                
                {/* Program Card */}
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 hover:border-transparent">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  
                  <CardContent className="p-8">
                    {/* Stage Badge */}
                    <Badge 
                      variant="outline" 
                      className={`mb-4 bg-gradient-to-r ${program.color} text-white border-none`}
                    >
                      {program.stage}
                    </Badge>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {program.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Program Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{program.commitment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{program.funding}</span>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        What You&apos;ll Achieve:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 text-center">
                        <Award className="w-6 h-6 mx-auto text-green-600 mb-2" />
                        <p className="text-sm font-bold text-green-700 dark:text-green-400">
                          {program.stats}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg transition-all duration-300 group`}
                      size="lg"
                    >
                      <Link to={program.link} className="flex items-center justify-center gap-2">
                        <span className="font-bold">Learn More & Apply</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Connection Arrow for larger screens */}
                {index < programs.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + 0.5 }}
                    className="hidden lg:flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 shadow-md flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-gray-600 rotate-90" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/10 via-sheraa-secondary/10 to-sheraa-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Not sure which stage fits you? Our AI-powered program matcher will recommend 
              the perfect starting point based on your startup&apos;s current status.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary">
              <Target className="w-5 h-5 mr-2" />
              Find My Perfect Program
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
