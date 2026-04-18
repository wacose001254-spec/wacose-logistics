export default function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="group relative p-8 bg-zinc-950 rounded-2xl overflow-hidden transition-all duration-500">
      {/* The Animated Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-2xl transition-all duration-500 z-10" />
      
      {/* The Radial Highlight Follow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(234,179,8,0.15)_0%,_transparent_50%)]" />

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 group-hover:w-full transition-all duration-700" />
    </div>
  );
}