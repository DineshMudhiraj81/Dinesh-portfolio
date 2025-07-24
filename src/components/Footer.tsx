import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 Dinesh kumar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="mx-2 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-center text-gray-500 text-xs">
            This portfolio showcases 2+ years of development experience and continuous learning in modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;