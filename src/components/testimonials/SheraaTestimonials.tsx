
import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Sheraa's S3 Incubator provided us with the mentorship and network we needed to scale across the MENA region. The equity-free funding model was a game-changer.",
    image: "/placeholder.svg",
    name: "Sarah Al Madani",
    role: "Founder & CEO",
    program: "S3 Incubator",
    achievement: "500K+ Users"
  },
  {
    text: "Through the Access Sharjah Challenge, we secured our first major corporate partnership with BEEAH. Sheraa's connections opened doors we couldn't reach alone.",
    image: "/placeholder.svg",
    name: "Mohammed Abbas",
    role: "Co-founder",
    program: "Access Sharjah Challenge",
    achievement: "POC Winner"
  },
  {
    text: "The Startup Dojo summer program gave me the foundation to turn my university project into a real business. The mentorship was invaluable.",
    image: "/placeholder.svg",
    name: "Fatima Hassan",
    role: "Student Entrepreneur",
    program: "Startup Dojo",
    achievement: "Top Graduate"
  },
  {
    text: "Sheraa's ecosystem helped us navigate the UAE market and connect with investors. We raised our seed round within 6 months of graduating.",
    image: "/placeholder.svg",
    name: "Ahmed Al Shamsi",
    role: "Founder",
    program: "S3 Incubator",
    achievement: "Seed Funded"
  },
  {
    text: "The community at Sheraa is incredible. The peer learning and networking opportunities accelerated our growth beyond expectations.",
    image: "/placeholder.svg",
    name: "Nora Khalil",
    role: "Co-founder",
    program: "S3 Incubator",
    achievement: "Revenue Growth"
  },
  {
    text: "As a woman entrepreneur, Sheraa provided a supportive environment where I could build my EdTech startup with confidence and expert guidance.",
    image: "/placeholder.svg",
    name: "Layla Mansouri",
    role: "Founder & CEO",
    program: "S3 Incubator",
    achievement: "Women Leader"
  },
  {
    text: "The international connections through Sheraa helped us expand to three countries. Their global network is truly impressive.",
    image: "/placeholder.svg",
    name: "Khalid Rahman",
    role: "Co-founder",
    program: "Access Sharjah Challenge",
    achievement: "Global Expansion"
  },
  {
    text: "Sheraa's mentor network provided industry insights that saved us months of trial and error. The quality of guidance is exceptional.",
    image: "/placeholder.svg",
    name: "Amira Said",
    role: "Founder",
    program: "S3 Incubator",
    achievement: "Product-Market Fit"
  },
  {
    text: "From idea to implementation, Sheraa supported our sustainability startup every step of the way. We're now reducing carbon footprint across the region.",
    image: "/placeholder.svg",
    name: "Omar Al Zahra",
    role: "Environmental Engineer",
    program: "Access Sharjah Challenge",
    achievement: "Impact Leader"
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const SheraaTestimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-sheraa-primary/10 border-sheraa-primary/20 text-sheraa-primary font-medium">
              Success Stories
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Founders Building the Future
            </span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600 dark:text-gray-400">
            Real stories from entrepreneurs who transformed their ideas into thriving businesses through Sheraa's ecosystem.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default SheraaTestimonials;
