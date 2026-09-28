'use client'
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function GuestDashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }
      setUser(user);

      // Fetch Profile
      const { data: prof } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(prof);

      // Fetch Reservations
      const { data: res } = await supabase.from('reservations')
        .select('*, rooms(*)')
        .eq('user_id', user.id)
        .order('check_in', { ascending: true });
        
      if (res) setReservations(res);
      
      setLoading(false);
    }
    loadData();
  }, [router]);

  if (loading) {
    return <div className="min-h-screen bg-[#0A0F1C] pt-40 flex justify-center"><p className="text-[#B78165] uppercase tracking-widest text-sm">Loading...</p></div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 font-light text-[#FFFFFF]">
          Welcome, {profile?.first_name || 'Guest'}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-6">Your Itinerary</h2>
            
            {reservations.length === 0 ? (
              <div className="bg-white/5 p-10 shadow-xl border border-[rgba(255,255,255,0.1)] rounded-sm text-center">
                <p className="text-[rgba(255,255,255,0.6)] font-light mb-6">You have no upcoming reservations.</p>
                <button onClick={() => router.push('/booking')} className="bg-[#FFFFFF] text-white px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] transition-colors rounded-sm">
                  Book a Suite
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {reservations.map(res => (
                  <div key={res.id} className="bg-white/5 p-10 shadow-xl border border-white/50 rounded-sm hover:border-[#B78165]/30 transition-colors">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-8 border-b border-[rgba(255,255,255,0.1)]">
                      <div>
                        <h3 className="text-3xl font-serif text-[#FFFFFF] mb-2 font-light">{res.rooms?.name}</h3>
                        <p className="text-[rgba(255,255,255,0.6)] font-light">
                          {new Date(res.check_in).toLocaleDateString()} - {new Date(res.check_out).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="bg-[#B78165]/10 text-[#B78165] px-4 py-2 text-[10px] uppercase tracking-[0.2em] rounded-sm mt-4 md:mt-0 border border-[#B78165]/20">
                        {res.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-sm">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Check In</p>
                        <p className="text-[#FFFFFF]">3:00 PM</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Guests</p>
                        <p className="text-[#FFFFFF]">{res.guests}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Total</p>
                        <p className="text-[#FFFFFF]">\${res.total_price}</p>
                      </div>
                    </div>

                    <button className="w-full bg-[#FFFFFF] text-white py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#B78165] transition-colors rounded-sm">
                      Manage Reservation
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-6">Guest Profile</h2>
              <div className="bg-white/5 p-8 shadow-xl border border-white/50 rounded-sm space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Name</p>
                  <p className="text-[#FFFFFF]">{profile?.first_name} {profile?.last_name}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Email</p>
                  <p className="text-[#FFFFFF]">{user?.email}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-1">Preferences</p>
                  <p className="text-[#FFFFFF]">Late Check-out, Feather Pillows</p>
                </div>
                <button className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] hover:text-[#FFFFFF] transition-colors pt-4 border-t border-[rgba(255,255,255,0.1)] w-full text-left">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* LIVE BUTLER SERVICE */}
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
                Live Digital Butler
              </h2>
              <div className="bg-[#FFFFFF] p-8 shadow-xl rounded-sm text-white">
                <p className="text-sm font-light text-white/70 mb-6">
                  Request amenities, room service, or a private vehicle. Your personal butler is on standby 24/7.
                </p>
                
                <ButlerService userId={user?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButlerService({ userId }: { userId: string }) {
  const [requestText, setRequestText] = useState('');
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    // Initial fetch
    supabase.from('butler_requests').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(3)
      .then(({ data }) => { if (data) setRequests(data); });

    // Realtime subscription
    const channel = supabase.channel('realtime_butler')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'butler_requests', filter: `user_id=eq.${userId}` }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setRequests(prev => [payload.new, ...prev].slice(0, 3));
        } else if (payload.eventType === 'UPDATE') {
          setRequests(prev => prev.map(req => req.id === payload.new.id ? payload.new : req));
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [userId]);

  const submitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestText.trim()) return;
    await supabase.from('butler_requests').insert({ user_id: userId, request_text: requestText });
    setRequestText('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'text-yellow-400 border-yellow-400/30';
      case 'Processing': return 'text-blue-400 border-blue-400/30';
      case 'En Route': return 'text-purple-400 border-purple-400/30';
      case 'Completed': return 'text-green-400 border-green-400/30';
      default: return 'text-white border-white/30';
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={submitRequest} className="flex flex-col gap-3">
        <input 
          type="text" 
          value={requestText} 
          onChange={(e) => setRequestText(e.target.value)} 
          placeholder="e.g. Bring Champagne to Suite..."
          className="w-full bg-white/5/10 border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#B78165] transition-colors placeholder:text-white/30"
        />
        <button type="submit" className="bg-[#B78165] text-white py-3 text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#B78165]/80 transition-colors">
          Summon Butler
        </button>
      </form>

      {requests.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-white/10">
          <p className="text-[9px] uppercase tracking-widest text-white/50">Recent Requests</p>
          {requests.map(req => (
            <div key={req.id} className="flex justify-between items-center text-sm border border-white/10 p-3 rounded-sm bg-white/5/5">
              <span className="truncate w-2/3 text-white/90">{req.request_text}</span>
              <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border rounded-sm ${getStatusColor(req.status)}`}>
                {req.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}