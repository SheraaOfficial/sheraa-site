
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResourceInteraction } from '@/components/resources/ResourceInteraction';
import { TemplatePreviewModal } from './TemplatePreviewModal';
import { toast } from 'sonner';

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    type: string;
    icon: JSX.Element;
    category?: string;
    featured?: boolean;
    new?: boolean;
  };
  onDownload: (resourceId: string) => void;
  index: number;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onDownload, index }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
  };
  
  const handleDownloadSuccess = (resourceId: string) => {
    onDownload(resourceId);
    toast.success(`Downloaded "${resource.title}"`, {
      description: `The ${resource.type.toLowerCase()} has been downloaded successfully.`,
    });
  };
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
        }}
      >
        <Card className={`border hover:shadow-md transition-all h-full ${resource.featured ? 'border-sheraa-primary/30 bg-sheraa-light/20' : ''}`}>
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-start gap-4 flex-grow">
              <div className="mt-1 bg-gray-50 p-2 rounded-md relative">
                {resource.icon}
                {resource.new && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold flex items-center gap-0.5">
                    <Sparkles className="h-3 w-3" />
                    NEW
                  </div>
                )}
              </div>
              <div>
                <span className="inline-block bg-sheraa-light text-sheraa-primary px-2 py-0.5 rounded text-xs font-medium mb-2">
                  {resource.type}
                </span>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <ResourceInteraction 
                resourceId={resource.id || `guide-${index}`}
                resourceType="guide"
                resourceName={resource.title}
              />
              
              <Button variant="ghost" size="sm" className="gap-2" onClick={handleOpenPreview}>
                <Download className="h-4 w-4" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <TemplatePreviewModal 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        resource={resource}
        onDownloadSuccess={handleDownloadSuccess}
      />
    </>
  );
};
