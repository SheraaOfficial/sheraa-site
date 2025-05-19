
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BadgeCheck, BadgePercent, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the data structure for our passes
interface PassType {
  name: string;
  price: string;
  color: string;
  features: string[];
  popular?: boolean;
  vip?: boolean;
  earlyBird?: boolean;
  showBadge?: boolean;
  badgeText?: string;
}

interface PassPersonaType {
  icon: React.ReactNode;
  title: string;
  description: string;
  recommendedPass: string;
}

// Define pass options
const passes: PassType[] = [{
  name: 'Standard Pass',
  price: 'AED 199',
  color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  features: ['Access to all zones', '2-day festival entry', 'Access to workshops', 'Digital program guide'],
  earlyBird: true,
  showBadge: true,
  badgeText: 'Early Bird'
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
}, {
  name: 'VIP Pass',
  price: 'AED 1,499',
  color: 'bg-gradient-to-br from-emerald-400 to-teal-700',
  features: [
    'All Executive Pass features',
    'Dedicated concierge service',
    'Backstage access to speakers',
    'Luxury gift package',
    'Private dinner with industry leaders',
    'One-on-one mentor sessions'
  ],
  vip: true,
  showBadge: true,
  badgeText: 'Limited'
}];

const personas: PassPersonaType[] = [
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "Student Entrepreneur",
    description: "Perfect for students and aspiring entrepreneurs looking to learn and make initial connections.",
    recommendedPass: "Standard Pass"
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Startup Founder",
    description: "Ideal for founders seeking to network with peers, investors and gain valuable insights.",
    recommendedPass: "Premium Pass"
  },
  {
    icon: <BadgePercent className="w-6 h-6" />,
    title: "Corporate Executive",
    description: "For business leaders looking to connect with innovation ecosystem and potential startup partners.",
    recommendedPass: "Executive Pass"
  }
];

const PassCard: React.FC<{
  pass: PassType;
  index: number;
  selectedPersona: string | null;
}> = ({
  pass,
  index,
  selectedPersona
}) => {
  // Determine if this pass is recommended for the selected persona
  const isRecommended = selectedPersona && passes.find(p => p.name === selectedPersona)?.name === pass.name;

  return <motion.div 
    className={`relative rounded-xl overflow-hidden border ${
      pass.popular ? 'border-purple-400/50' : 
      pass.vip ? 'border-emerald-400/50' :
      'border-gray-200/30'} 
      shadow-lg ${isRecommended ? 'ring-4 ring-offset-2 ring-[#9b87f5]' : ''}`} 
    initial={{
      opacity: 0,
      y: 50
    }} 
    whileInView={{
      opacity: 1,
      y: 0
    }} 
    viewport={{
      once: true
    }} 
    transition={{
      duration: 0.5,
      delay: index * 0.1
    }}
  >
      {/* Popular/VIP badge */}
      {(pass.popular || pass.vip || pass.showBadge) && (
        <div className="absolute top-0 right-0">
          <div className={cn(
            "text-white text-xs font-bold py-1 px-3 rounded-bl-lg",
            pass.popular ? "bg-purple-600" : 
            pass.vip ? "bg-emerald-600" :
            pass.earlyBird ? "bg-blue-600" : ""
          )}>
            {pass.badgeText || (pass.popular ? 'MOST POPULAR' : pass.vip ? 'VIP ONLY' : '')}
          </div>
        </div>
      )}
      
      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute top-4 left-0">
          <Badge variant="default" className="rounded-r-lg rounded-l-none bg-[#9b87f5]">
            Recommended
          </Badge>
        </div>
      )}
      
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
          {pass.popular || pass.vip ? (
            <Sparkles colors={[
              "#9b87f5", 
              "#FF6600", 
              pass.vip ? "#10B981" : "#D946EF", 
              pass.vip ? "#059669" : "#F97316"
            ]} count={15}>
              <Button 
                variant="default" 
                className={cn(
                  "w-full text-white", 
                  pass.vip 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-none" 
                    : "bg-gradient-to-r from-purple-500 to-orange-500 border-none"
                )}
                asChild
              >
                <Link to="/events/sef/register">
                  Get Your Pass
                </Link>
              </Button>
            </Sparkles>
          ) : (
            <Button 
              variant={pass.name === "Executive Pass" ? "secondary" : "outline"} 
              className={cn(
                "w-full",
                pass.name === "Executive Pass" ? "bg-amber-600 hover:bg-amber-500" : ""
              )}
              asChild
            >
              <Link to="/events/sef/register">
                Get Your Pass
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>;
};

const PersonaSelector: React.FC<{
  personas: PassPersonaType[];
  selectedPersona: string | null;
  onSelectPersona: (pass: string) => void;
}> = ({ personas, selectedPersona, onSelectPersona }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {personas.map((persona, index) => (
        <div
          key={persona.title}
          className={cn(
            "p-4 border rounded-lg cursor-pointer transition-all",
            selectedPersona === persona.recommendedPass 
              ? "border-[#9b87f5] bg-[#9b87f5]/10" 
              : "border-gray-200 hover:border-[#9b87f5]/50"
          )}
          onClick={() => onSelectPersona(persona.recommendedPass)}
        >
          <div className="flex items-center space-x-3">
            <div className={cn(
              "p-2 rounded-full",
              selectedPersona === persona.recommendedPass 
                ? "bg-[#9b87f5] text-white" 
                : "bg-gray-100 text-gray-600"
            )}>
              {persona.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{persona.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{persona.description}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const SEFFestivalPasses: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const handleSelectPersona = (pass: string) => {
    setSelectedPersona(currentPersona => currentPersona === pass ? null : pass);
  };

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

        {/* Persona Selector */}
        <PersonaSelector 
          personas={personas} 
          selectedPersona={selectedPersona} 
          onSelectPersona={handleSelectPersona}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {passes.map((pass, index) => <PassCard key={pass.name} pass={pass} index={index} selectedPersona={selectedPersona} />)}
        </div>
        
        <div className="text-center mt-12">
          <motion.div 
            className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Need Help Choosing?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Group discounts available for teams of 5 or more. Special rates for academic institutions and non-profits.
            </p>
            
            <Button asChild variant="default" className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
              <Link to="/events/sef/contact" className="inline-flex items-center">
                Contact us for special rates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default SEFFestivalPasses;
