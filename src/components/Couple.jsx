import React from 'react';
import foto2 from '../assets/foto2.png'; // Sesuaikan jalur (path) import jika diperlukan

export default function Couple() {
  return (
    <section id="couple" className="py-20 px-4 sm:px-6 bg-[#121212] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen [perspective:1200px]">
      
      {/* Background Foto Sangat Jelas, Tanpa Blur, & Tidak Terlalu Cerah */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src={foto2} 
          alt="Couple Background" 
          className="w-full h-full object-cover object-center opacity-70 filter contrast-125 brightness-75"
        />
      </div>

      {/* Overlay Gelap Transparan (Tidak Terlalu Terang) agar Foto Asli Jelas & Teks Emas Sangat Kontras */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      {/* Ornamen Background Emas Halus */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>

      <div className="max-w-xl w-full mx-auto relative z-10 text-center space-y-8 sm:space-y-10">
        
        {/* Header Section */}
        <div className="space-y-3 px-2 animate-scale-float">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-yellow-400 font-bold">The Sacred Moment</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] tracking-wide leading-tight drop-shadow-md">
            Mempelai Yang Berbahagia
          </h2>
          <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-3"></div>
          <p className="text-stone-300 text-[11px] sm:text-xs md:text-sm max-w-md mx-auto font-light pt-2 leading-relaxed italic px-2">
            "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri..." (QS. Ar-Rum: 21)
          </p>
        </div>

        {/* Kotak Royal Card Glassmorphism Elegan (Tanpa Blur BG, Teks Kontras) */}
        <div className="bg-stone-900/80 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-yellow-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative space-y-8 sm:space-y-10 animate-scale-float [animation-delay:0.3s] animate-float">
          
          {/* Groom */}
          <div className="space-y-2 sm:space-y-3 transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
              Mukhtasar Khalid
            </h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-yellow-500 font-bold">
              Putra Kedua
            </p>
            <div className="w-10 sm:w-12 h-[1px] bg-yellow-500/50 mx-auto"></div>
            <p className="text-stone-300 text-xs sm:text-sm font-light tracking-wide pt-0.5">
              Bapak Ayobkhan <span className="text-yellow-500 font-bold">&</span> Ibu Lenny Yuliana
            </p>
          </div>

          {/* Simbol Pemisah */}
          <div className="relative flex items-center justify-center py-1">
            <div className="w-full border-t border-white/10 absolute"></div>
            <span className="relative z-10 px-4 bg-stone-900 font-serif italic text-xl sm:text-2xl text-yellow-500 rounded-full border border-yellow-500/40 shadow-sm">
              &amp;
            </span>
          </div>

          {/* Bride */}
          <div className="space-y-2 sm:space-y-3 transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
              Rina Dessi Ariyanti
            </h3>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-yellow-500 font-bold">
              Putri Kedua
            </p>
            <div className="w-10 sm:w-12 h-[1px] bg-yellow-500/50 mx-auto"></div>
            <p className="text-stone-300 text-xs sm:text-sm font-light tracking-wide pt-0.5">
              Alm. Bapak Muhammad Yusuf <span className="text-yellow-500 font-bold">&</span> Almh. Ibu Musrati
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}