"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function PipelineSection() {
  const steps = [
    {
      id: "omnichannel",
      label: "Omnichannel engagement",
      desc: "We develop a comprehensive plan that combines email, LinkedIn, and cold calling to reach your prospects at the right time and in the right place.",
      funnelIndex: 0,
      group: "journey"
    },
    {
      id: "activation",
      label: "Activation",
      desc: "Prospects engage by replying to emails, subscribing to newsletters, clicking on ads, answering in WhatsApp, attending a webinar, etc.",
      funnelIndex: 1,
      group: "journey"
    },
    {
      id: "conversion",
      label: "Conversion",
      desc: "With personalized appointment setting and persistent follow-ups, we ensure your prospects attend demo calls and online or face-to-face meetings with your sales executives.",
      funnelIndex: 2,
      group: "journey"
    },
    {
      id: "closure",
      label: "Deal closure",
      desc: "All that’s left for you to do is attend booked appointments, run sales negotiations, and sign new deals.",
      funnelIndex: 3,
      group: "part"
    }
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const funnelBlocks = [
    {
      label: "LEADS",
      value: "Up to 18,000* prospects within your client profile",
      path: "M 20 5 L 480 5 Q 495 5 490 17 L 450 72 Q 445 80 430 80 L 70 80 Q 55 80 50 72 L 10 17 Q 5 5 20 5 Z",
      widthClass: "max-w-[85%] sm:max-w-[80%]"
    },
    {
      label: "MQLs",
      value: "Up to 9,000* marketing-qualified leads",
      path: "M 50 5 L 450 5 Q 462 5 457 17 L 415 72 Q 410 80 395 80 L 105 80 Q 90 80 85 72 L 43 17 Q 38 5 50 5 Z",
      widthClass: "max-w-[75%] sm:max-w-[70%]"
    },
    {
      label: "SQLs",
      value: "200* sales-qualified meetings with decision-makers",
      path: "M 85 5 L 415 5 Q 427 5 422 17 L 380 72 Q 375 80 360 80 L 140 80 Q 125 80 120 72 L 78 17 Q 73 5 85 5 Z",
      widthClass: "max-w-[62%] sm:max-w-[55%]"
    },
    {
      label: "OPPORTUNITIES",
      value: "10-30* closed deals",
      path: "M 120 5 L 380 5 Q 392 5 387 17 L 345 72 Q 340 80 325 80 L 175 80 Q 160 80 155 72 L 113 17 Q 108 5 120 5 Z",
      widthClass: "max-w-[50%] sm:max-w-[45%]"
    }
  ];

  return (
    <section id="pipeline" className="bg-[#111113] text-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-heading font-black">
            How your pipeline will <br /> look with Faseeh Lall & Co.
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto">
            Focus on scaling your business while we deliver you sales-ready B2B leads.
          </p>
        </div>

        {/* Inner Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Interactive flow card tabs */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Journey Block */}
            <div className="border border-dashed border-slate-800 rounded-3xl p-6 space-y-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                We take care of the entire user journey
              </span>
              
              <div className="space-y-3">
                {steps.filter(s => s.group === "journey").map((item) => {
                  const isActive = activeStep.id === item.id;
                  return (
                    <div 
                      key={item.id}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                        isActive 
                          ? "bg-white/5 border-primary/40 shadow-[0_0_15px_rgba(217,4,41,0.15)]" 
                          : "border-transparent hover:bg-white/5 hover:border-white/10"
                      }`}
                      onClick={() => setActiveStep(item)}
                    >
                      <div className="p-4 flex items-center justify-between">
                        <span className={`text-sm font-black transition-colors ${
                          isActive ? "text-primary" : "text-slate-350"
                        }`}>
                          {item.label}
                        </span>
                        <ChevronRight className={`h-4.5 w-4.5 transition-transform ${
                          isActive ? "text-primary rotate-90" : "text-slate-550"
                        }`} />
                      </div>
                      
                      {isActive && (
                        <div className="px-4 pb-4 text-xs font-semibold leading-relaxed text-slate-400">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Your Part Block */}
            <div className="border border-dashed border-slate-800 rounded-3xl p-6 space-y-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                Your part in the process
              </span>
              
              <div className="space-y-3">
                {steps.filter(s => s.group === "part").map((item) => {
                  const isActive = activeStep.id === item.id;
                  return (
                    <div 
                      key={item.id}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                        isActive 
                          ? "bg-white/5 border-primary/40 shadow-[0_0_15px_rgba(217,4,41,0.15)]" 
                          : "border-transparent hover:bg-white/5 hover:border-white/10"
                      }`}
                      onClick={() => setActiveStep(item)}
                    >
                      <div className="p-4 flex items-center justify-between">
                        <span className={`text-sm font-black transition-colors ${
                          isActive ? "text-primary" : "text-slate-350"
                        }`}>
                          {item.label}
                        </span>
                        <ChevronRight className={`h-4.5 w-4.5 transition-transform ${
                          isActive ? "text-primary rotate-90" : "text-slate-550"
                        }`} />
                      </div>
                      
                      {isActive && (
                        <div className="px-4 pb-4 text-xs font-semibold leading-relaxed text-slate-400">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Funnel Graphics */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="text-center mb-6">
              <p className="text-[10px] font-semibold text-slate-500">
                * Average yearly outcomes. <br />
                The results depend on multiple factors.
              </p>
            </div>

            {/* Stacking Funnel SVGs */}
            <div className="w-full max-w-lg space-y-3 select-none">
              {funnelBlocks.map((block, idx) => {
                const isActive = activeStep.funnelIndex === idx;
                
                return (
                  <div 
                    key={idx} 
                    className="group relative w-full aspect-[500/80] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => {
                      const matchedStep = steps.find(s => s.funnelIndex === idx);
                      if (matchedStep) setActiveStep(matchedStep);
                    }}
                  >
                    {/* SVG shape */}
                    <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                      <path 
                        d={block.path} 
                        className={`transition-all duration-500 ease-in-out ${
                          isActive 
                            ? "fill-[#D90429]" 
                            : "fill-[#222225] group-hover:fill-[#2d2d31]"
                        }`}
                      />
                    </svg>

                    {/* Funnel badge identifier */}
                    <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 bg-[#333336] text-[8px] font-black tracking-wider text-slate-400 px-3.5 py-0.5 rounded-full border border-slate-700/50 group-hover:border-slate-500/50 transition-all duration-300">
                      {block.label}
                    </div>

                    {/* Text container */}
                    <div className={`relative z-10 px-4 text-center pointer-events-none ${block.widthClass}`}>
                      <span className={`text-xs sm:text-sm font-black transition-colors duration-300 leading-snug block ${
                        isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                      }`}>
                        {block.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
