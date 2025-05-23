
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <BeamsBackground className="opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent mb-4">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Page Not Found</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton asChild size="lg" className="group shadow-glow bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/" className="flex items-center justify-center">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Homepage
                </Link>
              </GradientButton>
              
              <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 hover:bg-sheraa-primary/10">
                <Link to="#" onClick={() => window.history.back()} className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
