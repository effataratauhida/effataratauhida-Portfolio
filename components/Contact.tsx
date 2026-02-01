import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, CheckCircle, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#FFD7BA', '#B76E79', '#A7C4A0']
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-peach-100/20 dark:bg-black/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-deepTeal-900 dark:text-cream mb-6">Let's Create Something <span className="text-roseGold">Beautiful</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-light">
              Whether you want to discuss a project, suggest a feature for PlateShare, or just say hi — I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-deepTeal-600 dark:text-peach-200 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="font-medium text-deepTeal-900 dark:text-white">effataratauhida2020@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-deepTeal-600 dark:text-peach-200 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="font-medium text-deepTeal-900 dark:text-white">Brahmanbaria, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Postcard Form */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-deepTeal-800 p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-white/5 relative"
          >
            Stamp decoration
            <div className="absolute top-6 right-6 w-16 h-20 border-2 border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center rotate-3 opacity-50 pointer-events-none">
              <Heart size={24} className="text-roseGold/50" />
            </div>

            {formState === 'success' ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-deepTeal-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setFormState('idle')} 
                  className="mt-8 text-roseGold hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-roseGold/50 focus:border-roseGold outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full py-4 bg-deepTeal-500 text-white rounded-lg font-medium shadow-lg hover:shadow-deepTeal-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  {!formState && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;