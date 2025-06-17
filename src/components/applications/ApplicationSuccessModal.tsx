
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  const handleViewApplications = () => {
    onClose();
    navigate('/applications');
  };

  const handleGoHome = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Application Submitted!
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Your {programName} application has been successfully submitted. 
            We'll review your application and get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          <Button onClick={handleViewApplications} className="w-full">
            <ArrowRight className="w-4 h-4 mr-2" />
            View My Applications
          </Button>
          <Button variant="outline" onClick={handleGoHome} className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Back to Homepage
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
