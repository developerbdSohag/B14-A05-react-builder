export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-20 pt-12 pb-8 px-6 sm:px-8 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
        
        {/* Brand Column with Logo Image */}
        <div className="md:col-span-2 flex flex-col items-start">
          <a href="#" className="flex items-center mb-3">
            <img 
              src="/logo-text.png" 
              alt="Dev Stack" 
              className="h-7 w-auto object-contain"
            />
          </a>
          
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for modern developers building scalable software.
          </p>

          <div className="flex gap-4 mt-5 text-xs sm:text-sm font-medium text-slate-700">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div>
          <h4 className="font-bold text-slate-900 mb-3.5 text-xs uppercase tracking-wider">Product</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
            <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
            <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-3.5 text-xs uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-3.5 text-xs uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}