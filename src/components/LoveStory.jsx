import React from 'react';
import foto3 from '../assets/foto3.png'; // Sesuaikan jalur (path) import jika diperlukan

export default function LoveStory() {
  return (
    <section id="lovestory" className="py-28 px-6 bg-[#121212] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Background Foto Jelas, Tanpa Blur, & Tidak Terlalu Cerah */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img 
          src={foto3} 
          alt="Love Story Background" 
          className="w-full h-full object-cover object-center opacity-80 filter contrast-125 brightness-75"
        />
      </div>

      {/* Overlay Gelap Transparan agar Teks Sangat Kontras */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Background Ornamen Emas Halus */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>

      <div className="max-w-2xl w-full mx-auto relative z-10 text-center space-y-12">
        
        {/* Section Header (Teks Emas Mewah) */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.5em] text-yellow-400 font-bold drop-shadow-md">Our Journey</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] tracking-wide drop-shadow-lg">
            Love Story
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
        </div>
        
        {/* Card Love Story Transparan Full (Teks Putih Bersih dengan Drop-Shadow) */}
        <div className="bg-transparent p-8 md:p-12 text-left space-y-8">
          
          <div className="space-y-2 border-l-2 border-yellow-500 pl-5 ml-1">
            <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest drop-shadow">First Phase</span>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-white drop-shadow-lg">
              Awal Mula &amp; Persaingan
            </h3>
            <p className="text-sm md:text-base text-white leading-relaxed font-medium pt-2 drop-shadow-md">
              Bertemu di satu perusahaan yang sama. Berawal dari persaingan angka dan saling sapa, tidak menyangka bisa sejauh ini dan sesingkat ini.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-yellow-500 pl-5 ml-1 pt-4">
            <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest drop-shadow">Next Chapter</span>
            <h3 className="font-serif font-bold text-xl md:text-2xl text-white drop-shadow-lg">
              Memahami Satu Sama Lain
            </h3>
            <p className="text-sm md:text-base text-white leading-relaxed font-medium pt-2 drop-shadow-md">
              Kami berdua memutuskan untuk melangkah ke jenjang yang lebih serius. Tidak terlalu lama untuk saling kenal, namun sudah saling bisa memahami satu sama lain.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}