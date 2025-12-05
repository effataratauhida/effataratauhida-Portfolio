import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Heart, Coffee } from 'lucide-react';

const SkillNode = ({ label, x, y, delay }: { label: string; x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute bg-white dark:bg-deepTeal-800 shadow-lg px-4 py-2 rounded-full border border-peach-200 dark:border-deepTeal-600 z-10 flex items-center gap-2"
    style={{ left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1 }}
  >
    <div className="w-2 h-2 rounded-full bg-roseGold" />
    <span className="text-xs font-semibold text-deepTeal-900 dark:text-peach-100">{label}</span>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/50 dark:bg-deepTeal-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-deepTeal-900 dark:text-cream mb-4">About Me</h2>
          <div className="w-24 h-1 bg-roseGold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Constellation Visual */}
          <div className="relative h-[400px] bg-sage-100/30 dark:bg-white/5 rounded-3xl border border-sage-100 dark:border-white/10 hidden md:block">
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path 
                d="M100,100 L250,50 L350,150 L200,250 L100,300 L100,100" 
                stroke="#B76E79" 
                strokeWidth="2" 
                strokeDasharray="5 5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
              <motion.path 
                d="M200,250 L300,320" 
                stroke="#A7C4A0" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              />
            </svg>
            
            <SkillNode label="React" x="15%" y="20%" delay={0.2} />
            <SkillNode label="Node.js" x="55%" y="10%" delay={0.4} />
            <SkillNode label="MongoDB" x="75%" y="35%" delay={0.6} />
            <SkillNode label="Express" x="45%" y="60%" delay={0.8} />
            <SkillNode label="Tailwind" x="15%" y="70%" delay={1.0} />
            {/* <SkillNode label="TypeScript" x="65%" y="80%" delay={1.2} /> */}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl text-deepTeal-700 dark:text-peach-200 italic mb-4">
                "Physics taught me how the universe works, coding taught me how to build my own."
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                I'm <strong className="text-deepTeal-900 dark:text-white font-medium">Effat Ara Tauhida</strong>, a developer who believes technology shines brightest when it solves human problems. With a background in Physics, I approach coding with analytical precision, but my heart lies in creating warm, accessible user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
                When I'm not debugging a server or polishing a UI component, you'll likely find me crocheting a new pattern, lost in a book, or brainstorming the next feature for any project.
                {/* <span className="text-roseGold font-medium">PlateShare</span>. */}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Code size={20} />, text: "Clean Code" },
                  { icon: <Heart size={20} />, text: "Social Impact" },
                  { icon: <BookOpen size={20} />, text: "Always Learning" },
                  { icon: <Coffee size={20} />, text: "Problem Solver" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-deepTeal-800 dark:text-sage-300">
                    <div className="p-2 bg-peach-100 dark:bg-white/10 rounded-lg text-deepTeal-600 dark:text-peach-200">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
