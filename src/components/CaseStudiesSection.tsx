"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      title: "Email outreach soars to 3rd place among 20 channels for an integrity and efficiency service provider",
      client: "IGS",
      logo: (
        <span className="font-heading font-black text-xl tracking-tighter text-slate-800 flex items-center gap-1">
          <span className="text-[#D90429]">●</span> igs
        </span>
      ),
      metrics: [
        { val: "330", label: "Booked appointments in 15 months" },
        { val: "120%", label: "Avg. monthly KPIs" }
      ]
    },
    {
      title: "Lead Generation for Power Banks & Charging Stations Manufacturer: Omnicharge Case Study",
      client: "Omnicharge",
      logo: (
        <span className="font-heading font-black text-xl tracking-tighter text-slate-800 flex items-center gap-1">
          <span className="text-slate-800">⬡</span> omnicharge
        </span>
      ),
      metrics: [
        { val: "320+", label: "Appointments in 12 months" },
        { val: "9", label: "Deals won in first 3 months" }
      ]
    },
    {
      title: "Outsourcing Sales Acquisition for Online Education Company: 145 Calls Booked in 9 Months",
      client: "Cengage Learning",
      logo: (
        <span className="font-heading font-black text-xl tracking-tighter text-slate-800 flex items-center gap-1">
          <span className="text-[#D90429]">◆</span> cengage
        </span>
      ),
      metrics: [
        { val: "145", label: "appointments booked in 9 months" },
        { val: "120%", label: "avg. KPI rate achieved" }
      ]
    },
    {
      title: "Faseeh Lall & Co. overcame sales pipeline exhaustion, boosting appointments x2 for a health monitoring company.",
      client: "OpenTeleHealth",
      logo: (
        <span className="font-heading font-black text-xl tracking-tighter text-slate-800 flex items-center gap-1">
          <span className="text-slate-800">▲</span> opentelehealth
        </span>
      ),
      metrics: [
        { val: "116", label: "appointments booked in 4 months" },
        { val: "130%", label: "avg. KPI rate achieved" }
      ]
    },
    {
      title: "An investment platform fixed inconsistent lead flow issues and landed 30+ monthly meetings with Faseeh Lall & Co.’s omnichannel approach",
      client: "NDA Platform",
      logo: (
        <span className="font-heading font-black text-xl tracking-tighter text-slate-800 flex items-center gap-1">
          <span className="text-[#D90429]">■</span> nda
        </span>
      ),
      metrics: [
        { val: "$434K", label: "Forecasted new revenue" },
        { val: "346", label: "Appointments in 15 months" }
      ]
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".snap-start");
      if (card) {
        const cardWidth = card.clientWidth;
        const scrollAmount = direction === "left" ? -cardWidth - 32 : cardWidth + 32;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="case-studies" className="bg-[#FAF9F6] py-24 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-heading font-black">
            How companies succeed with us
          </h2>
          <p className="text-sm font-semibold text-slate-450 max-w-xl mx-auto">
            B2B leaders that choose Faseeh Lall & Co. achieve results that no other lead generation and marketing agency can deliver.
          </p>
        </div>

        {/* Cards Scroll Wrapper */}
        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scrollbar -mx-6 px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((item, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[85vw] sm:w-[400px] rounded-[2rem] border border-slate-150 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="space-y-6">
                  {/* Logo header */}
                  <div className="h-8 flex items-center justify-start">
                    {item.logo}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-slate-800 leading-snug">
                    {item.title}
                  </h3>

                  {/* Metrics grid with vertical separator */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-black text-[#D90429] font-heading tracking-tight block">
                        {item.metrics[0].val}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wide leading-tight block">
                        {item.metrics[0].label}
                      </span>
                    </div>
                    <div className="space-y-1 pl-6 border-l border-slate-200">
                      <span className="text-2xl sm:text-3xl font-black text-[#D90429] font-heading tracking-tight block">
                        {item.metrics[1].val}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wide leading-tight block">
                        {item.metrics[1].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Read Case Study Button Row */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-4 cursor-pointer group">
                  <div className="h-10 w-10 rounded-full border border-[#D90429]/40 flex items-center justify-center text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-black text-slate-700 group-hover:text-[#D90429] transition-colors">
                    Read the case study
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button & Navigation Arrows */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          <a
            href="#"
            className="rounded-full bg-white border border-slate-150 shadow-xs px-10 py-4 text-xs font-black text-slate-700 hover:border-[#D90429]/30 hover:text-[#D90429] transition-all"
          >
            Explore all case studies
          </a>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:border-[#D90429]/50 hover:text-[#D90429] hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:border-[#D90429]/50 hover:text-[#D90429] hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
