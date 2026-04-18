import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import LiveUpdates from "@/components/LiveUpdates";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. The Journey (About Us) */}
      <About />

      {/* 3. Real-Time Operations Terminal */}
      <LiveUpdates />

      {/* 4. 4K Visual Gallery */}
      <Gallery />

      {/* 5. Conversion Section (Booking) */}
      <section className="relative py-24 bg-zinc-950 flex flex-col items-center">
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

      {/* 6. Footer & Social Integration */}
      <Footer />
    </main>
  );
}