"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Services & solutions", href: "#services" },
    { name: "Industries", href: "#challenges" },
    { name: "Case studies", href: "#case-studies" },
    { name: "About", href: "#differentiators" },
    { name: "Pricing", href: "#testimonials" },
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
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

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-[13px] font-black tracking-normal transition-all duration-300 py-2 ${
                  isActive 
                    ? "text-primary" 
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#challenges"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10"
          >
            Book a call
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
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-4 shadow-lg">
          {navItems.map((item) => {
            const itemKey = item.href.replace("#", "");
            const isActive = activeSection === itemKey;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-black transition-colors ${
                  isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="#challenges"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-xl bg-primary px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-primary-hover"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
