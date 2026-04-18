"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link'; // This fixes the "Cannot find name 'Link'" error

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero-bg-4k.jpg" 
          alt="WACOSE Logistics" 
          className="w-full h-full object-cover scale-110" 
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ opacity }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          WACOSE <span className="text-yellow-400">COURIER</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8">
          From Nairobi to the Region. Reliable, Swift, and Built on Experience.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="#book" 
            className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Book a Delivery
          </Link>
          <Link 
            href="/tracking" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
          >
            Track Shipment
          </Link>
        </div>
      </motion.div>
    </section>
  );
}