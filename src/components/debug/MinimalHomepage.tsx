import React, { useEffect } from 'react';

const MinimalHomepage: React.FC = () => {
  useEffect(() => {
    console.log('MinimalHomepage: Component mounted');
    
    // Debug Lovable editor detection
    const isInEditor = window.location.href.includes('lovable.dev') || 
                      window.parent !== window ||
                      document.querySelector('[data-lovable-editor]');
    
    console.log('MinimalHomepage: Editor detection:', {
      url: window.location.href,
      isInIframe: window.parent !== window,
      hasEditorAttribute: !!document.querySelector('[data-lovable-editor]'),
      isInEditor
    });
    
    return () => {
      console.log('MinimalHomepage: Component unmounting');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Sheraa - Minimal Test Homepage
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a simplified version to test Lovable edit mode compatibility.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">About Sheraa</h2>
            <p className="text-gray-700">
              Sharjah's official hub for aspiring founders and established ventures.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Programs</h2>
            <p className="text-gray-700">
              We provide resources, mentorship, and network needed to transform ideas into startups.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinimalHomepage;