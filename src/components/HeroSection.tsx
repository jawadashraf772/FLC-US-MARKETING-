"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function HeroSection() {
  const logos = [
    { text: "CitrusAd" },
    { text: "General Electric" },
    { text: "CITCON" },
    { text: "CEMTREX" },
    { text: "born & bred." },
    { text: "MOLE STREET" },
    { text: "DIGITAL KNIGHTS" },
    { text: "bob" },
    { text: "EBANX" },
    { text: "Berkeley" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-36 lg:pb-28">
      {/* Soft orange/peach background glows (Belkins style) */}
      <div className="absolute top-[10%] left-[5%] -z-10 h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] rounded-full bg-primary-soft opacity-70 blur-3xl" />
      <div className="absolute top-[5%] right-[5%] -z-10 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-slate-50 opacity-80 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[11px] font-black tracking-widest text-primary uppercase mb-6 bg-primary-soft/80 px-4 py-1.5 rounded-full border border-primary/10"
        >
          B2B Lead Generation Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl mx-auto font-heading font-black"
        >
          Double your sales <br />
          <span className="text-primary">pipeline value</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-slate-550 leading-relaxed max-w-2xl mx-auto mt-8 font-sans font-medium"
        >
          We deliver <strong className="font-extrabold text-slate-900">100–400+ qualified appointments</strong> in a year through tailored omnichannel strategies.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10"
        >
          <a
            href="#challenges"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            <span>Get a quote</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </motion.div>
      </div>

      {/* Trusted Logos Row */}
      <div className="mt-28 border-t border-slate-100 pt-10 select-none">
        <div className="mx-auto max-w-7xl px-6 text-center mb-8">
          <p className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
            Sales and marketing leaders at top B2B companies trust Belkins
          </p>
        </div>
        
        {/* Horizontal Marquee Scroll */}
        <div className="relative overflow-hidden w-full py-4 bg-slate-50/30">
          <div className="flex w-max gap-20 animate-marquee-left whitespace-nowrap items-center">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-slate-400 font-extrabold text-lg sm:text-xl tracking-tight grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-350 cursor-pointer mx-12"
              >
                <span className="font-heading tracking-tighter text-slate-500 font-black">
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
