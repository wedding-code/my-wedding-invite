import React, { useEffect, useRef } from 'react';
import musicFile from '../assets/music.mp3';

export default function MusicPlayer({ isPlaying, toggleMusic }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay diblokir:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-20 left-6 z-50 flex items-center">
      <audio ref={audioRef} src={musicFile} loop preload="auto" />

      <button 
        onClick={toggleMusic}
        className={`w-10 h-10 rounded-full bg-stone-900/90 backdrop-blur-md border border-yellow-500/50 text-yellow-500 shadow-xl flex items-center justify-center transition transform hover:scale-110 ${isPlaying ? 'animate-spin-slow' : ''}`}
        title="Toggle Music"
      >
        <span className="text-sm">{isPlaying ? '🎵' : '🔇'}</span>
      </button>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}