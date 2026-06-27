"use client";

import { motion } from "framer-motion";
import { 
  Users, Mail, Phone, MessageSquare, Target, BarChart2,
  TrendingUp, Award, Laptop, ShieldCheck 
} from "lucide-react";

export default function ValuePropBanner() {
  const channels = [
    "Omnichannel appointment setting",
    "Cold email outreach",
    "Cold and intent calling",
    "Voicemails",
    "SMS / WhatsApp",
    "LinkedIn lead generation",
    "Paid advertising"
  ];

  const services = [
    {
      title: "Sales development",
      desc: "Secure meetings with decision-makers and build a highly stable pipeline.",
      icon: Users
    },
    {
      title: "Outsourced SDRs",
      desc: "Dedicated sales development reps working exclusively as an extension of your team.",
      icon: Target
    },
    {
      title: "Lead generation",
      desc: "Hand-picked, customized lead generation protocols to reach your exact target buyers.",
      icon: TrendingUp
    },
    {
      title: "Sales enablement",
      desc: "Optimized pipelines, sales templates, scripts, and playbook design for high close rates.",
      icon: Award
    },
    {
      title: "Lead nurturing",
      desc: "Systematic multi-channel follow-ups to transition cold accounts into active sales leads.",
      icon: Mail
    },
    {
      title: "Lead gen training",
      desc: "Empower and upskill your in-house teams on current outbound and inbound standards.",
      icon: Laptop
    },
    {
      title: "Demand generation",
      desc: "Establish brand presence, organic demand, and inbound flows to feed your sales pipeline.",
      icon: BarChart2
    },
    {
      title: "HubSpot CRM consulting",
      desc: "Professional CRM integrations, automation triggers, custom dashboards, and sales syncs.",
      icon: Laptop
    },
    {
      title: "Deliverability consulting",
      desc: "DNS configurations, spam score monitoring, and sender reputation warm-up security.",
      icon: ShieldCheck
    },
    {
      title: "Account-based marketing",
      desc: "Highly-tailored hyper-personalized outreach targeting high-value enterprise accounts.",
      icon: Phone
    }
  ];

  return (
    <section id="services" className="bg-slate-50/50 py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 1. Value Acquisition Plan Banner */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black tracking-widest text-primary uppercase">
                Acquisition Plan
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading leading-tight">
                Client acquisition plan <br />
                <span className="text-primary">done for you</span>
              </h2>
              <p className="text-base text-slate-550 leading-relaxed font-sans font-medium">
                Transcending industry fluctuations, our growth solutions will continuously increase your pipeline up to <strong className="text-slate-900 font-extrabold">45%</strong> at just a fourth of the in-house cost.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100/80">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                Active Outreach Channels
              </h4>
              <div className="flex flex-wrap gap-2">
                {channels.map((channel, idx) => (
                  <span 
                    key={idx}
                    className="bg-white border border-slate-150 rounded-full px-3.5 py-1.5 text-xs font-black text-slate-700 hover:border-primary/20 hover:text-primary transition-colors cursor-default shadow-xs"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2. All-Inclusive Services Grid */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-primary uppercase">
              Omnichannel Solutions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-heading">
              Our B2B Lead Gen Services
            </h2>
            <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto">
              Meet our all-inclusive B2B lead generation services performed by world-class sales experts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-85px" }}
                  transition={{ duration: 0.5, delay: (idx % 5) * 0.05 }}
                  className="group rounded-2xl border border-slate-150 bg-white p-6 shadow-xs transition-all duration-350 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1.5 hover:border-primary/30"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="space-y-4">
                      {/* Icon Container */}
                      <div className="rounded-xl bg-primary-soft p-2.5 w-max text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-350 shadow-sm shadow-primary/5">
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      {/* Text details */}
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors duration-350">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold leading-relaxed text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
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
