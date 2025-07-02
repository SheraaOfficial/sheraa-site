import React, { useEffect, useState } from 'react';
import MinimalHomepage from './MinimalHomepage';
import { ThemeAwareHomepage } from '@/components/homepage/ThemeAwareHomepage';

const EditorCompatibilityWrapper: React.FC = () => {
  const [isInEditor, setIsInEditor] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    console.log('EditorCompatibilityWrapper: Starting editor detection');
    
    // Multiple methods to detect if we're in Lovable editor
    const detectionMethods = {
      urlContainsLovable: window.location.href.includes('lovable.dev'),
      isInIframe: window.parent !== window,
      hasEditorAttribute: !!document.querySelector('[data-lovable-editor]'),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      windowName: window.name
    };
    
    console.log('EditorCompatibilityWrapper: Detection methods:', detectionMethods);
    
    // More aggressive editor detection
    const editorDetected = detectionMethods.urlContainsLovable || 
                          detectionMethods.isInIframe ||
                          detectionMethods.hasEditorAttribute ||
                          window.location.hostname.includes('lovable') ||
                          document.referrer.includes('lovable');
    
    setIsInEditor(editorDetected);
    setDebugInfo(detectionMethods);
    
    console.log('EditorCompatibilityWrapper: Final decision - isInEditor:', editorDetected);
  }, []);

  // Force minimal mode for testing
  const forceMinimal = new URLSearchParams(window.location.search).get('minimal') === 'true';
  
  if (forceMinimal || isInEditor) {
    console.log('EditorCompatibilityWrapper: Rendering MinimalHomepage');
    return <MinimalHomepage />;
  }

  console.log('EditorCompatibilityWrapper: Rendering ThemeAwareHomepage');
  return <ThemeAwareHomepage />;
};

export default EditorCompatibilityWrapper;