import React from 'react';
import videoBg from '../assets/video.mp4'; // Pastikan merujuk ke video.mp4

export default function Quote() {
  return (
    <section id="quote" className="py-24 px-6 text-center flex flex-col items-center relative overflow-hidden min-h-screen justify-center">
      
      {/* Background Video dari assets/video.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay agar video meredup & teks doa emas sangat kontras */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Konten Teks Doa */}
      <div className="max-w-2xl w-full space-y-6 relative z-10 px-4">
        
        {/* Doa Bahasa Arab */}
        <p className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-2xl md:text-4xl leading-loose tracking-wide drop-shadow-md">
          بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْر
        </p>
        
        {/* Transliterasi */}
        <p className="text-xs md:text-sm italic tracking-wider text-yellow-300 font-light opacity-95">
          &quot;Baarakallaahu laka wa baaraka ‘alaika wa jama’a bainakuma fii khair&quot;
        </p>

        {/* Garis Pemisah Emas */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>

        {/* Terjemahan / Pesan */}
        <p className="text-stone-200 text-xs md:text-sm leading-relaxed font-light max-w-xl mx-auto drop-shadow">
          Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami menyatukan dua hati dalam ikatan suci pernikahan.
        </p>
        
      </div>
    </section>
  );
}