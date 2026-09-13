import { Star } from 'lucide-react';

// Color map matching the assignment UI badges exactly
const badgeColorMap = {
  Popular: 'bg-sky-50 text-sky-600 border-sky-200',
  Versatile: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Fast: 'bg-orange-50 text-orange-600 border-orange-200',
  'SSR / Edge': 'bg-purple-50 text-purple-600 border-purple-200',
  Standard: 'bg-green-50 text-green-600 border-green-200',
  'Top SQL': 'bg-blue-50 text-blue-600 border-blue-200',
  Cache: 'bg-rose-50 text-rose-600 border-rose-200',
  Ubiquitous: 'bg-amber-50 text-amber-700 border-amber-200',
  Essential: 'bg-sky-50 text-sky-700 border-sky-300',
  Robust: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Modern: 'bg-teal-50 text-teal-600 border-teal-200',
  Containers: 'bg-blue-50 text-blue-500 border-blue-200',
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeStyle =
    badgeColorMap[tech.badge] || 'bg-slate-50 text-slate-600 border-slate-200';

  return (
    <div
      className="group bg-white rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between
                 transition-all duration-300 ease-out cursor-pointer
                 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(219,39,119,0.15)]
                 hover:border-[#db2777]/50 active:translate-y-0"
    >
      <div>
        {/* Top Row: Tech Logo + Custom Color Badge */}
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-9 h-9 object-contain drop-shadow-xs"
            />
          </div>

          <span
            className={`text-xs px-3 py-0.5 rounded-full font-medium border tracking-wide transition-colors ${badgeStyle}`}
          >
            {tech.badge}
          </span>
        </div>

        {/* Tech Title & Description */}
        <h3 className="text-[17px] font-bold text-slate-900 mt-4 tracking-tight">
          {tech.name}
        </h3>
        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      {/* Card Footer Info */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-3.5 border-b border-slate-100">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">
            {tech.category}
          </span>
          <span className="font-normal text-slate-500">{tech.difficulty}</span>

          {/* Star Gold + Rating Point Black */}
          <span className="flex items-center gap-1 font-semibold text-slate-900">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            <span>{tech.rating}</span>
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full mt-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
            isAdded
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-[#0b0f19] hover:bg-slate-800 text-white shadow-xs active:scale-95'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}