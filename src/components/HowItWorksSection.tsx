"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, CalendarDays } from "lucide-react";

export default function HowItWorksSection() {
  const stats = [
    { 
      value: "95%", 
      label: "Tracking Accuracy", 
      icon: ShieldCheck 
    },
    { 
      value: "6 Years", 
      label: "Market Experience", 
      icon: TrendingUp 
    },
    { 
      value: "91+", 
      label: "Client Engagements", 
      icon: Users 
    },
    { 
      value: "Guaranteed", 
      label: "SQL Commitment", 
      icon: CalendarDays 
    },
  ];

  return (
    <section id="how-it-works" className="bg-slate-50/50 py-24 relative overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Proven System
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading leading-tight">
              Tested Across Real Budgets. <br />Delivered to You from Day One.
            </h2>
            
            <div className="space-y-4 text-base text-slate-500 font-sans leading-relaxed font-medium">
              <p>
                This is not version one. This system has been built, broken, and improved across real client accounts for 6 years. What you receive is what survived real markets and real budgets.
              </p>
              <p>
                And we use it ourselves, FLC runs on the same system we build for clients. Which is why we are consistently growing and signing new clients every single week.
              </p>
            </div>

            {/* SQL Commitment Highlight Card */}
            <div className="rounded-2xl border border-red-100 bg-primary-soft/50 p-5 mt-6">
              <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                The SQL Commitment
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                If we fall short of our SQL target, we keep running at no extra cost until every meeting is delivered. Your 90 days don't end until the number is met.
              </p>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-white border border-slate-100 rounded-3xl p-6.5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-350"
                  >
                    <div className="rounded-full bg-primary-soft p-3 mb-4 shadow-sm shadow-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-350">
                      <Icon className="h-5 w-5 transition-colors duration-350" />
                    </div>
                    <span className="text-3xl font-extrabold text-primary font-heading tracking-tight mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs font-black text-brand-dark uppercase tracking-wider group-hover:text-primary transition-colors duration-350">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
