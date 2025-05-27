import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShineBorder, Timeline } from '@/components/ui/shine-border';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BadgeCheck, BadgePercent, ChevronDown, ChevronUp, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

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
  description?: string;
  registerLink: string;
}
interface PassPersonaType {
  icon: React.ReactNode;
  title: string;
  description: string;
  recommendedPass: string;
}

// Define pass options with enhanced descriptions and features
const passes: PassType[] = [{
  name: 'Standard Pass',
  price: 'AED 199',
  color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  description: 'Perfect for first-time attendees looking to experience SEF.',
  features: ['Access to all zones', '2-day festival entry', 'Access to workshops', 'Digital program guide', 'SEF mobile app access', 'Networking opportunities'],
  earlyBird: true,
  showBadge: true,
  badgeText: 'Early Bird',
  registerLink: '/events/sef/register?pass=standard'
}, {
  name: 'Premium Pass',
  price: 'AED 499',
  color: 'bg-gradient-to-br from-purple-400 to-purple-700',
  description: 'Enhanced experience with exclusive networking opportunities.',
  features: ['All Standard Pass features, plus:', 'VIP lounge access', 'Exclusive networking events', 'SEF goodie bag', 'Priority seating at keynotes', 'Access to speaker meet & greets'],
  popular: true,
  registerLink: '/events/sef/register?pass=premium'
}, {
  name: 'Executive Pass',
  price: 'AED 999',
  color: 'bg-gradient-to-br from-amber-400 to-orange-600',
  description: 'For business leaders seeking high-impact connections.',
  features: ['All Premium Pass features, plus:', 'Private meeting rooms access', 'Complimentary F&B', 'Exclusive investor matchmaking', 'Business concierge service', 'Post-event connections report'],
  registerLink: '/events/sef/register?pass=executive'
}, {
  name: 'VIP Pass',
  price: 'AED 1,499',
  color: 'bg-gradient-to-br from-emerald-400 to-teal-700',
  description: 'The ultimate SEF experience with premium benefits.',
  features: ['All Executive Pass features, plus:', 'Dedicated concierge service', 'Backstage access to speakers', 'Luxury gift package', 'Private dinner with industry leaders', 'One-on-one mentor sessions', 'Priority registration for SEF 2027'],
  vip: true,
  showBadge: true,
  badgeText: 'Limited',
  registerLink: '/events/sef/register?pass=vip'
}];
const personas: PassPersonaType[] = [{
  icon: <Ticket className="w-6 h-6" />,
  title: "Student Entrepreneur",
  description: "Perfect for students and aspiring entrepreneurs looking to learn and make initial connections.",
  recommendedPass: "Standard Pass"
}, {
  icon: <BadgeCheck className="w-6 h-6" />,
  title: "Startup Founder",
  description: "Ideal for founders seeking to network with peers, investors and gain valuable insights.",
  recommendedPass: "Premium Pass"
}, {
  icon: <BadgePercent className="w-6 h-6" />,
  title: "Corporate Executive",
  description: "For business leaders looking to connect with innovation ecosystem and potential startup partners.",
  recommendedPass: "Executive Pass"
}];
const PassCard: React.FC<{
  pass: PassType;
  index: number;
  selectedPersona: string | null;
}> = ({
  pass,
  index,
  selectedPersona
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const isRecommended = selectedPersona && passes.find(p => p.name === selectedPersona)?.name === pass.name;
  const {
    theme
  } = useTheme();

  // Display only first 4 features when collapsed
  const visibleFeatures = showAllFeatures ? pass.features : pass.features.slice(0, 4);
  const hasMoreFeatures = pass.features.length > 4;
  return <motion.div initial={{
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
  }} className="my-0 bg-gray-800">
      {/* Popular/VIP badge */}
      {(pass.popular || pass.vip || pass.showBadge) && <div className="absolute top-0 right-0">
          <div className={cn("text-white text-xs font-bold py-1 px-3 rounded-bl-lg", pass.popular ? "bg-purple-600" : pass.vip ? "bg-emerald-600" : pass.earlyBird ? "bg-blue-600" : "")}>
            {pass.badgeText || (pass.popular ? 'MOST POPULAR' : pass.vip ? 'VIP ONLY' : '')}
          </div>
        </div>}
      
      {/* Recommended badge */}
      {isRecommended && <div className="absolute top-4 left-0">
          <Badge variant="default" className="rounded-r-lg rounded-l-none bg-[#9b87f5]">
            Recommended
          </Badge>
        </div>}
      
      {/* Header */}
      <div className={`${pass.color} px-6 py-8 text-white`}>
        <h3 className="text-xl font-bold">{pass.name}</h3>
        {pass.description && <p className="text-white/80 text-sm mt-1">{pass.description}</p>}
        <div className="flex items-end mt-2">
          <span className="text-3xl font-extrabold">{pass.price}</span>
          <span className="text-sm opacity-80 ml-1 mb-1">/ person</span>
        </div>
      </div>
      
      {/* Features */}
      <div className="px-[8px] my-0 py-0">
        <ul className="space-y-3 my-0 px-[10px]">
          {visibleFeatures.map((feature, idx) => <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
            </li>)}
        </ul>
        
        {/* Show more/less button */}
        {hasMoreFeatures && <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="flex items-center text-sm text-blue-500 hover:text-blue-700 mt-2 mb-2 my-[32px] font-medium">
            {showAllFeatures ? <>Show less {<ChevronUp className="h-4 w-4 ml-1" />}</> : <>Show all features {<ChevronDown className="h-4 w-4 ml-1" />}</>}
          </button>}
        
        {/* CTA Button - Updated with direct links */}
        <div className="mt-4">
          {pass.popular || pass.vip ? <Sparkles colors={["#9b87f5", "#FF6600", pass.vip ? "#10B981" : "#D946EF", pass.vip ? "#059669" : "#F97316"]} count={15}>
              <Button variant="default" className={cn("w-full text-white shadow-glow", pass.vip ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-none" : "bg-gradient-to-r from-purple-500 to-orange-500 border-none")} asChild>
                <Link to={pass.registerLink}>
                  Get Your Pass
                </Link>
              </Button>
            </Sparkles> : <Button variant={pass.name === "Executive Pass" ? "secondary" : "outline"} className={cn("w-full", pass.name === "Executive Pass" ? "bg-amber-600 hover:bg-amber-500 text-white" : "")} asChild>
              <Link to={pass.registerLink}>
                Get Your Pass
              </Link>
            </Button>}
        </div>
      </div>
    </motion.div>;
};
const PersonaSelector: React.FC<{
  personas: PassPersonaType[];
  selectedPersona: string | null;
  onSelectPersona: (pass: string) => void;
}> = ({
  personas,
  selectedPersona,
  onSelectPersona
}) => {
  const {
    theme
  } = useTheme();
  return <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }}>
      {personas.map((persona, index) => <div key={persona.title} className={cn("p-4 border rounded-lg cursor-pointer transition-all", selectedPersona === persona.recommendedPass ? "border-[#9b87f5] bg-[#9b87f5]/10" : theme === 'dark' ? "border-gray-700 hover:border-[#9b87f5]/50" : "border-gray-200 hover:border-[#9b87f5]/50")} onClick={() => onSelectPersona(persona.recommendedPass)}>
          <div className="flex items-center space-x-3">
            <div className={cn("p-2 rounded-full", selectedPersona === persona.recommendedPass ? "bg-[#9b87f5] text-white" : theme === 'dark' ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600")}>
              {persona.icon}
            </div>
            <div>
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{persona.title}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{persona.description}</p>
            </div>
          </div>
        </div>)}
    </motion.div>;
};
const SEFFestivalPasses: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const {
    theme
  } = useTheme();
  const handleSelectPersona = (pass: string) => {
    setSelectedPersona(currentPersona => currentPersona === pass ? null : pass);
  };
  
  return <section className={`py-16 md:py-24 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
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
        }} className={`inline-block px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-purple-900/30 text-[#9b87f5]' : 'bg-purple-100 text-[#9b87f5]'} text-sm font-medium mb-2`}>
            Festival Passes
          </motion.div>
          
          <motion.h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`} initial={{
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
          
          <motion.p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto text-lg`} initial={{
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
        <PersonaSelector personas={personas} selectedPersona={selectedPersona} onSelectPersona={handleSelectPersona} />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {passes.map((pass, index) => <PassCard key={pass.name} pass={pass} index={index} selectedPersona={selectedPersona} />)}
        </div>
        
        {/* Add ShineBorder component with Timeline */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ShineBorder
            borderWidth={3}
            className="border bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5"
            color={["#9b87f5", "#D946EF", "#F97316"]}
          >
            <div className="text-center py-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
                Your SEF Journey
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
                From registration to transformation - here's what your SEF experience looks like.
              </p>
              <Timeline />
            </div>
          </ShineBorder>
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.div className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'} p-6 rounded-xl max-w-3xl mx-auto`} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.7
        }}>
            <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Need Help Choosing?</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Group discounts available for teams of 5 or more. Special rates for academic institutions and non-profits.
            </p>
            
            <Button asChild variant="default" className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 shadow-glow">
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
