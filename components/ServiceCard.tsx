"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

interface ServiceProps {
  title: string;
  shortDesc: string;
  details: string;
  bullets: string[];
}

export default function ServiceCard({ title, shortDesc, details, bullets }: ServiceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="group relative p-8 bg-zinc-900 border border-white/5 rounded-3xl cursor-pointer transition-all duration-500 hover:border-yellow-500/50"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-yellow-500 transition-colors">{title}</h3>
          <p className="text-zinc-500 mt-2">{shortDesc}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-zinc-500 group-hover:text-yellow-500"
        >
          <ChevronDown />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
              <p className="text-zinc-400 leading-relaxed">
                {details}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-yellow-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}