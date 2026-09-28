'use client'
import { motion } from 'framer-motion';
import BookingSearch from './BookingSearch';

export default function Hero() {
  return (
    <div className="relative h-[90vh] md:h-screen w-full flex flex-col items-center justify-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 -mt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 text-[#D4AF37]"
        >
          Welcome to Élan Royale
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 drop-shadow-xl font-light tracking-wide leading-tight"
        >
          Where Extraordinary <br className="hidden md:block"/> Becomes Everyday
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="border border-white/50 bg-white/5/10 backdrop-blur-sm text-white px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 hover:text-black transition-all duration-500">
            Explore The Hotel
          </button>
        </motion.div>
      </div>

      <BookingSearch />
    </div>
  );
}