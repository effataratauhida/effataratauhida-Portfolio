import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Star } from 'lucide-react';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    year: '2025',
    title: 'PlateShare a Full Stack Project',
    description: 'PlateShare is a full-stack MERN application that enables users to share surplus food with people in their local community.',
    icon: <Rocket size={20} />,
  },
  {
    year: '2025',
    title: 'WarmPaws',
    description: 'Built WarmPaws with Node.js, Express, MongoDB, and advanced React patterns for a smooth and scalable user experience.',
    icon: <Code2 size={20} />,
  },
  {
    year: '2024',
    title: 'Web Development Journey',
    description: 'Started learning HTML, CSS, and JS alongside physics studies. Discovered a passion for creating.',
    icon: <Star size={20} />,
  },
  {
    year: '2021 - Running',
    title: 'BSc in Physics',
    description: 'Studying fundamental laws of nature, analytical thinking and problem-solving skills.',
    icon: <GraduationCap size={20} />,
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-white dark:bg-deepTeal-900 relative">
      <div className="container mx-auto px-4 max-w-4xl">
         <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-deepTeal-900 dark:text-cream mb-4">My Journey</h2>
          <p className="text-gray-500 italic">From Physics formulas to React components.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-peach-200 dark:bg-white/10" />

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Bubble */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-deepTeal-800 border-4 border-peach-200 dark:border-deepTeal-600 flex items-center justify-center text-roseGold z-10 shadow-sm">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                <div className="bg-sage-100/30 dark:bg-white/5 p-6 rounded-2xl border border-sage-100 dark:border-white/5 hover:border-roseGold/30 transition-colors">
                  <span className="inline-block px-3 py-1 bg-white dark:bg-white/10 rounded-full text-xs font-bold text-roseGold mb-2 shadow-sm">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-deepTeal-900 dark:text-peach-100 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
