'use client'
import { motion } from 'framer-motion';
import Model3D from '@/components/Model3D';
import BookingSearch from './BookingSearch';

export default function Hero3D() {
  return (
    <div className="relative h-[90vh] md:h-screen w-full flex flex-col items-center justify-center overflow-visible bg-[#FFFFFF]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dynamic Glass Morphing 3D Model */}
        <div className="w-full h-full opacity-60 md:opacity-80 scale-125 md:scale-100">
          <Model3D type="knot" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0A0F1C]" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 -mt-16 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 text-[#B78165]"
        >
          Welcome to Élan Royale
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif mb-8 drop-shadow-2xl font-light tracking-wide leading-tight mix-blend-overlay text-white/90"
        >
          The Art of <br className="hidden md:block"/> Living Well
        </motion.h1>
      </div>

      {/* Pointer events auto for interactive elements below text */}
      <div className="relative z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button suppressHydrationWarning className="border border-white/30 bg-white/5/5 backdrop-blur-md text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 hover:text-[#FFFFFF] transition-all duration-500 rounded-sm">
            Explore The Experience
          </button>
        </motion.div>
      </div>

      <BookingSearch />
    </div>
  );
}
