"use client";

import { motion } from "framer-motion";
import { 
  Compass, Users, Zap, CheckCircle2, ShieldCheck, HeartHandshake 
} from "lucide-react";

export default function DifferentiatorsSection() {
  const list = [
    {
      title: "Tailored omnichannel strategies",
      desc: "Unlike other agencies’ cookie-cutter approaches, we craft personalized go-to-market plans that align perfectly with your unique business objectives and integrate both outbound and inbound efforts.",
      icon: Compass,
      badge: "Custom playbook"
    },
    {
      title: "World-class talent",
      desc: "We carefully select teams to work on your project and to act as an extension of your own. Rest assured, you’ll get dedicated specialists with narrow industry knowledge, relevant certifications, and dozens of successful cases.",
      icon: Users,
      badge: "Top 2% Experts"
    },
    {
      title: "The first results within a month",
      desc: "We set up and launch your campaign in the first 14 days. Within the next 30 days, you’ll start seeing the first appointments in your calendar.",
      icon: Zap,
      badge: "Fast Launch"
    },
    {
      title: "B2B-focused expertise",
      desc: "Our deep understanding of the B2B landscape empowers us to use the right cutting-edge tools and deliver targeted, result-oriented outbound solutions that last even if we part ways.",
      icon: ShieldCheck,
      badge: "Pure B2B"
    },
    {
      title: "Cross-functional approach",
      desc: "Our end-to-end strategy and implementation support cover every stage of the deal generation process, from inbound lead gen to strategy consulting, minimizing risks and raising sales by 25% on average.",
      icon: HeartHandshake,
      badge: "End-to-End focus"
    }
  ];

  return (
    <section id="differentiators" className="bg-[#09090B] py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading">
            What sets us <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF4D6D]">apart</span>
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto font-sans">
            Since 2017, Faseeh Lall & Co. has been the top outbound lead generation agency for B2B companies across 50+ industries. Here’s why:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm p-8 shadow-xs transition-all duration-350 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-primary/20 p-2.5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-350 shadow-inner">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-black text-slate-400 border border-white/10 uppercase group-hover:border-primary/30 group-hover:text-primary-soft transition-all">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-base font-black text-slate-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
