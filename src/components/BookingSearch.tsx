'use client'
import { motion } from 'framer-motion';

export default function BookingSearch() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl z-20"
    >
      <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-t-2 border-[#B78165] rounded-sm">
        <div className="flex-1 w-full">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-2">Check In</label>
          <input suppressHydrationWarning type="date" className="w-full border-b border-[rgba(255,255,255,0.1)] py-2 text-sm focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-2">Check Out</label>
          <input suppressHydrationWarning type="date" className="w-full border-b border-[rgba(255,255,255,0.1)] py-2 text-sm focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-2">Guests</label>
          <select suppressHydrationWarning className="w-full border-b border-[rgba(255,255,255,0.1)] py-2 text-sm focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors cursor-pointer">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>2 Adults, 2 Children</option>
          </select>
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0">
          <button suppressHydrationWarning className="w-full bg-[#FFFFFF] text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] transition-colors duration-500 rounded-sm whitespace-nowrap">
            Check Availability
          </button>
        </div>
      </div>
    </motion.div>
  );
}
