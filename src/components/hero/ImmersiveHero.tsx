
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Play, Users, Award, TrendingUp } from 'lucide-react';

export const ImmersiveHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sheraa-light/30 to-white dark:from-sheraa-dark dark:via-sheraa-primary/10 dark:to-sheraa-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sheraa-teal/15 rounded-lg rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-sheraa-orange/20 rounded-full animate-ping delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,102,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-sheraa-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-sheraa-primary">Creating the Next Wave of Entrepreneurs</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-sheraa-dark dark:text-white mb-2">Dream to</span>
                <span className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent">
                  Transform
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed">
                Sharjah's official hub for aspiring founders and established ventures. 
                We empower <span className="font-bold text-sheraa-primary">changemakers</span> to build 
                impactful businesses through collaboration, innovation, and a 
                <span className="font-bold text-sheraa-teal"> founder-first ethos</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton asChild size="xl" className="group">
                <Link to="/programs" className="flex items-center gap-3">
                  <span>Launch Your Startup</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
              
              <Button asChild size="xl" variant="outline" className="border-2 border-sheraa-primary/40 text-sheraa-primary hover:bg-sheraa-primary/10 group">
                <Link to="/community/join" className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sheraa-primary/20">
              {[
                { icon: Users, number: "180+", label: "Startups Supported" },
                { icon: TrendingUp, number: "$248M+", label: "Revenue Generated" },
                { icon: Award, number: "1,900+", label: "Jobs Created" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
                    <IconComponent className="w-8 h-8 text-sheraa-primary mx-auto mb-2 group-hover:text-sheraa-orange transition-colors" />
                    <div className="text-2xl md:text-3xl font-black text-sheraa-primary mb-1">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Central Circle */}
              <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 backdrop-blur-sm border-2 border-white/30 shadow-2xl flex items-center justify-center">
                <div className="text-4xl font-black bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Sheraa
                </div>
              </div>

              {/* Orbiting Elements */}
              {[
                { icon: Users, color: "sheraa-primary", position: "top-0 left-1/2 -translate-x-1/2" },
                { icon: Award, color: "sheraa-orange", position: "top-1/2 right-0 -translate-y-1/2" },
                { icon: TrendingUp, color: "sheraa-teal", position: "bottom-0 left-1/2 -translate-x-1/2" },
                { icon: Play, color: "sheraa-primary", position: "top-1/2 left-0 -translate-y-1/2" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`absolute ${item.position} w-16 h-16 bg-white dark:bg-sheraa-dark rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                  >
                    <IconComponent className={`w-8 h-8 text-${item.color}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sheraa-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sheraa-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
