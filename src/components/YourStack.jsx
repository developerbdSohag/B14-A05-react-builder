import { X, Trash2 } from 'lucide-react';

export default function YourStack({ stack, onRemove, onClearAll }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-3 mb-4">
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-500 font-medium">{stack.length} Technology Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="py-12 text-center text-gray-400 text-sm">
          <p>No technologies added yet.</p>
          <p className="text-xs mt-1 text-gray-300">Click &quot;Add to Stack&quot; on any card.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-none">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id, item.name)}
                className="text-gray-400 hover:text-red-500 transition p-1"
                aria-label={`Remove ${item.name}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}

          <button
            onClick={onClearAll}
            className="mt-4 w-full py-2 border border-red-200 text-red-500 text-xs font-semibold rounded-xl hover:bg-red-50 flex items-center justify-center gap-1.5 transition"
          >
            <Trash2 size={14} /> Remove All
          </button>
        </div>
      )}
    </div>
  );
}