import Hero3D from "@/components/Hero3D";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Model3D from '@/components/Model3D';

export default function Home() {
  return (
    <>
      <Hero3D />
      
      {/* Introduction Section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-[#0A0F1C] relative overflow-hidden">
        {/* Subtle 3D accent in background */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3">
           <Model3D type="torus" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-6">The Art of Hospitality</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#FFFFFF] leading-tight font-light">Unmatched Elegance</h2>
          <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-12 font-light text-xl">
            Discover a world where every detail is meticulously crafted to offer an unforgettable experience. 
            From our lavish suites to our world-class amenities, immerse yourself in the pinnacle of luxury, 
            designed exclusively for the world's most discerning travelers.
          </p>
          <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop" alt="Signature Detail" className="w-24 h-24 object-cover rounded-full mx-auto shadow-md" />
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white/5 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-4">Accommodations</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light">Signature Suites</h2>
            </div>
            <Link href="/rooms" className="text-[11px] uppercase tracking-[0.2em] text-[#FFFFFF] border-b border-[#FFFFFF] pb-1 hover:text-[#B78165] hover:border-[#B78165] transition-colors mt-6 md:mt-0">
              View All Suites
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "The Royal Suite", size: "120 sqm", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop" },
              { name: "Presidential Villa", size: "300 sqm", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" }
            ].map((room, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden h-[60vh] relative mb-6">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-serif text-[#FFFFFF] mb-1 font-light">{room.name}</h3>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">{room.size} &middot; Panoramic Views</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center group-hover:border-[#B78165] group-hover:bg-[#B78165] group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary */}
      <section className="py-24 bg-[#FFFFFF] text-[#0A0F1C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Model3D type="torus" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop" alt="Fine Dining" className="w-full h-[70vh] object-cover rounded-sm opacity-90" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#B78165] hidden md:flex items-center justify-center rounded-full p-8 text-center text-[#0A0F1C] font-serif italic text-xl leading-tight shadow-2xl">
              "A Symphony of Flavors"
            </div>
          </div>
          <div className="order-1 lg:order-2 max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-6">Culinary Excellence</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 font-light leading-tight text-white">A Journey for the Senses</h2>
            <p className="text-[rgba(255,255,255,0.1)] font-light text-xl mb-12 leading-relaxed">
              Helmed by Michelin-starred chefs, our restaurants offer an extraordinary gastronomic adventure. From contemporary French cuisine to rare spirits in our obsidian bar, every moment is a celebration of taste.
            </p>
            <Link href="/dining" className="inline-block border border-white/50 bg-white/5/5 backdrop-blur-sm px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 hover:text-[#FFFFFF] transition-colors duration-500 rounded-sm">
              Explore Dining
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}