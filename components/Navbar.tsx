"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-white tracking-tighter">
          WACOSE<span className="text-yellow-500">.</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
          <Link href="/services" className="text-zinc-400 hover:text-yellow-500 transition-colors">Services</Link>
          <Link href="/gallery" className="text-zinc-400 hover:text-yellow-500 transition-colors">Gallery</Link>
          <Link href="/tracking" className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all">
            Track Shipment
          </Link>
        </div>
      </div>
    </nav>
  );
}