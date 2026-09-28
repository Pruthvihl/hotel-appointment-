'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const links = [
    { name: 'Stay', href: '/rooms' },
    { name: 'Dining', href: '/dining' },
    { name: 'Wellness', href: '/spa' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-700",
      isScrolled ? "bg-[#0A0F1C]/90 backdrop-blur-xl shadow-sm py-4 border-b border-[rgba(255,255,255,0.15)]" : "bg-gradient-to-b from-[#FFFFFF]/80 to-transparent py-8"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Links */}
        <div className="hidden lg:flex flex-1 items-center space-x-10">
          {links.slice(0, 2).map((link) => (
            <Link key={link.name} href={link.href} className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
              isScrolled ? "text-[#FFFFFF] hover:text-[#B78165]" : "text-white/90 hover:text-white"
            )}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className={cn(
          "text-2xl md:text-3xl font-serif tracking-widest text-center flex-1 transition-colors duration-500 font-light",
          isScrolled ? "text-[#FFFFFF]" : "text-white"
        )}>
          ÉLAN ROYALE
        </Link>

        {/* Right Links */}
        <div className="hidden lg:flex flex-1 items-center justify-end space-x-10">
          {links.slice(2, 5).map((link) => (
            <Link key={link.name} href={link.href} className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
              isScrolled ? "text-[#FFFFFF] hover:text-[#B78165]" : "text-white/90 hover:text-white"
            )}>
              {link.name}
            </Link>
          ))}
          
          {session ? (
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-[#FFFFFF] hover:text-[#B78165]" : "text-white/90 hover:text-white"
              )}>
                <User className="w-4 h-4" />
              </Link>
              <button onClick={handleLogout} className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-[#FFFFFF] hover:text-[#B78165]" : "text-white/90 hover:text-white"
              )}>
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
              isScrolled ? "text-[#FFFFFF] hover:text-[#B78165]" : "text-white/90 hover:text-white"
            )}>
              Sign In
            </Link>
          )}

          <Link href="/booking" className={cn(
            "px-8 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 rounded-sm",
            isScrolled ? "bg-[#FFFFFF] text-white hover:bg-[#B78165]" : "border border-white/50 bg-white/5/5 backdrop-blur-md text-white hover:bg-white/5 hover:text-[#FFFFFF]"
          )}>
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden flex-1 flex justify-end" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-[#FFFFFF]" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-[#FFFFFF]" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#FFFFFF]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 lg:hidden pt-20">
          <button className="absolute top-8 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          
          <Link href="/" className="text-3xl font-serif text-white tracking-widest mb-8 font-light" onClick={() => setIsMobileMenuOpen(false)}>
            ÉLAN ROYALE
          </Link>

          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg text-white/70 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          {session ? (
            <div className="flex flex-col items-center space-y-6 pt-4">
              <Link href="/dashboard" className="text-lg text-white/70 hover:text-white uppercase tracking-[0.2em] font-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="text-lg text-[#B78165] hover:text-white uppercase tracking-[0.2em] font-light transition-colors">
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className="text-lg text-white/70 hover:text-white uppercase tracking-[0.2em] font-light transition-colors pt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Sign In
            </Link>
          )}

          <div className="pt-8">
            <Link href="/booking" className="bg-[#B78165] text-white px-12 py-4 text-xs uppercase tracking-[0.2em] rounded-sm" onClick={() => setIsMobileMenuOpen(false)}>
              Reserve Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}