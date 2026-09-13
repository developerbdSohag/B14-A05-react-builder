import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [activeAuth, setActiveAuth] = useState('signup');

  const baseBtnStyles =
    'w-[74px] sm:w-24 h-7 sm:h-8 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center select-none cursor-pointer transition-all duration-200 ease-out active:scale-90 active:duration-75';

  const activeStyles =
    'bg-[#db2777] text-white shadow-sm hover:bg-[#c02167] active:shadow-inner active:brightness-95';

  const inactiveStyles =
    'text-slate-600 hover:text-slate-900 bg-transparent active:bg-slate-100 active:shadow-inner';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          
          {/* Left: Mobile hamburger / Desktop logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-700 p-1 rounded-md hover:bg-slate-100 active:scale-90 transition-transform focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a href="#" className="hidden lg:flex items-center">
              <img
                src="/logo-text.png"
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center: Mobile logo / Desktop zero-shift links */}
          <div className="flex items-center justify-center">
            <a href="#" className="lg:hidden flex items-center">
              <img
                src="/logo-text.png"
                alt="Dev Stack Logo"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </a>

            <div className="hidden lg:flex items-center gap-8 text-[15px]">
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <button
                    key={link.name}
                    onClick={() => setActiveNav(link.name)}
                    data-text={link.name}
                    className={`inline-flex flex-col items-center justify-center transition-colors duration-150 cursor-pointer bg-transparent border-0 p-0 select-none
                      after:content-[attr(data-text)] after:h-0 after:font-semibold after:invisible after:overflow-hidden
                      ${
                        isActive
                          ? 'text-[#db2777] font-semibold'
                          : 'text-slate-600 font-normal hover:text-slate-900'
                      }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Auth buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveAuth('signin')}
              className={`${baseBtnStyles} ${activeAuth === 'signin' ? activeStyles : inactiveStyles}`}
            >
              Sign In
            </button>

            <button
              onClick={() => setActiveAuth('signup')}
              className={`${baseBtnStyles} ${activeAuth === 'signup' ? activeStyles : inactiveStyles}`}
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pt-3 pb-5 flex flex-col gap-3.5 border-t border-gray-100 bg-white text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <button
                key={link.name}
                onClick={() => {
                  setActiveNav(link.name);
                  setIsOpen(false);
                }}
                className={`py-1 text-left transition-colors bg-transparent border-0 ${
                  isActive
                    ? 'text-[#db2777] font-semibold'
                    : 'text-slate-600 font-normal hover:text-slate-900'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}