"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

export default function VideoSlider() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
      
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
        );
        const data = await res.json();
        
        if (data.items) {
          const fetchedVideos = data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
          }));
          setVideos(fetchedVideos.sort(() => Math.random() - 0.5));
        }
        setLoading(false);
      } catch (error) {
        console.error("YouTube Fetch Error:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const nextVideo = () => {
    if (videos.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    if (videos.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  if (loading) return (
    <div className="h-[400px] flex items-center justify-center bg-black">
      <div className="text-yellow-500 font-mono text-sm animate-pulse tracking-[0.3em] uppercase">
        Establishing Link to WACOSE TV...
      </div>
    </div>
  );

  if (videos.length === 0) return null;

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-2 text-sm">Media Feed</h4>
            <h2 className="text-5xl font-black text-white italic uppercase">The Shuffle</h2>
          </div>
          <button 
            onClick={() => setVideos([...videos].sort(() => Math.random() - 0.5))}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-yellow-500 hover:border-yellow-500 transition-all group"
          >
            <Shuffle size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Reshuffle Feed</span>
          </button>
        </div>

        <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={videos[currentIndex].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img src={videos[currentIndex].thumbnail} alt="" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <motion.a 
                  href={`https://youtube.com/watch?v=${videos[currentIndex].id}`}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black mb-8 shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] transition-all"
                >
                  <Play size={32} fill="currentColor" />
                </motion.a>
                <h3 className="text-2xl md:text-4xl font-black text-white max-w-3xl leading-tight uppercase italic">
                  {videos[currentIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prevVideo} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 hover:bg-yellow-500 text-white rounded-full transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={nextVideo} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/40 hover:bg-yellow-500 text-white rounded-full transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}