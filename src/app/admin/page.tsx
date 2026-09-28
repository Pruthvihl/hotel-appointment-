export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-serif mb-10 text-[#FFFFFF] font-light">Hotel Operations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 p-8 shadow-sm border border-[rgba(255,255,255,0.1)] rounded-sm">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] mb-4">Total Revenue</h3>
          <p className="text-4xl font-serif text-[#FFFFFF] font-light">$124,500</p>
        </div>
        <div className="bg-white/5 p-8 shadow-sm border border-[rgba(255,255,255,0.1)] rounded-sm">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] mb-4">Occupancy Rate</h3>
          <p className="text-4xl font-serif text-[#FFFFFF] font-light">85%</p>
        </div>
        <div className="bg-white/5 p-8 shadow-sm border border-[rgba(255,255,255,0.1)] rounded-sm">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] mb-4">Arrivals Today</h3>
          <p className="text-4xl font-serif text-[#FFFFFF] font-light">12</p>
        </div>
        <div className="bg-white/5 p-8 shadow-sm border border-[rgba(255,255,255,0.1)] rounded-sm">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B78165] mb-4">Departures Today</h3>
          <p className="text-4xl font-serif text-[#FFFFFF] font-light">8</p>
        </div>
      </div>
    </div>
  );
}