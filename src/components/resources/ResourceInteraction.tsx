
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ConfettiExplosion } from '@/components/ui/confetti-explosion';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { Eye, Download, Share2, Star, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface ResourceInteractionProps {
  resourceId: string | number;
  resourceType: 'guide' | 'article' | 'advisory' | 'report';
  resourceName: string;
}

export const ResourceInteraction = ({
  resourceId,
  resourceType,
  resourceName
}: ResourceInteractionProps) => {
  const storageKey = `resource-${resourceType}-${resourceId}`;
  const [interaction, setInteraction] = useLocalStorage<{
    viewed: boolean;
    downloaded: boolean;
    shared: boolean;
    favorite: boolean;
    progress: number;
  }>(storageKey, {
    viewed: false,
    downloaded: false,
    shared: false,
    favorite: false,
    progress: 0
  });
  
  const [showConfetti, setShowConfetti] = React.useState(false);
  
  React.useEffect(() => {
    if (!interaction.viewed) {
      setInteraction(prev => ({ ...prev, viewed: true }));
    }
  }, []);

  const handleDownload = () => {
    toast.success(`Downloaded "${resourceName}"`, {
      description: "Your resource is being downloaded",
      action: { label: "View", onClick: () => {} }
    });
    setInteraction(prev => ({ ...prev, downloaded: true }));
    
    // Trigger achievement unlocked effect
    if (!interaction.downloaded) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    // Update resource progress
    const newProgress = calculateProgress({ ...interaction, downloaded: true });
    setInteraction(prev => ({ ...prev, progress: newProgress }));
  };

  const handleShare = () => {
    toast.success(`Sharing "${resourceName}"`, {
      description: "Copy the link to share with others",
      action: { label: "Copy", onClick: () => {
        navigator.clipboard.writeText(`https://sheraa.com/resources/${resourceType}/${resourceId}`);
        toast.success("Link copied to clipboard");
      }}
    });
    setInteraction(prev => ({ ...prev, shared: true }));
    
    // Update resource progress
    const newProgress = calculateProgress({ ...interaction, shared: true });
    setInteraction(prev => ({ ...prev, progress: newProgress }));
  };

  const toggleFavorite = () => {
    const newValue = !interaction.favorite;
    setInteraction(prev => ({ ...prev, favorite: newValue }));
    
    toast(newValue ? "Added to favorites" : "Removed from favorites", {
      description: newValue ? "You can find this in your favorites section" : "",
      icon: newValue ? "❤️" : "💔",
    });
    
    // Update resource progress
    const newProgress = calculateProgress({ ...interaction, favorite: newValue });
    setInteraction(prev => ({ ...prev, progress: newProgress }));
  };
  
  const calculateProgress = (data: typeof interaction) => {
    let count = 0;
    if (data.viewed) count++;
    if (data.downloaded) count++;
    if (data.shared) count++;
    if (data.favorite) count++;
    return (count / 4) * 100;
  };

  return (
    <div className="flex items-center gap-3">
      {showConfetti && <ConfettiExplosion />}
      
      <ProgressCircle 
        percentage={interaction.progress} 
        size={40} 
        className="mr-1"
      >
        <span className="text-xs font-semibold">{Math.round(interaction.progress)}%</span>
      </ProgressCircle>
      
      <div className="flex items-center gap-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full" 
          onClick={handleDownload}
        >
          <AnimatePresence>
            {interaction.downloaded ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Check className="h-4 w-4 text-green-500" />
              </motion.div>
            ) : (
              <Download className="h-4 w-4" />
            )}
          </AnimatePresence>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full" 
          onClick={handleShare}
        >
          <Share2 className={`h-4 w-4 ${interaction.shared ? 'text-blue-500' : ''}`} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full" 
          onClick={toggleFavorite}
        >
          <Star 
            className={`h-4 w-4 ${interaction.favorite ? 'text-amber-500 fill-amber-500' : ''}`} 
          />
        </Button>
      </div>
    </div>
  );
};
