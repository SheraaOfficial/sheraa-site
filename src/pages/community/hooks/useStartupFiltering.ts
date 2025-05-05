
import { useState, useMemo } from 'react';
import { Startup } from '../types/startup';

export const useStartupFiltering = (startups: Startup[], searchTerm: string) => {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  
  const filteredStartups = useMemo(() => {
    return startups.filter(startup => {
      return (
        (searchTerm === '' || 
          startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          startup.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedSector === 'All' || startup.sector === selectedSector) &&
        (selectedProgram === 'All' || startup.program === selectedProgram) &&
        (selectedStage === 'All' || startup.stage === selectedStage)
      );
    });
  }, [startups, searchTerm, selectedSector, selectedProgram, selectedStage]);
  
  const resetFilters = () => {
    setSelectedSector('All');
    setSelectedProgram('All');
    setSelectedStage('All');
  };
  
  return {
    filteredStartups,
    selectedSector,
    selectedProgram,
    selectedStage,
    setSelectedSector,
    setSelectedProgram,
    setSelectedStage,
    resetFilters
  };
};
