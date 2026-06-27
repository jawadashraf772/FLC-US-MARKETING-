"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Calendar, Share2, Coins } from "lucide-react";

export default function AssetProtectionSection() {
  const assets = [
    "CRM",
    "Landing Pages",
    "Ad Campaigns",
    "Lead Database",
    "ICP Research",
    "Workflows",
    "Creatives",
    "Dashboards",
    "Sales Intelligence Report"
  ];

  const options = [
    {
      letter: "A",
      letterBg: "bg-primary text-white",
      label: "Scale With Us",
      desc: "Continue the momentum into the next cycle. We stay as your fractional marketing department and keep scaling the volume."
    },
    {
      letter: "B",
      letterBg: "bg-brand-dark text-white",
      label: "Complete Handover",
      desc: "We train your in-house team on how to manage the system we built and hand everything over. No lock-in, no dependencies."
    }
  ];

  const guarantees = [
    { text: "20-Day Performance Guarantee", icon: <ShieldCheck className="h-5 w-5 text-primary shrink-0" /> },
    { text: "Month-to-month after 90 days", icon: <Calendar className="h-5 w-5 text-primary shrink-0" /> },
    { text: "CRM transferability on exit", icon: <Share2 className="h-5 w-5 text-primary shrink-0" /> },
    { text: "No hidden ad spend margins", icon: <Coins className="h-5 w-5 text-primary shrink-0" /> }
  ];

  const comparisonRows = [
    { feature: "2-Phase Strategy Execution", basic: true, intermediate: true, advanced: true },
    { feature: "ICP Research & Definition", basic: true, intermediate: true, advanced: true },
    { feature: "Lead Pre-Vetting Protocol", basic: true, intermediate: true, advanced: true },
    { feature: "Dedicated Appointment Setter", basic: false, intermediate: true, advanced: true },
    { feature: "GoHighLevel CRM Management", basic: false, intermediate: true, advanced: true },
    { feature: "Automated Follow-up Systems", basic: false, intermediate: true, advanced: true },
    { feature: "Sales Intelligence Reporting", basic: false, intermediate: true, advanced: true },
    { feature: "Priority Strategist Access", basic: false, intermediate: false, advanced: true },
    { feature: "Advanced CAPI Integration", basic: false, intermediate: false, advanced: true },
    { feature: "SQL Commitment (90 Days)", basic: "Best Effort", intermediate: "30 - 35", advanced: "60 - 70" },
    { feature: "90-Day Pipeline Value", basic: "Variable", intermediate: "Approx. $30k - $35k", advanced: "Approx. $60k - $70k" },
  ];

  return (
    <section id="assets" className="bg-white py-24 relative overflow-hidden border-t border-slate-100">
      
      {/* Background blur effects */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[350px] w-[350px] rounded-full bg-primary-soft opacity-40 blur-3xl" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[350px] w-[350px] rounded-full bg-slate-100 opacity-60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 1. ASSET PROTECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary-soft text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
            <ShieldCheck className="h-3 w-3" />
            <span>Asset Protection</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading">
            What You Own After 90 Days
          </h2>
          <p className="text-sm font-bold text-slate-400 font-sans">
            Everything. 100%.
          </p>
        </div>

        {/* Gray bordered container */}
        <div className="bg-slate-50/50 border border-slate-100/80 rounded-[2.5rem] p-8 md:p-12 mb-6">
          
          {/* Assets Badge List */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {assets.map((asset, idx) => (
              <span 
                key={idx}
                className="bg-white border border-slate-100 shadow-xs px-5 py-2.5 rounded-full text-xs font-black text-slate-700 hover:border-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {asset}
              </span>
            ))}
          </div>

          {/* Option A / Option B Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group rounded-3xl border border-slate-100/50 bg-white p-8 shadow-xs transition-all duration-350 hover:shadow-md hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${opt.letterBg}`}>
                    {opt.letter}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-brand-dark group-hover:text-primary transition-colors duration-350">
                      {opt.label}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 mt-2 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Black Features Bar */}
        <div className="bg-brand-dark text-white rounded-[2rem] p-6.5 mb-24 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md shadow-brand-dark/5">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-bold w-full md:w-auto justify-center md:justify-start">
              {item.icon}
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Horizontal separator */}
        <div className="border-t border-slate-100 my-20" />

        {/* 2. FEATURE COMPARISON PART */}
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Comparison
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading">
              Feature Comparison
            </h2>
            <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto font-sans">
              Choose the level of scale that fits your current business needs.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm bg-white">
            <table className="min-w-full divide-y divide-slate-100 text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/75">
                  <th scope="col" className="py-5 px-6 text-sm font-black text-slate-500 uppercase tracking-wider">
                    Service Feature
                  </th>
                  <th scope="col" className="py-5 px-6 text-sm font-black text-slate-500 uppercase tracking-wider text-center">
                    Basic
                  </th>
                  <th scope="col" className="py-5 px-6 text-sm font-black text-primary uppercase tracking-wider text-center bg-primary-soft/20 border-x border-primary/5">
                    Intermediate
                  </th>
                  <th scope="col" className="py-5 px-6 text-sm font-black text-slate-500 uppercase tracking-wider text-center">
                    Advanced
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-50/50 transition-colors duration-200"
                  >
                    <td className="py-4.5 px-6 text-sm font-bold text-slate-700">
                      {row.feature}
                    </td>
                    
                    {/* Basic */}
                    <td className="py-4.5 px-6 text-sm font-semibold text-slate-500 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <Check className="h-4.5 w-4.5 text-primary stroke-[3.5] mx-auto" />
                        ) : (
                          <span className="text-slate-250 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-extrabold text-slate-700">{row.basic}</span>
                      )}
                    </td>

                    {/* Intermediate (Highlighted) */}
                    <td className="py-4.5 px-6 text-sm font-semibold text-slate-600 text-center bg-primary-soft/5 border-x border-primary/5">
                      {typeof row.intermediate === "boolean" ? (
                        row.intermediate ? (
                          <Check className="h-4.5 w-4.5 text-primary stroke-[3.5] mx-auto" />
                        ) : (
                          <span className="text-slate-250 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-extrabold text-primary">{row.intermediate}</span>
                      )}
                    </td>

                    {/* Advanced */}
                    <td className="py-4.5 px-6 text-sm font-semibold text-slate-500 text-center">
                      {typeof row.advanced === "boolean" ? (
                        row.advanced ? (
                          <Check className="h-4.5 w-4.5 text-primary stroke-[3.5] mx-auto" />
                        ) : (
                          <span className="text-slate-250 font-bold">—</span>
                        )
                      ) : (
                        <span className="font-extrabold text-slate-700">{row.advanced}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lower CTA */}
          <div className="mt-12 text-center bg-slate-50/50 border border-slate-100 rounded-3xl p-6.5 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-bold text-slate-500 text-left leading-relaxed">
              Need a custom high-volume plan? Let’s talk.
            </p>
            <a 
              href="#pricing" 
              className="rounded-xl bg-primary text-white hover:bg-primary-hover px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10 shrink-0"
            >
              Talk to Expert
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
