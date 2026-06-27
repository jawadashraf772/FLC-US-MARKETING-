"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-brand-dark pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              {/* White inverted logo */}
              <img 
                src="/logo.png" 
                alt="Faseeh Lall & Co." 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest pt-1">
                YOUR MARKETING DEPARTMENT
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-455 leading-relaxed max-w-sm text-slate-400">
              Building Systems. Delivering Results. Transferring Ownership. Your entire marketing department, delivered in 90 days.
            </p>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#transparency" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  Proof
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations (col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              LOCATIONS
            </h4>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li>Faisal Town · Lahore</li>
              <li>Ferozpur Road · Lahore</li>
              <li>Multan Road · Lahore</li>
            </ul>
          </div>

          {/* Column 4: Connect (col-span-2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              CONNECT
            </h4>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li>
                <a href="tel:+923244898766" className="text-primary hover:text-primary-hover font-black text-lg block transition-colors">
                  +92 324 4898766
                </a>
              </li>
              <li>
                <a href="https://faseehlall.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                  faseehlall.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div>
            &copy; 2026 Faseeh Lall & Co. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
