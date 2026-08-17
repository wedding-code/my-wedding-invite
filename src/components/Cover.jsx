import React, { useState } from 'react';
import iconBg from '../assets/icon.png'; // Mengimpor gambar dari folder assets

export default function Cover({ guestName, onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true); // Memulai animasi
    setTimeout(() => {
      onOpen(); // Menutup cover setelah animasi selesai
    }, 800); // Durasi animasi 0.8 detik
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900 transition-all duration-1000 ease-in-out ${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      
      {/* Background Mengambil dari icon.png di assets */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-[0.5]" 
        style={{ backgroundImage: `url(${iconBg})` }}
      ></div>

      {/* Konten Teks */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center animate-fade-in">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-300 font-light mb-3">
          Kpd Yth. Bapak/Ibu/Saudara/i
        </p>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-sm mb-4">
          {guestName}
        </h2>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent mb-6"></div>

        <p className="text-[10px] text-stone-400 font-light leading-relaxed px-2 mb-8">
          *Mohon maaf apabila terdapat kesalahan penulisan nama maupun gelar
        </p>
        
        <button 
          onClick={handleClick}
          className="px-8 py-3 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-stone-900 font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs tracking-widest uppercase"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}