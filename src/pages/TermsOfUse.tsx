
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ButtonCta } from '@/components/ui/button-cta';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <ButtonCta 
            label="Back to Home"
            className="w-auto mb-8 flex items-center gap-2"
            onClick={() => window.location.href = "/"}
          >
            <ArrowLeft className="w-4 h-4" />
          </ButtonCta>
          <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Terms of Use</h1>
        </div>
        {/* Terms of use content will be implemented */}
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
