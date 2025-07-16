import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Lightbulb, TrendingUp, Globe, Award } from 'lucide-react';

const WhoWeAreSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const values = [
    {
      icon: Target,
      title: "Founder-First Approach",
      description: "Every program, resource, and decision is designed with founders' success at the center.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "A network of 180+ startups, mentors, investors, and partners collaborating for growth.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Where bold ideas meet practical support, turning concepts into market-ready ventures.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "$248M+ revenue generated, $171M+ capital raised, and 1,900+ jobs created.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting Sharjah's entrepreneurs to international markets and opportunities.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "71% startup survival rate - well above global averages through quality support.",
      color: "from-red-500 to-red-600"
    }
  ];

  const impactStats = [
    { number: "180+", label: "Startups Supported", sublabel: "Since 2016" },
    { number: "$248M+", label: "Revenue Generated", sublabel: "By our startups" },
    { number: "1,900+", label: "Jobs Created", sublabel: "In the ecosystem" },
    { number: "52%", label: "Women-Led", sublabel: "Startups supported" },
    { number: "18,000+", label: "Youth Upskilled", sublabel: "Through programs" },
    { number: "71%", label: "Survival Rate", sublabel: "Above global average" }
  ];

  return (
    <motion.section 
      style={{ y, opacity }}
      className="relative py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Who We Are at{' '}
            <motion.span 
              className="text-primary relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sheraa
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Since 2016, we have been Sharjah's official entrepreneurship hub, 
            nurturing innovation and supporting founders at every stage of their journey. 
            We believe in the power of collaboration, the strength of community, 
            and the transformative potential of bold ideas.
          </motion.p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-muted-foreground text-lg">
              Building a legacy of innovation and success in Sharjah's entrepreneurial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic leading-relaxed">
              "We're not just building startups—we're cultivating a generation of 
              <span className="text-primary font-semibold"> changemakers </span>
              who will shape the future of innovation in Sharjah and beyond."
            </blockquote>
            <div className="mt-8 text-lg font-medium text-foreground">
              — The Sheraa Mission
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhoWeAreSection;