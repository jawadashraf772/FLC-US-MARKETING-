"use client";

import { motion } from "framer-motion";
import {
  Compass,
  FileText,
  Workflow,
  Send,
  Search,
  Code2,
  Tv2,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Award,
  Users2,
} from "lucide-react";

export default function CoreOfferSection() {
  const roles = [
    {
      title: "Marketing Strategist",
      description: "Architects target positioning, channels, and campaigns.",
      icon: Compass,
    },
    {
      title: "Direct Response Copywriter",
      description: "Writes high-converting emails, ad scripts, and landing page copy.",
      icon: FileText,
    },
    {
      title: "CRM Automation Specialist",
      description: "Builds workflows to funnel leads seamlessly into meetings.",
      icon: Workflow,
    },
    {
      title: "Cold Outreach Manager",
      description: "Launches and tests multi-channel campaigns on LinkedIn and Email.",
      icon: Send,
    },
    {
      title: "Lead Researcher",
      description: "Scrapes, verifies, and segments contact lists targeting your exact ICP.",
      icon: Search,
    },
    {
      title: "Web Developer",
      description: "Builds lightning-fast, high-converting Landing Pages.",
      icon: Code2,
    },
    {
      title: "VSL & Video Director",
      description: "Directs visual scripts and Video Sales Letters to build trust.",
      icon: Tv2,
    },
    {
      title: "Media Buyer / Ad Specialist",
      description: "Launches, manages, and scales paid ads across Meta & LinkedIn.",
      icon: TrendingUp,
    },
    {
      title: "Data & Tracking Analyst",
      description: "Ensures accurate analytics tracking, ROI reporting, and attribution.",
      icon: BarChart3,
    },
    {
      title: "Sales Enablement Coach",
      description: "Optimizes sales pipelines and scripts to improve lead close rates.",
      icon: Award,
    },
    {
      title: "Deliverability Engineer",
      description: "Monitors domain health, inbox spam scores, and DNS configurations.",
      icon: ShieldCheck,
    },
    {
      title: "Dedicated Account Manager",
      description: "Provides daily status syncs and acts as your single point of contact.",
      icon: Users2,
    },
  ];

  return (
    <section id="value" className="bg-slate-50/50 py-24 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              The Talent Advantage
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading leading-tight">
              Your Entire Marketing Department, Delivered.
            </h2>
            <p className="text-base text-slate-500 font-sans leading-relaxed font-medium">
              Instead of hiring an in-house team at <span className="font-extrabold text-brand-dark">8 Lacs+/mo</span>, get our full-stack production team for a fraction of the cost.
            </p>
          </div>
          
          {/* Comparison Card */}
          <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-xs shrink-0 lg:max-w-sm flex items-center gap-4">
            <div className="rounded-full bg-red-50 px-3 py-1.5 text-center shrink-0">
              <span className="block text-[10px] font-black text-red-500 uppercase">IN-HOUSE COST</span>
              <span className="text-sm font-black text-red-600 line-through">Rs. 8L+/mo</span>
            </div>
            <div>
              <span className="block text-[10px] font-black text-primary uppercase">OUR FRAC TEAM</span>
              <p className="text-sm font-bold text-slate-500 leading-tight">
                All <span className="text-primary font-black">12 roles active</span> immediately at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* Roles Grid (Direct Grid View, No Tabs) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.05 }}
                className="group rounded-2xl border border-slate-150 bg-white p-6 shadow-xs transition-all duration-350 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1.5 hover:border-primary/30"
              >
                <div className="flex flex-col space-y-4">
                  {/* Icon Box */}
                  <div className="rounded-xl bg-primary-soft p-2.5 w-max text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-[1.08] transition-all duration-350 shadow-sm shadow-primary/5">
                    <Icon className="h-5 w-5 transition-colors duration-350" />
                  </div>
                  {/* Title & Desc */}
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-brand-dark group-hover:text-primary transition-colors duration-350">
                      {role.title}
                    </h3>
                    <p className="text-xs font-semibold leading-relaxed text-slate-400">
                      {role.description}
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
