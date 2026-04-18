"use client";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,179,8,0.1)]">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <source src="/videos/wacose-cinematic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter italic">8K CINEMATIC</h2>
              <p className="text-yellow-500 font-mono tracking-widest uppercase mt-4 underline decoration-2 underline-offset-8">Experience the Grit of Nairobi</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}