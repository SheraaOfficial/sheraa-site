import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';

// Define the data structure for our passes
interface PassType {
  name: string;
  price: string;
  color: string;
  features: string[];
  popular?: boolean;
}
const passes: PassType[] = [{
  name: 'Standard Pass',
  price: 'AED 199',
  color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  features: ['Access to all zones', '2-day festival entry', 'Access to workshops', 'Digital program guide']
}, {
  name: 'Premium Pass',
  price: 'AED 499',
  color: 'bg-gradient-to-br from-purple-400 to-purple-700',
  features: ['All Standard Pass features', 'VIP lounge access', 'Exclusive networking events', 'SEF goodie bag', 'Priority seating at keynotes'],
  popular: true
}, {
  name: 'Executive Pass',
  price: 'AED 999',
  color: 'bg-gradient-to-br from-amber-400 to-orange-600',
  features: ['All Premium Pass features', 'Meet & greet with keynote speakers', 'Private meeting rooms access', 'Complimentary F&B', 'Exclusive investor matchmaking']
}];
const PassCard: React.FC<{
  pass: PassType;
  index: number;
}> = ({
  pass,
  index
}) => {
  return <motion.div className={`relative rounded-xl overflow-hidden border ${pass.popular ? 'border-purple-400/50' : 'border-gray-200/30'} shadow-lg`} initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }}>
      {/* Popular badge */}
      {pass.popular && <div className="absolute top-0 right-0">
          <div className="bg-purple-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>}
      
      {/* Header */}
      <div className={`${pass.color} px-6 py-8 text-white`}>
        <h3 className="text-xl font-bold">{pass.name}</h3>
        <div className="flex items-end mt-2">
          <span className="text-3xl font-extrabold">{pass.price}</span>
          <span className="text-sm opacity-80 ml-1 mb-1">/ person</span>
        </div>
      </div>
      
      {/* Features */}
      <div className="p-6 bg-white dark:bg-gray-800">
        <ul className="space-y-3">
          {pass.features.map((feature, idx) => <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>)}
        </ul>
        
        {/* CTA Button */}
        <div className="mt-8">
          {pass.popular ? <Sparkles colors={["#9b87f5", "#FF6600", "#D946EF", "#F97316"]} count={15}>
              <Button variant="default" className="w-full bg-gradient-to-r from-purple-500 to-orange-500 border-none text-white">
                Get Your Pass
              </Button>
            </Sparkles> : <Button variant={pass.name === "Executive Pass" ? "secondary" : "outline"} className="w-full bg-amber-600 hover:bg-amber-500">
              Get Your Pass
            </Button>}
        </div>
      </div>
    </motion.div>;
};
const SEFFestivalPasses: React.FC = () => {
  return <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#9b87f5] dark:bg-purple-900/30 text-sm font-medium mb-2">
            Festival Passes
          </motion.div>
          
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            Secure Your Spot at SEF
          </motion.h2>
          
          <motion.p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg" initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Choose the pass that best fits your entrepreneurial journey. Early bird rates available for a limited time.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map((pass, index) => <PassCard key={pass.name} pass={pass} index={index} />)}
        </div>
        
        <div className="text-center mt-12">
          <motion.p className="text-sm text-gray-500 dark:text-gray-400 mb-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.7
        }}>
            Group discounts available for teams of 5 or more.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }}>
            <Button variant="link" className="text-[#9b87f5]">
              Contact us for special rates
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SEFFestivalPasses;