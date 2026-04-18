"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  { name: "John Maina", role: "E-commerce Founder", text: "WACOSE is the only courier that understands the urgency of Nairobi business. Speed is their DNA." },
  { name: "Sarah Wangari", role: "Creative Director", text: "The visual design Denis provided for our brand was world-class. A true logistics and creative powerhouse." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-4xl font-black text-white mb-16 uppercase italic">Client <span className="text-yellow-500">Intelligence</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-zinc-900/50 border border-white/10 rounded-3xl backdrop-blur-xl"
            >
              <Quote className="text-yellow-500 mb-6" size={40} />
              <p className="text-xl text-zinc-300 italic mb-8 italic">"{rev.text}"</p>
              <div>
                <h4 className="text-white font-bold">{rev.name}</h4>
                <p className="text-yellow-500 text-sm font-mono uppercase tracking-widest">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}