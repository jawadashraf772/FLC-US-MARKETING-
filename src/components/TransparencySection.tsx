"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";

export default function TransparencySection() {
  // Calendar days mock representing a schedule filled with appointments
  const calendarDays = [
    { day: "1", booked: false }, { day: "2", booked: false }, { day: "3", booked: true, name: "CEO @ TechScale" },
    { day: "4", booked: false }, { day: "5", booked: true, name: "VP Sales @ DevCo" }, { day: "6", booked: false },
    { day: "7", booked: false }, { day: "8", booked: true, name: "Founder @ FinLab" }, { day: "9", booked: false },
    { day: "10", booked: true, name: "Director @ WebScale" }, { day: "11", booked: false }, { day: "12", booked: true, name: "SDR @ DataHub" },
    { day: "13", booked: false }, { day: "14", booked: false }, { day: "15", booked: true, name: "COO @ GrowthCo" },
    { day: "16", booked: true, name: "VP @ SalesPro" }, { day: "17", booked: false }, { day: "18", booked: true, name: "CEO @ AI Solutions" },
    { day: "19", booked: false }, { day: "20", booked: true, name: "Director @ LogicLtd" }, { day: "21", booked: false },
    { day: "22", booked: false }, { day: "23", booked: true, name: "Head of Growth @ SaaSify" }, { day: "24", booked: false },
    { day: "25", booked: true, name: "Founder @ NextGen" }, { day: "26", booked: false }, { day: "27", booked: true, name: "CEO @ ScaleUp" },
    { day: "28", booked: false }, { day: "29", booked: false }, { day: "30", booked: true, name: "VP Marketing @ Shift B2B" },
  ];

  return (
    <section id="transparency" className="bg-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              Operational Transparency
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading leading-tight">
              Your Business Command Center
            </h2>
            <p className="text-base text-slate-500 font-sans leading-relaxed font-medium">
              We don't operate in a black box. As we take over your entire outreach and lead generation engine, you get full access to our Ops Hub Dashboard—ensuring your time is saved while maintaining complete transparency.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              {[
                {
                  title: "Daily Task Transparency",
                  desc: "No more wondering what's happening. See every task, outreach, and optimization in real-time."
                },
                {
                  title: "90-Day Performance Tracking",
                  desc: "Analyze trends and growth with a comprehensive 90-day view of your entire sales engine."
                },
                {
                  title: "Real-Time Team Metrics",
                  desc: "Monitor team performance and activity levels as they happen, ensuring maximum output."
                },
                {
                  title: "Client-Shareable Links",
                  desc: "Get a dedicated, white-labeled link to monitor everything without needing to log in."
                }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-350 cursor-default">
                  <div className="rounded-lg bg-red-50 p-1.5 text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-350 shadow-sm shadow-primary/5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-brand-dark group-hover:text-primary transition-colors duration-350">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-semibold mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-6 py-3.5 text-xs font-black text-white uppercase tracking-wider transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10"
              >
                <span>Talk to Expert</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dashboard Graphic (Belkins style calendar filled with appointments) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-slate-200/80 bg-slate-50 p-4 sm:p-6 shadow-lg shadow-slate-100"
            >
              {/* Fake Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-bold text-slate-700">Ops Hub Dashboard: Live Calendar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Live Calendar Syncing</span>
                </div>
              </div>

              {/* Simulated Calendar Grid */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-black text-brand-dark flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    Live Calendar Bookings (SQLs)
                  </span>
                  <span className="text-[10px] font-black text-primary bg-primary-soft px-2.5 py-1 rounded">
                    This Month
                  </span>
                </div>
                
                {/* Calendar Days Matrix */}
                <div className="grid grid-cols-6 gap-2">
                  {calendarDays.map((item, idx) => (
                    <div
                      key={idx}
                      className={`relative aspect-square flex flex-col items-center justify-center rounded-xl border text-xs font-bold transition-all duration-250 ${
                        item.booked
                          ? "bg-primary border-primary text-white shadow-xs cursor-pointer group hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-primary/25"
                          : "bg-slate-50 border-slate-100 text-slate-400"
                      }`}
                    >
                      <span>{item.day}</span>
                      {item.booked && (
                        <div className="absolute bottom-1.5 h-1 w-1 rounded-full bg-white"></div>
                      )}
                      {/* Hover Tooltip */}
                      {item.booked && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block z-20 w-32 rounded bg-brand-dark p-2 text-center text-[9px] font-bold text-white shadow-md">
                          {item.name}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-dark"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Info inside Dashboard */}
              <div className="mt-4 rounded-xl bg-primary-soft/45 border border-primary-soft/80 p-3 text-center">
                <span className="text-xs font-bold text-primary">
                  🔥 15 New Meetings Booked in the last 7 Days
                </span>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
