'use client'
import Model3D from '@/components/Model3D';

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-[60vh] opacity-10 pointer-events-none -translate-x-1/4 -translate-y-1/4">
         <Model3D type="torus" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-4">Beyond the Ordinary</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] font-light mb-8">Exclusive Experiences</h1>
          <p className="text-[rgba(255,255,255,0.6)] font-light max-w-2xl mx-auto leading-relaxed">
            Curated excursions and deeply immersive activities tailored strictly for our guests. 
            Discover the extraordinary with our private guides and bespoke itineraries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#FFFFFF] p-10 shadow-2xl relative overflow-hidden rounded-sm group text-white">
             <div className="h-64 mb-6 overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop" alt="Yacht" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
             </div>
             <h3 className="text-2xl font-serif mb-2 font-light">Private Yacht Charter</h3>
             <p className="text-white/60 text-sm font-light mb-6">Explore the coastline aboard our 80ft luxury vessel, complete with a private chef and crew.</p>
             <button className="text-[10px] uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-[#B78165] hover:border-[#B78165] transition-colors">Inquire Now</button>
          </div>

          <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl border border-[rgba(255,255,255,0.1)] relative overflow-hidden rounded-sm group">
             <div className="h-64 mb-6 overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop" alt="Helicopter Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <h3 className="text-2xl font-serif text-[#FFFFFF] mb-2 font-light">Helicopter Tours</h3>
             <p className="text-[rgba(255,255,255,0.6)] text-sm font-light mb-6">See the breathtaking landscape from above, departing directly from our private helipad.</p>
             <button className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] border-b border-[#B78165] pb-1 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
