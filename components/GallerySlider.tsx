"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  title: i < 4 ? ["Nairobi Rapid Response", "Regional Fleet", "Precision Logistics", "8K Branding Studio"][i] : "WACOSE Operations"
}));

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center mb-12">
        <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Visual Motion</h4>
        <h2 className="text-5xl font-black text-white italic uppercase">Operational 8K Gallery</h2>
      </div>

      <div className="relative h-[500px] md:h-[700px] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-left">
              <p className="text-yellow-500 font-mono text-sm uppercase tracking-tighter">Asset {currentIndex + 1}/14</p>
              <h3 className="text-3xl font-black text-white uppercase italic">{photos[currentIndex].title}</h3>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}