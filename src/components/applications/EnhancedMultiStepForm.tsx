
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { validateApplicationStep, ValidationError } from '@/utils/applicationValidation';
import { MobileLoading } from '@/components/ui/mobile-loading';
import { 
  Save, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Smartphone,
  AlertTriangle
} from 'lucide-react';

interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<any>;
  isRequired: boolean;
  validationRules: string[];
}

interface EnhancedMultiStepFormProps {
  programId: string;
  programName: string;
  steps: ApplicationStep[];
  onSubmit: (data: any) => Promise<void>;
  onSave?: (data: any) => Promise<void>;
  initialData?: any;
  applicationId?: string;
}

export const EnhancedMultiStepForm: React.FC<EnhancedMultiStepFormProps> = ({
  programId,
  programName,
  steps,
  onSubmit,
  onSave,
  initialData = {},
  applicationId
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const [stepValidation, setStepValidation] = useState<{ [key: number]: boolean }>({});
  const [stepErrors, setStepErrors] = useState<{ [key: number]: ValidationError[] }>({});
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const validateCurrentStep = useCallback(() => {
    const validation = validateApplicationStep(steps[currentStep].id, formData);
    
    setStepValidation(prev => ({ ...prev, [currentStep]: validation.isValid }));
    setStepErrors(prev => ({ ...prev, [currentStep]: validation.errors }));
    
    return validation;
  }, [currentStep, formData, steps]);

  // Auto-save functionality
  const autoSave = useCallback(async () => {
    if (!user || saving) return;
    
    setSaving(true);
    try {
      if (onSave) {
        await onSave(formData);
      }
      setLastSaved(new Date());
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setSaving(false);
    }
  }, [user, formData, onSave, saving]);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(autoSave, 30000);
    return () => clearInterval(interval);
  }, [autoSave]);

  // Validate step when data changes
  useEffect(() => {
    validateCurrentStep();
  }, [validateCurrentStep]);

  const updateFormData = (stepData: any) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const handleNext = async () => {
    const validation = validateCurrentStep();
    
    if (!validation.isValid) {
      toast({
        title: "Please fix the errors below",
        variant: "destructive"
      });
      return;
    }

    // Save progress
    await autoSave();

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const validation = validateCurrentStep();
    
    if (!validation.isValid) {
      toast({
        title: "Please complete all required fields",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep]?.component;
  const currentStepErrors = stepErrors[currentStep] || [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Mobile-optimized Progress Header */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isMobile && <Smartphone className="w-4 h-4 text-sheraa-primary" />}
                <CardTitle className="text-lg sm:text-xl">
                  {programName} Application
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {currentStep + 1}/{steps.length}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {saving && (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">Saving...</span>
                  </>
                )}
                {lastSaved && !saving && (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="hidden sm:inline">
                      Saved {lastSaved.toLocaleTimeString()}
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-3">
                {steps[currentStep]?.description}
              </p>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Mobile-optimized Step Navigation */}
      {!isMobile && (
        <div className="flex flex-wrap gap-2 justify-center">
          {steps.map((step, index) => (
            <Button
              key={step.id}
              variant={currentStep === index ? "default" : stepValidation[index] ? "outline" : "ghost"}
              size="sm"
              onClick={() => setCurrentStep(index)}
              className="flex items-center gap-2"
            >
              {stepValidation[index] ? (
                <CheckCircle className="w-4 h-4" />
              ) : currentStep === index ? (
                <AlertCircle className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              )}
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">{index + 1}</span>
            </Button>
          ))}
        </div>
      )}

      {/* Error Alert */}
      {currentStepErrors.length > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-1">
              <p className="font-medium">Please fix the following errors:</p>
              <ul className="list-disc list-inside space-y-1">
                {currentStepErrors.map((error, index) => (
                  <li key={index} className="text-sm">{error.message}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Current Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {steps[currentStep]?.title}
            {stepValidation[currentStep] && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {submitting ? (
            <MobileLoading message="Submitting your application..." />
          ) : CurrentStepComponent ? (
            <CurrentStepComponent
              data={formData}
              onUpdate={updateFormData}
              isValid={stepValidation[currentStep] || false}
              errors={currentStepErrors}
            />
          ) : (
            <MobileLoading message="Loading form..." />
          )}
        </CardContent>
      </Card>

      {/* Mobile-optimized Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="w-full sm:w-auto order-2 sm:order-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto order-1 sm:order-2">
          <Button
            variant="outline"
            onClick={autoSave}
            disabled={saving}
            className="w-full sm:w-auto"
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Draft'}
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext} className="w-full sm:w-auto">
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={submitting}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
