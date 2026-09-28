'use client'
import Model3D from '@/components/Model3D';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
         <Model3D type="knot" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-4">Unforgettable Moments</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] font-light mb-8">Weddings & Events</h1>
          <p className="text-[rgba(255,255,255,0.6)] font-light max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand galas, our dedicated events team ensures every detail 
            is executed with flawless precision and unparalleled elegance.
          </p>
        </div>
        
        <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl border-t border-[#B78165] relative overflow-hidden rounded-sm flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 h-80 overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop" alt="Wedding Setup" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-serif text-[#FFFFFF] mb-4 font-light">The Grand Ballroom</h3>
            <p className="text-[rgba(255,255,255,0.6)] font-light mb-8 leading-relaxed">
              Featuring crystal chandeliers and soaring ceilings, the Grand Ballroom accommodates up to 500 guests for banquets or corporate events of the highest caliber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#FFFFFF] text-white px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] transition-colors rounded-sm">
                Request Proposal
              </button>
              <button className="bg-transparent border border-[#FFFFFF] text-[#FFFFFF] px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#FFFFFF] hover:text-white transition-colors rounded-sm">
                View Venues
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
