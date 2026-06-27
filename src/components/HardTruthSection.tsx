"use client";

import { motion } from "framer-motion";
import { Award, UserCheck, BarChart3, Star } from "lucide-react";

export default function HardTruthSection() {
  const differentiators = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully launched funnels that consistently generate scalable revenue for brands worldwide.",
      badge: "Track Record",
    },
    {
      icon: UserCheck,
      title: "Tailored Approach",
      description: "No templated layouts. Every single sales funnel is customized from scratch to speak to your specific audience.",
      badge: "Custom Crafted",
    },
    {
      icon: BarChart3,
      title: "Focus on ROI",
      description: "Every action, page build, and email sequence is built with a singular focus: maximizing your returns.",
      badge: "Data-Driven",
    },
  ];

  return (
    <section id="about" className="bg-slate-50/50 py-24 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading & Body */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-150 px-4 py-1.5 text-xs font-bold text-primary">
              <Star className="h-3.5 w-3.5 fill-primary" />
              <span>KEY DIFFERENTIATORS</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl leading-[1.1] font-heading">
              Why I'm the Best Choice
            </h2>
            
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-sans font-medium">
              We design and construct high-performance, conversion-optimized funnel systems that turn cold traffic into loyal brand customers.
            </p>
          </div>

          {/* Right Column: Cards List */}
          <div className="lg:col-span-7 space-y-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-xs hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-350"
                >
                  {/* Icon wrapper */}
                  <div className="rounded-xl bg-red-50 p-3.5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-350 shadow-sm shadow-primary/5">
                    <Icon className="h-6 w-6 transition-colors duration-350" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-black text-brand-dark group-hover:text-primary transition-colors duration-350">
                        {diff.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 group-hover:bg-primary-soft group-hover:text-primary transition-all duration-350">
                        {diff.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-400 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
