import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-white pt-24 pb-12 mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
        
        <div className="lg:col-span-2">
          <Link href="/" className="text-3xl font-serif tracking-widest block mb-8 font-light">
            ÉLAN ROYALE
          </Link>
          <p className="text-[#A3A3A3] font-light max-w-sm leading-relaxed mb-8">
            An extraordinary address for the world's most discerning travelers. Experience unparalleled luxury and meticulous service.
          </p>
          <p className="text-sm text-[#A3A3A3] leading-loose">
            123 Luxury Avenue<br/>
            Metropolis, NY 10001<br/>
            +1 (800) 123-4567<br/>
            concierge@elanroyale.com
          </p>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-8">Discover</h3>
          <ul className="space-y-4 text-sm text-[#A3A3A3] font-light tracking-wide">
            <li><Link href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
            <li><Link href="/dining" className="hover:text-white transition-colors">Dining</Link></li>
            <li><Link href="/spa" className="hover:text-white transition-colors">Spa & Wellness</Link></li>
            <li><Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-8">Hotel Info</h3>
          <ul className="space-y-4 text-sm text-[#A3A3A3] font-light tracking-wide">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Events & Weddings</Link></li>
            <li><Link href="/offers" className="hover:text-white transition-colors">Offers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#B78165] mb-8">Connect</h3>
          <ul className="space-y-4 text-sm text-[#A3A3A3] font-light tracking-wide">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[rgba(255,255,255,0.6)] uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Élan Royale. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}