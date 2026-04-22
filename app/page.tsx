"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GallerySlider from "@/components/GallerySlider"; 
import LiveUpdates from "@/components/LiveUpdates";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection"; 
import VideoSlider from "@/components/VideoSlider"; 
import Testimonials from "@/components/Testimonials";

// 1. Moving Marquee Partner Slider
function ClientPortfolio() {
  const partners = [
    "Moha Grafix", "Kenya Sweets Ltd", "Bolt Ride/Send", "Uber Ride", 
    "The Cooking Company", "WAN Styling", "Barakatele", "Zucchini", 
    "Peach Cars", "Lifehack Academy", "Airtel Kenya", "KEBS", 
    "Foremen", "Kanchory & Co. Advocates"
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-zinc-600 font-mono text-xs uppercase tracking-[0.5em]">
          Trusted Regional Partners
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((p, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black text-zinc-700 hover:text-yellow-500 transition-colors cursor-default uppercase italic tracking-tighter"
            >
              {p}
            </span>
          ))}
        </motion.div>
        
        {/* Cinema Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* 1. Hero & Branding Intro */}
      <Hero />

      {/* 2. The Founder's Story */}
      <section id="about">
        <About />
      </section>

      {/* 3. Real-Time Status Feed */}
      <LiveUpdates />

      {/* 4. Cinematic 4K Video Spotlight (YouTube Embed) */}
      <VideoSection />

      {/* 5. YouTube Shuffle Media Feed */}
      <VideoSlider />

      {/* 6. The 14-Image Animated Operations Gallery */}
      <GallerySlider />

      {/* 7. Infinite Scrolling Partner Marquee */}
      <ClientPortfolio />

      {/* 8. Client Intelligence (Testimonials Slider) */}
      <Testimonials />

      {/* 9. Conversion Point (Booking) */}
      <section id="book" className="relative py-24 bg-zinc-950 flex flex-col items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h2 className="text-5xl font-black mb-6 uppercase italic">Ready to Ship?</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Experience the speed and reliability that only three years of 
              Nairobi street expertise can provide. Direct link to our 
              professional dispatch team.
            </p>
          </div>
          <div className="w-full max-w-xl">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 10. Global Navigation & Socials */}
      <Footer />
    </main>
  );
}