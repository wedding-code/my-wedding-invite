import React, { useState } from 'react';

export default function Gift() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const accounts = [
    {
      bank: "BANK BCA",
      number: "7895376680",
      name: "Rina Dessi Ariyanti"
    },
    {
      bank: "BANK BCA",
      number: "7895742481",
      name: "Mukhtasar Khalid"
    }
  ];

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="gift" className="py-24 px-6 bg-gradient-to-br from-[#fcfbfa] via-[#f7f2ed] to-[#f0e6dc] text-stone-900 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Ornamen Emas Halus */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Cahaya Lingkaran Ambient Halus di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-xl w-full mx-auto relative z-10 text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.5em] text-amber-700 font-semibold">Wedding Gift</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#997A35] via-[#C5A059] to-[#806225] tracking-wide">
            Amplop Digital
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mt-4"></div>
          <p className="text-stone-600 text-xs md:text-sm font-light pt-2 leading-relaxed max-w-md mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </div>

        {/* Daftar Kartu Rekening (2 Kartu) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((acc, index) => (
            <div 
              key={index}
              className="group bg-white/75 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] border border-amber-500/20 shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-500 hover:border-amber-500/40 flex flex-col justify-between space-y-6 text-center"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.3em] text-amber-700 uppercase bg-amber-100/60 px-3 py-1 rounded-full border border-amber-500/20">
                  {acc.bank}
                </span>
                <p className="text-2xl md:text-3xl font-serif font-bold text-stone-800 tracking-wider pt-2">
                  {acc.number}
                </p>
                <p className="text-xs text-stone-600 font-light tracking-wider uppercase">
                  Atas Nama: <strong className="text-stone-900 font-medium">{acc.name}</strong>
                </p>
              </div>

              <div>
                <button 
                  onClick={() => handleCopy(acc.number, index)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#997A35] via-[#C5A059] to-[#806225] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  {copiedIndex === index ? "✨ Berhasil Disalin!" : "📋 Salin Nomor Rekening"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}