
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ApplicationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName: string;
}

export const ApplicationSuccessModal: React.FC<ApplicationSuccessModalProps> = ({
  isOpen,
  onClose,
  programName
}) => {
  const navigate = useNavigate();

  const handleViewDashboard = () => {
    onClose();
    navigate('/dashboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Application Submitted!</h3>
                <p className="text-gray-600 mt-2">
                  Your {programName} application has been successfully submitted.
                </p>
              </div>
            </motion.div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Our team will review your application</li>
              <li>• You'll receive updates via email and dashboard</li>
              <li>• We typically respond within 5-7 business days</li>
            </ul>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
            <Button onClick={handleViewDashboard} className="flex-1">
              View Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
