'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import Model3D from '@/components/Model3D';
import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [rooms, setRooms] = useState<any[]>([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [bookingRef, setBookingRef] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const searchAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in to make a reservation.");
      router.push('/auth/login');
      return;
    }
    setLoading(true);
    // Simple fetch all rooms, real availability would involve checking overlapping dates
    const { data } = await supabase.from('rooms').select('*').order('price_per_night', { ascending: false });
    if (data) setRooms(data);
    setLoading(false);
    setStep(2);
  };

  const handleBooking = async () => {
    if (!user || !selectedRoom) return;
    setLoading(true);
    
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const days = Math.max(1, Math.ceil((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24)));
    const totalPrice = selectedRoom.price_per_night * days;

    const { data, error } = await supabase.from('reservations').insert({
      user_id: user.id,
      room_id: selectedRoom.id,
      check_in: checkIn,
      check_out: checkOut,
      guests: parseInt(guests),
      total_price: totalPrice,
      status: 'confirmed'
    }).select();

    setLoading(false);
    if (!error && data) {
      setBookingRef(data[0].id.split('-')[0].toUpperCase()); // dummy ref string
      setStep(3);
    } else {
      alert("Booking failed: " + (error?.message || "Unknown error"));
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-40 pb-24 relative overflow-hidden flex flex-col items-center">
      {/* 3D Accent */}
      <div className="absolute top-0 left-0 w-full h-[60vh] opacity-10 pointer-events-none -translate-y-1/4">
         <Model3D type="gem" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-4">Your Sanctuary Awaits</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] font-light">Reserve Your Stay</h1>
        </div>
        
        <div className="bg-white/5/5 border border-white/10 backdrop-blur-xl p-10 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden rounded-sm">
          {/* Progress Indicator */}
          <div className="flex gap-4 mb-12">
            {[1, 2, 3].map(s => (
              <div key={s} className={`flex-1 h-1 ${step >= s ? 'bg-[#B78165]' : 'bg-[rgba(255,255,255,0.1)]'}`} />
            ))}
          </div>

          {step === 1 && (
            <motion.form 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              onSubmit={searchAvailability} 
              className="space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)] mb-2 group-focus-within:text-[#B78165] transition-colors">Check-in</label>
                  <input type="date" required value={checkIn} onChange={e => setCheckIn(e.target.value)} className="w-full border-b border-[rgba(255,255,255,0.15)] py-3 text-lg focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)] mb-2 group-focus-within:text-[#B78165] transition-colors">Check-out</label>
                  <input type="date" required value={checkOut} onChange={e => setCheckOut(e.target.value)} className="w-full border-b border-[rgba(255,255,255,0.15)] py-3 text-lg focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" />
                </div>
              </div>
              <div className="group w-full md:w-1/2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)] mb-2 group-focus-within:text-[#B78165] transition-colors">Guests</label>
                <select value={guests} onChange={e => setGuests(e.target.value)} className="w-full border-b border-[rgba(255,255,255,0.15)] py-3 text-lg focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors cursor-pointer">
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-[#FFFFFF] text-white py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] transition-colors duration-500 rounded-sm disabled:opacity-50">
                {loading ? 'Searching...' : 'Search Availability'}
              </button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
              <h2 className="text-3xl font-serif text-[#FFFFFF] font-light">Available Suites</h2>
              
              <div className="space-y-6">
                {rooms.map(room => (
                  <div key={room.id} className="border border-[rgba(255,255,255,0.15)] p-8 flex flex-col md:flex-row justify-between items-center hover:border-[#B78165] transition-colors bg-white/5/50 group">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                      <h3 className="text-2xl font-serif text-[#FFFFFF] mb-2">{room.name}</h3>
                      <p className="text-[rgba(255,255,255,0.6)] font-light text-sm uppercase tracking-widest">\${room.price_per_night} / night &middot; {room.view_type}</p>
                    </div>
                    <button 
                      disabled={loading}
                      onClick={() => { setSelectedRoom(room); handleBooking(); }} 
                      className="bg-transparent border border-[#FFFFFF] text-[#FFFFFF] px-10 py-3 text-[11px] uppercase tracking-[0.2em] group-hover:bg-[#FFFFFF] group-hover:text-white transition-all duration-300 disabled:opacity-50"
                    >
                      {loading && selectedRoom?.id === room.id ? 'Booking...' : 'Select'}
                    </button>
                  </div>
                ))}
              </div>
              
              <button onClick={() => setStep(1)} className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] hover:text-[#FFFFFF]">
                &larr; Back to Dates
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 bg-[#B78165]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-[#B78165] text-2xl">✓</span>
              </div>
              <h2 className="text-4xl font-serif mb-6 text-[#FFFFFF] font-light">Reservation Confirmed</h2>
              <p className="text-[rgba(255,255,255,0.7)] mb-10 font-light text-lg">Your booking reference is <span className="font-semibold tracking-wider">#ELAN-{bookingRef}</span>.</p>
              <button onClick={() => router.push('/dashboard')} className="border border-[#FFFFFF] bg-[#FFFFFF] text-white px-12 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] hover:border-[#B78165] transition-all rounded-sm">
                View in Dashboard
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}