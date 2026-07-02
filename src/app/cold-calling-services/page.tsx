"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronDown, PhoneCall, Headphones, Mic, BarChart, Settings, PlayCircle, Users, Activity } from "lucide-react";

export default function ColdCallingServices() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>#1 B2B cold calling agency</span>
            </div>
            <h1 className="text-5xl lg:text-[64px] font-black font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Your reliable calling partner for real pipeline results
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Our leads are researched by people, enhanced with the latest technology, and triple-checked before we dial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-black tracking-wide text-white transition-all hover:bg-primary-hover shadow-red hover:shadow-lg hover:-translate-y-1">
                Get a quote
              </a>
            </div>
            <p className="text-xs text-slate-500 font-bold">Over 4,000 satisfied clients · Guaranteed results</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-premium bg-slate-50 border border-slate-100 flex items-center justify-center p-8">
               <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Dashboard+Mockup" alt="Cold calling dashboard" className="w-full rounded-2xl shadow-sm border border-slate-200" />
            </div>
          </div>
        </section>

        {/* 2. REALISTIC APPROACH SECTION (FORM) */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
           <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-sm grid lg:grid-cols-[1.5fr_1fr] gap-16">
              <div>
                 <h2 className="text-3xl font-black font-heading text-slate-900 mb-6 max-w-md leading-tight">A realistic approach to cold-outreach telecalling</h2>
                 <p className="text-lg text-slate-600 font-medium mb-8 max-w-lg leading-relaxed">We don't buy generic lists, guess prospects' numbers, or call everyone in a given geographic location. Our team builds and verifies lists of decision-makers in your target market, and creates tailored scripts that convert.</p>
                 <div className="flex items-center gap-4 text-primary font-bold hover:gap-6 transition-all cursor-pointer">
                    <span>Target your ideal buyer</span> <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative">
                 <div className="absolute top-0 right-10 w-16 h-2 bg-primary rounded-b-lg"></div>
                 <h3 className="text-xl font-black text-slate-900 mb-6">Our process:</h3>
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-slate-900 mb-1">Target your ideal buyer</h4>
                          <p className="text-slate-600 font-medium text-sm">Find companies and buyers that fit your ICP perfectly.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-slate-900 mb-1">Source verified B2B data</h4>
                          <p className="text-slate-600 font-medium text-sm">Hand-curated lists of verified, accurate prospect data.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-slate-900 mb-1">Deliver customized pitches</h4>
                          <p className="text-slate-600 font-medium text-sm">Create scripts that hook your prospects from the first second.</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* 3. STATS BANNER */}
        <section className="py-16 bg-[#161718] text-white relative overflow-hidden mx-6 lg:mx-8 max-w-7xl xl:mx-auto rounded-[3rem] mb-24">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="px-10 lg:px-16 relative z-10">
              <h2 className="text-3xl font-black mb-12 text-center text-white">Faseeh Lall's lead generation cold calling results</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">60+</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Calling professionals</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">9%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Meeting booking rate</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">4</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Meeting booking models</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">1500+</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Satisfied clients</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">20%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Appointments hold rate</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">30%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest">Reply rate</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. FRUSTRATION CARDS */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
           <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 max-w-2xl leading-tight">Our cold calling eliminates every frustrating point of outreach</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                       <BarChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Flawlessly organized data</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm leading-relaxed">Our research team supplies our SDRs with accurate, triple-checked prospect data: direct dials, company intel, and intent signals.</p>
                    <div className="w-full h-px bg-slate-100 my-6"></div>
                    <h4 className="font-bold text-slate-900 mb-2">Guaranteed accuracy</h4>
                    <p className="text-slate-500 font-medium text-sm">If a lead doesn't match your ICP, or the contact information is inaccurate, we replace it free of charge.</p>
                 </div>
                 {/* Card 2 */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                       <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">A guaranteed number of appointments</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm leading-relaxed">We only promise what we can deliver. With our performance-based pricing model, you know exactly how many meetings you'll get each month.</p>
                    <div className="w-full h-px bg-slate-100 my-6"></div>
                    <h4 className="font-bold text-slate-900 mb-2">Scalable operations</h4>
                    <p className="text-slate-500 font-medium text-sm">Need to increase your outreach volume? We can quickly scale our calling team to match your growth.</p>
                 </div>
                 {/* Card 3 */}
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                       <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Transparent reporting setup</h3>
                    <p className="text-slate-600 font-medium mb-6 text-sm leading-relaxed">Full visibility into our calling efforts. From dial counts and connection rates to objections and booked meetings, you get detailed reports every week.</p>
                    <div className="w-full h-px bg-slate-100 my-6"></div>
                    <h4 className="font-bold text-slate-900 mb-2">Listen to the recordings</h4>
                    <p className="text-slate-500 font-medium text-sm">We share the recordings of our calls so you can hear how prospects respond to your value proposition.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SERVICE IN ACTION */}
        <section className="py-24 bg-white relative">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">Faseeh Lall's B2B cold calling service in action</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">We follow a proven framework to ensure consistent performance.</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                 {/* Form Side */}
                 <div className="bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-100 h-fit sticky top-32">
                    <h3 className="text-2xl font-black text-slate-900 text-center mb-8">We're ready to start building your predictable revenue engine</h3>
                    <form className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <input type="email" placeholder="Business email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary bg-white">
                             <div className="bg-slate-50 px-3 py-3 border-r border-slate-200 text-sm font-medium">🇺🇸 +1</div>
                             <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 focus:outline-none" />
                          </div>
                       </div>
                       <div className="flex items-center gap-4 mt-8">
                          <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-red hover:bg-primary-hover transition-colors w-full sm:w-auto">Continue</button>
                       </div>
                    </form>
                 </div>

                 {/* Sequence Side */}
                 <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">1</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Data research and lead selection based on ideal client profiles</h4>
                             <p className="text-slate-600 font-medium text-sm">Identify and target the right decision-makers in your target market. We don't just find numbers, we find the people who need your solution.</p>
                          </div>
                       </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">2</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Comprehensive strategy and scripts preparation</h4>
                             <p className="text-slate-600 font-medium text-sm">Our copywriters create personalized, value-driven cold calling scripts that resonate with your prospects and guide the conversation naturally.</p>
                          </div>
                       </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">3</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Our SDRs start making calls</h4>
                             <p className="text-slate-600 font-medium text-sm">We handle the heavy lifting, making hundreds of dials daily to connect with your prospects. We bypass gatekeepers and get straight to the pitch.</p>
                          </div>
                       </div>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">4</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Calls result analysis</h4>
                             <p className="text-slate-600 font-medium text-sm">We track all interactions in your CRM, analyze the outcomes, and refine our approach. Every "no" provides data for the next "yes".</p>
                          </div>
                       </div>
                    </div>
                    {/* Step 5 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">5</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Feedback loop and CTA formulation</h4>
                             <p className="text-slate-600 font-medium text-sm">Continuous optimization based on call recordings and prospect feedback to improve conversion rates and tweak the CTA.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. AUDIO/TESTIMONIALS */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 text-center mb-16">Unconvinced cold calls that turned into qualified leads</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {/* Audio 1 */}
                 <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm text-center flex flex-col items-center group cursor-pointer hover:border-primary transition-colors">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                       <PlayCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Director, Supply Chain</h3>
                    <p className="text-slate-500 font-medium text-sm mb-4">Hear how our SDR seamlessly navigated objections and booked a demo.</p>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 mb-2">
                       <img src="https://placehold.co/100x100/f8fafc/cbd5e1?text=A1" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 {/* Audio 2 */}
                 <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm text-center flex flex-col items-center group cursor-pointer hover:border-primary transition-colors">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                       <PlayCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">SVP of Marketing</h3>
                    <p className="text-slate-500 font-medium text-sm mb-4">Listen to our rep pivot a quick brush-off into a meaningful conversation.</p>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 mb-2">
                       <img src="https://placehold.co/100x100/f8fafc/cbd5e1?text=A2" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 {/* Audio 3 */}
                 <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm text-center flex flex-col items-center group cursor-pointer hover:border-primary transition-colors">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                       <PlayCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Director, L&D</h3>
                    <p className="text-slate-500 font-medium text-sm mb-4">See how persistence and value-driven pitching secure the appointment.</p>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 mb-2">
                       <img src="https://placehold.co/100x100/f8fafc/cbd5e1?text=A3" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. DASHBOARD RECORDINGS */}
        <section className="py-24 bg-white text-center">
           <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-16 max-w-3xl mx-auto">Besides having access to all recordings, you'll be able to see <span className="text-primary">our cold calling performance 24/7</span></h2>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm p-8 bg-slate-50 flex items-center justify-center">
                    <img src="https://placehold.co/600x400/ffffff/cbd5e1?text=Real-time+CRM+sync" alt="Real-time CRM sync" className="w-full rounded-xl shadow-sm border border-slate-200" />
                 </div>
                 <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm p-8 bg-slate-50 flex items-center justify-center">
                    <img src="https://placehold.co/600x400/ffffff/cbd5e1?text=Detailed+analytics" alt="Detailed call analytics" className="w-full rounded-xl shadow-sm border border-slate-200" />
                 </div>
              </div>
           </div>
        </section>

        {/* 8. BADGES AND PRICING */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-24">
                 <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-12">Award-winning B2B cold calling agency</h2>
                 <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-48 text-center hover:-translate-y-1 transition-transform">
                       <div className="font-black text-xl mb-1">Clutch</div>
                       <div className="text-primary font-bold mb-1">4.9 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">230 Reviews</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-48 text-center hover:-translate-y-1 transition-transform">
                       <div className="font-black text-xl mb-1">G2</div>
                       <div className="text-primary font-bold mb-1">4.8 Score</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">93 Reviews</div>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-[3rem] p-12 lg:p-16 relative overflow-hidden border border-slate-200 shadow-premium">
                 <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                       <h2 className="text-4xl lg:text-5xl font-black font-heading mb-8 leading-tight text-slate-900 text-center lg:text-left">Cold calling pricing</h2>
                       <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-8 text-center shadow-sm">
                          <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">The average starter price:</p>
                          <div className="text-5xl font-black text-primary mb-6">from $4,000</div>
                          <button className="bg-primary w-full py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-red text-white">Get a quote</button>
                       </div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black mb-6 text-slate-900">What is included in all packages:</h3>
                       <ul className="space-y-4 mb-8">
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Manual lead research and validation</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">A dedicated calling agent</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Dedicated scripts involving professional copywriting and editing</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Transparent reporting available 24/7</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Appointment scheduling and no-show recovery</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Ongoing strategy improvement</span></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. EXPERTISE SECTION */}
        <section className="py-24 bg-white border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-12">Peek inside our lead generation and appointment setting expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer overflow-hidden relative">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors z-10 relative">Cold calling guide: How to make calls that convert</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1 z-10 relative">Learn the best practices and actionable tips from our top-performing SDRs who book hundreds of meetings monthly.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 relative">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer overflow-hidden relative">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors z-10 relative">15 cold calling scripts for B2B sales</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1 z-10 relative">Steal our battle-tested cold calling scripts that help you navigate gatekeepers and handle common objections.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 relative">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
