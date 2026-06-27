"use client";

import { motion } from "framer-motion";
import { Compass, Zap, CheckCircle2 } from "lucide-react";

export default function RoadmapSection() {
  const steps = [
    {
      phase: "Phase 1 (Days 1-15 - Foundation)",
      duration: "Foundation",
      title: "Defining your Ideal Customer Profile (ICP)",
      description: "Defining your ICP, Beachhead Strategy, and building your VSL & Landing Pages.",
      icon: Compass,
      deliverables: [
        "Defining Ideal Customer Profile (ICP)",
        "Beachhead Strategy setup",
        "Building your VSL & Landing Pages",
      ],
      color: "border-primary bg-primary-soft/30",
    },
    {
      phase: "Phase 2 (Days 16-90 - Execution)",
      duration: "Execution",
      title: "System Launch & Multi-Channel Outreach",
      description: "Multi-channel outreach (Meta/LinkedIn/Email), CRM automation, and live sales reporting.",
      icon: Zap,
      deliverables: [
        "Multi-channel outreach (Meta/LinkedIn/Email)",
        "CRM automation",
        "Live sales reporting",
      ],
      color: "border-primary bg-white",
    },
  ];

  return (
    <section id="roadmap" className="bg-white py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-slate-50 opacity-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            Proven Launch Process
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading">
            The 90-Day Roadmap
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto font-sans">
            How we shift you from erratic marketing campaigns to a reliable, automated pipeline.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative mt-12">
          {/* Horizontal line for desktop, vertical for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 md:left-0 md:right-0 md:top-1/2 md:h-0.5 md:w-full md:-translate-y-1/2 -z-10" />

          {/* Cards wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`group relative rounded-3xl border-2 p-8 shadow-sm transition-all duration-350 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 ${step.color}`}
                >
                  {/* Timeline node marker */}
                  <div className="absolute -left-10 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/20 md:left-1/2 md:-top-11 md:-translate-x-1/2 md:translate-y-0">
                    <div className="h-2 w-2 rounded-full bg-white animate-ping" />
                  </div>

                  <div className="flex flex-col space-y-6">
                    {/* Top Bar inside card */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
                        {step.duration}
                      </span>
                      <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-black text-primary uppercase">
                        {idx === 0 ? "Days 1-15" : "Days 16-90"}
                      </span>
                    </div>

                    {/* Title & Info */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-red-50 p-2.5 shrink-0 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-350 shadow-sm shadow-primary/5">
                        <Icon className={`h-6 w-6 transition-colors duration-350 ${idx === 1 ? "animate-pulse group-hover:animate-none" : ""}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-brand-dark group-hover:text-primary transition-colors duration-350">{step.phase}</h3>
                        <p className="text-sm font-semibold text-slate-400 mt-1">{step.description}</p>
                      </div>
                    </div>

                  {/* Bullet points / deliverables */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Deliverables:
                    </p>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-sm font-semibold text-slate-500">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
