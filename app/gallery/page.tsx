"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-12 px-6">
        <div className="container mx-auto text-center">
          <motion.h4 
            initial={{ opacity: 0, letterSpacing: "0.5em" }} // Changed 'tracking' to 'letterSpacing'
            animate={{ opacity: 1, letterSpacing: "0.2em" }} // Changed 'tracking' to 'letterSpacing'
            transition={{ duration: 1 }}
            className="text-yellow-500 font-bold uppercase mb-4"
          >
            Visual Portfolio
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            THE <span className="text-zinc-700">WACOSE</span> LENS.
          </motion.h1>
          <p className="text-zinc-500 mt-6 max-w-xl mx-auto text-lg">
            Showcasing the intersection of logistics, grit, and 8K cinematic design. 
            From the streets of Nairobi to our regional hubs.
          </p>
        </div>
      </section>

      <Gallery />

      <section className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-6 text-center border-t border-white/5 pt-16">
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.4em]">
            Captured in 8K Resolution | Wasike Design Studio Premium Assets
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}