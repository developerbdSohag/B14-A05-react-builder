import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies JSON");
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemove = (id, name) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack`);
  };

  const handleClearAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("Cleared all items from your stack");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-6 py-8 grow w-full scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0f172a]">
              Explore the <span className="text-[#db2777]">Technologies</span>
            </h2>
            <p className="text-[#64748b] text-[15px] mt-1.5 font-normal">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-pink-500"></div>
            <p className="text-xs text-gray-400 font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1 sticky top-24">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} />
    </div>
  );
}