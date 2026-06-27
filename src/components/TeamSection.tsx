"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, ShieldCheck, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const roles = [
    {
      id: "coe",
      tabTitle: "Center of Excellence",
      title: "Dedicated Center of Excellence (COE)",
      desc: "Based on a personalized strategy, we assemble a team of savvy subject-matter experts to create a customized growth playbook aligned with your goals. They will develop a comprehensive strategy and execute robust omnichannel campaigns across SEO, events, content marketing, partnership programs, paid advertising, provide sales consulting, and more."
    },
    {
      id: "am",
      tabTitle: "Account manager",
      title: "Account manager (AM)",
      desc: "Seasoned professionals with deep expertise in your niche. They’ll oversee your entire campaign, from strategy development to execution. With a proven track record of successful omnichannel cases, they’ll provide expert guidance and strategic insights throughout the process."
    },
    {
      id: "sdr",
      tabTitle: "Sales Rep / SDR",
      title: "Sales development representative (SDR)",
      desc: "SDRs from our revenue team can find the approach that speaks to your audience thanks to their experience in 50+ B2B industries. They book leads, qualify appointments, and ensure every prospect shows up informed and ready to meet with your sales rep."
    },
    {
      id: "researcher",
      tabTitle: "Lead researcher",
      title: "Lead researcher",
      desc: "They go beyond the surface to find qualified, ready-to-buy prospects. Using a meticulous manual approach, they delve into purchasing habits, taxation, investment rounds, tech stack, and other data points to provide you with the highest quality leads."
    },
    {
      id: "copywriter",
      tabTitle: "Copywriter",
      title: "Copywriter",
      desc: "Our copywriters craft compelling messages that resonate with your prospects. With a keen eye for detail and your company’s unique style, they optimize every word in emails, call scripts, or LinkedIn messages to drive higher engagement and positive replies."
    },
    {
      id: "email",
      tabTitle: "Email tech expert",
      title: "Tech email expert",
      desc: "Our email experts ensure your messages reach your leads’ inboxes. By configuring domain infrastructure, warming up mailboxes, and monitoring sender scores, they optimize your email deliverability and maximize your campaigns’ effectiveness."
    }
  ];

  const [activeTab, setActiveTab] = useState(roles[0]);

  return (
    <section id="team" className="bg-white py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase">
            Our Professionals
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading">
            Meet the team behind your project
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto">
            A dedicated squad of specialists assigned to build, optimize, and scale your pipeline.
          </p>
        </div>

        {/* Tab switcher layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-xs">
          
          {/* Left: Tab selection buttons list */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2">
              Campaign Roles
            </h4>
            {roles.map((item) => {
              const isSelected = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left font-black transition-all duration-300 ${
                    isSelected
                      ? "bg-white border-l-4 border-l-primary border border-slate-150 text-primary shadow-sm"
                      : "text-slate-650 hover:bg-white hover:text-slate-900 border border-transparent"
                  }`}
                >
                  <span className="text-xs sm:text-sm">{item.tabTitle}</span>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                    isSelected ? "text-primary translate-x-1" : "text-slate-400"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Tab Content view */}
          <div className="lg:col-span-7 bg-white border border-slate-150 rounded-3xl p-8 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-[-10%] top-[-10%] h-48 w-48 rounded-full bg-primary-soft opacity-30 blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="rounded-xl bg-red-50 p-3 w-max text-primary">
                  <Users2 className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {activeTab.title}
                </h3>
                
                <p className="text-sm font-semibold leading-relaxed text-slate-500">
                  {activeTab.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-black text-slate-400">
              <ShieldCheck className="h-4.5 w-4.5 text-primary" />
              <span>Full compliance & strategic integration playbook standards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
