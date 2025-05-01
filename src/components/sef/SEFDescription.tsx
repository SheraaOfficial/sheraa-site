import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface SEFDescriptionProps {
  isInView: boolean;
}
export function SEFDescription({
  isInView
}: SEFDescriptionProps) {
  return <>
      <motion.p initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }} className="">
        Experience two electrifying days of innovation, inspiration, and meaningful connections 
        at SRTI Park, Sharjah. Join thousands of entrepreneurs, investors, and innovators from across 
        the globe.
      </motion.p>
      
      {/* CTA Button - Mobile friendly */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" variant="outline" className="border-[#FED700] text-[#FED700] hover:bg-[#FED700]/10 group">
          <Link to="/events/sef/register" className="flex items-center gap-2 my-0">
            <span>REGISTER YOUR INTEREST</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </>;
}