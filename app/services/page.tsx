import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard'; // Use the glowing card we built earlier

export default function ServicesPage() {
  const services = [
    { title: "Express Courier", desc: "Door-to-door delivery across Nairobi within 60 minutes." },
    { title: "Regional Logistics", desc: "Coordinated transport across the East African region." },
    { title: "Visual Design", desc: "Corporate branding, 8K photography, and cinematic video." },
    { title: "Web Development", desc: "Modern, fast, and responsive web platforms for business." }
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-6xl font-black text-white mb-12 text-center">Our <span className="text-yellow-500">Expertise.</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => <ServiceCard key={i} title={s.title} description={s.desc} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}