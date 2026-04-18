"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { id: 1, type: 'image', src: '/images/gallery-1.jpg', title: 'Urban Speed', size: 'col-span-2' },
  { id: 2, type: 'video', src: '/videos/delivery-loop.mp4', title: 'Reliability', size: 'col-span-1' },
  { id: 3, type: 'image', src: '/images/gallery-2.jpg', title: 'Global Reach', size: 'col-span-1' },
  { id: 4, type: 'image', src: '/images/gallery-3.jpg', title: 'Precision Logistics', size: 'col-span-2' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Visual Excellence</h4>
          <h2 className="text-5xl font-black text-white">4K Operations Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer border border-white/5 ${item.size} h-[400px]`}
            >
              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/40 rounded-3xl z-20 transition-all duration-500" />

              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-yellow-500 font-bold uppercase tracking-tighter mb-1">WACOSE | Studio</p>
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}