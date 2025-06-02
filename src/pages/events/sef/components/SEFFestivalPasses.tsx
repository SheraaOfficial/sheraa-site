
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Users } from 'lucide-react';

const SEFFestivalPasses: React.FC = () => {
  const passes = [
    {
      name: "General Access",
      price: "Coming Soon",
      description: "Perfect for entrepreneurs, students, and innovation enthusiasts",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      features: [
        "Access to all main stages and sessions",
        "Experience zones and exhibitions", 
        "SEF Souq and networking areas",
        "SEF Eats culinary experiences",
        "Official SEF mobile app",
        "Welcome kit and materials"
      ],
      popular: false
    },
    {
      name: "Premium Access",
      price: "Coming Soon", 
      description: "Enhanced experience with exclusive access and benefits",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      features: [
        "Everything in General Access",
        "Reserved seating at main sessions",
        "Access to Investors Lounge",
        "Priority workshop registration",
        "Premium networking events",
        "VIP dining experiences",
        "Dedicated support team"
      ],
      popular: true
    },
    {
      name: "VIP Experience",
      price: "Coming Soon",
      description: "Ultimate SEF experience with exclusive privileges", 
      icon: Crown,
      color: "from-gold-500 to-yellow-600",
      features: [
        "Everything in Premium Access",
        "Private meet & greets with speakers",
        "Exclusive VIP lounge access",
        "Complimentary accommodation support",
        "Personal concierge service",
        "Post-event exclusive networking",
        "SEF 2026 commemorative gift"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            Festival Passes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose your SEF 2026 experience. Early bird pricing and exclusive access packages coming soon.
            Be the first to know when registration opens!
          </p>
          
          <Badge className="bg-sheraa-sef-primary/10 text-sheraa-sef-primary border-sheraa-sef-primary/20 px-4 py-2">
            🎟️ Early Bird Pricing Available Soon | Limited Seats
          </Badge>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {pass.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-sheraa-sef-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 ${pass.popular ? 'ring-2 ring-sheraa-sef-primary shadow-xl' : 'hover:shadow-lg'}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pass.color} flex items-center justify-center mb-6 mx-auto`}>
                    <pass.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">{pass.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-sm">
                    {pass.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-sheraa-sef-primary mb-2">
                      {pass.price}
                    </div>
                    <div className="text-sm text-gray-500">Pricing details announced soon</div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pass.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${pass.popular ? 'bg-sheraa-sef-primary hover:bg-sheraa-sef-primary/90' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
                    disabled
                  >
                    Notify Me When Available
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center bg-white dark:bg-sheraa-dark rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Special Offers & Group Discounts</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <h4 className="font-semibold mb-2">Student Discounts</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Special pricing for students and young entrepreneurs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <h4 className="font-semibold mb-2">Group Packages</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Discounts for teams of 5+ attendees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏢</div>
              <h4 className="font-semibold mb-2">Corporate Rates</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Special packages for companies and organizations</p>
            </div>
          </div>
          <Button variant="outline" className="border-sheraa-sef-primary text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10">
            Get Notified About Special Offers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFestivalPasses;
