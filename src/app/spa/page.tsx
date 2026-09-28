'use client'
import Model3D from '@/components/Model3D';

export default function SpaPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 right-0 w-full h-[60vh] opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
         <Model3D type="gem" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-4">Rejuvenation</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] font-light mb-8">Wellness & Spa</h1>
          <p className="text-[rgba(255,255,255,0.6)] font-light max-w-2xl mx-auto leading-relaxed">
            Escape to our award-winning sanctuary where ancient healing traditions meet modern scientific wellness. 
            Immerse yourself in therapeutic waters and highly bespoke treatments designed to restore your vitality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl border border-white/50 relative overflow-hidden rounded-sm hover:border-[#B78165] transition-all duration-500 group">
             <div className="h-64 mb-6 overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop" alt="Spa Treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <h3 className="text-2xl font-serif text-[#FFFFFF] mb-2 font-light">Signature Therapies</h3>
             <p className="text-[rgba(255,255,255,0.6)] text-sm font-light mb-6">Restorative massages and facial treatments using rare botanical extracts.</p>
             <button className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] border-b border-[#B78165] pb-1 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors">Book Treatment</button>
          </div>

          <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl border border-white/50 relative overflow-hidden rounded-sm hover:border-[#B78165] transition-all duration-500 group">
             <div className="h-64 mb-6 overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" alt="Thermal Baths" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <h3 className="text-2xl font-serif text-[#FFFFFF] mb-2 font-light">Thermal Circuit</h3>
             <p className="text-[rgba(255,255,255,0.6)] text-sm font-light mb-6">Hydrotherapy pools, obsidian saunas, and ice caves for complete detoxification.</p>
             <button className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] border-b border-[#B78165] pb-1 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
