"use client";
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    pickup: '', 
    dropoff: '',
    description: '' // New Field
  });

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "254759162363"; // Replace with YOUR actual number (no + sign)
    const message = `*WACOSE Booking Request*\n\n` +
                    `*Client:* ${formData.name}\n` +
                    `*From:* ${formData.pickup}\n` +
                    `*To:* ${formData.dropoff}\n` +
                    `*Job Details:* ${formData.description}`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div id="book" className="p-8 bg-zinc-900 border border-white/10 rounded-3xl text-white shadow-2xl">
      <h3 className="text-2xl font-bold mb-6">Instant Booking</h3>
      <form onSubmit={sendToWhatsApp} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" placeholder="Your Name" 
            className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-yellow-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input 
            type="text" placeholder="Pickup Location" 
            className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-yellow-500 outline-none"
            onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            required
          />
        </div>
        <input 
          type="text" placeholder="Destination" 
          className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-yellow-500 outline-none"
          onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
          required
        />
        {/* Job Description Input Box */}
        <textarea 
          placeholder="Job Description (e.g. 5kg package, fragile electronics...)" 
          rows={3}
          className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-yellow-500 outline-none"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        ></textarea>

        <button type="submit" className="w-full bg-green-600 py-4 rounded-xl font-bold text-white hover:bg-green-500 transition-all flex justify-center items-center gap-2">
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}