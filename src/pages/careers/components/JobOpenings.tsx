
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, MapPin, Clock, Users, Code, 
  Megaphone, ArrowRight, Star
} from 'lucide-react';

const JobOpenings: React.FC = () => {
  const openRoles = [
    {
      id: 1,
      title: "Senior Program Manager",
      department: "Programs",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "5+ years",
      description: "Lead our flagship incubation programs and drive startup success across our ecosystem.",
      icon: Briefcase,
      requirements: [
        "5+ years in program management or startup operations",
        "Experience working with early-stage startups",
        "Strong leadership and communication skills",
        "Bachelor's degree in Business or related field"
      ],
      benefits: [
        "Competitive salary + equity",
        "Work with 180+ startups",
        "Access to global network",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Sharjah, UAE", 
      experience: "3+ years",
      description: "Drive our digital presence and create compelling content that resonates with entrepreneurs.",
      icon: Megaphone,
      requirements: [
        "3+ years in digital marketing",
        "Content creation and social media expertise",
        "Analytics and data-driven approach",
        "Experience with startup/tech marketing"
      ],
      benefits: [
        "Creative freedom",
        "Latest marketing tools",
        "Conference attendance",
        "Flexible work arrangements"
      ]
    },
    {
      id: 3,
      title: "Community Manager",
      department: "Community",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "2+ years", 
      description: "Build and nurture our thriving community of 1,900+ entrepreneurs and mentors.",
      icon: Users,
      requirements: [
        "Community building experience",
        "Event planning and management",
        "Excellent interpersonal skills",
        "Passion for entrepreneurship"
      ],
      benefits: [
        "Direct impact on ecosystem",
        "Networking opportunities",
        "Event budget",
        "Leadership development"
      ]
    },
    {
      id: 4,
      title: "Product Developer",
      department: "Technology",
      type: "Full-time",
      location: "Sharjah, UAE",
      experience: "4+ years",
      description: "Build and enhance our digital platforms that serve thousands of entrepreneurs.",
      icon: Code,
      requirements: [
        "4+ years full-stack development",
        "React, Node.js, database experience",
        "Product mindset and user focus",
        "Startup environment experience"
      ],
      benefits: [
        "Modern tech stack",
        "Product ownership",
        "Learning budget",
        "Remote work options"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sheraa-light/20 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30">
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
            <span className="text-sm font-medium text-sheraa-primary">We're Hiring</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our mission to empower the next generation of entrepreneurs. Find the role that matches your passion and skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {openRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full border border-gray-200 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
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
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {role.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{req}</span>
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

export default JobOpenings;
