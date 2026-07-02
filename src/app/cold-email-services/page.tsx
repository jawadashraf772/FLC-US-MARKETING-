"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronDown, CheckCircle, Search, Target, Mail, BarChart, Settings, Users } from "lucide-react";
import Image from "next/image";

export default function ColdEmailServices() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>#1 B2B cold email agency</span>
            </div>
            <h1 className="text-5xl lg:text-[64px] font-black font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Bespoke email outreach that turns "No" into "Yes"
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              We design email campaigns that consistently convert, helping you generate B2B leads through relevance-first targeting and strict compliance with deliverability standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-black tracking-wide text-white transition-all hover:bg-primary-hover shadow-red hover:shadow-lg hover:-translate-y-1">
                Get a quote <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-bold">*We'll book a 30-45-min call with a dedicated account executive</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <div className="relative z-10 w-full h-auto rounded-3xl shadow-premium border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center overflow-hidden">
               {/* Visual Placeholder for Hero Graphic */}
               <div className="absolute top-1/4 left-1/4 w-32 h-12 bg-white rounded-lg shadow-sm border border-slate-200 p-2 flex items-center gap-2 transform -rotate-6">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div className="h-2 w-16 bg-slate-200 rounded"></div>
               </div>
               <div className="absolute top-1/2 left-1/2 w-48 h-16 bg-white rounded-lg shadow-md border border-slate-200 p-3 flex items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                     <div className="h-2 w-24 bg-slate-300 rounded mb-2"></div>
                     <div className="h-2 w-16 bg-slate-200 rounded"></div>
                  </div>
               </div>
               <div className="absolute bottom-1/4 right-1/4 w-32 h-12 bg-white rounded-lg shadow-sm border border-slate-200 p-2 flex items-center gap-2 transform rotate-6">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div className="h-2 w-16 bg-slate-200 rounded"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. STATS SECTION */}
        <section className="py-24 bg-[#09090B] text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-black mb-12">Faseeh Lall's average email outreach campaign results</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 border-t border-white/10 pt-12">
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">60%+</div>
                    <div className="text-slate-400 font-medium">email engagement rate</div>
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">99%</div>
                    <div className="text-slate-400 font-medium">of emails reach the recipients' inboxes</div>
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">7 out of 10</div>
                    <div className="text-slate-400 font-medium">inactive leads get reengaged</div>
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">Up to 3</div>
                    <div className="text-slate-400 font-medium">emails are required to set up an appointment</div>
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">6%+</div>
                    <div className="text-slate-400 font-medium">email reply rate</div>
                 </div>
                 <div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">30%</div>
                    <div className="text-slate-400 font-medium">more appointments compared to other agencies</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. VALUE PROP SECTION */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 max-w-3xl mx-auto">We take the frustration out of outsourced cold email outreach</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                 {/* Precision */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                    <div className="text-primary font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                       <Target className="w-4 h-4" /> Precision
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Manual lead vetting is a non-negotiable</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm">We hand-check every prospect against your buyer personas' features — industry, role, challenges, and buying signals — so your team only meets people who matter.</p>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Qualified meetings, not just replies</h3>
                    <p className="text-slate-600 font-medium text-sm">We go beyond "any reply" by qualifying for real buying intent, so your team steps into conversations that can move deals forward.</p>
                 </div>
                 {/* Engagement */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                    <div className="text-primary font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                       <Mail className="w-4 h-4" /> Engagement
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Human touch in every message</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm">Our dedicated strategists with industry-focused expertise tailor each template to your personas and study your unique brand voice to ensure every message feels like it came from your team.</p>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Smart response handling</h3>
                    <p className="text-slate-600 font-medium text-sm">Whether it's "not now," "more info," or even a negative, we process each reply manually to reengage at the right time and uncover hidden opportunities.</p>
                 </div>
                 {/* Execution */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                    <div className="text-primary font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                       <Settings className="w-4 h-4" /> Execution
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Compliance and deliverability by design</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm">Faseeh Lall's deliverability and tech specialists adhere to the latest GDPR/CAN-SPAM policies and monitor your domain health daily to protect your reputation and land safely in the inbox.</p>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Pipeline acceleration beyond appointments</h3>
                    <p className="text-slate-600 font-medium text-sm">We always go the extra mile: reengage no-shows, nurture warm leads, support your reps with the context they need to close, and audit your entire marketing and sales strategy.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. SERVICE IN ACTION SECTION (Form + Cards) */}
        <section className="py-24 bg-white relative">
           <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">Faseeh Lall's cold email marketing service in action</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">Our experts ensure every step leads to warm appointments.</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                 {/* Form Side */}
                 <div className="bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-100 h-fit sticky top-32">
                    <h3 className="text-2xl font-black text-slate-900 text-center mb-8">Impressed with our process and approach?<br/>Let's talk!</h3>
                    <form className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                          <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <input type="email" placeholder="Business email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                          <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary bg-white">
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
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500 bg-white">
                                <option>Company size</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500 bg-white">
                                <option>Company HQ</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500 bg-white">
                                <option>Available monthly budget</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-500 bg-white">
                                <option>Industry</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                          </div>
                       </div>
                       <div className="flex items-center gap-4 mt-8">
                          <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-red hover:bg-primary-hover transition-colors w-full sm:w-auto">Continue</button>
                          <p className="text-xs text-slate-500 font-medium">By submitting the form I agree with the <a href="#" className="underline">Privacy policy</a></p>
                       </div>
                    </form>
                 </div>

                 {/* Cards Side */}
                 <div className="space-y-6">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-xl font-black text-slate-900 mb-2">ICP validation and your company analysis</h3>
                       <p className="text-slate-500 font-medium mb-6">We begin with in-depth research that includes:</p>
                       <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Capturing the unique tone of voice and style of your company</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Reviewing your industry trends, competitors, and your past sales and marketing performance</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Mapping the groups of your ideal prospects, their challenges, actual roles, and day-to-day responsibilities</span>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-xl font-black text-slate-900 mb-2">Finding and qualifying the right prospects</h3>
                       <p className="text-slate-500 font-medium mb-6">The lead database quality is essential for us. To ensure precise targeting, your dedicated researchers will:</p>
                       <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Manually identify decision-makers who match your ICP and validate them with the latest AI</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Analyze and refine your existing database and do-not-contact list, if provided</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Filter out low-potential leads early, leaving only real opportunities</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Segment and enrich cold email lead lists to enable highly personalized campaigns</span>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-xl font-black text-slate-900 mb-2">Deliverability audit and tech setup</h3>
                       <p className="text-slate-500 font-medium mb-6">Our deliverability experts safeguard your reputation and prepare the ground for high-performance campaigns. They:</p>
                       <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Review your outreach history, database quality, templates, and follow-up tactics</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Assess domain health, uncover risks, and recommend alternative domains if needed</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Configure DNS, create mailboxes, and carefully warm them up with small batches before scaling</span>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <h3 className="text-xl font-black text-slate-900 mb-2">Cold email campaign launch</h3>
                       <p className="text-slate-500 font-medium mb-6">Our SDRs roll out your campaign with discipline and precision. They:</p>
                       <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Apply your approved messaging sequences, personalized to each buyer segment</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Follow a proven follow-up cadence — shorter intervals early on, then gradually longer</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Monitor engagement metrics like opens, clicks, and reply types to adjust timing, content, and frequency</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Ensure every prospect gets timely, respectful touchpoints without over-messaging</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-700 font-medium text-sm">Run A/B tests on subject lines and copies to keep improving results from day one</span>
                          </li>
                       </ul>
                    </div>

                    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                       <h3 className="text-xl font-black text-slate-900 mb-2">Amplifying email prospecting with intent-based data</h3>
                       <p className="text-slate-700 font-medium mb-6">We offer <span className="font-bold text-primary">cross-channel outreach</span> for even higher conversions. We can boost your performance by:</p>
                       <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-800 font-medium text-sm">Gradually sending LinkedIn connection requests and messages for building stronger client relationships</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-800 font-medium text-sm">Developing a professional B2B content strategy for your LinkedIn to position your company and its key personas as industry leaders</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-800 font-medium text-sm">Incorporating warm calls based on the intent data and engagement to secure appointments scheduled via emails or LinkedIn</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-800 font-medium text-sm">Doing warm calling in tandem with offline industry events to schedule face-to-face appointments</span>
                          </li>
                          <li className="flex items-start gap-3">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                             <span className="text-slate-800 font-medium text-sm">Reengaging with your inactive leads via cold calls</span>
                          </li>
                       </ul>
                    </div>

                 </div>
              </div>
           </div>
        </section>

        {/* 5. WHY EMAILS LAND SECTION */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-16 text-center max-w-4xl mx-auto">Why Faseeh Lall emails land, engage, and convert</h2>

              <div className="space-y-16">
                 {/* Part 1 */}
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">We start small before winning big to achieve a 99% deliverability rate</h3>
                    <p className="text-lg text-slate-600 font-medium mb-10 max-w-3xl">Our cold email experts send a limited number of emails daily to build trust with email providers. Once we reach full volumes, your campaigns are optimized to land safely in inboxes and generate B2B appointments. On average, it takes about 2 weeks to set up 200+ daily messages*.</p>
                    <div className="flex flex-wrap gap-4">
                       <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200">
                          <div className="font-black text-primary mb-1">Day 1</div>
                          <div className="font-bold text-slate-900 mb-2">10-20 emails/day</div>
                          <div className="text-sm text-slate-500 font-medium">Campaign kick-off</div>
                       </div>
                       <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200">
                          <div className="font-black text-primary mb-1">Day 2</div>
                          <div className="font-bold text-slate-900 mb-2">Pause</div>
                          <div className="text-sm text-slate-500 font-medium">Check with deliverability expert</div>
                       </div>
                       <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200">
                          <div className="font-black text-primary mb-1">Day 3-7</div>
                          <div className="font-bold text-slate-900 mb-2">30-40 emails/day</div>
                          <div className="text-sm text-slate-500 font-medium">Reputation building</div>
                       </div>
                       <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200">
                          <div className="font-black text-primary mb-1">Day 8-12</div>
                          <div className="font-bold text-slate-900 mb-2">60-80 emails/day</div>
                          <div className="text-sm text-slate-500 font-medium">First reply patterns</div>
                       </div>
                       <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 bg-primary/5 border-primary/20">
                          <div className="font-black text-primary mb-1">Day 14</div>
                          <div className="font-bold text-slate-900 mb-2">80-200 emails/day</div>
                          <div className="text-sm text-slate-500 font-medium">Campaigns fully active</div>
                       </div>
                    </div>
                    <p className="text-xs text-slate-400 font-bold mt-4">*Sending limits vary depending on email service provider, season, lead quantity, engagement rates, and type of initial responses.</p>
                 </div>

                 {/* Part 2 */}
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">We design every email to sound natural and resonate</h3>
                    <p className="text-lg text-slate-600 font-medium mb-10 max-w-4xl">We spark conversations that provide value and respect your prospects' time. The typical cadence consists of 4–5 emails that look like this: The first and third emails are brief but value-packed, outcome-focused, and stripped of spammy words. Follow-up waves start with brief reminders and always provide additional info.</p>
                    
                    <div className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm relative mt-8">
                       <div className="flex flex-col gap-6 relative z-10">
                          {/* Box 1 */}
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">Waves 1 and 3</h4>
                                <p className="text-slate-500 font-medium text-sm">Longer, with specific subject lines.</p>
                             </div>
                          </div>
                          {/* Box 2 */}
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">Intro</h4>
                                <p className="text-slate-500 font-medium text-sm">Short and sweet, 1-2 lines max.</p>
                             </div>
                          </div>
                          {/* Box 3 */}
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">Value</h4>
                                <ul className="space-y-1 mb-2">
                                   <li className="text-slate-500 font-medium text-sm flex items-start gap-2"><span className="text-primary mt-1">•</span> Less "I/we language"</li>
                                   <li className="text-slate-500 font-medium text-sm flex items-start gap-2"><span className="text-primary mt-1">•</span> Greater focus on prospects' needs; more metrics and case studies.</li>
                                </ul>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4 max-w-md">
                                   <div className="text-slate-700 font-bold text-sm mb-1">Spam words</div>
                                   <div className="text-slate-500 text-sm mb-3">No "please," "call," "cost/price/money/$," etc.</div>
                                   <div className="text-slate-700 font-bold text-sm mb-1">Variables</div>
                                   <div className="text-slate-500 text-sm">{'{{FirstName}}'} - e.g., John (prospect's name),<br/>{'{{Industry}}'} - e.g., Manufacturing.</div>
                                </div>
                             </div>
                          </div>
                          {/* Box 4 */}
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-1">4</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">Call-to-action</h4>
                                <p className="text-slate-500 font-medium text-sm">Straightforward, simple question, 1 line max.</p>
                             </div>
                          </div>
                          {/* Box 5 */}
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-1">5</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">Wave 2 and 4</h4>
                                <p className="text-slate-500 font-medium text-sm">Short follow-ups.</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Part 3 */}
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">We treat every reply as valuable, and handle it with care</h3>
                    <p className="text-lg text-slate-600 font-medium mb-10 max-w-4xl">Our SDRs review and respond to every message within 24 hours, following clear rules to capture insights, nurture future opportunities, or book meetings right away. Every type of response has its own playbook, so nothing slips through the cracks.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                             <h4 className="font-black text-lg text-slate-900 mb-1">Interested</h4>
                             <p className="text-slate-600 font-medium text-sm">We provide additional information and schedule a meeting.</p>
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                             <h4 className="font-black text-lg text-slate-900 mb-1">Not right now</h4>
                             <p className="text-slate-600 font-medium text-sm">We ask for the best time to reengage, adding the prospect to the relevant contact list.</p>
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                             <h4 className="font-black text-lg text-slate-900 mb-1">More info</h4>
                             <p className="text-slate-600 font-medium text-sm">We send tailored materials and keep the dialogue alive.</p>
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                             <h4 className="font-black text-lg text-slate-900 mb-1">Forwarded</h4>
                             <p className="text-slate-600 font-medium text-sm">We contact the referred decision-maker with a custom follow-up.</p>
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 md:col-span-2">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                          <div>
                             <h4 className="font-black text-lg text-slate-900 mb-1">Not interested</h4>
                             <p className="text-slate-600 font-medium text-sm">We capture reasons, review objections, and keep the door open for future timing.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Part 4 */}
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">We provide full transparency, so you always know what's working</h3>
                    <p className="text-lg text-slate-600 font-medium max-w-4xl">From day one, you get full visibility into your outreach — from segmented campaigns and lead lists to strategy documents and scripts. Our dashboards track real-time and historical data on engagement, types of replies, and appointments. With HubSpot CRM at the core, we centralize reporting, measure impact, and make quick adjustments for continuous improvement.</p>
                 </div>

              </div>
           </div>
        </section>

        {/* 6. BADGES AND PRICING */}
        <section className="py-24 bg-white border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-black font-heading text-slate-900 mb-6">Faseeh Lall is the top-rated cold email lead generation agency in the USA</h2>
                 <p className="text-lg text-slate-600 font-medium mb-12 max-w-3xl mx-auto">We've earned recognition for our exceptional services, delivery capabilities, and positive work culture. Check out our clients' testimonials to see how we boosted their revenue.</p>
                 <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-48 text-center">
                       <div className="font-black text-xl mb-1">Clutch</div>
                       <div className="text-primary font-bold mb-1">4.9 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">230 Reviews</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-48 text-center">
                       <div className="font-black text-xl mb-1">G2</div>
                       <div className="text-primary font-bold mb-1">4.8 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">93 Reviews</div>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden border border-slate-100 shadow-premium">
                 <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                       <h2 className="text-4xl lg:text-5xl font-black font-heading mb-8 leading-tight text-slate-900">Cold emailing service pricing</h2>
                       <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
                          <p className="text-primary font-black mb-4 uppercase tracking-widest text-xs">The average starter price:</p>
                          <div className="text-5xl font-black text-slate-900 mb-6">from $4,000</div>
                          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                             <span className="font-black text-slate-800">1,500</span> <span className="text-slate-500 font-medium">leads/month</span>
                          </div>
                          <div className="flex justify-between items-center pt-4">
                             <span className="font-black text-slate-800">100+</span> <span className="text-slate-500 font-medium">guaranteed appts/year</span>
                          </div>
                       </div>
                       <button className="bg-primary w-full py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-red text-white">Get my custom proposal</button>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black mb-6 text-slate-900">What is included in all packages:</h3>
                       <ul className="space-y-4 mb-8">
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">GTM strategy development</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Manual lead generation, validation, and data enrichment</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">A dedicated account manager and SDR</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Dedicated email templates involving professional copywriting and editing</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Continuous email deliverability maintenance</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Transparent reporting available 24/7</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Appointment scheduling, response handling, and no-show recovery</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Ongoing strategy improvement</span></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-12 text-center">FAQ</h2>
              <div className="space-y-4">
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       Do you validate the emails before launching an outreach campaign?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       Absolutely. Our research team uses several tools to verify email addresses, names, positions, and other important data.
                    </div>
                 </details>
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       How many emails can you send monthly?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       It depends, and the number of influencing factors is pretty extensive. For some projects, Faseeh Lall's SDRs can send over 10K emails per month, while for others, this indicator can be 2–3 times lower because of the goals, ICP, market peculiarities, domain restrictions, budgets, etc.
                    </div>
                 </details>
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       I need multiple email campaigns for different titles. Can you do that?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       No problem. If you need to reach multiple audiences, we will craft messages and develop unique approaches for each.
                    </div>
                 </details>
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       Where do you get the prospects' email addresses?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       Our teams use lead research tools that legally provide actual information. They also use open sources, verifying and double-checking them afterward manually and with the help of AI tools.
                    </div>
                 </details>
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       How do you keep campaigns out of spam folders?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       We combine technology and best practices to maximize inbox placement. Every campaign runs on dedicated, warmed-up domains and mailboxes, with proper DNS records (SPF, DKIM, DMARC) configured. Our anti-spam team monitors domain health daily, while Folderly — Faseeh Lall's proprietary deliverability platform — detects and fixes spam triggers in real time.
                    </div>
                 </details>
                 <details className="border border-slate-200 rounded-2xl cursor-pointer hover:border-primary transition-colors group">
                    <summary className="font-black text-xl text-slate-900 flex justify-between items-center p-6 list-none [&::-webkit-details-marker]:hidden">
                       When will I see the first results?
                       <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-primary transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 font-medium">
                       We launch your campaign in about 14 days, starting with setup, warm-up, content creation, and lead research. Once live, outreach ramps up steadily, so you can expect tangible outcomes within 30–90 days as volumes and engagement grow.
                    </div>
                 </details>
              </div>
           </div>
        </section>

        {/* 8. EXPERTISE SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-12">Peek inside our cold email lead gen and appointment setting expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">How to write B2B emails that convert: 8-step guide (with examples)</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1">Over the past 8 years, we've written and tested 50,000+ B2B emails across 50+ industries, helping clients land meetings with decision-makers. One thing we've learned? Generic "best practices" and templates rarely work in B2B sales conversations.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">22 sales follow-up email samples and templates that generate replies</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1">Over the past 8 years, our team has sent 100K+ follow-up emails to hundreds of B2B companies across every stage of the sales cycle.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">The B2B lead qualification process we use for our clients' campaigns</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1">On initial calls, approximately 85% of our prospects express frustration over low-quality leads that divert their sales teams to unproductive pursuits instead of focusing on genuine client engagement and securing new clients.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="py-24 bg-primary relative overflow-hidden">
           <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-white mb-8">Ready to build your predictable appointment setting machine?</h2>
              <button className="bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-colors shadow-xl hover:-translate-y-1">Get a quote</button>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
