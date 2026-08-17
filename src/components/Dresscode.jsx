import React from 'react';
import foto4 from '../assets/foto4.png'; // Sesuaikan jalur (path) import jika diperlukan

export default function Dresscode() {
  return (
    <section id="dresscode" className="py-28 px-6 bg-[#121212] text-white relative overflow-hidden text-center flex flex-col items-center justify-center min-h-screen">
      
      {/* Background Foto Jelas, Tanpa Blur, & Tidak Terlalu Cerah */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src={foto4} 
          alt="Dresscode Background" 
          className="w-full h-full object-cover object-center opacity-75 filter contrast-125 brightness-75 scale-105"
        />
      </div>

      {/* Overlay Gelap Transparan agar Teks Sangat Kontras & Jelas */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Background Ornamen Emas Halus */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>

      {/* Konten Dresscode (Pure Transparan / Tanpa Kotak BG) */}
      <div className="max-w-md mx-auto relative z-10 space-y-6 bg-transparent p-6 rounded-[2.5rem]">
        
        <p className="text-[11px] uppercase tracking-[0.4em] text-yellow-400 font-bold drop-shadow-md">Dress Code</p>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] tracking-wide drop-shadow-lg">
          Busana Nuansa Putih
        </h2>

        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>

        <p className="text-white text-xs md:text-sm font-medium leading-relaxed drop-shadow-md">
          Kami dengan senang hati berharap para tamu undangan dapat mengenakan busana dengan nuansa warna <strong className="text-yellow-300 font-bold">Putih</strong> untuk keselarasan acara.
        </p>

        {/* Lingkaran Warna Dresscode dengan Tema Gelap & Emas */}
        <div className="flex justify-center items-center gap-6 pt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-yellow-500"></div>
            <span className="text-[10px] text-white tracking-wider font-semibold drop-shadow">White</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-stone-200 shadow-lg border-2 border-stone-300"></div>
            <span className="text-[10px] text-white tracking-wider font-semibold drop-shadow">Off White</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-stone-400 shadow-lg border-2 border-stone-500"></div>
            <span className="text-[10px] text-white tracking-wider font-semibold drop-shadow">Soft Grey</span>
          </div>
        </div>

      </div>
    </section>
  );
}