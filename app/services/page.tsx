"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const serviceData = [
  {
    title: "Express Courier",
    shortDesc: "Nairobi's fastest door-to-door delivery.",
    details: "Built on three years of Boda Boda street experience, our express service bypasses Nairobi's gridlock. We treat every package with the urgency of a first-responder mission.",
    bullets: ["60-Min CBD Delivery", "Real-time SMS Alerts", "Fragile Item Handling", "Document Legal Couriers"]
  },
  {
    title: "Regional Logistics",
    shortDesc: "Connecting Kenya to the East African Region.",
    details: "Scaling your business beyond borders. We manage the complexity of cross-county and cross-border transport so you can focus on your core business growth.",
    bullets: ["Nairobi-Kisumu Daily", "Cross-Border Clearance", "Bulk Cargo Solutions", "Warehouse Integration"]
  },
  {
    title: "Visual Design",
    shortDesc: "8K Cinematic Content & Brand Identity.",
    details: "WACOSE isn't just about moving goods; it's about moving brands. We provide high-end photography and video production that gives your business a world-class look.",
    bullets: ["8K Editorial Shoots", "Drone Cinematography", "Corporate Re-branding", "Social Media Kits"]
  },
  {
    title: "Web Development",
    shortDesc: "Modern Tech for Logistics & Enterprise.",
    details: "We build digital terminals that convert. From tracking systems to full-stack business platforms, we use Next.js and Tailwind to ensure your speed is reflected online.",
    bullets: ["Responsive Next.js Sites", "Tracking API Integration", "SEO Optimization", "GitHub Deployment"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h4 className="text-yellow-500 font-bold tracking-widest uppercase mb-4">Our Expertise</h4>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            World-Class <br />
            <span className="text-zinc-600">Logistics & Design.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              shortDesc={service.shortDesc}
              details={service.details}
              bullets={service.bullets}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}