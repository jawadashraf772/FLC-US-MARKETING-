"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function HeroSection() {
  const logos = [
    { name: "CitrusAd", logo: "/logos/citrusad.svg", text: "CitrusAd" },
    { name: "General Electric", logo: "/logos/ge.svg", text: "General Electric" },
    { name: "CITCON", logo: "/logos/citcon.svg", text: "CITCON" },
    { name: "CEMTREX", logo: "/logos/cemtrex.svg", text: "CEMTREX" },
    { name: "born & bred.", logo: "/logos/bornbred.svg", text: "born & bred." },
    { name: "MOLE STREET", logo: "/logos/molestreet.svg", text: "MOLE STREET" },
    { name: "DIGITAL KNIGHTS", logo: "/logos/digitalknights.svg", text: "DIGITAL KNIGHTS" },
    { name: "bob", logo: "/logos/bob.svg", text: "bob" },
    { name: "EBANX", logo: "/logos/ebanx.svg", text: "EBANX" },
    { name: "Berkeley", logo: "/logos/berkeley.svg", text: "Berkeley" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Exact Belkins visual highlights (Large soft blurred white/crimson circles) */}
      <div className="absolute top-[10%] left-[8%] -z-10 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-primary-soft opacity-85 blur-3xl" />
      <div className="absolute top-[8%] left-[24%] -z-10 h-[100px] w-[100px] sm:h-[160px] sm:w-[160px] rounded-full bg-primary opacity-20 blur-2xl animate-pulse" />
      <div className="absolute top-[5%] right-[5%] -z-10 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-[#f4f4f6] opacity-70 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-primary uppercase mb-6"
        >
          B2B Lead Generation Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="text-4xl font-extrabold tracking-tight text-[#09090B] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-5xl mx-auto font-heading font-black"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            If Your Customer Buys Once,
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            You Made a <span className="text-primary">Sale.</span>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            If They Come Back, You Built
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            <span className="text-primary">Trust.</span>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            If They Tell Others, You Built
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
            }}
            className="block"
          >
            a <span className="text-primary">Brand.</span>
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mt-6 font-sans font-medium"
        >
          In <strong className="font-extrabold text-slate-800">90 days</strong>, we become your entire marketing department, building a complete lead generation system that delivers <strong className="font-extrabold text-slate-800">Sales Qualified Leads</strong> directly to your calendar.
        </motion.p>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 text-sm font-semibold text-slate-600 max-w-lg mx-auto"
        >
          {[
            "Get your custom Ideal Customer Profile (ICP) draft in 24 hours",
            "No commitment, no pressure, free 30-minute strategy session",
            "Fully customized B2B lead generation blueprint for your agency"
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-left w-full">
              <div className="rounded-full bg-primary-soft text-primary p-0.5 shrink-0 mt-0.5">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4.5 text-base font-extrabold text-white transition-all hover:bg-primary-hover hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/20"
          >
            <span>Book Your Discovery Call</span>
            <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
          </a>
        </motion.div>
      </div>

      {/* Trusted Logos Row (Belkins Style) */}
      <div className="mt-28 border-t border-slate-100 pt-10 select-none">
        <div className="mx-auto max-w-7xl px-6 text-center mb-8">
          <p className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
            Sales and marketing leaders at top B2B companies trust Faseeh Lall & Co.
          </p>
        </div>
        
        {/* Horizontal Marquee Scroll */}
        <div className="relative overflow-hidden w-full py-4">
          <div className="flex w-max gap-16 animate-marquee-left whitespace-nowrap items-center">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-slate-400 font-extrabold text-lg sm:text-xl tracking-tight grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-350 cursor-pointer mx-8"
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
