import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Handshake, 
  TrendingUp, 
  MessageSquare, 
  Star,
  ArrowRight,
  Globe,
  Lightbulb,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommunityConnectSection: React.FC = () => {
  const connections = [
    {
      icon: Users,
      title: 'Find Your Co-founder',
      description: 'Connect with like-minded entrepreneurs who complement your skills and share your vision',
      stats: '200+ active founders',
      action: 'Browse Profiles',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      path: '/community'
    },
    {
      icon: Lightbulb,
      title: 'Connect with Mentors',
      description: 'Get guidance from 30+ experienced entrepreneurs and industry experts',
      stats: '5,400+ mentorship hours',
      action: 'Find Mentors',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      path: '/community/mentors'
    },
    {
      icon: TrendingUp,
      title: 'Access Funding',
      description: 'Connect with investors, apply for grants, and explore funding opportunities',
      stats: '$171M+ raised',
      action: 'Explore Funding',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      path: '/programs/funding'
    }
  ];

  const testimonials = [
    {
      quote: "Through Sheraa, I found my co-founder and connected with the mentors who helped us scale our EdTech startup to serve thousands of students.",
      author: "Amira Hassan",
      company: "LearnFlow",
      avatar: "/src/assets/founder-amira.jpg"
    },
    {
      quote: "The Sheraa community isn't just about networking—it's about finding people who believe in your vision and want to help you succeed.",
      author: "Omar Al-Rashid", 
      company: "GreenTech Solutions",
      avatar: "/src/assets/founder-omar.jpg"
    },
    {
      quote: "From idea validation to investor connections, Sheraa's community has been instrumental in every stage of our startup journey.",
      author: "Fatima Al-Zahra",
      company: "HealthTech Innovations",
      avatar: "/src/assets/founder-fatima.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-sheraa-primary mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              The Middle East's Leading Startup Community
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving ecosystem where founders connect, collaborate, and scale together. 
            At Sheraa, entrepreneurship is powered by community.
          </p>
        </motion.div>

        {/* Connection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {connections.map((connection, index) => (
            <motion.div
              key={connection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`p-4 rounded-lg ${connection.bgColor} w-fit mb-6`}>
                <connection.icon className={`h-8 w-8 ${connection.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {connection.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {connection.description}
              </p>
              
              <div className={`text-sm font-semibold ${connection.color} mb-6`}>
                {connection.stats}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-sheraa-primary group-hover:text-white transition-colors"
                asChild
              >
                <Link to={connection.path}>
                  {connection.action}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sheraa-primary/10 to-sheraa-accent/10 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by Community, Strengthened by Partnership
            </h3>
            <p className="text-gray-600">
              Entrepreneurship thrives in collaboration. Connect with a vibrant network dedicated to fostering innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sheraa-primary mb-2">200+</div>
              <div className="text-sm text-gray-600">Active Founders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sheraa-primary mb-2">30+</div>
              <div className="text-sm text-gray-600">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sheraa-primary mb-2">140+</div>
              <div className="text-sm text-gray-600">Ecosystem Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sheraa-primary mb-2">52%</div>
              <div className="text-sm text-gray-600">Women-Led Startups</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Success Stories from Our Community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-accent/20 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-sheraa-primary to-sheraa-accent rounded-2xl p-8 text-white">
            <Globe className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Sharjah's Thriving Ecosystem?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a co-founder, seeking mentorship, or ready to scale your startup, 
              our community is here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-100" asChild>
                <Link to="/community/membership">
                  Explore Membership
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/apply">
                  Apply to Programs
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityConnectSection;