import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import LiveUpdates from "@/components/LiveUpdates";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

// 1. Define the ClientPortfolio component OUTSIDE of the Home function
function ClientPortfolio() {
  const partners = ["Moha Grafix", "Kenya Sweets LTD", "Bolt Rides/Send", "WAN Styling", "Uber Rides", "Swift Deliveries", "Urban Logistics", "CityLink Couriers"];
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-10">
          Trusted Regional Partners
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <span key={i} className="text-2xl font-bold text-white tracking-tighter">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. The main Home Page module
export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. The Journey (About Us) - Add id="about" for the handshake link */}
      <section id="about">
        <About />
      </section>

      {/* 3. Real-Time Operations Terminal */}
      <LiveUpdates />

      {/* 4. 4K Visual Gallery */}
      <Gallery />

      {/* 5. Client Portfolio (Moved here for better brand flow) */}
      <ClientPortfolio />

      {/* 6. Conversion Section (Booking) - Add id="book" for the handshake link */}
      <section id="book" className="relative py-24 bg-zinc-950 flex flex-col items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-6">Ready to Ship?</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Experience the speed and reliability that only three years of 
              Nairobi street expertise can provide. Link directly to our 
              dispatch team via WhatsApp.
            </p>
          </div>
          <div className="w-full max-w-xl">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 7. Footer & Social Integration */}
      <Footer />
    </main>
  );
}