"use client";

import { motion } from "framer-motion";
import { PenTool, Video, Mic, ChevronRight } from "lucide-react";

export default function KnowledgeSection() {
  const articles = [
    { title: "Omnichannel lead generation for B2B: How to do it right", url: "#" },
    { title: "Sales pipeline generation strategy for B2B teams", url: "#" },
    { title: "7 Strategies to shorten sales cycle in today's B2B market", url: "#" }
  ];

  return (
    <section id="knowledge" className="bg-slate-50/50 py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase">
            Resources
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading">
            Expand your sales & marketing knowledge
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto">
            Get the latest insight, webinars, and audio discussions straight from our outbound practitioners.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Column 1: Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-slate-150 p-8 shadow-xs flex flex-col justify-between hover:border-primary/25 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-slate-800 pb-4 border-b border-slate-100">
                <div className="rounded-lg bg-red-50 p-2 text-primary">
                  <PenTool className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider">Blog</h3>
              </div>

              <div className="space-y-4">
                {articles.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    className="block text-xs sm:text-sm font-black text-slate-900 leading-snug pb-4 border-b border-slate-50 last:border-b-0 last:pb-0 hover:text-primary transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="#"
              className="mt-8 flex items-center justify-between text-xs font-black text-slate-550 hover:text-primary transition-colors pt-4 border-t border-slate-100"
            >
              <span>Explore blog library</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Column 2: Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-150 p-8 shadow-xs flex flex-col justify-between hover:border-primary/25 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-slate-800 pb-4 border-b border-slate-100">
                <div className="rounded-lg bg-red-50 p-2 text-primary">
                  <Video className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider">Webinars</h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  Which B2B marketing channels deserve budget in 2026?
                </h4>
                <p className="text-xs font-semibold text-slate-450 leading-relaxed">
                  Get the data-driven budget allocation strategy that separates the top 15% from everyone else (with real numbers from 100+ B2B companies + a former CMO of Gong).
                </p>
              </div>
            </div>

            <a 
              href="#"
              className="mt-8 flex items-center justify-between text-xs font-black text-slate-550 hover:text-primary transition-colors pt-4 border-t border-slate-100"
            >
              <span>Watch latest webinar</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Column 3: Podcasts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-150 p-8 shadow-xs flex flex-col justify-between hover:border-primary/25 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-slate-800 pb-4 border-b border-slate-100">
                <div className="rounded-lg bg-red-50 p-2 text-primary">
                  <Mic className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider">Podcasts</h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  Becoming the Brand Everyone Talks About, ex-CMO of Gong ($300M ARR) | Episode #23
                </h4>
                <p className="text-xs font-semibold text-slate-450 leading-relaxed">
                  What does it take to build a brand in B2B that people actually talk about? Udi Ledergor has a word for it. Courage.
                </p>
              </div>
            </div>

            <a 
              href="#"
              className="mt-8 flex items-center justify-between text-xs font-black text-slate-550 hover:text-primary transition-colors pt-4 border-t border-slate-100"
            >
              <span>Listen latest episode</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
