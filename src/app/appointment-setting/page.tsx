"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Calendar, Target, Users, MapPin, Search, PlayCircle, BarChart, ChevronDown, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AppointmentSetting() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>Lead generation and appointment setting services</span>
            </div>
            <h1 className="text-5xl lg:text-[64px] font-black font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Get appointments that turn into deals
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              We find, verify, and warm up your prospects to deliver 20 monthly meetings that are worth your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-black tracking-wide text-white transition-all hover:bg-primary-hover shadow-red hover:shadow-lg hover:-translate-y-1">
                Get a quote <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-bold mb-10">* we'll schedule a 30-45-min call with our account executive</p>
            
            <div className="border-t border-slate-100 pt-8 mt-8">
               <h3 className="text-xl font-black text-slate-900 mb-6">We've helped great businesses<br/>get in front of their ideal clients</h3>
               <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="font-black text-lg">General Electric</div>
                 <div className="font-black text-lg">SEKISUI</div>
                 <div className="font-black text-lg">BAG CORP</div>
                 <div className="font-black text-lg">omnicharge</div>
                 <div className="font-black text-lg">SimplyNUC</div>
                 <div className="font-black text-lg">ami</div>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <img src="/appointment_hero.png" alt="Dashboard showing leads" className="relative z-10 w-full h-auto rounded-3xl shadow-premium border border-slate-100" />
          </div>
        </section>

        {/* 2. STATS SECTION */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black font-heading mb-8">
                 Our clients achieve 50%– 200% growth in pipeline volume
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
                 When businesses start working with us, they are impressed with our structured process, diligence, and attention to detail. This helps our clients achieve annual <span className="text-primary font-bold">ROI of 599%</span> and land <span className="text-primary font-bold">30+ monthly meetings</span>, making outreach one of their <span className="text-primary font-bold">top client acquisition channels</span>.
              </p>
              <div className="flex justify-center gap-6">
                 <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                    <PlayCircle className="w-5 h-5 text-primary" /> Watch the video
                 </button>
                 <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/5 transition-colors">
                    Read more about our approach
                 </button>
              </div>
           </div>
        </section>

        {/* 3. APPROACH SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-4xl font-black font-heading text-slate-900 mb-6">A 360-degree approach to B2B appointment setting services</h2>
                 <p className="text-lg text-slate-600 mb-6 font-medium">
                    At Faseeh Lall, we connect you with the right prospects through a strategic, cross-channel approach. Instead of just making contact, we focus on reaching the right people — decision-makers who actually need your solution.
                 </p>
                 <p className="text-lg text-slate-600 mb-10 font-medium">
                    By aligning messaging across multiple touchpoints and optimizing each interaction, we increase response rates, secure high-quality meetings, and help you build a stronger sales pipeline.
                 </p>
                 <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Talk to our experts to find out what suits you best</p>
                 <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-red hover:-translate-y-1 transition-all">Let's discuss your growth</button>
              </div>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                 <h3 className="text-xl font-black text-slate-900 mb-6">Outbound channels</h3>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle className="w-5 h-5 text-primary" /> Email outreach</li>
                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle className="w-5 h-5 text-primary" /> LinkedIn outreach</li>
                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle className="w-5 h-5 text-primary" /> Cold calling</li>
                 </ul>
                 <h3 className="text-xl font-black text-slate-900 mb-6">Follow-up add-ons</h3>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle className="w-5 h-5 text-primary" /> Intent-based calling</li>
                    <li className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle className="w-5 h-5 text-primary" /> Messengers (WhatsApp and SMS)</li>
                 </ul>
                 <div className="mt-8 pt-8 border-t border-slate-200">
                    <p className="font-black text-primary">+ On-demand inbound appointment channels</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. TESTIMONIALS SECTION */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 max-w-3xl mx-auto">B2B professionals from 50+ industries have transformed their sales with us</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">Business services</div>
                    <p className="text-lg text-slate-700 mb-8 font-medium">"They consistently delivered on time and were extremely responsive to our needs, resulting in seamless communication and integration. We were most impressed by Faseeh Lall's consistent delivery of high-quality leads..."</p>
                    <div className="font-bold text-slate-900">Rob Domenico</div>
                    <div className="text-sm text-slate-500">Chief revenue officer at Pinnacle Minds</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">Manufacturing</div>
                    <p className="text-lg text-slate-700 mb-8 font-medium">"The partnership with Faseeh Lall was right what we needed to accelerate our lead generation efforts. Their approach has not only exceeded our expectations but has also provided us with a solid foundation..."</p>
                    <div className="font-bold text-slate-900">Pratyush Ghuwalewala</div>
                    <div className="text-sm text-slate-500">Senior marketing manager at GE HealthCare</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">Advertising & marketing</div>
                    <p className="text-lg text-slate-700 mb-8 font-medium">"I had used 2 other companies previous to using Faseeh Lall and didn't see half the success that they did."</p>
                    <div className="font-bold text-slate-900">Jeremiah Guappone</div>
                    <div className="text-sm text-slate-500">General manager at Data Genomix</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">Software development</div>
                    <p className="text-lg text-slate-700 mb-8 font-medium">"Their appointment-setting services were top-notch. They scheduled appointments with decision-makers who were genuinely interested in our software solutions, making our sales process much more efficient."</p>
                    <div className="font-bold text-slate-900">Kateryna Bota</div>
                    <div className="text-sm text-slate-500">Chief marketing officer at LEAFIO AI</div>
                 </div>
              </div>
              <div className="text-center">
                 <h3 className="text-2xl font-black text-slate-900 mb-6">Find out which companies benefit the most with Faseeh Lall</h3>
                 <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-red hover:-translate-y-1 transition-all">Read our case studies</button>
              </div>
           </div>
        </section>

        {/* 5. CHALLENGES WE SOLVE */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-16">Challenges we solve for sales and marketing teams</h2>
              
              <div className="space-y-12">
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Customer acquisition ROI decline</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-white p-6 rounded-2xl border border-slate-100">
                          <div className="text-primary font-black uppercase text-xs tracking-widest mb-3">Problem</div>
                          <p className="text-slate-700 font-medium italic mb-4">"The customer acquisition costs are all out of whack. It's becoming increasingly expensive to find new clients. We're spending about 2/3 of our sales quota only to provide our BDR team... ROI just doesn't add up."</p>
                          <div className="text-sm font-bold">— Jeff, CRO</div>
                       </div>
                       <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                          <div className="text-primary font-black uppercase text-xs tracking-widest mb-3">Solution</div>
                          <p className="text-slate-800 font-medium mb-4">"Building an in-house team gets expensive... With Faseeh Lall, you avoid all those overhead costs. You're essentially getting a full-service team of experts from day one, without the burden of hiring and managing them."</p>
                          <div className="text-sm font-bold">— Michael, Co-founder</div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Time lost on unqualified appointments</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-white p-6 rounded-2xl border border-slate-100">
                          <div className="text-primary font-black uppercase text-xs tracking-widest mb-3">Problem</div>
                          <p className="text-slate-700 font-medium italic mb-4">"The biggest issue is always the same — they prioritize booking as many meetings as possible... We end up talking to people with neither need nor real decision-making power."</p>
                          <div className="text-sm font-bold">— Cedric, Head of Sales Ops</div>
                       </div>
                       <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                          <div className="text-primary font-black uppercase text-xs tracking-widest mb-3">Solution</div>
                          <p className="text-slate-800 font-medium mb-4">"Our team prioritizes lead quality over quantity. The process involves in-depth research, rigorous qualification, and manual validation to ensure every appointment is with a genuine prospect."</p>
                          <div className="text-sm font-bold">— Julia, Head of Lead Research</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. HOW APPOINTMENT SETTING WORKS (FROM SCREENSHOT 1) */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">How appointment setting works</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">We've mastered each step and gone deeper than other outsourced appointment setting companies so you get ready-to-buy leads.</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                 {/* Form Side */}
                 <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 h-fit sticky top-32">
                    <h3 className="text-2xl font-black text-slate-900 text-center mb-8">Impressed with our process and approach?<br/>Let's talk!</h3>
                    <form className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                          <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <input type="email" placeholder="Business email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                          <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                             <div className="bg-slate-50 px-3 py-3 border-r border-slate-200 text-sm font-medium">🇺🇸 +1</div>
                             <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 focus:outline-none" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="Job title" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                          <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500">
                                <option>Company size</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500">
                                <option>Company HQ</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500">
                                <option>Available monthly budget</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500">
                                <option>Industry</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                       </div>
                       <div className="flex items-center gap-4 mt-8">
                          <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-red hover:bg-primary-hover transition-colors">Continue</button>
                          <p className="text-xs text-slate-500 font-medium">By submitting the form I agree with the <a href="#" className="underline">Privacy policy</a></p>
                       </div>
                    </form>
                 </div>

                 {/* Cards Side */}
                 <div className="space-y-6">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-2xl font-black text-slate-900 mb-2">Analysis and strategy development</h3>
                       <p className="text-slate-500 font-medium mb-6">To craft a unique strategy that will yield the highest impact, we:</p>
                       <ul className="space-y-4">
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><Target className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Dive into your market, past sales performance, industry trends, competition, and goals</p>
                          </li>
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><Search className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Research your sales and marketing assets, messaging, channels, and successful case studies</p>
                          </li>
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><Users className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Map out the best engagement channels with relevant messaging approaches to connect with the right decision-makers</p>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-2xl font-black text-slate-900 mb-2">Finding and qualifying the right prospects</h3>
                       <p className="text-slate-500 font-medium mb-6">To ensure precise targeting, your dedicated researchers will:</p>
                       <ul className="space-y-4">
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><Search className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Manually search, validate, and identify key decision-makers who fit your ideal customer profile</p>
                          </li>
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><CheckCircle2 className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Filter out low-potential leads early so that your team only speaks with real opportunities</p>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-2xl font-black text-slate-900 mb-2">Cross-channel prospects engagement</h3>
                       <p className="text-slate-500 font-medium mb-6">Now, it's the turn of our copywriters and SDRs who:</p>
                       <ul className="space-y-4">
                          <li className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100">
                             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold"><Target className="w-5 h-5"/></div>
                             <p className="text-slate-700 font-medium text-sm pt-1">Strategize on messaging, craft emails and scripts that spark interest, tackle pain points, and start real conversations</p>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. GLOBAL PRESENCE MAP */}
        <section className="py-24 bg-white border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6 max-w-3xl mx-auto">A U.S.-based appointment setting company with a global presence</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-4xl mx-auto">
                    Our international team books sales appointments worldwide, not only in the United States. Whether you need to engage with B2B decision-makers in domestic markets or overseas, just leave it to Faseeh Lall. Since 2017, we have scheduled online and in-person meetings across the globe for our clients in 40+ countries, resulting in 67,200+ deals in their pipelines.
                 </p>
              </div>
              <div className="relative w-full bg-slate-50 rounded-[3rem] p-12 overflow-hidden mb-12 flex justify-center border border-slate-100">
                 <img src="/world_map.png" alt="Map" className="w-full max-w-4xl opacity-80 mix-blend-multiply" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                 <div>
                    <div className="text-slate-500 font-bold mb-2">North America</div>
                    <div className="text-3xl font-black text-primary">40,000+</div>
                 </div>
                 <div>
                    <div className="text-slate-500 font-bold mb-2">Europe</div>
                    <div className="text-3xl font-black text-primary">11,820+</div>
                 </div>
                 <div>
                    <div className="text-slate-500 font-bold mb-2">Asia</div>
                    <div className="text-3xl font-black text-primary">6,500+</div>
                 </div>
                 <div>
                    <div className="text-slate-500 font-bold mb-2">Australia</div>
                    <div className="text-3xl font-black text-primary">6,000+</div>
                 </div>
                 <div>
                    <div className="text-slate-500 font-bold mb-2">South America</div>
                    <div className="text-3xl font-black text-primary">1,500+</div>
                 </div>
                 <div>
                    <div className="text-slate-500 font-bold mb-2">Africa</div>
                    <div className="text-3xl font-black text-primary">1,300+</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8. TEAM SECTION */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-16">
                 <h2 className="text-4xl font-black font-heading text-slate-900 mb-4">Your dedicated B2B appointment setters</h2>
                 <p className="text-lg text-slate-600 font-medium">Meet the team of savvy professionals who make your appointments happen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Account manager (AM)</h3>
                    <p className="text-slate-600 font-medium mb-6">The key strategist and your person of contact. They orchestrate the campaign from the initial setup to performance tracking and refinement.</p>
                    <div className="text-primary font-bold">Learn more →</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Sales development representative (SDR)</h3>
                    <p className="text-slate-600 font-medium mb-6">Strategy executors. They launch campaigns, book and qualify appointments, and ensure every prospect meets with your sales rep.</p>
                    <div className="text-primary font-bold">Learn more →</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Lead sourcing specialist</h3>
                    <p className="text-slate-600 font-medium mb-6">Using a meticulous manual approach, they delve into all possible data points to provide you with the highest quality leads.</p>
                    <div className="text-primary font-bold">Learn more →</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Sales copywriter</h3>
                    <p className="text-slate-600 font-medium mb-6">With a keen eye for your company's style, they optimize copies for campaigns to drive higher engagement and positive replies.</p>
                    <div className="text-primary font-bold">Learn more →</div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-3">Email deliverability specialist (EDS)</h3>
                    <p className="text-slate-600 font-medium mb-6">Ensure your messages reach your leads' inboxes. They track spam rates and domain health daily to maintain performance.</p>
                    <div className="text-primary font-bold">Learn more →</div>
                 </div>
                 <div className="bg-primary text-white p-8 rounded-3xl shadow-red cursor-pointer">
                    <h3 className="text-xl font-black mb-3">A dedicated center of excellence (COE)</h3>
                    <p className="text-white/80 font-medium mb-6">For complex projects with numerous active channels, we recruit in-house and partner experts who develop comprehensive strategies.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. COMPARISON TABLE */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-16 text-center">Why choose Faseeh Lall</h2>
              <div className="overflow-x-auto rounded-3xl shadow-sm border border-slate-200">
                 <table className="w-full text-left min-w-[900px]">
                    <thead>
                       <tr>
                          <th className="p-8 border-b border-r border-slate-200 bg-primary/5 text-2xl font-black text-slate-900 w-1/3">Faseeh Lall</th>
                          <th className="p-8 border-b border-r border-slate-200 bg-slate-50 text-xl font-black text-slate-600 w-1/3">Other agencies</th>
                          <th className="p-8 border-b border-slate-200 bg-slate-50 text-xl font-black text-slate-600 w-1/3">In-house team</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td className="p-8 border-b border-r border-slate-200 bg-primary/5 font-medium text-slate-800">Our strategic outreach and high-quality leads match your client profile and yield <span className="font-bold text-primary">100–400 annual appointments</span> with decision-makers.</td>
                          <td className="p-8 border-b border-r border-slate-200 font-medium text-slate-500">Standardized outreach methods may not always align with your ideal customer profile, affecting lead quality.</td>
                          <td className="p-8 border-b border-slate-200 font-medium text-slate-500">Prospecting is time-consuming, leaving less time for nurturing clients and closing deals.</td>
                       </tr>
                       <tr>
                          <td className="p-8 border-b border-r border-slate-200 bg-primary/5 font-medium text-slate-800">We act as a <span className="font-bold">true extension of your in-house team</span>, aligning with your marketing, sales goals, and internal processes.</td>
                          <td className="p-8 border-b border-r border-slate-200 font-medium text-slate-500">Outsourced appointment setting vendors often operate in silos and focus solely on sales.</td>
                          <td className="p-8 border-b border-slate-200 font-medium text-slate-500">Marketing and sales teams frequently operate with different KPIs and tools.</td>
                       </tr>
                       <tr>
                          <td className="p-8 border-b border-r border-slate-200 bg-primary/5 font-medium text-slate-800">We provide you with proprietary tools and all-in-one software for outreach, A/B testing, and tracking — <span className="font-bold text-primary">at no extra cost</span>.</td>
                          <td className="p-8 border-b border-r border-slate-200 font-medium text-slate-500">Additional costs for essential tools like email warm-up, A/B testing, and tracking may be passed on to you.</td>
                          <td className="p-8 border-b border-slate-200 font-medium text-slate-500">You pay hefty fees for lead scraping, spam checking, email sending, warm-up, monitoring, and reporting tools.</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 10. BADGES AND PRICING */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-black font-heading text-slate-900 mb-6">Award-winning B2B appointment setting agency</h2>
                 <p className="text-lg text-slate-600 font-medium mb-12">Faseeh Lall is the only lead generation company to rank in the top 100 best companies worldwide. Explore our accolades and discover how we help businesses grow.</p>
                 <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-48 text-center">
                       <div className="font-black text-xl mb-1">Clutch</div>
                       <div className="text-primary font-bold mb-1">4.9 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">230 Reviews</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-48 text-center">
                       <div className="font-black text-xl mb-1">G2</div>
                       <div className="text-primary font-bold mb-1">4.8 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">93 Reviews</div>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
                 <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                       <h2 className="text-4xl lg:text-5xl font-black font-heading mb-8 leading-tight">Appointment setting pricing tailored to your goals</h2>
                       <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
                          <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-sm">The average starter price:</p>
                          <div className="text-5xl font-black text-primary mb-6">from $4,000</div>
                          <div className="flex justify-between items-center pb-4 border-b border-white/10">
                             <span className="font-bold text-slate-300">1,500</span> <span className="text-slate-500">leads/month</span>
                          </div>
                          <div className="flex justify-bottom items-center py-4 border-b border-white/10">
                             <span className="font-bold text-slate-300">3</span> <span className="text-slate-500 ml-auto">outreach channels</span>
                          </div>
                          <div className="flex justify-between items-center pt-4">
                             <span className="font-bold text-slate-300">100</span> <span className="text-slate-500">guaranteed appts/year</span>
                          </div>
                       </div>
                       <button className="bg-primary w-full py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-red">Get my custom proposal</button>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black mb-6">What's included in all packages:</h3>
                       <ul className="space-y-4 mb-8">
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Full sales audit and strategy mapping</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Total addressable market calculation</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Manual lead research and validation</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Transparent reports available 24/7</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Copywriting and content editing</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">Sales appointment booking</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-300">No-show recovery</span></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-12 text-center">FAQ</h2>
              <div className="space-y-4">
                 <div className="border border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition-colors group">
                    <div className="font-black text-xl text-slate-900 flex justify-between items-center">
                       What pricing options do you provide?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                    </div>
                 </div>
                 <div className="border border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition-colors group">
                    <div className="font-black text-xl text-slate-900 flex justify-between items-center">
                       What do we need to provide Faseeh Lall with to start our campaign?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                    </div>
                 </div>
                 <div className="border border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition-colors group">
                    <div className="font-black text-xl text-slate-900 flex justify-between items-center">
                       How exactly will you book meetings for us?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                    </div>
                 </div>
                 <div className="border border-slate-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition-colors group">
                    <div className="font-black text-xl text-slate-900 flex justify-between items-center">
                       What happens after the appointment is booked?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
