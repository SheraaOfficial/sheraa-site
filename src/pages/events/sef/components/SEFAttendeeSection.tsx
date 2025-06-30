
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, Lightbulb, Building2, GraduationCap, 
  Globe, Trophy, ArrowRight, Sparkles,
  Briefcase, Target, Network, Star
} from 'lucide-react';

const SEFAttendeeSection: React.FC = () => {
  const attendeeTypes = [
    {
      title: "Entrepreneurs & Founders",
      subtitle: "Early to Growth Stage",
      description: "Whether you're validating your first idea or scaling globally, connect with peers, mentors, and investors.",
      icon: Lightbulb,
      benefits: [
        "Pitch to 300+ investors",
        "Access to funding opportunities",
        "Mentorship from successful founders",
        "Product showcasing opportunities"
      ],
      color: "from-blue-500 to-purple-600",
      iconBg: "bg-blue-50 text-blue-600",
      stats: "60% of Attendees"
    },
    {
      title: "Investors & VCs",
      subtitle: "Angels to Corporate VCs",
      description: "Discover the next unicorn, meet promising startups, and connect with the regional investment ecosystem.",
      icon: Trophy,
      benefits: [
        "Curated startup deal flow",
        "Private investor networking",
        "Market insights & trends",
        "Co-investment opportunities"
      ],
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-green-50 text-green-600",
      stats: "15% of Attendees"
    },
    {
      title: "Students & Graduates",
      subtitle: "Future Innovators",
      description: "Learn entrepreneurial skills, network with industry leaders, and discover career opportunities in startups.",
      icon: GraduationCap,
      benefits: [
        "Career opportunities in startups",
        "Entrepreneurship workshops",
        "Mentorship connections",
        "Student pitch competitions"
      ],
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-50 text-purple-600",
      stats: "12% of Attendees"
    },
    {
      title: "Corporate Leaders",
      subtitle: "Innovation & Partnerships",
      description: "Explore innovation partnerships, discover emerging technologies, and connect with startup ecosystems.",
      icon: Building2,
      benefits: [
        "Innovation partnership opportunities",
        "Technology scouting",
        "Corporate venture insights",
        "Digital transformation strategies"
      ],
      color: "from-orange-500 to-red-600",
      iconBg: "bg-orange-50 text-orange-600",
      stats: "8% of Attendees"
    },
    {
      title: "Government & Policy",
      subtitle: "Ecosystem Enablers",
      description: "Shape entrepreneurship policy, support ecosystem development, and facilitate public-private partnerships.",
      icon: Globe,
      benefits: [
        "Policy development insights",
        "Ecosystem development strategies",
        "Public-private partnerships",
        "Regional collaboration opportunities"
      ],
      color: "from-teal-500 to-cyan-600",
      iconBg: "bg-teal-50 text-teal-600",
      stats: "3% of Attendees"
    },
    {
      title: "Service Providers",
      subtitle: "Startup Enablers",
      description: "Connect with startups needing legal, financial, technical, and business development services.",
      icon: Briefcase,
      benefits: [
        "Client acquisition opportunities",
        "Industry networking",
        "Service partnership deals",
        "Market expansion insights"
      ],
      color: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-50 text-pink-600",
      stats: "2% of Attendees"
    }
  ];

  const whyAttendReasons = [
    {
      icon: Network,
      title: "High-Impact Networking",
      description: "Connect with 14,000+ entrepreneurs, investors, and innovators from 45+ countries in curated networking sessions."
    },
    {
      icon: Target,
      title: "Actionable Learning",
      description: "Gain practical insights from 300+ global speakers through keynotes, workshops, and masterclasses."
    },
    {
      icon: Star,
      title: "Business Opportunities",
      description: "Discover funding, partnerships, clients, and talent through structured matchmaking and showcase opportunities."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Users className="w-5 h-5 text-sheraa-sef-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              Join Your Community
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            Who Should Attend SEF
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SEF brings together a diverse community of changemakers, each finding unique value and opportunities 
            tailored to their journey and goals.
          </p>
        </motion.div>

        {/* Attendee Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {attendeeTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-sheraa-dark dark:to-gray-800/50">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${type.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-8 h-8" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {type.stats}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-sheraa-sef-primary font-medium text-sm mb-3">{type.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-3">
                      What You'll Gain:
                    </h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-sheraa-sef-primary" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Attend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sheraa-sef-primary/5 to-sheraa-sef-accent/5 rounded-3xl p-12 mb-16 border border-sheraa-sef-primary/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              Why SEF is Different
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              More than just an event, SEF is a catalyst for meaningful connections, 
              actionable insights, and real business opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyAttendReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-8 h-8 text-sheraa-sef-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white border-0">
            <CardContent className="p-12">
              <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Find Your Tribe at SEF 2026</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join 14,000+ changemakers who are shaping the future of entrepreneurship. 
                Your journey starts with a single connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50">
                  <Link to="/events/sef/register">
                    Get Your Pass
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/events/sef/who-should-attend">
                    Learn More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFAttendeeSection;
