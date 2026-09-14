import { Star } from 'lucide-react';

// Tech-specific brand color schemes
const techThemeMap = {
  React: {
    border: 'border-[#00d8ff] ring-1 ring-[#00d8ff]/30 shadow-[#00d8ff]/10',
    bg: 'bg-[#00d8ff]/5',
    btn: 'bg-[#00d8ff]/10 text-[#0284c7] border-[#00d8ff]/30',
  },
  'Vue.js': {
    border: 'border-[#42b883] ring-1 ring-[#42b883]/30 shadow-[#42b883]/10',
    bg: 'bg-[#42b883]/5',
    btn: 'bg-[#42b883]/10 text-[#059669] border-[#42b883]/30',
  },
  Svelte: {
    border: 'border-[#ff3e00] ring-1 ring-[#ff3e00]/30 shadow-[#ff3e00]/10',
    bg: 'bg-[#ff3e00]/5',
    btn: 'bg-[#ff3e00]/10 text-[#ea580c] border-[#ff3e00]/30',
  },
  'Next.js': {
    border: 'border-[#0f172a] ring-1 ring-[#0f172a]/20 shadow-slate-900/10',
    bg: 'bg-slate-100/60',
    btn: 'bg-slate-100 text-[#0f172a] border-slate-300',
  },
  'Node.js': {
    border: 'border-[#539e43] ring-1 ring-[#539e43]/30 shadow-[#539e43]/10',
    bg: 'bg-[#539e43]/5',
    btn: 'bg-[#539e43]/10 text-[#16a34a] border-[#539e43]/30',
  },
  'Express.js': {
    border: 'border-[#475569] ring-1 ring-[#475569]/30 shadow-slate-600/10',
    bg: 'bg-slate-50',
    btn: 'bg-slate-100 text-[#334155] border-slate-300',
  },
  PostgreSQL: {
    border: 'border-[#336791] ring-1 ring-[#336791]/30 shadow-[#336791]/10',
    bg: 'bg-[#336791]/5',
    btn: 'bg-[#336791]/10 text-[#2563eb] border-[#336791]/30',
  },
  MongoDB: {
    border: 'border-[#13aa52] ring-1 ring-[#13aa52]/30 shadow-[#13aa52]/10',
    bg: 'bg-[#13aa52]/5',
    btn: 'bg-[#13aa52]/10 text-[#15803d] border-[#13aa52]/30',
  },
  Redis: {
    border: 'border-[#dc382d] ring-1 ring-[#dc382d]/30 shadow-[#dc382d]/10',
    bg: 'bg-[#dc382d]/5',
    btn: 'bg-[#dc382d]/10 text-[#dc2626] border-[#dc382d]/30',
  },
  Docker: {
    border: 'border-[#2496ed] ring-1 ring-[#2496ed]/30 shadow-[#2496ed]/10',
    bg: 'bg-[#2496ed]/5',
    btn: 'bg-[#2496ed]/10 text-[#0284c7] border-[#2496ed]/30',
  },
  Git: {
    border: 'border-[#f05032] ring-1 ring-[#f05032]/30 shadow-[#f05032]/10',
    bg: 'bg-[#f05032]/5',
    btn: 'bg-[#f05032]/10 text-[#ea580c] border-[#f05032]/30',
  },
  GraphQL: {
    border: 'border-[#e10098] ring-1 ring-[#e10098]/30 shadow-[#e10098]/10',
    bg: 'bg-[#e10098]/5',
    btn: 'bg-[#e10098]/10 text-[#db2777] border-[#e10098]/30',
  },
};

const defaultTheme = {
  border: 'border-[#db2777] ring-1 ring-[#db2777]/30 shadow-pink-500/10',
  bg: 'bg-[#fdf2f8]/40',
  btn: 'bg-[#fce7f3]/60 text-[#db2777] border-[#fbcfe8]',
};

const badgeColorMap = {
  Popular: 'bg-sky-50 text-sky-600 border-sky-200',
  Versatile: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Fast: 'bg-orange-50 text-orange-600 border-orange-200',
  'SSR / Edge': 'bg-purple-50 text-purple-600 border-purple-200',
  Fullstack: 'bg-pink-50 text-pink-600 border-pink-200',
  Standard: 'bg-green-50 text-green-600 border-green-200',
  Minimal: 'bg-slate-50 text-slate-600 border-slate-200',
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
  const theme = techThemeMap[tech.name] || defaultTheme;

  return (
    <div
      className={`group rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300 ease-out cursor-default ${
        isAdded
          ? `${theme.bg} ${theme.border} shadow-sm`
          : 'bg-white border-slate-200/80 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain drop-shadow-xs" />
          </div>

          <span className={`text-xs px-3 py-0.5 rounded-full font-medium border tracking-wide select-none ${badgeStyle}`}>
            {tech.badge}
          </span>
        </div>

        <h3 className="text-[17px] font-bold text-slate-900 mt-4 tracking-tight">{tech.name}</h3>
        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed line-clamp-3 select-none">{tech.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-3.5 border-b border-slate-100 select-none">
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
              ? `${theme.btn} border cursor-not-allowed`
              : 'bg-[#0b0f19] hover:bg-slate-800 text-white shadow-xs cursor-pointer active:scale-95'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}