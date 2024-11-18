import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-cream">
            <span>Laura & Michael</span>
            <Heart className="w-4 h-4" />
            <span>08. Februar 2025</span>
          </div>
          <p className="text-cream/60 text-sm">
            Mit Liebe gestaltet für unseren besonderen Tag
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;