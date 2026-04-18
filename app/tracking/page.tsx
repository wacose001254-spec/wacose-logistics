"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TrackingPage() {
  const [id, setId] = useState('');

  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            TRACK <span className="text-yellow-500">CARGO.</span>
          </h2>
          <p className="text-zinc-500 mb-10 uppercase tracking-[0.3em] text-sm">
            Regional Logistics Intelligence
          </p>
          
          <div className="relative group">
            {/* High-tech glow effect behind input */}
            <div className="absolute -inset-1 bg-yellow-500/20 rounded-2xl blur-xl group-hover:bg-yellow-500/30 transition duration-1000"></div>
            
            <input 
              type="text" 
              placeholder="Enter Waybill or Tracking ID"
              className="relative w-full bg-zinc-900 border border-white/10 p-6 rounded-2xl text-white text-xl outline-none focus:border-yellow-500 transition-all font-mono uppercase"
              onChange={(e) => setId(e.target.value)}
            />
            
            <button className="relative mt-6 w-full bg-yellow-500 py-5 rounded-xl font-black text-black uppercase tracking-widest hover:bg-white transition-all duration-300">
              Locate Shipment
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.5em]">
              Scanning WACOSE Nodes... Secure Link Active
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}