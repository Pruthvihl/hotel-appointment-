'use client'
import { motion } from 'framer-motion';
import Model3D from '@/components/Model3D';
import { ArrowRight } from 'lucide-react';

export default function DiningPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1C] min-h-screen relative overflow-hidden pt-32 pb-24">
      {/* 3D Glass Background */}
      <div className="absolute top-0 right-0 w-full h-[80vh] opacity-30 pointer-events-none mix-blend-screen scale-150 translate-x-1/4 -translate-y-1/4">
         <Model3D type="torus" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-6">Culinary Excellence</p>
          <h1 className="text-4xl md:text-7xl font-serif mb-8 font-light leading-tight drop-shadow-xl text-white">Gastronomy &<br/>Mixology</h1>
          <p className="text-[rgba(255,255,255,0.1)] font-light text-xl leading-relaxed">
            Experience world-class dining curated by Michelin-starred chefs. A journey of flavors, textures, and sensory delights awaits.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {/* Restaurant 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 group">
            <div className="w-full lg:w-1/2 h-[60vh] overflow-hidden relative rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop" alt="L'Aura Restaurant" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent opacity-80" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 font-light">L'Aura</h2>
              <div className="flex items-center gap-4 text-[10px] text-[#B78165] mb-8 uppercase tracking-[0.2em]">
                <span>Contemporary French</span>
                <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.15)]" />
                <span>Dinner Only</span>
              </div>
              <p className="text-[rgba(255,255,255,0.1)] leading-relaxed mb-10 font-light text-lg">
                An intimate dining experience that reimagines French culinary traditions with avant-garde techniques and locally sourced ingredients.
              </p>
              <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] border-b border-white/30 pb-2 hover:border-[#B78165] hover:text-[#B78165] transition-all">
                View Menu <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Restaurant 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 group">
            <div className="w-full lg:w-1/2 h-[60vh] overflow-hidden relative rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop" alt="The Obsidian Bar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent opacity-80" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 font-light">The Obsidian</h2>
              <div className="flex items-center gap-4 text-[10px] text-[#B78165] mb-8 uppercase tracking-[0.2em]">
                <span>Lounge & Bar</span>
                <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.15)]" />
                <span>Evening</span>
              </div>
              <p className="text-[rgba(255,255,255,0.1)] leading-relaxed mb-10 font-light text-lg">
                A sanctuary of rare spirits and signature cocktails. Enjoy live jazz and sweeping city views in an atmosphere of dark, sophisticated glamour.
              </p>
              <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] border-b border-white/30 pb-2 hover:border-[#B78165] hover:text-[#B78165] transition-all">
                Reserve a Table <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}