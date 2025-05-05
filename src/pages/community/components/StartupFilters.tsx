
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface StartupFiltersProps {
  selectedSector: string;
  selectedProgram: string;
  selectedStage: string;
  onSectorChange: (sector: string) => void;
  onProgramChange: (program: string) => void;
  onStageChange: (stage: string) => void;
  onResetFilters: () => void;
}

// Filter options
const sectors = ['All', 'Sustainability', 'EdTech', 'FoodTech', 'WaterTech', 'Creative Industries', 'FinTech'];
const programs = ['All', 'S3 Incubator', 'Access Sharjah Challenge', 'Startup Dojo+', 'Startup Dojo'];
const stages = ['All', 'Idea', 'Pre-Seed', 'Seed', 'Growth', 'Scale'];

export const StartupFilters: React.FC<StartupFiltersProps> = ({
  selectedSector,
  selectedProgram,
  selectedStage,
  onSectorChange,
  onProgramChange,
  onStageChange,
  onResetFilters
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <select 
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
        value={selectedSector}
        onChange={(e) => onSectorChange(e.target.value)}
      >
        {sectors.map(sector => (
          <option key={sector} value={sector}>{sector} Sector</option>
        ))}
      </select>
      
      <select 
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
        value={selectedProgram}
        onChange={(e) => onProgramChange(e.target.value)}
      >
        {programs.map(program => (
          <option key={program} value={program}>{program} Program</option>
        ))}
      </select>
      
      <select 
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
        value={selectedStage}
        onChange={(e) => onStageChange(e.target.value)}
      >
        {stages.map(stage => (
          <option key={stage} value={stage}>{stage} Stage</option>
        ))}
      </select>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="p-2" 
        onClick={onResetFilters}
      >
        <Filter size={18} />
        <span className="sr-only">Reset filters</span>
      </Button>
    </div>
  );
};
