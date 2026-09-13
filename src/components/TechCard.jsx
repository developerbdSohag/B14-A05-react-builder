import { Star } from 'lucide-react';

const badgeColorMap = {
  Popular: 'bg-sky-50 text-sky-600 border-sky-200',
  Versatile: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Fast: 'bg-orange-50 text-orange-600 border-orange-200',
  'SSR / Edge': 'bg-purple-50 text-purple-600 border-purple-200',
  Fullstack: 'bg-pink-50 text-pink-600 border-pink-200',
  Standard: 'bg-green-50 text-green-600 border-green-200',
  Minimal: 'bg-rose-50 text-rose-600 border-rose-200',
  'Top SQL': 'bg-blue-50 text-blue-600 border-blue-200',
  Cache: 'bg-rose-50 text-rose-600 border-rose-200',
  Ubiquitous: 'bg-amber-50 text-amber-700 border-amber-200',
  Essential: 'bg-sky-50 text-sky-700 border-sky-300',
  Robust: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Modern: 'bg-teal-50 text-teal-600 border-teal-200',
  Containers: 'bg-blue-50 text-blue-500 border-blue-200',
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeStyle = badgeColorMap[tech.badge] || 'bg-slate-50 text-slate-600 border-slate-200';

  return (
    <div
      className={`group rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300 ease-out ${
        isAdded
          ? 'bg-[#fff5f7]/60 border-[#f43f5e]/40 cursor-not-allowed'
          : 'bg-white border-slate-200/80 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md cursor-pointer'
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain drop-shadow-xs" />
          </div>

          <span className={`text-xs px-3 py-0.5 rounded-full font-medium border tracking-wide ${badgeStyle}`}>
            {tech.badge}
          </span>
        </div>

        <h3 className="text-[17px] font-bold text-slate-900 mt-4 tracking-tight">{tech.name}</h3>
        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed line-clamp-3">{tech.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-3.5 border-b border-slate-100">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">{tech.category}</span>
          <span className="font-normal text-slate-500">{tech.difficulty}</span>

          <span className="flex items-center gap-1 font-semibold text-slate-900">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            <span>{tech.rating}</span>
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full mt-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-[#fce7f3]/60 text-[#db2777] border border-[#fbcfe8] cursor-not-allowed'
              : 'bg-[#0b0f19] hover:bg-slate-800 text-white shadow-xs cursor-pointer active:scale-95'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}