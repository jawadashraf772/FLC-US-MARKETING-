"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";

export default function LeadResearch() {
  const [activePipelineTab, setActivePipelineTab] = useState("Conversion");

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-[64px] font-black font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Top-quality sales lists tailored to your needs
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Boost your bottom-funnel conversions with validated, ready-to-go B2B leads that fit your ICP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-black tracking-wide text-white transition-all hover:bg-primary-hover shadow-red hover:shadow-lg hover:-translate-y-1">
                Get a quote
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-premium bg-slate-50 border border-slate-100 flex items-center justify-center p-8">
               <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Top-quality+sales+lists" alt="Top-quality sales lists" className="w-full rounded-2xl shadow-sm border border-slate-200" />
            </div>
          </div>
        </section>

        {/* TROUBLESOME SALES LEAD RESEARCH SECTION */}
        <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
           <div className="bg-[#161718] text-white rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 text-center">
                 <h2 className="text-4xl lg:text-5xl font-black mb-6">Troublesome sales lead research?</h2>
                 <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10">Not anymore with our solutions! We make sure each lead we gather is ideal for your business and ripe for engagement.</p>
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-xl mx-auto text-left flex gap-6">
                    <div className="bg-primary/20 p-4 rounded-xl h-fit">
                       <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                       <div className="text-xl font-bold mb-2">Verified contacts only</div>
                       <p className="text-slate-400 font-medium text-sm">Every lead is hand-picked and double-checked so your emails reach real people.</p>
                       <button className="bg-primary mt-6 text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-hover transition-colors shadow-red">Get a quote</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">Clients who elevated sales performance with us</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">Check out how thorough B2B lead research laid the foundation for our customers’ growth.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {/* Case Study 1 */}
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer relative overflow-hidden">
                    <div className="font-bold text-slate-900 mb-8 leading-relaxed z-10">A marketing & advertising company achieves x3 YoY with the help of Faseeh Lall</div>
                    <div className="space-y-6 flex-1 mb-8 z-10">
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">$1,5M</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">biggest deal in pipeline</div>
                       </div>
                       <div className="w-full h-px bg-slate-200"></div>
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">25</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">appointments booked in 3 months</div>
                       </div>
                    </div>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 group-hover:gap-4 transition-all">Read the case study <ArrowRight className="w-4 h-4" /></div>
                 </div>
                 {/* Case Study 2 */}
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer relative overflow-hidden">
                    <div className="font-bold text-slate-900 mb-8 leading-relaxed z-10">5 months of focused lead generation results in 24 appointments booked for a global telecom company</div>
                    <div className="space-y-6 flex-1 mb-8 z-10">
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">24</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">appointments booked in 5 months</div>
                       </div>
                       <div className="w-full h-px bg-slate-200"></div>
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">100%</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">avg. KPI rate achieved</div>
                       </div>
                    </div>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 group-hover:gap-4 transition-all">Read the case study <ArrowRight className="w-4 h-4" /></div>
                 </div>
                 {/* Case Study 3 */}
                 <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer relative overflow-hidden">
                    <div className="font-bold text-slate-900 mb-8 leading-relaxed z-10">Generating business growth: 20 appointments per month booked for a trends research company</div>
                    <div className="space-y-6 flex-1 mb-8 z-10">
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">77</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">appointments scheduled in 12 months</div>
                       </div>
                       <div className="w-full h-px bg-slate-200"></div>
                       <div>
                          <div className="text-4xl font-black text-primary mb-2">15</div>
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">new qualified opportunities</div>
                       </div>
                    </div>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 group-hover:gap-4 transition-all">Read the case study <ArrowRight className="w-4 h-4" /></div>
                 </div>
              </div>

              <div className="mt-12 text-center">
                 <button className="bg-white border border-slate-200 text-slate-900 font-bold py-3 px-8 rounded-xl shadow-sm hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                    Explore case studies <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </section>

        {/* BADGES SECTION */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
              <div>
                 <h2 className="text-3xl font-black font-heading text-slate-900 mb-4">Award-winning B2B sales agency</h2>
                 <div className="flex gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                       <span className="font-black text-sm">clutch /</span>
                       <span className="text-primary font-bold text-sm">4.9 score</span>
                       <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest ml-2">230 reviews</span>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                       <span className="font-black text-sm">g2 /</span>
                       <span className="text-primary font-bold text-sm">4.8 score</span>
                       <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest ml-2">93 reviews</span>
                    </div>
                 </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-24 h-24 flex items-center justify-center text-center">
                    <span className="font-black text-xs text-slate-800">Inc. 5000<br/><span className="text-[9px] text-slate-500 uppercase font-bold">Honoree</span></span>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-24 h-24 flex items-center justify-center text-center">
                    <span className="font-black text-xs text-slate-800">Stevie Awards<br/><span className="text-[9px] text-slate-500 uppercase font-bold">Winner</span></span>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-24 h-24 flex items-center justify-center text-center">
                    <span className="font-black text-xs text-slate-800">UpCity<br/><span className="text-[9px] text-slate-500 uppercase font-bold">Excellence</span></span>
                 </div>
              </div>
           </div>
        </section>

        {/* PIPELINE SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="bg-[#161718] text-white rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
                 <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
                 <div className="relative z-10 text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">How your pipeline will look with Faseeh Lall</h2>
                    <p className="text-xl text-slate-400 font-medium">Focus on scaling your business while we deliver you sales-ready B2B leads.</p>
                 </div>
                 
                 <div className="grid lg:grid-cols-2 gap-12 relative z-10 max-w-6xl mx-auto">
                    {/* Left Column */}
                    <div className="space-y-6">
                       <div className="border border-white/10 border-dashed rounded-3xl p-6">
                          <p className="text-slate-400 text-sm font-bold mb-4 ml-2">We take care of the entire user journey</p>
                          <div className="space-y-3">
                             <div 
                                onClick={() => setActivePipelineTab("Omnichannel")}
                                className={`border rounded-xl cursor-pointer transition-all ${activePipelineTab === "Omnichannel" ? "bg-[#2a2b2d] border-white/10 p-6 shadow-xl" : "bg-[#1e1f21] border-transparent p-5 hover:bg-white/5"}`}
                             >
                                <div className="flex justify-between items-center">
                                   <span className="font-bold text-white text-base">Omnichannel engagement</span>
                                   <ChevronRight className={`w-5 h-5 ${activePipelineTab === "Omnichannel" ? "text-primary rotate-90" : "text-slate-600"} transition-transform`} />
                                </div>
                                {activePipelineTab === "Omnichannel" && (
                                   <p className="text-slate-400 text-sm leading-relaxed mt-4 pr-4">
                                      We develop a comprehensive plan that combines email, LinkedIn, and cold calling to reach your prospects at the right time and in the right place.
                                   </p>
                                )}
                             </div>
                             <div 
                                onClick={() => setActivePipelineTab("Activation")}
                                className={`border rounded-xl cursor-pointer transition-all ${activePipelineTab === "Activation" ? "bg-[#2a2b2d] border-white/10 p-6 shadow-xl" : "bg-[#1e1f21] border-transparent p-5 hover:bg-white/5"}`}
                             >
                                <div className="flex justify-between items-center">
                                   <span className="font-bold text-white text-base">Activation</span>
                                   <ChevronRight className={`w-5 h-5 ${activePipelineTab === "Activation" ? "text-primary rotate-90" : "text-slate-600"} transition-transform`} />
                                </div>
                                {activePipelineTab === "Activation" && (
                                   <p className="text-slate-400 text-sm leading-relaxed mt-4 pr-4">
                                      Prospects engage by replying to emails, subscribing to newsletters, clicking on ads, answering in WhatsApp, attending a webinar, etc.
                                   </p>
                                )}
                             </div>
                             <div 
                                onClick={() => setActivePipelineTab("Conversion")}
                                className={`border rounded-xl cursor-pointer transition-all ${activePipelineTab === "Conversion" ? "bg-[#2a2b2d] border-white/10 p-6 shadow-xl" : "bg-[#1e1f21] border-transparent p-5 hover:bg-white/5"}`}
                             >
                                <div className="flex justify-between items-center">
                                   <span className="font-bold text-white text-base">Conversion</span>
                                   <ChevronRight className={`w-5 h-5 ${activePipelineTab === "Conversion" ? "text-primary rotate-90" : "text-slate-600"} transition-transform`} />
                                </div>
                                {activePipelineTab === "Conversion" && (
                                   <p className="text-slate-400 text-sm leading-relaxed mt-4 pr-4">
                                      With personalized appointment setting and persistent follow-ups, we ensure your prospects attend demo calls and online or face-to-face meetings with your sales executives.
                                   </p>
                                )}
                             </div>
                          </div>
                       </div>
                       
                       <div className="border border-white/10 border-dashed rounded-3xl p-6">
                          <p className="text-slate-400 text-sm font-bold mb-4 ml-2">Your part in the process</p>
                          <div 
                             onClick={() => setActivePipelineTab("Deal closure")}
                             className={`border rounded-xl cursor-pointer transition-all ${activePipelineTab === "Deal closure" ? "bg-[#2a2b2d] border-white/10 p-6 shadow-xl" : "bg-[#1e1f21] border-transparent p-5 hover:bg-white/5"}`}
                          >
                             <div className="flex justify-between items-center">
                                <span className="font-bold text-white text-base">Deal closure</span>
                                <ChevronRight className={`w-5 h-5 ${activePipelineTab === "Deal closure" ? "text-primary rotate-90" : "text-slate-600"} transition-transform`} />
                             </div>
                             {activePipelineTab === "Deal closure" && (
                                <p className="text-slate-400 text-sm leading-relaxed mt-4 pr-4">
                                   All that’s left for you to do is attend booked appointments, run sales negotiations, and sign new deals.
                                </p>
                             )}
                          </div>
                       </div>
                    </div>

                    {/* Right Column (Funnel) */}
                    <div className="flex flex-col items-center justify-center pt-8 lg:pt-0">
                       <p className="text-[10px] text-slate-500 text-center mb-10 uppercase tracking-widest leading-relaxed font-bold">
                          * Average yearly outcomes.<br/>The results depend on multiple factors.
                       </p>
                       <div className="w-full max-w-[360px] space-y-0 flex flex-col items-center">
                          {/* Leads */}
                          <div className="flex flex-col items-center w-full mb-2 transition-all duration-300">
                             <div className="text-[10px] text-slate-400 font-bold mb-2 z-10 bg-[#161718] px-2 relative -bottom-3">LEADS</div>
                             <div 
                                className={`w-full rounded-2xl py-8 px-4 text-center transition-colors duration-300 ${activePipelineTab === "Omnichannel" ? "bg-primary shadow-red" : "bg-[#222325]"}`}
                                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                             >
                                <span className="font-bold text-white text-[15px]">Up to 18,000* prospects<br/>within your client profile</span>
                             </div>
                          </div>
                          
                          {/* MQLs */}
                          <div className="flex flex-col items-center w-[92%] mb-2 transition-all duration-300">
                             <div className="text-[10px] text-slate-400 font-bold mb-2 z-10 bg-[#161718] px-2 relative -bottom-3">MQLS</div>
                             <div 
                                className={`w-full rounded-2xl py-8 px-4 text-center transition-colors duration-300 ${activePipelineTab === "Activation" ? "bg-primary shadow-red" : "bg-[#222325]"}`}
                                style={{ clipPath: "polygon(0 0, 100% 0, 94% 100%, 6% 100%)" }}
                             >
                                <span className="font-bold text-white text-[15px]">Up to 9,000*<br/>marketing-qualified leads</span>
                             </div>
                          </div>

                          {/* SQLs */}
                          <div className="flex flex-col items-center w-[84%] mb-2 transition-all duration-300">
                             <div className="text-[10px] text-slate-400 font-bold mb-2 z-10 bg-[#161718] px-2 relative -bottom-3">SQLS</div>
                             <div 
                                className={`w-full rounded-2xl py-8 px-4 text-center transition-colors duration-300 ${activePipelineTab === "Conversion" ? "bg-primary shadow-red" : "bg-[#222325]"}`}
                                style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)" }}
                             >
                                <span className="font-bold text-white text-[15px]">200* sales-qualified meetings<br/>with decision-makers</span>
                             </div>
                          </div>

                          {/* Opportunities */}
                          <div className="flex flex-col items-center w-[76%] transition-all duration-300">
                             <div className="text-[10px] text-slate-400 font-bold mb-2 z-10 bg-[#161718] px-2 relative -bottom-3">OPPORTUNITIES</div>
                             <div 
                                className={`w-full rounded-2xl py-6 px-4 text-center transition-colors duration-300 ${activePipelineTab === "Deal closure" ? "bg-primary shadow-red" : "bg-[#222325]"}`}
                                style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
                             >
                                <span className="font-bold text-white text-[15px]">10-30* closed deals</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-20">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">How lead research works</h2>
              </div>

              <div className="space-y-24">
                 {/* Step 1 */}
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                       <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform -rotate-3"></div>
                       <div className="relative w-full rounded-3xl overflow-hidden shadow-premium bg-white border border-slate-100 p-6">
                          <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Preliminary+research" alt="Preliminary research" className="w-full rounded-2xl shadow-sm border border-slate-200" />
                       </div>
                    </div>
                    <div className="order-1 md:order-2">
                       <h3 className="text-3xl font-black text-slate-900 mb-4">Preliminary research</h3>
                       <h4 className="text-xl font-bold text-primary mb-6">Gathering exclusive data for high-value lead generation</h4>
                       <ul className="space-y-4">
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We get an ideal client profile from your sales department.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">Our specialist prepares 20 test leads that match your ICP for an initial review.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We calculate the approximate number of companies in line with the ICP to determine your total addressable market and investigate your project feasibility.</p>
                          </li>
                       </ul>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                       <h3 className="text-3xl font-black text-slate-900 mb-4">Strategy refinement</h3>
                       <h4 className="text-xl font-bold text-primary mb-6">Gleaning insights to accelerate your sales cycle</h4>
                       <ul className="space-y-4">
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We discuss each step with you to optimize the strategy early on to properly allocate resources and sales research tools.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We ensure each ICP makes sense from an ROI standpoint.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">Our team cross-references our research results with your existing client base to eliminate overlap.</p>
                          </li>
                       </ul>
                    </div>
                    <div className="relative">
                       <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
                       <div className="relative w-full rounded-3xl overflow-hidden shadow-premium bg-white border border-slate-100 p-6">
                          <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Strategy+refinement" alt="Strategy refinement" className="w-full rounded-2xl shadow-sm border border-slate-200" />
                       </div>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                       <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform -rotate-3"></div>
                       <div className="relative w-full rounded-3xl overflow-hidden shadow-premium bg-white border border-slate-100 p-6">
                          <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Plan+implementation" alt="Plan implementation" className="w-full rounded-2xl shadow-sm border border-slate-200" />
                       </div>
                    </div>
                    <div className="order-1 md:order-2">
                       <h3 className="text-3xl font-black text-slate-900 mb-4">Plan implementation</h3>
                       <h4 className="text-xl font-bold text-primary mb-6">Creating synergy between our teams</h4>
                       <ul className="space-y-4">
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">In 2 days, our research team provides you with 50–100 test leads for verification, including all data points needed for your future successful outreach campaign.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We collect feedback to evaluate how effective our strategy is for you, then revamp the lead generation process accordingly.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We A/B test several ICPs simultaneously to find the one with the best potential.</p>
                          </li>
                       </ul>
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                       <h3 className="text-3xl font-black text-slate-900 mb-4">Strategy adjustment</h3>
                       <h4 className="text-xl font-bold text-primary mb-6">First leads, first reports and first modifications</h4>
                       <ul className="space-y-4">
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">Based on feedback and performance metrics, we correct the strategy if needed.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">Our account manager always comes up with 2–3 new ICP options to choose from.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We implement improvements within 24 hours so outreach campaigns are not delayed.</p>
                          </li>
                          <li className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                             <p className="text-slate-600 font-medium">We permanently enhance lead research efforts and refine targeting strategies so you see a steady increase in high-quality leads and scalable growth.</p>
                          </li>
                       </ul>
                    </div>
                    <div className="relative">
                       <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
                       <div className="relative w-full rounded-3xl overflow-hidden shadow-premium bg-white border border-slate-100 p-6">
                          <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=Strategy+adjustment" alt="Strategy adjustment" className="w-full rounded-2xl shadow-sm border border-slate-200" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
           <div className="bg-[#161718] text-white rounded-[3rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/2"></div>
              <div className="relative z-10">
                 <h2 className="text-4xl font-black mb-4">Hard to find relevant leads?</h2>
                 <p className="text-slate-300 font-medium">We know where to look up decision-makers and how to engage with them.</p>
                 <button className="bg-primary mt-8 text-white font-bold py-3 px-8 rounded-xl shadow-red hover:bg-primary-hover transition-colors">Talk to us</button>
              </div>
              <div className="flex gap-8 relative z-10">
                 <div className="text-center">
                    <div className="text-4xl font-black mb-1">3000+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Successful cases</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-black mb-1">10X</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">ROI average</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-black mb-1">B2B</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Only</div>
                 </div>
              </div>
           </div>
        </section>

        {/* GOOD FIT SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative">
                    <img src="https://placehold.co/800x600/f8fafc/cbd5e1?text=Are+we+a+good+fit" alt="Team meeting" className="w-full rounded-3xl shadow-sm border border-slate-200" />
                 </div>
                 <div>
                    <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight">Are we a good fit for you?</h2>
                    <p className="text-lg text-slate-600 font-medium mb-8">This simple checklist will help you decide if Faseeh Lall is the right lead research partner for you:</p>
                    <ul className="space-y-4 mb-8">
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">Your in-house capacity isn’t enough to secure high-quality leads.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">Your experience high bounce rates because of outdated data.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">Your leads barely convert into replies, much less appointments.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">You struggle with finding verified contacts.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">Your past attempts to buy a lead list weren’t successful, and you’re against buying third-party databases.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">Your team struggles with manual entries and other routine tasks.</span>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">You think you’ve exhausted all possible data sources and ICPs.</span>
                       </li>
                    </ul>
                    <button className="bg-primary text-white font-bold py-4 px-10 rounded-xl shadow-red hover:bg-primary-hover transition-colors">Let's talk</button>
                 </div>
              </div>
           </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-12">
                 <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-4">Your dedicated lead research team</h2>
                 <p className="text-lg text-slate-600 font-medium">Meet the team responsible for filling your pipeline with sales-ready leads.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                 {/* Team Member 1 */}
                 <div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[3/4]">
                    <img src="https://placehold.co/400x500/cbd5e1/f8fafc?text=Account+Manager" alt="Account Manager" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4">
                       <div className="font-bold text-white mb-1">Account Manager</div>
                       <div className="text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Learn more</div>
                    </div>
                 </div>
                 {/* Team Member 2 */}
                 <div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[3/4]">
                    <img src="https://placehold.co/400x500/cbd5e1/f8fafc?text=Email+Specialist" alt="Email Deliverability Specialist" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4">
                       <div className="font-bold text-white mb-1">Email Deliverability Specialist</div>
                       <div className="text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Learn more</div>
                    </div>
                 </div>
                 {/* Team Member 3 */}
                 <div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[3/4]">
                    <img src="https://placehold.co/400x500/cbd5e1/f8fafc?text=SDR" alt="Sales Development Representative" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4">
                       <div className="font-bold text-white mb-1">Sales Development Representative</div>
                       <div className="text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Learn more</div>
                    </div>
                 </div>
                 {/* Team Member 4 */}
                 <div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[3/4]">
                    <img src="https://placehold.co/400x500/cbd5e1/f8fafc?text=Lead+Researcher" alt="Lead Research Specialist" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4">
                       <div className="font-bold text-white mb-1">Lead Research Specialist</div>
                       <div className="text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Learn more</div>
                    </div>
                 </div>
                 {/* Team Member 5 */}
                 <div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-[3/4]">
                    <img src="https://placehold.co/400x500/cbd5e1/f8fafc?text=Content+Writer" alt="Content Writer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4">
                       <div className="font-bold text-white mb-1">Content Writer</div>
                       <div className="text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Learn more</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-white">
           <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-12 text-center">FAQ</h2>
              <div className="space-y-4">
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       What sources do you use for research?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">We use legitimate, regularly updated platforms like Crunchbase and LinkedIn Sales Navigator. In more peculiar cases, we apply to open data sources and run additional rounds of verification.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       What if I already have a database and am not interested in generating leads from scratch?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-slate-600 font-medium leading-relaxed">
                       <p className="mb-2">You can opt for our data enrichment services to enhance your existing database. This streamlined process includes:</p>
                       <ul className="list-disc pl-5 space-y-1">
                          <li>Analysis and CRM data enhancement to refresh outdated info</li>
                          <li>Human-curated lead list verification for assured quality and precision</li>
                          <li>Database augmentation with new leads matching your criteria</li>
                          <li>Removal of data that fails to meet your ICP</li>
                          <li>Polished, accurate database ready for advanced marketing and sales activities</li>
                       </ul>
                    </div>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       How do you verify leads data?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Our research team uses top-notch verification tools and constantly tests new software. Examples are QuickEmailVerification, GMass, and our own instruments.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       What do you do if there’s no more leads that fit my ICP?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">In this case, we offer 3 main options: launch reengaging campaigns on unresponsive leads, expand the pool of titles, or deepen our search to other industries and sub-verticals.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       Can I obtain tailored lead lists without the full-service package?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Yes. For validated lead lists, our custom lead list building services are your best solution. You’ll gain access to custom B2B lists featuring company names, sizes, and contact information.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       How much do your lead research services cost?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">We offer different pricing packages for lead research. For certain cases, we can create custom quotes that match clients’ specific capacity and sales goals.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-32 bg-slate-100 relative overflow-hidden">
           <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
           <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white/50 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">Want more qualified leads?</h2>
              <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto">Get ready-to-sell leads tailored specifically to your business right away.</p>
              <button className="bg-primary text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-primary-hover transition-colors shadow-red hover:-translate-y-1">Get a quote</button>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
