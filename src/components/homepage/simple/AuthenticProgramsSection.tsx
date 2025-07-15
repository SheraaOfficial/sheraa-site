import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthenticProgramsSection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      text: "S3 Incubator - Your launchpad for scalable growth"
    },
    {
      icon: Users,
      text: "Startup Dojo - Nurturing the next generation of innovators"
    },
    {
      icon: TrendingUp,
      text: "Access Sharjah Challenge - Global startups solving local challenges"
    }
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ready to take your startup to the{' '}
              <span className="text-primary relative">
                next level?
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
              <br />
              We can take you there.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            When you join Sheraa you are plugged into a community where collaboration thrives. 
            Visionary founders and innovators deploy disruptive technologies in high-growth companies 
            to transform industries. Access the resources, expertise and opportunities you need to 
            accelerate your company's growth.
          </motion.p>

          {/* Features List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-4 text-lg text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Sheraa was always there to support me in terms of connecting with the right people, 
              having this vibrant community, networking and meeting interesting people, and the seed funding. 
              All of that established the beginning of my startup journey."
            </blockquote>
            <cite className="text-primary font-semibold">— Real Sheraa Founder</cite>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
              >
                <Link to="/programs">
                  View Our Programs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticProgramsSection;