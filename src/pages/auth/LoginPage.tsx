
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Users, Target } from "lucide-react";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen bg-gradient-to-br from-white via-sheraa-light/30 to-sheraa-primary/10 dark:from-sheraa-dark/90 dark:via-sheraa-dark/70 dark:to-sheraa-primary/10 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sheraa-primary/20 dark:bg-sheraa-teal/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 min-h-[calc(100vh-12rem)]">
            {/* Left side - Welcome content */}
            <motion.div 
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/15 to-sheraa-teal/15 border border-sheraa-primary/30 mb-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-sheraa-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Welcome Back to Sheraa
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight">
                Continue Your
                <br />
                Entrepreneurial Journey
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Connect with fellow founders, share your journey, and be part of our vibrant entrepreneurial community.
              </p>
              
              <div className="hidden md:block bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 p-6 rounded-2xl backdrop-blur-sm border border-sheraa-primary/20">
                <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-sheraa-primary pl-4">
                  "Sheraa has been instrumental in connecting me with like-minded entrepreneurs and investors who share my vision."
                  <footer className="text-sm mt-2 text-sheraa-primary font-medium">
                    — Sarah Al Amiri, Tech Founder
                  </footer>
                </blockquote>
              </div>

              {/* Features */}
              <div className="space-y-4 mt-8">
                {[
                  { icon: Users, title: "Connect & Network", desc: "Join a community of ambitious entrepreneurs" },
                  { icon: Target, title: "Access Resources", desc: "Get exclusive tools and mentorship opportunities" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="bg-sheraa-primary/10 p-2 rounded-full">
                      <feature.icon className="h-5 w-5 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sheraa-primary">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right side - Login form */}
            <motion.div 
              className="md:w-1/2 max-w-md w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-sheraa-primary/20 rounded-3xl">
                <LoginForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
