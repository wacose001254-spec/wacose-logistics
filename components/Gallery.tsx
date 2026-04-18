"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/gallery-1.jpg", title: "Nairobi Rapid Response" },
  { src: "/images/gallery-2.jpg", title: "Regional Fleet" },
  { src: "/images/gallery-3.jpg", title: "Precision Logistics" },
  { src: "/images/gallery-4.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-5.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-6.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-7.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-8.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-9.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-10.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-11.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-12.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-13.jpg", title: "8K Branding Studio" },
  { src: "/images/gallery-14.jpg", title: "8K Branding Studio" },
];

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-play feature: slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-12">
          <h4 className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-2">Visual Motion</h4>
          <h2 className="text-5xl font-black text-white">Operation Highlights</h2>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photos[currentIndex].src}
                alt={photos[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-12 left-12">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-yellow-500 font-mono text-sm uppercase tracking-widest mb-2"
                >
                  Project 0{currentIndex + 1}
                </motion.p>
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-black text-white"
                >
                  {photos[currentIndex].title}
                </motion.h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-yellow-500 hover:text-black text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-yellow-500 hover:text-black text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 right-12 flex gap-2">
            {photos.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-8 bg-yellow-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}