import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Persona {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  color: string;
  audience: string;
  stats: string;
}

interface PersonaGridProps {
  personas: Persona[];
  recommendedPersona: string;
  onPersonaSelect: (path: string, personaId: string) => void;
}

const PersonaGrid: React.FC<PersonaGridProps> = ({ 
  personas, 
  recommendedPersona, 
  onPersonaSelect 
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {personas.map((persona, index) => (
        <motion.div
          key={persona.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -8 }}
          className="cursor-pointer"
          onClick={() => onPersonaSelect(persona.path, persona.id)}
        >
          <Card className={`relative overflow-hidden border-0 shadow-2xl h-full ${
            persona.id === recommendedPersona ? 'ring-4 ring-[#F59E0B]/50' : ''
          }`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-10`} />
            
            <CardContent className="p-8 relative z-10 flex flex-col h-full">
              {/* Recommendation Badge */}
              {persona.id === recommendedPersona && (
                <Badge className="absolute top-4 right-4 bg-[#F59E0B] text-white">
                  Recommended
                </Badge>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <persona.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {persona.title}
                </h3>
                <p className="text-[#F59E0B] font-medium text-sm mb-4">
                  {persona.subtitle}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {persona.description}
                </p>
              </div>

              {/* Stats */}
              <div className="border-t border-white/20 pt-4 mb-4">
                <p className="text-white font-semibold text-sm">
                  {persona.stats}
                </p>
              </div>

              {/* CTA */}
              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                variant="outline"
              >
                Explore Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PersonaGrid;