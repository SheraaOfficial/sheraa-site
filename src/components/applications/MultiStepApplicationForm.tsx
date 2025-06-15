
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Save, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  AlertCircle 
} from 'lucide-react';

interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<any>;
  isRequired: boolean;
  validationRules: string[];
}

interface MultiStepApplicationFormProps {
  programId: string;
  programName: string;
  steps: ApplicationStep[];
  onSubmit: (data: any) => Promise<void>;
  onSave?: (data: any) => Promise<void>;
  initialData?: any;
  applicationId?: string;
}

export const MultiStepApplicationForm: React.FC<MultiStepApplicationFormProps> = ({
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
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Auto-save functionality
  const autoSave = useCallback(async () => {
    if (!user || saving) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('application_steps')
        .upsert({
          application_id: applicationId,
          step_number: currentStep + 1,
          step_name: steps[currentStep].title,
          data: formData,
          completed: completedSteps[currentStep]
        });

      if (error) throw error;
      
      setLastSaved(new Date());
      
      if (onSave) {
        await onSave(formData);
      }
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setSaving(false);
    }
  }, [user, formData, currentStep, steps, completedSteps, applicationId, onSave, saving]);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(autoSave, 30000);
    return () => clearInterval(interval);
  }, [autoSave]);

  // Auto-save on form data change (debounced)
  useEffect(() => {
    const timeout = setTimeout(autoSave, 2000);
    return () => clearTimeout(timeout);
  }, [formData, autoSave]);

  const updateFormData = (stepData: any) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const validateCurrentStep = (): boolean => {
    const currentStepData = steps[currentStep];
    // Add validation logic here based on step requirements
    return true; // Simplified for now
  };

  const handleNext = async () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Please complete all required fields",
        variant: "destructive"
      });
      return;
    }

    // Mark current step as completed
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[currentStep] = true;
    setCompletedSteps(newCompletedSteps);

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
    if (!validateCurrentStep()) {
      toast({
        title: "Please complete all required fields",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(formData);
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon."
      });
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                {programName} Application
                <Badge variant="outline">
                  Step {currentStep + 1} of {steps.length}
                </Badge>
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                {steps[currentStep]?.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {saving && (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              )}
              {lastSaved && !saving && (
                <>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Saved {lastSaved.toLocaleTimeString()}
                </>
              )}
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {/* Step Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {steps.map((step, index) => (
          <Button
            key={step.id}
            variant={currentStep === index ? "default" : completedSteps[index] ? "outline" : "ghost"}
            size="sm"
            onClick={() => setCurrentStep(index)}
            className="flex items-center gap-2"
          >
            {completedSteps[index] ? (
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

      {/* Current Step Content */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep]?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {CurrentStepComponent && (
            <CurrentStepComponent
              data={formData}
              onUpdate={updateFormData}
              isValid={completedSteps[currentStep]}
            />
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={autoSave}
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Draft'}
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
