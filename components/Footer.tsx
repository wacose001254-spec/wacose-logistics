"use client";
import Link from 'next/link';
// We import the generic icons that are guaranteed to exist
import { 
  Mail, 
  Phone,
  MapPin,
  Globe,
  Layout,
  PlayCircle, // Stand-in for YouTube
  Camera,     // Stand-in for Instagram
  Music       // Stand-in for TikTok
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6">WACOSE<span className="text-yellow-500">.</span></h3>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Wasike Courier Services. Building the future of regional logistics 
              through speed, trust, and world-class technology.
            </p>
            <div className="flex gap-4">
              {/* Using high-end universal icons to ensure the build passes */}
              <a href="https://instagram.com/wasikephotography" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all">
                <Camera size={20} />
              </a>
              <a href="https://youtube.com/@WACOSE254" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all">
                <PlayCircle size={20} />
              </a>
              <a href="https://tiktok.com/@wacosedelivery" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all">
                <Music size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/tracking" className="hover:text-white transition-colors">Track Shipment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-center gap-2 italic text-zinc-400"><MapPin size={14}/> Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Mail size={14}/> info@wacose.com</li>
              <li className="flex items-center gap-2 text-white font-bold text-lg">
                <Phone size={14}/> +254 759 162 363
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">© 2026 WACOSE. All rights reserved.</p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Designed by Wasike Design Co.</p>
        </div>
      </div>
    </footer>
  );
}