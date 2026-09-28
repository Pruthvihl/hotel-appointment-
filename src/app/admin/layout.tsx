import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-[100px] bg-[#0A0F1C]">
      <aside className="w-72 bg-[#FFFFFF] text-white min-h-[calc(100vh-100px)] p-8">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-10">Control Panel</h2>
        <nav className="space-y-6 text-sm font-light tracking-wider">
          <Link href="/admin" className="block text-white/80 hover:text-white transition">Dashboard Overview</Link>
          <Link href="/admin/rooms" className="block text-white/80 hover:text-white transition">Manage Suites</Link>
          <Link href="/admin/reservations" className="block text-white/80 hover:text-white transition">Reservations</Link>
          <Link href="/admin/guests" className="block text-white/80 hover:text-white transition">Guest Profiles</Link>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}