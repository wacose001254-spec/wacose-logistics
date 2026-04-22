"use client";
import { motion } from "framer-motion";

export default function VideoSection() {
  // Your YouTube Video ID
  const videoId = "XSbgoLH5oc8"; 

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,179,8,0.1)]">
          
          {/* YouTube Embed replacing the local large file */}
          <iframe
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-125"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center z-10"
            >
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter italic uppercase">8K CINEMATIC</h2>
              <p className="text-yellow-500 font-mono tracking-widest uppercase mt-4 underline decoration-2 underline-offset-8">
                Experience the Grit of Nairobi
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}