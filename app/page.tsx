import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery"; // Updated Gallery
import LiveUpdates from "@/components/LiveUpdates";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection"; // New
import Testimonials from "@/components/Testimonials"; // New

// Client Portfolio Component (Keep this outside the Home function)
function ClientPortfolio() {
  const partners = ["Moha Grafix", "Kenya Sweets Ltd", "Bolt Ride/Send", "Uber Ride", "The Cooking Company", "WAN Styling", "Barakatele", "Zucchini", "Peach Cars", "Lifehack Academy", "Airtel Kenya", "KEBS", "Foremen", "Kanchory & Co. Advocates",];
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-10">
          Trusted Regional Partners
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <span key={i} className="text-2xl font-bold text-white tracking-tighter uppercase italic">{p}</span>
          ))}
        </div>
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

      {/* 4. Cinematic 4K Video Spotlight (The 'Vibe' Section) */}
      <VideoSection />

      {/* 5. The 14-Image High-Res Operations Gallery */}
      <Gallery />

      {/* 6. Partner Network Visibility */}
      <ClientPortfolio />

      {/* 7. Client Intelligence (Testimonials) */}
      <Testimonials />

      {/* 8. Conversion Point (Booking) */}
      <section id="book" className="relative py-24 bg-zinc-950 flex flex-col items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-6 uppercase italic">Ready to Ship?</h2>
            <p className="text-zinc-400 text-lg mb-8">
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

      {/* 9. Global Navigation & Socials */}
      <Footer />
    </main>
  );
}