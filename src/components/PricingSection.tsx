"use client";

import { motion } from "framer-motion";
import { Check, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";

export default function PricingSection() {
  const tiers = [
    {
      name: "Basic",
      price: "$1,500",
      description: "Foundational outreach system for startups and solo founders.",
      features: [
        "Full 2-Phase Strategy Execution",
        "Foundation + Outreach Phase",
        "Qualified replies to your inbox",
        "You handle conversations & closing",
        "Weekly Handholding Support",
        "Minimum 3 LinkedIn IDs required",
      ],
      cta: "Talk to Expert",
      featured: false,
    },
    {
      name: "Intermediate",
      tag: "Hot Selling",
      price: "$2,000",
      description: "Our flagship system. Total automation of your sales pipeline.",
      pipelineValue: {
        approx: "Approx. $30k – $35k",
        desc: "Estimated based on avg. deal size of $700 – $1,000 per SQL."
      },
      features: [
        "Everything in Basic, PLUS:",
        "Dedicated Appointment Setter",
        "GoHighLevel CRM Setup",
        "Automated Follow up Sequences",
        "Sales Intelligence Report",
        "30 to 35 SQLs Committed (90 Days)",
        "Minimum 3 LinkedIn IDs required",
      ],
      cta: "Talk to Expert",
      featured: true,
    },
    {
      name: "Advanced",
      price: "$2,500",
      originalPrice: "$3,200",
      description: "Maximum scale for established agencies looking for market dominance.",
      pipelineValue: {
        approx: "Approx. $60k – $70k",
        desc: "Estimated based on avg. deal size of $700 – $1,000 per SQL."
      },
      features: [
        "Everything in Intermediate DOUBLED",
        "60 to 70 SQLs Committed (90 Days)",
        "Double Outreach & Pipeline",
        "Priority Strategist Access",
        "Advanced CAPI Integration",
        "Save PKR 125,000 total",
        "Minimum 3 LinkedIn IDs required",
      ],
      cta: "Talk to Expert",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-slate-50/50 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            Packages
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading">
            Results-Based Packages
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto font-sans">
            Transparent pricing focused on delivering Sales Qualified Leads to your calendar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch lg:gap-10">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-350 relative ${
                tier.featured
                  ? "bg-brand-dark text-white border-2 border-primary shadow-xl scale-100 md:scale-105 z-10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                  : "bg-white border border-slate-100 shadow-xs hover:border-primary/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {/* Highlight Tag */}
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 shadow-md shadow-primary/20">
                  <Sparkles className="h-3 w-3" />
                  {tier.tag}
                </span>
              )}

              {/* Tier Details */}
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-black uppercase tracking-wider ${
                    tier.featured ? "text-white" : "text-brand-dark"
                  }`}>
                    {tier.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-2">{tier.description}</p>
                </div>
                <div className={`flex flex-col py-4 border-y gap-0.5 ${
                  tier.featured ? "border-slate-800" : "border-slate-100"
                }`}>
                  {tier.originalPrice && (
                    <span className="text-xs font-semibold text-slate-400 line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight ${
                      tier.featured ? "text-white" : "text-brand-dark"
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs font-bold ${
                      tier.featured ? "text-slate-400" : "text-slate-500"
                    }`}>
                      / per month
                    </span>
                  </div>
                </div>

                {/* Pipeline Value Widget */}
                {tier.pipelineValue && (
                  <div className={`rounded-2xl p-4 border text-left ${
                    tier.featured 
                      ? "border-slate-800 bg-[#111115]" 
                      : "border-primary/35 border-dashed bg-white"
                  }`}>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-1">
                      90-Day Pipeline Value
                    </span>
                    <span className={`text-lg font-black block font-heading ${
                      tier.featured ? "text-white" : "text-primary"
                    }`}>
                      {tier.pipelineValue.approx}
                    </span>
                    <span className="text-[9px] text-slate-450 font-semibold leading-normal block mt-0.5">
                      {tier.pipelineValue.desc}
                    </span>
                  </div>
                )}

                {/* Features List */}
                <ul className="space-y-3.5">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-start gap-3 text-sm font-semibold ${
                      tier.featured ? "text-slate-300" : "text-slate-500"
                    }`}>
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5 stroke-[3]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <div className="mt-8">
                <a
                  href="#pricing"
                  className={`block w-full rounded-xl py-3.5 px-6 text-center text-sm font-black transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    tier.featured
                      ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/10"
                      : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 shadow-xs"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl border border-red-200 bg-primary-soft/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm"
        >
          <div className="rounded-2xl bg-red-100 p-4 text-primary shrink-0">
            <ShieldAlert className="h-8 w-8 animate-pulse" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-black text-brand-dark flex items-center justify-center sm:justify-start gap-2">
              Our 100% Commitment Guarantee
            </h3>
            <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-4xl">
              "If we fall short of our SQL target, we keep running at no extra cost until delivered."
            </p>
            <p className="text-[11px] font-black text-primary flex items-center justify-center sm:justify-start gap-1">
              <AlertCircle className="h-3 w-3" /> Zero risk alignment. We win when you book sales meetings.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
