"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronDown, Linkedin, Users, MessageSquare, LineChart, Target, Search, FileText } from "lucide-react";

export default function LinkedinLeadGenServices() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>#1 LinkedIn lead generation agency</span>
            </div>
            <h1 className="text-5xl lg:text-[64px] font-black font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Start getting deals from LinkedIn
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              We help you use LinkedIn as a conversion and nurturing channel, combining outreach, content, and engagement to move deals forward faster, especially in complex, enterprise sales cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-black tracking-wide text-white transition-all hover:bg-primary-hover shadow-red hover:shadow-lg hover:-translate-y-1">
                Get a quote
              </a>
            </div>
            <p className="text-xs text-slate-500 font-bold">*We’ll book a 30-45-min call with a dedicated account executive</p>
            <p className="text-sm text-slate-600 font-bold mt-4">1,000+ B2B companies trust us to run LinkedIn campaigns that convert</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3"></div>
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-premium bg-slate-50 border border-slate-100 flex items-center justify-center p-8">
               <img src="https://placehold.co/600x400/f8fafc/cbd5e1?text=LinkedIn+Dashboard" alt="LinkedIn Lead Gen Dashboard" className="w-full rounded-2xl shadow-sm border border-slate-200" />
            </div>
          </div>
        </section>

        {/* 2. STATS BANNER */}
        <section className="py-16 bg-[#161718] text-white relative overflow-hidden mx-6 lg:mx-8 max-w-7xl xl:mx-auto rounded-[3rem] mb-24">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="px-10 lg:px-16 relative z-10">
              <h2 className="text-3xl font-black mb-12 text-center text-white">Faseeh Lall’s LinkedIn outreach results</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                 <div className="text-center border-r border-white/10 lg:border-b-0 border-b pb-8 lg:pb-0">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">up to 800</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">new connections monthly per profile</div>
                 </div>
                 <div className="text-center border-r border-white/10 lg:border-b-0 border-b pb-8 lg:pb-0">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">11.8%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">average reply rate</div>
                 </div>
                 <div className="text-center lg:border-b-0 border-b pb-8 lg:pb-0 border-white/10">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">up to 70%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">higher connection acceptance rate</div>
                 </div>
                 <div className="text-center border-r border-white/10">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">up to 13%</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">lead-to-meeting conversion rate</div>
                 </div>
                 <div className="text-center border-r border-white/10">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">2x more</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">meetings booked vs. the industry average</div>
                 </div>
                 <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">7 in 10</div>
                    <div className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">leads reactivated</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. A precision-driven approach */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
           <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-sm grid lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-6 leading-tight">A precision-driven approach to B2B LinkedIn lead generation</h2>
                 <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
                   To turn your LinkedIn presence into a reliable source of qualified opportunities, we focus on reaching decision-makers who actually fit your ICP and are ready for a real conversation.
                 </p>
                 <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                   We build outreach that feels relevant, personal, and perfectly timed by combining:
                 </p>
                 <ul className="space-y-4 mb-8">
                    <li className="flex gap-4 items-center">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <span className="font-bold text-slate-900">Signal-based targeting</span>
                    </li>
                    <li className="flex gap-4 items-center">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <span className="font-bold text-slate-900">Manual lead vetting</span>
                    </li>
                    <li className="flex gap-4 items-center">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <span className="font-bold text-slate-900">And AI-supported tiering</span>
                    </li>
                 </ul>
                 <a href="#contact" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all cursor-pointer group bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 hover:border-primary/50">
                    <span>Let’s discuss your growth</span> <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center">
                 <h3 className="text-xl font-black text-slate-900 mb-4">Content flow</h3>
                 <ul className="list-disc pl-5 mb-8 text-slate-600 font-medium text-sm space-y-2">
                    <li>Weekly thought-leadership posts from key team members</li>
                    <li>Comment engagement with decision-makers</li>
                    <li>Repurposing webinars, case studies, and insights for awareness</li>
                 </ul>
                 <h3 className="text-xl font-black text-slate-900 mb-4">Outreach flow</h3>
                 <ol className="list-decimal pl-5 text-slate-600 font-medium text-sm space-y-2">
                    <li>Engage with the prospect’s posts</li>
                    <li>Send a personalized connection request</li>
                    <li>DM with value-first insight or case study</li>
                    <li>Follow up with an invitation or demo link</li>
                    <li>Book a meeting</li>
                 </ol>
              </div>
           </div>
        </section>

        {/* 4. SUCCESSFUL MACHINE CARDS */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
           <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="mb-16 text-center max-w-3xl mx-auto">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 leading-tight mb-6">What makes our LinkedIn lead generation services work</h2>
                 <p className="text-lg text-slate-600 font-medium">Most agencies run LinkedIn like another outbound channel. We treat it as a relationship-building system that supports conversion, awareness, and long-term pipeline growth.</p>
              </div>
              
              <div className="mb-16">
                 <h3 className="text-2xl font-black text-slate-900 mb-6">Smart LinkedIn campaigns beyond traditional outreach</h3>
                 <p className="text-slate-600 font-medium mb-6">LinkedIn works best when campaigns are designed around context and intent. Depending on your ICP, market maturity, and sales cycle, we deploy different LinkedIn-native plays, including:</p>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> Conversational no-pitch sequences
                    </div>
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> “Recently hired” campaigns
                    </div>
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> Post-engagement targeting
                    </div>
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> Event and webinar campaigns
                    </div>
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> Groups and community engagement
                    </div>
                    <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-800 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary"></div> Poll- and content-led warm-ups
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 {/* Card 1 */}
                 <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Brand awareness building</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">We use LinkedIn as a nurturing and visibility channel, helping you stay top-of-mind throughout long decision processes, even before direct outreach begins.</p>
                    <p className="font-bold text-slate-900 mb-2 text-sm">On the organic side we focus on:</p>
                    <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1 mb-4">
                       <li>Educational posts and expert comments</li>
                       <li>Consistent engagement with decision-makers’ content</li>
                       <li>Using content as a soft touchpoint to nurture prospects</li>
                    </ul>
                    <p className="font-bold text-slate-900 mb-2 text-sm">On the paid side, we run targeted LinkedIn ads for events and webinars:</p>
                    <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                       <li>Launching paid ads 4–6 weeks before an event to raise awareness</li>
                       <li>Creating a dedicated LinkedIn event page and landing page for registrations and running ads to both of them</li>
                       <li>Combining organic invitations with paid promotions</li>
                       <li>Testing and optimizing different formats depending on the audience</li>
                    </ul>
                 </div>
                 {/* Card 2 */}
                 <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Hand-picked leads for higher-quality conversations</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">Our approach combines <b>manual expertise, AI precision, and human-led outreach</b> to keep quality high and engagement genuine:</p>
                    <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-2">
                       <li>Our researchers review every lead to confirm ICP fit and validate real buying signals.</li>
                       <li>Prospects are ranked by engagement and intent, so outreach always starts with the most promising contacts.</li>
                       <li>SDRs tailor tone, references, and CTAs to each lead, ensuring messages feel relevant, timely, and human.</li>
                       <li>All activity follows strict connection and messaging limits to protect your LinkedIn reputation.</li>
                    </ul>
                 </div>
                 {/* Card 3 */}
                 <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Targeting the full buying committee</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">In complex or enterprise-level deals, one person rarely decides alone. That’s why we map the full buying committee and run two parallel motions:</p>
                    <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-2 mb-4">
                       <li>Conversion-focused outreach to champions and operational decision makers</li>
                       <li>Awareness-focused visibility for execs, finance, and procurement stakeholders</li>
                    </ul>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">This shortens approval cycles and increases deal chances, because every key stakeholder already knows who you are.</p>
                 </div>
                 {/* Card 4 */}
                 <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Prioritizing relevance to boost engagement</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">We put context first over volume, so every message feels timely and relevant.</p>
                    <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-2 mb-4">
                       <li>Messages are built around real signals, real challenges, and real intent</li>
                       <li>Communication is tailored to each persona’s role, priorities, and pain points</li>
                       <li>Outreach feels like a natural conversation, not a generic pitch</li>
                    </ul>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">When prospects feel understood, they respond, which makes relevance your most powerful conversion lever on LinkedIn.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. SERVICE IN ACTION */}
        <section className="py-24 bg-white relative">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black font-heading text-slate-900 mb-6">Faseeh Lall’s LinkedIn lead generation service in action</h2>
                 <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto">Our LinkedIn process is simple, structured, and scalable, designed to balance automation with a human touch.</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                 {/* Form Side */}
                 <div className="bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-100 h-fit sticky top-32">
                    <h3 className="text-2xl font-black text-slate-900 text-center mb-8">Want more meetings from LinkedIn? <br /> Let’s talk</h3>
                    <form className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <input type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                       </div>
                       <div className="grid grid-cols-1 gap-4">
                          <input type="email" placeholder="Business email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <input type="text" placeholder="Job title" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                          <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white appearance-none text-slate-500">
                             <option value="" disabled selected>Company size</option>
                             <option value="1-10">1-10</option>
                             <option value="11-50">11-50</option>
                          </select>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white appearance-none text-slate-500">
                             <option value="" disabled selected>Company HQ</option>
                             <option value="US">United States</option>
                          </select>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white appearance-none text-slate-500">
                             <option value="" disabled selected>Available monthly budget</option>
                             <option value="1k">1k</option>
                          </select>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white appearance-none text-slate-500">
                             <option value="" disabled selected>Industry</option>
                             <option value="tech">Tech</option>
                          </select>
                       </div>
                       <div className="flex items-center gap-4 mt-8">
                          <button type="button" className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-red hover:bg-primary-hover transition-colors w-full sm:w-auto">Continue</button>
                       </div>
                       <p className="text-xs text-slate-500 text-center mt-4">By submitting the form I agree with the Privacy policy</p>
                    </form>
                 </div>

                 {/* Sequence Side */}
                 <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">1</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">ICP validation and strategy setup</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We start by defining exactly who you should talk to and how:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Analyzing your company’s positioning, tone of voice, and value proposition</li>
                                <li>Reviewing your existing data, sales history, and marketing performance to spot growth opportunities</li>
                                <li>Mapping out your ideal customer profiles (ICPs) by industry, size, geography, and buyer personas</li>
                                <li>Identifying key decision-makers, as well as their pains, challenges, and buying triggers</li>
                                <li>Building a tailored outreach strategy aligned with your goals and total addressable market</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">2</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Profile and brand optimization</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We make your first impression count by:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Auditing and optimizing your LinkedIn company and personal profiles for consistency, clarity, and trust</li>
                                <li>Aligning visuals, messaging, and achievements to create a cohesive brand narrative</li>
                                <li>Positioning your page as a thought leader’s hub that converts profile visits into interest</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">3</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Audience research and signal-based prospecting</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We build precision into every list by:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Manually vetting each lead to ensure a perfect ICP fit</li>
                                <li>Using AI-powered tiering to score prospects by engagement level, intent, and buying readiness</li>
                                <li>Tracking behavioral signals such as profile views, post interactions, group activity, and event attendance</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">4</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Personalized, multitouch outreach</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We design conversations, not campaigns, by:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Crafting connection requests, messages, and follow-ups that sound human, not scripted</li>
                                <li>Integrating engagement actions (likes, comments, shares) to create a natural entry point</li>
                                <li>Automating timing and structure while keeping personalization manual</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    {/* Step 5 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">5</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Adding extra channels</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We expand your impact beyond LinkedIn through:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Coordinating outreach with personalized email cadences, follow-up calls, and retargeting ads</li>
                                <li>Syncing all activity in HubSpot to create cohesive touchpoints across channels</li>
                                <li>Reinforcing your brand presence at every stage of the buyer journey</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                    {/* Step 6 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                       <div className="flex gap-6">
                          <div className="text-primary font-black text-2xl mt-1">6</div>
                          <div>
                             <h4 className="font-black text-slate-900 text-lg mb-2">Continuous optimization and growth</h4>
                             <p className="text-slate-600 font-medium text-sm mb-4">We never stop refining your results through:</p>
                             <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                                <li>Weekly reviews of campaign performance and A/B message testing</li>
                                <li>Quarterly business reviews (QBRs) to align insights, future steps, and new market hypotheses</li>
                                <li>Ongoing database enrichment and reengagement flows for sustainable pipeline growth</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. BADGES */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-24">
                 <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-6">An award-winning B2B LinkedIn lead generation agency</h2>
                 <p className="text-lg text-slate-600 font-medium mb-12 max-w-3xl mx-auto">Our commitment to quality, consistency, and partnership has earned us multiple industry awards. See what our clients say about the results we helped them achieve.</p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-40 text-center hover:-translate-y-1 transition-transform">
                       <div className="font-black text-xl mb-1">clutch</div>
                       <div className="text-primary font-bold mb-1">4.9 score</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">230 reviews</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-40 text-center hover:-translate-y-1 transition-transform">
                       <div className="font-black text-xl mb-1">g2</div>
                       <div className="text-primary font-bold mb-1">4.8 score</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">93 reviews</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-40 text-center hover:-translate-y-1 transition-transform flex flex-col justify-center">
                       <div className="font-black text-sm mb-1 text-slate-800">Inc. 5000</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Honoree</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-40 text-center hover:-translate-y-1 transition-transform flex flex-col justify-center">
                       <div className="font-black text-sm mb-1 text-slate-800">Stevie Awards</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Winner</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-40 text-center hover:-translate-y-1 transition-transform flex flex-col justify-center">
                       <div className="font-black text-sm mb-1 text-slate-800">UpCity</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Excellence</div>
                    </div>
                 </div>
                 <div className="mt-8">
                    <a href="#" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group">
                       See all awards <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>
              </div>

              {/* CASE STUDY SECTION */}
              <div className="mb-24">
                 <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-6 text-center max-w-4xl mx-auto leading-tight">
                    Here’s how B2B companies succeed with us
                 </h2>
                 <p className="text-lg text-slate-600 font-medium mb-12 text-center">See how our LinkedIn lead generation services turn connections into revenue opportunities.</p>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Case Study 1 */}
                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                       <div className="font-bold text-slate-900 mb-8 leading-relaxed">Inbound + outbound LinkedIn strategy boosted growth for an inclusive talent provider</div>
                       <div className="space-y-6 flex-1 mb-8">
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">450%</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Pipeline growth in the first 3 months</div>
                          </div>
                          <div className="w-full h-px bg-slate-100"></div>
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">70%</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Better connection acceptance rate</div>
                          </div>
                       </div>
                       <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                          Read the case study <ArrowRight className="w-5 h-5" />
                       </a>
                    </div>
                    {/* Case Study 2 */}
                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                       <div className="font-bold text-slate-900 mb-8 leading-relaxed">How a brand agency achieved a 297% year-over-year growth with our services</div>
                       <div className="space-y-6 flex-1 mb-8">
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">20</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">deals won in 2 years</div>
                          </div>
                          <div className="w-full h-px bg-slate-100"></div>
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">$75K</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">avg. deal size</div>
                          </div>
                       </div>
                       <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                          Read the case study <ArrowRight className="w-5 h-5" />
                       </a>
                    </div>
                    {/* Case Study 3 */}
                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                       <div className="font-bold text-slate-900 mb-8 leading-relaxed">Faseeh Lall brings 10+ Fortune 500 Appointments Each Month</div>
                       <div className="space-y-6 flex-1 mb-8">
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">56</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Appointments booked in 6 months</div>
                          </div>
                          <div className="w-full h-px bg-slate-100"></div>
                          <div>
                             <div className="text-4xl font-black text-primary mb-2">90%</div>
                             <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Appointments with enterprise businesses</div>
                          </div>
                       </div>
                       <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                          Read the case study <ArrowRight className="w-5 h-5" />
                       </a>
                    </div>
                 </div>
                 <div className="mt-8 text-center">
                    <a href="#" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group">
                       Explore case studies <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>
              </div>

              <div className="bg-white rounded-[3rem] p-12 lg:p-16 relative overflow-hidden border border-slate-200 shadow-premium">
                 <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                       <h2 className="text-4xl lg:text-5xl font-black font-heading mb-8 leading-tight text-slate-900 text-center lg:text-left">LinkedIn outreach pricing</h2>
                       <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-8 text-center shadow-sm">
                          <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">The average starter price:</p>
                          <div className="text-5xl font-black text-primary mb-6">from $4,000</div>
                          <div className="grid grid-cols-3 gap-4 mb-8 text-left">
                             <div>
                                <div className="text-xl font-black text-slate-900 mb-1">1,500</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">leads/month</div>
                             </div>
                             <div>
                                <div className="text-xl font-black text-slate-900 mb-1">3</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">outreach channels</div>
                             </div>
                             <div>
                                <div className="text-xl font-black text-slate-900 mb-1">100+</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">guaranteed appts/year</div>
                             </div>
                          </div>
                          <button className="bg-primary w-full py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-red text-white">Get my custom quote</button>
                       </div>
                       <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">To get the most out of your LinkedIn strategy, we always reinforce it with at least cold emails and calls. Upon request, we can add extra channels like paid ads, account-based marketing, SMS, etc.</p>
                       <p className="text-sm text-slate-900 font-bold mb-4">We’ll calculate your custom proposal based on:</p>
                       <ul className="list-disc pl-5 text-slate-600 font-medium text-sm space-y-1">
                          <li>Your business scale and ideal customer groups</li>
                          <li>The size of your target market</li>
                          <li>Your sales goals and deal cycle length</li>
                          <li>Your digital presence and supporting marketing assets</li>
                       </ul>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black mb-6 text-slate-900">What’s included:</h3>
                       <ul className="space-y-4 mb-8">
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">ICP review and refinement, if needed</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Deep analysis of your current sales state</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Custom strategy development</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">LinkedIn profile audit and optimization</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Manual lead generation and qualification</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Custom message creation</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Outreach automation setup</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Follow-ups and objection handling</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Booked sales meetings</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Nurturing prospects that didn’t show up</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Weekly sync calls and transparent reporting</span></li>
                          <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> <span className="text-slate-700 font-medium">Dedicated SDR and account manager</span></li>
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
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       How soon will I see results?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">On average, our clients start seeing the first replies and booked meetings within 30–60 days after launch. The initial setup (ICP validation, profile optimization, strategy design, and content development) takes about two weeks. From there, your campaign scales steadily, building both visibility and a reliable meeting pipeline month after month.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       Can you run content and outreach together?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Yes, they are inseparable, actually. Content builds credibility before outreach even begins. Our team can help you develop and publish thought-leadership posts from your personal or company profile to grow brand awareness, increase trust, and boost response rates. It’s a powerful synergy: While outreach starts conversations, content keeps you top of mind.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       How do you measure success?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-4 text-slate-600 font-medium leading-relaxed">
                       <p className="mb-2">We track every metric that matters:</p>
                       <ul className="list-disc pl-5 space-y-1">
                          <li>Connection and acceptance rates</li>
                          <li>Engagement and reply rates</li>
                          <li>Number of booked appointments</li>
                          <li>Cost per opportunity</li>
                       </ul>
                    </div>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       Can LinkedIn work if my audience isn’t very active there?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">It depends on your industry, but even in lower-activity markets, LinkedIn still plays a crucial role in brand awareness and omnichannel engagement. We often combine it with email outreach and follow-up calls to ensure your ICP is reached across every possible touchpoint.</p>
                 </details>
                 <details className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 cursor-pointer hover:border-primary/30 transition-colors">
                    <summary className="font-black text-lg text-slate-900 flex justify-between items-center list-none">
                       Is my LinkedIn account safe during outreach?
                       <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Absolutely. Account safety is non-negotiable for us. Every campaign follows LinkedIn’s activity limits and best practices to ensure natural, human-like engagement. We carefully pace connection requests, personalize each message, and monitor campaign performance daily to keep your account reputation strong. No spam, no shortcuts — just consistent, compliant outreach that protects your brand while delivering real results.</p>
                 </details>
              </div>
           </div>
        </section>

        {/* 8. EXPERTISE SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 mb-12 text-center max-w-xl mx-auto">Learn from our lead generation experts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer overflow-hidden relative">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors z-10 relative leading-tight">LinkedIn B2B outreach statistics: Faseeh Lall’s 2025 study</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1 z-10 relative">We’ve teamed up with Expandi to gain valuable insights into LinkedIn outreach performance.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 relative">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer overflow-hidden relative">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors z-10 relative leading-tight">How we use LinkedIn for B2B lead generation</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1 z-10 relative">As a leading LinkedIn lead generation agency with over 8 years of experience across different industries, we consider outreach part of a bigger demand generation system, not a standalone effort.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 relative">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
                 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col group hover:border-primary transition-colors cursor-pointer overflow-hidden relative">
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors z-10 relative leading-tight">How to set up and run an effective LinkedIn outreach campaign</h3>
                    <p className="text-slate-600 font-medium text-sm mb-8 flex-1 z-10 relative">B2B companies that don’t include LinkedIn outreach in their marketing mix miss out on huge opportunities given that this social network boasts over 58 million business profiles.</p>
                    <div className="text-primary font-bold text-sm flex items-center gap-2 z-10 relative">Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-primary relative overflow-hidden">
           <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-white mb-6">Start connecting with your next customers today</h2>
              <p className="text-lg text-white/90 font-medium mb-10 max-w-2xl mx-auto">Let’s build a LinkedIn strategy that turns your connections into booked meetings and meetings into deals.</p>
              <button className="bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-colors shadow-xl hover:-translate-y-1">Discuss my growth plan</button>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
