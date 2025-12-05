import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Heart } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex items-center gap-2 md:gap-8 px-6 py-3 rounded-full bg-white/70 dark:bg-deepTeal-900/70 backdrop-blur-md shadow-sm border border-white/50 dark:border-white/10">
        {/* <a href="#" className="font-serif text-xl font-bold text-deepTeal-500 dark:text-peach-200 flex items-center gap-1">
          Home<span className="text-roseGold"></span>
        </a> */}
        <a href="#" className="text-sm font-medium text-deepTeal-700 dark:text-cream/80 hover:text-roseGold dark:hover:text-roseGold transition-colors">
          Home</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-deepTeal-700 dark:text-cream/80 hover:text-roseGold dark:hover:text-roseGold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 hidden md:block" />

        <div className="flex items-center gap-3">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-sage-100 dark:hover:bg-white/10 transition-colors text-deepTeal-700 dark:text-peach-200"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* <a 
                href="#projects"
                className="hidden sm:flex items-center gap-2 bg-deepTeal-500 hover:bg-deepTeal-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105"
            >
                <Heart size={14} className="fill-current" />
                <span>PlateShare</span>
            </a> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
