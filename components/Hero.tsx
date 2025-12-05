import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-20">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-peach-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-overlay dark:bg-roseGold/20" />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-sage-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-overlay dark:bg-sage-700/20" />
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-roseGold/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-overlay dark:bg-deepTeal-700/30" />

      {/* Floating Particles (Rice Grains / Hearts) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/60 dark:bg-white/20 rounded-full"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-deepTeal-700 dark:text-peach-200 bg-white/50 dark:bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              👋 Hello, I'm Effat Ara Tauhida
            </span> */}
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-deepTeal-900 dark:text-cream mb-6">
              Hello, I'm <br/>
              <span className="text-roseGold italic">Effat Ara Tauhida</span> 
            </h1>
            <p className="text-lg text-deepTeal-700/80 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              A passionate MERN Stack Developer from Brahmanbaria, building meaningful applications like <strong className="text-roseGold font-medium">PlateShare</strong> to bridge technology with empathy.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="#projects" className="group relative px-8 py-3 bg-deepTeal-500 text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-deepTeal-500/30">
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">View My Work</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-deepTeal-700/50" />
              </a>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/effataratauhida" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/effat-ara-tauhida/" },
                  { icon: <Mail size={20} />, href: "effataratauhida2020@gmail.com" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white dark:bg-white/5 text-deepTeal-700 dark:text-peach-200 rounded-full hover:scale-110 hover:text-roseGold transition-all shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image/Visual */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-sage-300 rounded-[2rem] rotate-6 opacity-50 dark:opacity-20 animate-float" />
            <div className="absolute inset-0 bg-peach-200 rounded-[2rem] -rotate-3 opacity-50 dark:opacity-20 animate-float" style={{ animationDelay: '1s' }} />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Effat Ara Tauhida" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-deepTeal-900/60 to-transparent text-white">
                <p className="font-serif italic text-lg">"Coding with a purpose."</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            {/* <motion.div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-deepTeal-700 p-4 rounded-xl shadow-lg flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="bg-roseGold/20 p-2 rounded-full text-roseGold">
                <Heart size={24} className="fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-300">Currently building</p>
                <p className="font-bold text-deepTeal-900 dark:text-white">PlateShare</p>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-deepTeal-500/50 hover:text-deepTeal-700 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;