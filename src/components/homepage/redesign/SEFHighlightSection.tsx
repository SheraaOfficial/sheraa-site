
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe, Award, ArrowRight, Sparkles } from "lucide-react";

const sefStats = [
  { icon: Users, value: "14,000+", label: "Attendees" },
  { icon: Globe, value: "300+", label: "Global Speakers" },
  { icon: Calendar, value: "250+", label: "Activities" },
  { icon: Award, value: "45", label: "Countries" }
];

export const SEFHighlightSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-sheraa-primary to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sheraa-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-sm font-medium">THE REGION'S PREMIER FESTIVAL</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sharjah Entrepreneurship Festival
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the energy of SEF, our annual flagship event. SEF brings together 
                thousands of entrepreneurs, investors, creators, and leaders from around the 
                globe for inspiration, connection, and growth.
              </p>
            </div>

            {/* Next Event Info */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-yellow-300" />
                  <span className="text-lg font-semibold">SEF 2026</span>
                </div>
                <p className="text-white/80 mb-4">
                  Mark your calendars! The next edition returns January 31st - February 1st, 2026.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-white text-sheraa-primary hover:bg-white/90">
                    <Link to="/events/sef/register">Register Early</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/events/sef/2025">SEF 2025 Recap</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-white text-sheraa-primary hover:bg-white/90">
                <Link to="/events/sef" className="flex items-center gap-2">
                  Learn More About SEF
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {sefStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300"
              >
                <stat.icon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
