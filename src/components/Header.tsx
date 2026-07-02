"use client";

import { useState, useEffect } from "react";
import { 
  Menu, X, ChevronRight, ChevronDown, Calendar, AtSign, 
  PhoneCall, Users, UserSearch, UserCheck, ShieldCheck, 
  Target, Globe, Layers, Building2, Rocket, ArrowUpRight,
  User, Trophy, MessageSquare, Briefcase, Headphones, Megaphone,
  PenTool, Mic, BookOpen, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  const navItems = [
    { name: "Services & solutions", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Case studies", href: "#" },
    { name: "About", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  useEffect(() => {
    const sectionIds = ["services", "challenges", "case-studies", "differentiators", "testimonials"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollFallback = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollFallback);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo (Faseeh Lall & Co.) */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Faseeh Lall & Co." className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const itemKey = item.href.replace("#", "");
            const isActive = activeSection === itemKey;
            const isServices = item.name === "Services & solutions";
            const isAbout = item.name === "About";
            const isDropdown = isServices || isAbout;

            return (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className={`relative flex items-center gap-1 text-[13px] font-black tracking-normal transition-all duration-300 py-6 ${
                    isActive || isDropdown // Or keep it simple
                      ? "text-primary" 
                      : "text-slate-600 hover:text-primary"
                  } ${isDropdown ? "group-hover:text-primary" : ""}`}
                >
                  {item.name}
                  {isDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-colors group-hover:rotate-180" />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </a>

                {/* Services Mega Menu Dropdown */}
                {isServices && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-[40%] w-[900px] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                      
                      {/* Top Section */}
                      <div className="p-8">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">
                          Lead Generation
                        </span>
                        <div className="grid grid-cols-3 gap-4">
                          {/* Card 1 */}
                          <a href="/appointment-setting" className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group/card">
                            <div className="text-primary mt-0.5 group-hover/card:scale-110 transition-transform">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-800">Appointment setting</h4>
                              <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">Secure meetings with decision-makers and build stable pipeline</p>
                            </div>
                          </a>
                          {/* Card 2 */}
                          <a href="/cold-email-services" className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group/card">
                            <div className="text-primary mt-0.5 group-hover/card:scale-110 transition-transform">
                              <AtSign className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-800">Cold email outreach</h4>
                              <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">Run email campaigns that break through the noise and book calls</p>
                            </div>
                          </a>
                          {/* Card 3 */}
                          <a href="/cold-calling-services" className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group/card">
                            <div className="text-primary mt-0.5 group-hover/card:scale-110 transition-transform">
                              <PhoneCall className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-800">Cold calling</h4>
                              <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">Book 30% more appointments through direct phone outreach</p>
                            </div>
                          </a>
                          {/* Card 4 */}
                          <a href="/linkedin-lead-generation-services" className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group/card">
                            <div className="text-primary mt-0.5 group-hover/card:scale-110 transition-transform">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-800">LinkedIn lead generation</h4>
                              <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">Expand your reach and engage prospects directly on LinkedIn</p>
                            </div>
                          </a>
                          {/* Card 5 */}
                          <a href="/lead-research" className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group/card">
                            <div className="text-primary mt-0.5 group-hover/card:scale-110 transition-transform">
                              <UserSearch className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-black text-slate-900 group-hover/card:text-primary transition-colors flex items-center gap-2">
                                Lead research
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all" />
                              </div>
                              <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-relaxed">Get hand-picked and verified lists of sales-ready prospects</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="bg-slate-50/80 border-t border-slate-100 grid grid-cols-3">
                        <div className="p-8 border-r border-slate-100">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">
                            Other Services
                          </span>
                          <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><UserCheck className="h-4 w-4 text-primary" /> Account-based marketing</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><ShieldCheck className="h-4 w-4 text-primary" /> Deliverability consulting</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Target className="h-4 w-4 text-primary" /> HubSpot CRM consultancy</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Globe className="h-4 w-4 text-primary" /> Outsourced SDR</a></li>
                          </ul>
                        </div>
                        
                        <div className="p-8">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">
                            By Company Size
                          </span>
                          <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Layers className="h-4 w-4 text-primary" /> Enterprise</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Building2 className="h-4 w-4 text-primary" /> SMB</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Rocket className="h-4 w-4 text-primary" /> Startup</a></li>
                          </ul>
                        </div>
                        
                        <div className="p-8 bg-white/50 relative overflow-hidden group/approach cursor-pointer border-l border-slate-100">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/approach:opacity-100 transition-opacity" />
                          <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                              <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover/approach:text-primary transition-colors">Our approach</h3>
                              <p className="text-[12px] font-semibold text-slate-500 mt-2 leading-relaxed">
                                Find out about Faseeh Lall & Co.'s lead generation process that sets us apart
                              </p>
                            </div>
                            <div className="self-end text-primary group-hover/approach:translate-x-1 group-hover/approach:-translate-y-1 transition-transform">
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
                
                {/* About Mega Menu Dropdown */}
                {isAbout && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-[40%] w-[500px] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                      <div className="grid grid-cols-2">
                        {/* Company Column */}
                        <div className="p-8 border-r border-slate-100">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">
                            COMPANY
                          </span>
                          <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><User className="h-4 w-4 text-primary" /> About us</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Trophy className="h-4 w-4 text-primary" /> Awards</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><MessageSquare className="h-4 w-4 text-primary" /> Reviews & testimonials</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Briefcase className="h-4 w-4 text-primary" /> Careers <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] ml-1">5</span></a></li>
                          </ul>
                        </div>
                        {/* Learn Column */}
                        <div className="p-8">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">
                            LEARN
                          </span>
                          <ul className="space-y-4">
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Headphones className="h-4 w-4 text-primary" /> Faseeh Lall Podcast</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Megaphone className="h-4 w-4 text-primary" /> The Marketing Speakeasy</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><PenTool className="h-4 w-4 text-primary" /> Blog</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><Mic className="h-4 w-4 text-primary" /> Webinars</a></li>
                            <li><a href="#" className="flex items-center gap-3 text-[13px] font-bold text-slate-700 hover:text-primary transition-colors"><BookOpen className="h-4 w-4 text-primary" /> Resources library</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#challenges"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10"
          >
            Talk to expert
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-xl px-6 py-4 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const itemKey = item.href.replace("#", "");
              const isActive = activeSection === itemKey;
              const isServices = item.name === "Services & solutions";
              const isAbout = item.name === "About";
              const isDropdown = isServices || isAbout;
              const isExpanded = mobileExpandedMenu === item.name;

              return (
                <div key={item.name} className="border-b border-slate-100 last:border-0 pb-1">
                  <button
                    onClick={() => {
                      if (isDropdown) {
                        setMobileExpandedMenu(isExpanded ? null : item.name);
                      } else {
                        setIsOpen(false);
                        window.location.href = item.href;
                      }
                    }}
                    className={`w-full flex items-center justify-between text-sm font-black transition-colors py-3 ${
                      isExpanded || isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {isDropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180 text-primary" : "text-slate-400"}`} />
                    )}
                  </button>

                  {/* Mobile Submenu for Services */}
                  {isServices && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pt-2 pb-4 pl-4 space-y-5 border-l-2 border-primary/20 ml-2">
                        <div className="space-y-3">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Lead Generation</span>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Appointment setting</a>
                          <a href="/cold-email-services" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Cold email outreach</a>
                          <a href="/cold-calling-services" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Cold calling</a>
                          <a href="/linkedin-lead-generation-services" className="block text-[13px] font-bold text-slate-600 hover:text-primary">LinkedIn lead generation</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Lead research</a>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Other Services</span>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Account-based marketing</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Deliverability consulting</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">HubSpot CRM consultancy</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Outsourced SDR</a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Submenu for About */}
                  {isAbout && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pt-2 pb-4 pl-4 space-y-5 border-l-2 border-primary/20 ml-2">
                        <div className="space-y-3">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Company</span>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">About us</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Awards</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Reviews & testimonials</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary flex items-center gap-2">Careers <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px]">5</span></a>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Learn</span>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Faseeh Lall Podcast</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">The Marketing Speakeasy</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Blog</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Webinars</a>
                          <a href="#" className="block text-[13px] font-bold text-slate-600 hover:text-primary">Resources library</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <a
            href="#challenges"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-xl bg-primary px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-primary-hover"
          >
            Talk to expert
          </a>
        </div>
      )}
    </header>
  );
}
