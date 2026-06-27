"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Ops Hub", href: "#transparency" },
    { name: "Services", href: "#value" },
    { name: "Packages", href: "#pricing" },
  ];

  useEffect(() => {
    const sectionIds = ["how-it-works", "about", "roadmap", "value", "transparency", "pricing", "assets", "faq"];
    
    const observerOptions = {
      root: null, // Viewport
      rootMargin: "-20% 0px -60% 0px", // Trigger when element is in middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          let activeKey = "home";
          if (id === "how-it-works" || id === "about" || id === "roadmap") {
            activeKey = "how-it-works";
          } else if (id === "value") {
            activeKey = "value";
          } else if (id === "transparency") {
            activeKey = "transparency";
          } else if (id === "pricing" || id === "assets" || id === "faq") {
            activeKey = "pricing";
          }
          
          setActiveSection(activeKey);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback to highlight Home when scrolled to top
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo (Faseeh Lall & Co.) */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Faseeh Lall" className="h-11 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const itemKey = item.href.replace("#", "") || "home";
            const isActive = activeSection === itemKey;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-bold transition-all duration-300 py-2 ${
                  isActive 
                    ? "text-primary font-black" 
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.name}
                {/* Smooth sliding active indicator dot */}
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
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10"
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
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const itemKey = item.href.replace("#", "") || "home";
            const isActive = activeSection === itemKey;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-bold transition-colors ${
                  isActive ? "text-primary font-black" : "text-slate-700 hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
