import React from 'react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg bg-stone-900/85 backdrop-blur-2xl border-t border-x border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.8)] py-3 px-8 rounded-t-[2.5rem] flex justify-around items-center text-[11px] font-medium text-stone-300">
      
      <a href="#home" className="hover:text-yellow-400 transition-all duration-300 flex flex-col items-center gap-0.5 group">
        <span className="text-base group-hover:-translate-y-1 transition-transform duration-300">🏠</span> 
        <span className="text-[9px] tracking-wide opacity-75 group-hover:opacity-100">Home</span>
      </a>

      <a href="#couple" className="hover:text-yellow-400 transition-all duration-300 flex flex-col items-center gap-0.5 group">
        <span className="text-base group-hover:-translate-y-1 transition-transform duration-300">❤️</span> 
        <span className="text-[9px] tracking-wide opacity-75 group-hover:opacity-100">Couple</span>
      </a>

      <a href="#event" className="hover:text-yellow-400 transition-all duration-300 flex flex-col items-center gap-0.5 group">
        <span className="text-base group-hover:-translate-y-1 transition-transform duration-300">📅</span> 
        <span className="text-[9px] tracking-wide opacity-75 group-hover:opacity-100">Event</span>
      </a>

      <a href="#gift" className="hover:text-yellow-400 transition-all duration-300 flex flex-col items-center gap-0.5 group">
        <span className="text-base group-hover:-translate-y-1 transition-transform duration-300">🎁</span> 
        <span className="text-[9px] tracking-wide opacity-75 group-hover:opacity-100">Gift</span>
      </a>

      <a href="#wish" className="hover:text-yellow-400 transition-all duration-300 flex flex-col items-center gap-0.5 group">
        <span className="text-base group-hover:-translate-y-1 transition-transform duration-300">💬</span> 
        <span className="text-[9px] tracking-wide opacity-75 group-hover:opacity-100">Wish</span>
      </a>

    </nav>
  );
}