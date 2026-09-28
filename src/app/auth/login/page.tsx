'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex flex-col justify-center py-24 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1C]" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="text-center text-[10px] uppercase tracking-[0.4em] text-[#B78165] mb-4">Welcome Back</h2>
        <h1 className="text-center text-4xl font-serif font-light text-[#FFFFFF] mb-8">Sign in to Élan Royale</h1>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/5 py-12 px-10 shadow-2xl border-t border-[#B78165] rounded-sm">
          <form className="space-y-8" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 text-red-800 text-sm p-4 text-center border border-red-200">
                {error}
              </div>
            )}
            
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-2 group-focus-within:text-[#B78165] transition-colors">Email Address</label>
              <input 
                type="email" required 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-[rgba(255,255,255,0.1)] py-2 text-sm focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" 
              />
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.6)] mb-2 group-focus-within:text-[#B78165] transition-colors">Password</label>
              <input 
                type="password" required 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-[rgba(255,255,255,0.1)] py-2 text-sm focus:outline-none focus:border-[#B78165] bg-transparent text-[#FFFFFF] transition-colors" 
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#B78165] focus:ring-[#B78165] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-[#666666]">
                  Remember me
                </label>
              </div>

              <div className="text-xs">
                <a href="#" className="font-light text-[#B78165] hover:text-[#FFFFFF] transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full flex justify-center py-4 border border-transparent rounded-sm shadow-sm text-[11px] uppercase tracking-[0.2em] text-white bg-[#FFFFFF] hover:bg-[#B78165] transition-all duration-300 focus:outline-none disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-10 border-t border-[rgba(255,255,255,0.1)] pt-6 text-center">
            <p className="text-xs text-[#666666]">
              Don't have an account?{' '}
              <Link href="/auth/register" className="font-light text-[#B78165] hover:text-[#FFFFFF] transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
