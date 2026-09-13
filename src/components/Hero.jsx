export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Heading, Subtitle & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-[-0.03em] leading-[1.08] text-[#0f172a]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#f95724] via-[#e62e7b] to-[#8629e8] bg-clip-text text-transparent inline-block mt-1">
              Development Stack
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[#475569] text-base sm:text-[17px] font-normal leading-[1.65] max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-linear-to-r from-[#f95724] to-[#e62e7b] hover:opacity-95 transition-all shadow-sm">
              Explore Technologies
            </button>
            <button className="px-7 py-3 rounded-xl font-medium text-sm text-[#475569] bg-white border border-[#e2e8f0] hover:bg-slate-50 transition-colors shadow-2xs">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Column: Isometric 3D Banner Stack Image */}
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