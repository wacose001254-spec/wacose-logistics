"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side: 4K Portrait or Action Shot */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image 
                src="/images/founder-portrait.jpg" // Place your high-res photo here
                alt="Denis Wasike - Founder of WACOSE"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Tag */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-xl shadow-2xl">
              <p className="text-black font-black text-4xl">3+</p>
              <p className="text-black text-xs uppercase font-bold tracking-widest">Years on the Road</p>
            </div>
          </motion.div>

          {/* Text Side: The Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-yellow-500 font-bold tracking-[0.2em] uppercase mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              From the Handlebars <br />
              <span className="text-zinc-500">to the Boardroom.</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                WACOSE wasn’t born in an office; it was born on the bustling streets of Nairobi. 
                For three years, I navigated the city as a Boda Boda rider, delivering more than 
                just packages—I delivered promises.
              </p>
              <p>
                I saw the gaps in the industry: the lack of real-time trust, the need for 
                professional handling, and the potential for a truly regional Kenyan logistics 
                giant. I decided to build what was missing.
              </p>
              <p className="text-white italic font-medium border-l-4 border-yellow-500 pl-4">
                "We don't just move goods; we move the economy of Kenya, one professional 
                delivery at a time."
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-white font-bold text-xl">Denis Wasike Musamali</p>
                <p className="text-yellow-500 text-sm tracking-widest uppercase">Founder & Lead Logistics Strategist</p>
              </div>
              {/* Optional: Digital Signature placeholder */}
              <div className="h-px flex-grow bg-zinc-800 ml-4"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}