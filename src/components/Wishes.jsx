import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('Hadir');
  const [wishesList, setWishesList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ambil data ucapan dari database saat halaman dibuka
  const fetchWishes = async () => {
    try {
      const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWishesList(list);
    } catch (error) {
      console.error("Gagal memuat ucapan: ", error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      // Simpan ke Firestore menggunakan addDoc
      await addDoc(collection(db, "wishes"), {
        name,
        message,
        attendance,
        createdAt: serverTimestamp()
      });

      setName('');
      setMessage('');
      fetchWishes(); // Refresh list ucapan
    } catch (error) {
      console.error("Gagal mengirim ucapan: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wish" className="py-28 px-6 bg-stone-950 text-white relative overflow-hidden pb-32">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10">
        
        <div className="text-center mb-12 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.5em] text-yellow-500 font-light">Wishes &amp; Prayers</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
            Ucapan &amp; Doa
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
          <p className="text-stone-400 text-xs md:text-sm font-light pt-2">
            Berikan doa terbaik Anda kepada kedua mempelai.
          </p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-5 mb-12">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-yellow-500 mb-2">Nama</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Masukkan nama Anda..." 
              required
              className="w-full px-4 py-3 bg-stone-900/80 border border-white/10 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-yellow-500 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-yellow-500 mb-2">Ucapan / Doa</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Tulis ucapan dan doa..." 
              rows="3"
              required
              className="w-full px-4 py-3 bg-stone-900/80 border border-white/10 rounded-xl text-sm text-white placeholder-stone-500 focus:outline-none focus:border-yellow-500 transition resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-yellow-500 mb-2">Konfirmasi Kehadiran</label>
            <select 
              value={attendance} 
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-500 transition"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-stone-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 mt-2 disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </form>

        {/* List Ucapan */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
          {wishesList.map((item, idx) => (
            <div key={item.id || idx} className="bg-white/[0.04] backdrop-blur-md p-5 rounded-2xl border border-white/10 text-left space-y-2 shadow-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-serif font-bold text-sm text-white tracking-wide">{item.name}</h4>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${item.attendance === 'Hadir' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                  {item.attendance}
                </span>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">{item.message}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}