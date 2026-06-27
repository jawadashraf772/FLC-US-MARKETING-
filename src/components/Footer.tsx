"use client";

export default function Footer() {
  const industries = [
    "Manufacturing", "Healthcare", "Finance", "Fintech", 
    "Construction", "Agencies", "Consulting", "Information technology", 
    "Logistics", "Telecom"
  ];

  const services = [
    "Demand generation", "Lead nurturing", "Lead gen training",
    "Sales development", "Sales enablement", "ROI calculator"
  ];

  const company = [
    { name: "About us", href: "#differentiators" },
    { name: "Awards", href: "#testimonials" },
    { name: "Reviews & testimonials", href: "#testimonials" },
    { name: "Careers", href: "#" }
  ];

  return (
    <footer className="border-t border-slate-900 bg-brand-dark pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <img src="/logo.png" alt="Faseeh Lall & Co." className="h-9 w-auto object-contain brightness-0 invert" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest pt-1">
              #1 B2B LEAD GENERATION AGENCY
            </p>
            <p className="text-xs font-semibold text-slate-400 leading-relaxed max-w-xs">
              Double your sales pipeline value. We deliver 100–400+ qualified appointments in a year through tailored omnichannel strategies.
            </p>
          </div>

          {/* Column 2: Industries */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              INDUSTRIES
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-400">
              {industries.slice(0, 6).map((item, idx) => (
                <li key={idx}>
                  <a href="#challenges" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Other Services */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-400">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-400">
              {company.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              CONNECT
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-400">
              <li>
                <a href="mailto:sales@belkins.io" className="text-primary hover:text-primary-hover font-black text-sm block transition-colors">
                  sales@belkins.io
                </a>
              </li>
              <li>
                <a href="tel:+13028035506" className="hover:text-white transition-colors block text-xs">
                  +1 302-803-5506
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
          <div>
            &copy; 2026 Belkins Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
