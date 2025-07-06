import { useState, useEffect } from 'react';

export type ABVariant = 'A' | 'B' | 'C';

interface ABTestConfig {
  testName: string;
  variants: {
    A: { weight: number; description: string };
    B: { weight: number; description: string };
    C: { weight: number; description: string };
  };
}

interface ABTestResult {
  variant: ABVariant;
  isInTest: boolean;
  trackConversion: (eventType: string, value?: number) => void;
}

const defaultTests: Record<string, ABTestConfig> = {
  'ecosystem-hub-routing': {
    testName: 'Ecosystem Hub Routing Strategy',
    variants: {
      A: { weight: 33, description: 'Direct persona selection' },
      B: { weight: 33, description: 'Assessment-based routing' },
      C: { weight: 34, description: 'Hybrid smart recommendations' }
    }
  },
  'stakeholder-dashboard': {
    testName: 'Stakeholder Dashboard Layout',
    variants: {
      A: { weight: 50, description: 'Traditional dashboard' },
      B: { weight: 50, description: 'AI-first interface' },
      C: { weight: 0, description: 'Mobile-optimized' }
    }
  }
};

export const useABTesting = (testName: string): ABTestResult => {
  const [variant, setVariant] = useState<ABVariant>('A');
  const [isInTest, setIsInTest] = useState(false);

  useEffect(() => {
    const testConfig = defaultTests[testName];
    if (!testConfig) {
      console.warn(`AB test "${testName}" not configured`);
      return;
    }

    // Check if user already assigned to variant
    const storedVariant = localStorage.getItem(`ab_test_${testName}`);
    if (storedVariant && ['A', 'B', 'C'].includes(storedVariant)) {
      setVariant(storedVariant as ABVariant);
      setIsInTest(true);
      return;
    }

    // Assign new variant based on weights
    const random = Math.random() * 100;
    let cumulativeWeight = 0;
    let assignedVariant: ABVariant = 'A';

    for (const [variantKey, config] of Object.entries(testConfig.variants)) {
      cumulativeWeight += config.weight;
      if (random <= cumulativeWeight) {
        assignedVariant = variantKey as ABVariant;
        break;
      }
    }

    setVariant(assignedVariant);
    setIsInTest(true);
    localStorage.setItem(`ab_test_${testName}`, assignedVariant);

    // Track assignment
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'ab_test_assignment', {
        test_name: testName,
        variant: assignedVariant,
        custom_parameter: testConfig.variants[assignedVariant].description
      });
    }
  }, [testName]);

  const trackConversion = (eventType: string, value?: number) => {
    if (!isInTest) return;

    const conversionData = {
      test_name: testName,
      variant,
      event_type: eventType,
      value: value || 1,
      timestamp: new Date().toISOString()
    };

    // Store conversion locally for analysis
    const conversions = JSON.parse(localStorage.getItem('ab_conversions') || '[]');
    conversions.push(conversionData);
    localStorage.setItem('ab_conversions', JSON.stringify(conversions));

    // Track with analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'ab_test_conversion', {
        test_name: testName,
        variant,
        event_type: eventType,
        value: value || 1
      });
    }
  };

  return {
    variant,
    isInTest,
    trackConversion
  };
};