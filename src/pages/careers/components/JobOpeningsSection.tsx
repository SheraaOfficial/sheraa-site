
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, MapPin, Clock, Users, Code, 
  Megaphone, ArrowRight, Star, Filter,
  Heart, Building, Palette, BarChart
} from 'lucide-react';

const JobOpeningsSection: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Programs', 'Marketing', 'Technology', 'Community', 'Operations'];

  const openRoles = [
    {
      id: 1,
      title: "Senior Program Manager",
      department: "Programs",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "5+ years",
      description: "Lead our flagship incubation programs and drive startup success across our ecosystem. Work directly with 50+ startups annually.",
      icon: Briefcase,
      salary: "AED 15,000 - 20,000",
      featured: true,
      skills: ["Program Management", "Startup Operations", "Leadership", "Stakeholder Management"],
      benefits: ["Equity participation", "Global network access", "Professional development"]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Sharjah, UAE", 
      experience: "3+ years",
      description: "Drive our digital presence and create compelling content that resonates with entrepreneurs across the MENA region.",
      icon: Megaphone,
      salary: "AED 10,000 - 14,000",
      featured: false,
      skills: ["Digital Marketing", "Content Creation", "Social Media", "Analytics"],
      benefits: ["Creative freedom", "Latest tools", "Conference attendance"]
    },
    {
      id: 3,
      title: "Community Manager",
      department: "Community",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "2+ years", 
      description: "Build and nurture our thriving community of 1,900+ entrepreneurs, mentors, and industry leaders.",
      icon: Users,
      salary: "AED 8,000 - 12,000",
      featured: false,
      skills: ["Community Building", "Event Management", "Networking", "Communication"],
      benefits: ["Direct ecosystem impact", "Networking opportunities", "Event budget"]
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      department: "Technology",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "4+ years",
      description: "Build and enhance our digital platforms that serve thousands of entrepreneurs across the region.",
      icon: Code,
      salary: "AED 12,000 - 18,000",
      featured: true,
      skills: ["React", "Node.js", "TypeScript", "Cloud Platforms"],
      benefits: ["Modern tech stack", "Remote flexibility", "Learning budget"]
    },
    {
      id: 5,
      title: "Operations Coordinator",
      department: "Operations",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "2+ years",
      description: "Ensure smooth operations across all programs and maintain high standards of service delivery.",
      icon: Building,
      salary: "AED 7,000 - 10,000",
      featured: false,
      skills: ["Operations Management", "Process Optimization", "Project Coordination"],
      benefits: ["Cross-functional exposure", "Process improvement", "Skill development"]
    },
    {
      id: 6,
      title: "Creative Designer",
      department: "Marketing",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "3+ years",
      description: "Create stunning visual content and brand experiences for our events, programs, and digital platforms.",
      icon: Palette,
      salary: "AED 9,000 - 13,000",
      featured: false,
      skills: ["Graphic Design", "Brand Design", "Video Production", "UI/UX"],
      benefits: ["Creative freedom", "Design tools", "Portfolio building"]
    }
  ];

  const filteredRoles = selectedDepartment === 'All' 
    ? openRoles 
    : openRoles.filter(role => role.department === selectedDepartment);

  return (
    <section id="openings" className="py-20 bg-white dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <Star className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Open Positions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Find the perfect role that matches your skills and passion. Every position directly contributes 
            to empowering the next generation of entrepreneurs.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDepartment(dept)}
                className={selectedDepartment === dept ? "bg-sheraa-primary" : ""}
              >
                <Filter className="w-4 h-4 mr-1" />
                {dept}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className={`h-full border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                role.featured 
                  ? "border-sheraa-primary/30 bg-gradient-to-br from-sheraa-primary/5 to-white" 
                  : "border-gray-200 hover:border-sheraa-primary/30"
              }`}>
                <CardContent className="p-8">
                  {role.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-sheraa-primary text-white">
                        <Heart className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <role.icon className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {role.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {role.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-green-600">
                          {role.salary}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{role.experience}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {role.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {role.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 group">
                    Apply for This Role
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
            Submit General Application
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;
