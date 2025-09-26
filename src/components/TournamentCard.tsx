import Image from "next/image";

interface TournamentCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function TournamentCard({ title, description, imageUrl }: TournamentCardProps) {
  return (
    <article className="bg-black/55 backdrop-blur-[2px] border border-white/10 shadow-card rounded-3xl overflow-hidden min-h-[180px] transition-all duration-300 hover:translate-y-[-2px] hover:ring-1 hover:ring-white/15 group">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-3xl md:rounded-none">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>
        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase text-center mb-4 relative">
            {title}
            <span className="block w-3/5 h-px bg-white/20 mx-auto mt-2 relative after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-2/3 after:h-px after:bg-white/40"></span>
          </h2>
          <p className="text-white/85 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
}