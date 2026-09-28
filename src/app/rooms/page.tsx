import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Ensures data is fetched fresh

export default async function RoomsPage() {
  const { data: rooms, error } = await supabase
    .from('rooms')
    .select('*')
    .order('price_per_night', { ascending: false });

  if (error) {
    console.error("Error fetching rooms:", error);
  }

  const displayRooms = rooms || [];

  return (
    <div className="pt-40 pb-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl mb-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-6">Accommodations</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-8 text-[#1A1A1A] font-light">Rooms & Suites</h1>
        <p className="text-[#666666] font-light text-lg">
          Our suites are sanctuaries of refined elegance, featuring bespoke furnishings, panoramic views, and uncompromising comfort.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-24">
          {displayRooms.map((room: any, index: number) => (
            <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 group`}>
              <div className="flex-1 w-full overflow-hidden h-[50vh] md:h-[70vh] relative shadow-lg">
                <img src={room.image_url} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex-1 w-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4 font-light">{room.name}</h2>
                <div className="flex items-center gap-4 text-sm text-[rgba(255,255,255,0.6)] mb-8 uppercase tracking-widest">
                  <span>{room.size_sqm} sqm</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span>{room.view_type || 'Panoramic Views'}</span>
                </div>
                <p className="text-[#666666] leading-relaxed mb-10 font-light text-lg max-w-lg">
                  {room.description || "Designed for the modern traveler, this space combines contemporary design with timeless luxury. Experience serenity and comfort like never before."}
                </p>
                <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-8 max-w-lg">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] block mb-1">Starting From</span>
                    <span className="text-2xl font-serif text-[#1A1A1A]">${room.price_per_night}</span>
                  </div>
                  <Link href={`/rooms/${room.id}`} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}