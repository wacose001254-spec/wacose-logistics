"use client";
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', pickup: '', dropoff: '' });

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "+254XXXXXXXXX"; // Your WhatsApp Number
    const message = `Hello WACOSE! I'd like to book a delivery.\nName: ${formData.name}\nFrom: ${formData.pickup}\nTo: ${formData.dropoff}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-white">
      <h3 className="text-2xl font-bold mb-6">Instant Booking</h3>
      <form onSubmit={sendToWhatsApp} className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full bg-zinc-800 p-4 rounded-xl border border-transparent focus:border-yellow-500 outline-none transition-all"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input 
          type="text" 
          placeholder="Pickup Location" 
          className="w-full bg-zinc-800 p-4 rounded-xl border border-transparent focus:border-yellow-500 outline-none transition-all"
          onChange={(e) => setFormData({...formData, pickup: e.target.value})}
          required
        />
        <input 
          type="text" 
          placeholder="Destination" 
          className="w-full bg-zinc-800 p-4 rounded-xl border border-transparent focus:border-yellow-500 outline-none transition-all"
          onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
          required
        />
        <button type="submit" className="w-full bg-green-500 py-4 rounded-xl font-bold text-black hover:bg-green-400 transition-colors">
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}