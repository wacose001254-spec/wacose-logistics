"use client";
import { 
  Globe, 
  Share2, 
  MessageSquare, 
  Mail, 
  Phone,
  MapPin
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
              {/* Using Universal Icons to bypass the brand-name error */}
              <a href="#" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all"><Globe size={20} /></a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all"><Share2 size={20} /></a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-center gap-2 italic text-zinc-400"><MapPin size={14}/> Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Mail size={14}/> info@wacose.com</li>
              <li className="flex items-center gap-2 text-white font-bold text-lg"><Phone size={14}/> +254 7XX XXX XXX</li>
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