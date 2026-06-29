"use client";

import { motion } from "framer-motion";
import { 
  TrendingDown, Hourglass, ShieldAlert, 
  Layers, ToggleLeft, AlertTriangle, ArrowRight 
} from "lucide-react";

export default function ChallengesSection() {
  const challenges = [
    {
      title: "Revenue stagnation",
      desc: "Your revenue boost is lagging 2–3 times behind projections, and you're struggling to find enough qualified opportunities to close B2B deals.",
      icon: TrendingDown,
      badge: "Pipeline Stagnant"
    },
    {
      title: "Slow deal closure",
      desc: "Meeting sales quotas takes an unacceptably long time frame of 6–12 months. Your goal is to boost lead quality to drive sales-ready prospects.",
      icon: Hourglass,
      badge: "Slow Quota cycles"
    },
    {
      title: "Disconnected sales & marketing",
      desc: "Without shared goals and clear processes, marketing pushes leads that sales can’t close, while sales feedback gets lost.",
      icon: ToggleLeft,
      badge: "Alignment Issues"
    },
    {
      title: "Internal constraints",
      desc: "Overburdened with routine, your team struggles to optimize processes and innovate go-to-market strategies, resulting in missed sales KPIs.",
      icon: Layers,
      badge: "Resource Bottlenecks"
    },
    {
      title: "Inconsistent lead quality",
      desc: "Despite investing in lead gen and experimenting with new tools, you're struggling to convert leads into qualified appointments.",
      icon: AlertTriangle,
      badge: "Unstable Flow"
    },
    {
      title: "Frustrating past vendor experience",
      desc: "Previous B2B sales agencies have left you disappointed and skeptical about the potential of lead generation outsourcing.",
      icon: ShieldAlert,
      badge: "Low Vendor Trust"
    }
  ];

  return (
    <section id="challenges" className="bg-[#09090B] py-24 border-y border-white/5 relative">
      {/* Subtle background glow wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block">
              Proven Problem Solvers
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading leading-tight">
              Challenges you can <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF4D6D]">entrust to us</span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed font-sans font-medium">
              1,000+ of our clients had pipeline generation issues that seemed intractable, but we proved otherwise. Faced any of these?
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 space-y-6">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 shadow-xs hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-350"
                >
                  {/* Icon wrap */}
                  <div className="rounded-xl bg-primary/20 p-3.5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-350 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content details */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-black text-slate-100 group-hover:text-white transition-colors duration-350">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-black text-slate-400 border border-white/10 group-hover:border-primary/30 group-hover:text-primary-soft transition-all">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-[2rem] p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
          <div className="relative z-10 space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-white font-heading">
              Our clients close <span className="text-primary font-black">25% more deals</span> with their dream accounts
            </h3>
            <p className="text-sm font-semibold text-slate-400">
              Focus on scaling your revenue while we keep booking appointments.
            </p>
          </div>
          <a
            href="#challenges"
            className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(217,4,41,0.3)] shrink-0"
          >
            <span>Talk to expert</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
