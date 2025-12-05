import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-deepTeal-950 border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-deepTeal-700/60 dark:text-gray-500 text-sm">
          Designed & Built with <Heart size={14} className="fill-roseGold text-roseGold" /> by Effat Ara Tauhida © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
