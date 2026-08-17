import React from 'react';
import foto1 from '../assets/foto1.png'; // Sesuaikan jalur (path) import jika diperlukan

export default function Event() {
  return (
    <section id="event" className="py-28 px-6 bg-[#121212] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Background Foto Full Menutupi Layar (Object Cover agar pas di HP & Desktop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src={foto1} 
          alt="Event Background" 
          className="w-full h-full object-cover object-center opacity-70 filter contrast-125 brightness-75"
        />
      </div>

      {/* Overlay Gelap Transparan agar Foto Jelas & Teks Emas Kontras */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      {/* Background Ornamen Emas Halus */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>

      <div className="max-w-2xl mx-auto relative z-10 text-center w-full">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.5em] text-yellow-400 font-bold">Save The Date</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] tracking-wide">
            Waktu &amp; Tempat
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
          <p className="text-stone-200 text-xs md:text-sm font-medium pt-2">
            Kamis, 20 Agustus 2026
          </p>
          <p className="text-stone-300 text-xs font-light">
            Insya Allah rangkaian acara pernikahan akan diselenggarakan pada:
          </p>
        </div>

        {/* Kartu Tunggal Akad Nikah Glassmorphism Elegan */}
        <div className="group bg-stone-900/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-yellow-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between transition-all duration-500 hover:border-yellow-500/50 space-y-6">
          
          {/* Foto Event di Atas */}
          <div className="w-full max-w-sm h-56 md:h-64 overflow-hidden rounded-2xl border border-yellow-500/30 shadow-lg relative">
            <img 
              src={foto1} 
              alt="Akad Nikah Moment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
          </div>

          <div className="space-y-4 w-full">
            <span className="text-3xl">💍</span>
            <h3 className="text-3xl font-serif font-bold text-white">
              Akad Nikah
            </h3>
            <div className="w-12 h-[1px] bg-yellow-500/50 mx-auto"></div>
            <p className="text-sm md:text-base font-semibold text-white tracking-wide">
              Pukul 09:00 - 10:30 WITA
            </p>
            <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed">
              Masjid Agung Al-Munawwarah <br />
              <span className="text-stone-400">Jl. Trikora, Banjarbaru</span>
            </p>
          </div>

          <div className="pt-4 w-full max-w-xs">
            <a 
              href="https://maps.app.goo.gl/7RWg5Nt36iQp8HhF6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-stone-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <span>📍</span> View Location
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}