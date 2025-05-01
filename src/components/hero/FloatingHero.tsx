
import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { TextRotate } from "@/components/ui/text-rotate";

// Images relevant to Sheraa and entrepreneurship
const sheraaImages = [
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    title: "Business Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop",
    title: "Startup Team",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop",
    title: "Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop",
    title: "Entrepreneur",
  },
  {
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop",
    title: "Tech Innovation",
  },
];

function FloatingHero() {
  return (
    <section className="w-full min-h-[90vh] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-full w-full absolute inset-0">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={sheraaImages[0].url}
            alt={sheraaImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={sheraaImages[1].url}
            alt={sheraaImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={sheraaImages[2].url}
            alt={sheraaImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={sheraaImages[3].url}
            alt={sheraaImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={sheraaImages[4].url}
            alt={sheraaImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto mx-auto">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Making your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                startup{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "innovative",
                  "successful",
                  "sustainable ♥",
                  "global",
                  "🚀 scalable",
                  "impactful",
                  "profitable",
                  "💡 transformative",
                  "grow 🌱",
                  "🔥 disruptive",
                  "unique",
                  "thrive ✨",
                ]}
                mainClassName="overflow-hidden pr-3 text-sheraa-primary py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <GradientButton asChild>
              <Link to="/programs">Launch Your Startup</Link>
            </GradientButton>
          </motion.div>
          
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Button variant="outline" asChild>
              <Link to="/community">Join Our Community</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { FloatingHero };
