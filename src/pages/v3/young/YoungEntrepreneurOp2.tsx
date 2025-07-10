import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { EnhancedHeroSystem } from "@/components/v3/enhanced/EnhancedHeroSystems";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import { MagneticCursor } from "@/components/v3/modern/MagneticCursor";
import { StartupChallengeArena } from "@/components/v3/gamification/StartupChallengeArena";
import { SwipeableFounderCards } from "@/components/v3/gamification/SwipeableFounderCards";
import { AchievementSystem } from "@/components/v3/gamification/AchievementSystem";
import { EnhancedMobileOptimizations } from "@/components/v3/mobile/EnhancedMobileOptimizations";
import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const YoungEntrepreneurOp2: React.FC = () => {
  return (
    <EnhancedMobileOptimizations>
      <MagneticCursor>
        <MainLayout>
          <YoungEntrepreneurNavigation />
          
          {/* Enhanced Hero Section with Modern Video Slider */}
          <EnhancedHeroSystem persona="young" />
          
          {/* Challenge Arena Section */}
          <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-6 kinetic-text young-gradient-text">
                  Level Up Your Skills! 🚀
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Master entrepreneurship through interactive challenges, compete with peers, and unlock real rewards.
                </p>
              </div>
              <StartupChallengeArena />
            </div>
          </section>

          {/* Founder Cards Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-6 kinetic-text">
                  Meet Your Tribe 👥
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Connect with fellow young entrepreneurs who share your vision and passion.
                </p>
              </div>
              <SwipeableFounderCards />
            </div>
          </section>

          {/* Achievement System */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4">
              <AchievementSystem />
            </div>
          </section>

          {/* Gamified Dashboard CTA */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-black mb-6 kinetic-text">
                Ready for the Ultimate Experience? 🎮
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Access your personalized dashboard with advanced features, real-time challenges, and AI-powered insights.
              </p>
              <Link 
                to="/v3/young/dashboard"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                <Gamepad2 className="w-6 h-6" />
                Enter Gamified Dashboard
              </Link>
            </div>
          </section>

          {/* Sticky CTA */}
          <CyclingStickyCornerCTA />
        </MainLayout>
      </MagneticCursor>
    </EnhancedMobileOptimizations>
  );
};

export default YoungEntrepreneurOp2;