import {MapPin} from 'lucide-react';

export default function MyCard({ title, location, image }) {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="space-y-1">
          <h2 className="text-white text-xl md:text-3xl font-medium tracking-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-xs md:text-base flex items-center gap-1.5 opacity-80">
            <MapPin size={16}  /> {location}
          </p>
        </div>

        <button className="px-5 py-2.5 border border-white/30 text-white text-sm font-medium rounded-xl bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
          Enquire
        </button>
      </div>
    </div>
  );
}