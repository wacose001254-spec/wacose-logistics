"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { 
    name: "Moha Grafix", 
    role: "Brand Partner", 
    text: "Denis brings a level of precision to logistics that is rare. When we need materials moved across the city for a high-end project, WACOSE is our first call." 
  },
  { 
    name: "Sarah Wangari", 
    role: "Zucchini Logistics Dept", 
    text: "The efficiency in Nairobi streets is unmatched. WACOSE handles our fragile deliveries with the care of a boutique service but the speed of an express courier." 
  },
  { 
    name: "John Maina", 
    role: "The Cooking Company", 
    text: "In the food industry, timing is everything. Wasike's team ensures our supplies arrive fresh and on time, every single day." 
  },
  { 
    name: "Airtel Kenya Rep", 
    role: "Corporate Client", 
    text: "Professional, tech-forward, and reliable. The digital tracking and professional dispatch make WACOSE a world-class logistics partner." 
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Slower timing to allow reading
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-2 text-sm">Client Intelligence</h4>
          <h2 className="text-5xl font-black text-white italic uppercase">Trust & Results</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-10 md:p-16 bg-zinc-900/40 border border-white/10 rounded-[3rem] backdrop-blur-xl text-center"
            >
              <div className="flex justify-center mb-8">
                <Quote className="text-yellow-500 opacity-50" size={48} />
              </div>
              
              <p className="text-2xl md:text-3xl text-zinc-200 italic mb-10 leading-relaxed font-medium">
                "{reviews[currentIndex].text}"
              </p>
              
              <div>
                <h4 className="text-white text-xl font-bold">{reviews[currentIndex].name}</h4>
                <p className="text-yellow-500 text-sm font-mono uppercase tracking-widest mt-1">
                  {reviews[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-zinc-500 hover:text-yellow-500 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-zinc-500 hover:text-yellow-500 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === idx ? 'w-10 bg-yellow-500' : 'w-2 bg-zinc-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}