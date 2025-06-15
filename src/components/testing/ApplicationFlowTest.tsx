
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

interface TestStep {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  error?: string;
}

export const ApplicationFlowTest: React.FC = () => {
  const [tests, setTests] = useState<TestStep[]>([
    { id: 'auth', name: 'User Authentication', status: 'pending' },
    { id: 'form-load', name: 'Form Loading', status: 'pending' },
    { id: 'validation', name: 'Form Validation', status: 'pending' },
    { id: 'auto-save', name: 'Auto-save Functionality', status: 'pending' },
    { id: 'file-upload', name: 'File Upload', status: 'pending' },
    { id: 'submission', name: 'Application Submission', status: 'pending' },
    { id: 'notifications', name: 'Real-time Notifications', status: 'pending' },
    { id: 'dashboard-update', name: 'Dashboard Updates', status: 'pending' }
  ]);

  const runTests = async () => {
    for (const test of tests) {
      setTests(prev => prev.map(t => 
        t.id === test.id ? { ...t, status: 'running' } : t
      ));

      try {
        await simulateTest(test.id);
        setTests(prev => prev.map(t => 
          t.id === test.id ? { ...t, status: 'passed' } : t
        ));
      } catch (error) {
        setTests(prev => prev.map(t => 
          t.id === test.id ? { 
            ...t, 
            status: 'failed', 
            error: error instanceof Error ? error.message : 'Test failed' 
          } : t
        ));
      }

      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const simulateTest = async (testId: string): Promise<void> => {
    // Simulate test execution
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demonstration, randomly pass/fail some tests
    if (Math.random() > 0.9) {
      throw new Error(`${testId} test failed - simulated error`);
    }
  };

  const getStatusIcon = (status: TestStep['status']) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'running': return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: TestStep['status']) => {
    const variants = {
      passed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      running: 'bg-blue-100 text-blue-800',
      pending: 'bg-gray-100 text-gray-800'
    };
    return variants[status];
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Application Flow Tests
          <Button onClick={runTests} disabled={tests.some(t => t.status === 'running')}>
            Run Tests
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tests.map(test => (
            <div key={test.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                {getStatusIcon(test.status)}
                <div>
                  <p className="font-medium">{test.name}</p>
                  {test.error && (
                    <p className="text-sm text-red-600">{test.error}</p>
                  )}
                </div>
              </div>
              <Badge className={getStatusBadge(test.status)} variant="secondary">
                {test.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
