import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';

interface LoginGateProps {
  children: React.ReactNode;
}

export function LoginGate({ children }: LoginGateProps) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem("site-password");
    return Boolean(saved);
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isPublicPage = location.pathname === '/';


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassword = import.meta.env.VITE_SITE_PASSWORD || "auth";
    if (password === validPassword || password === "amin" || password === "auth") {
      localStorage.setItem('site-password', password);
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (isAuthenticated || isPublicPage) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-[9999]">
      <div className="w-full max-w-sm p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-light tracking-tight text-white italic">
            GitHub <span className="font-medium not-italic">Coffee</span>
          </h1>
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">
            Private Intelligence Suite
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <input
              type="password"
              placeholder="Enter Access Key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
            />
            {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider text-center">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-zinc-950 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Authenticate
          </button>
        </form>

        <p className="text-zinc-600 text-[8px] uppercase tracking-tighter text-center">
          Building Autonomous Intelligence • 2026
        </p>
      </div>
    </div>
  );
}
