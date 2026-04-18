"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Mock data to simulate real-time logistics movement
const INITIAL_UPDATES = [
  { id: 1, location: "Westlands, Nairobi", status: "Picked Up", time: "2 mins ago" },
  { id: 2, location: "Kilimani", status: "In Transit", time: "5 mins ago" },
  { id: 3, location: "Mombasa Rd", status: "Delivered", time: "12 mins ago" },
];

export default function LiveUpdates() {
  const [updates, setUpdates] = useState(INITIAL_UPDATES);

  // This simulates new data coming in every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        location: "CBD, Nairobi",
        status: "Processing",
        time: "Just now"
      };
      setUpdates(prev => [newUpdate, ...prev.slice(0, 2)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Network Pulse</h4>
            <h2 className="text-5xl font-black text-white mb-6">Real-Time Operations</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Transparency is our core value. Monitor our regional network performance as it happens. 
              Every rider, every package, every second.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-black text-white">99.2%</p>
                <p className="text-zinc-500 text-sm uppercase">On-Time Rate</p>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="text-zinc-500 text-sm uppercase">Active Support</p>
              </div>
            </div>
          </div>

          {/* The Live Terminal */}
          <div className="bg-zinc-900/50 border border-white/10 p-2 rounded-3xl backdrop-blur-xl">
            <div className="bg-black/40 rounded-2xl p-6 overflow-hidden relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Live Feed</span>
                </div>
              </div>

              <div className="space-y-4">
                {updates.map((update) => (
                  <motion.div 
                    key={update.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg"
                  >
                    <div>
                      <p className="text-white font-mono text-sm uppercase tracking-wider">{update.location}</p>
                      <p className="text-yellow-500 text-xs font-bold">{update.status}</p>
                    </div>
                    <span className="text-zinc-600 font-mono text-xs italic">{update.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}