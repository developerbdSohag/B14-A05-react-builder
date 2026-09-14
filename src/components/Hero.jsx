import { useState } from 'react';

export default function Hero() {
  const [activeBtn, setActiveBtn] = useState('explore');

  const scrollToTechnologies = (e) => {
    e.preventDefault();
    setActiveBtn('explore');
    const element = document.getElementById('technologies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryStyles =
    'text-white bg-linear-to-r from-[#f95724] to-[#e62e7b] shadow-md shadow-pink-500/20 hover:opacity-95 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 cursor-pointer';

  const secondaryStyles =
    'text-[#475569] bg-white border border-[#e2e8f0] shadow-xs hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer';

  return (
    <section id="home" className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-[-0.03em] leading-[1.08] text-[#0f172a]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#f95724] via-[#e62e7b] to-[#8629e8] bg-clip-text text-transparent inline-block mt-1">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-[#475569] text-base sm:text-[17px] font-normal leading-[1.65] max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#technologies"
              onClick={scrollToTechnologies}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ease-out select-none active:scale-95 flex items-center justify-center ${
                activeBtn === 'explore' ? primaryStyles : secondaryStyles
              }`}
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              onClick={() => setActiveBtn('learn')}
              className={`px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ease-out select-none active:scale-95 flex items-center justify-center ${
                activeBtn === 'learn' ? primaryStyles : secondaryStyles
              }`}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/banner-stack.png"
            alt="Development Stack Illustration"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}