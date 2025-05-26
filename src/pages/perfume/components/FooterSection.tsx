
import React from 'react';
import { Crown } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#165A5A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-serif mb-4">Sharjah Perfume</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            A luxury fragrance inspired by Sharjah's rich heritage and cultural beauty
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown className="w-6 h-6 text-[#C8A165]" />
            <span className="text-[#C8A165] font-medium">Limited Edition</span>
            <Crown className="w-6 h-6 text-[#C8A165]" />
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 Sharjah Perfume. Part of the SGMB Collection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
