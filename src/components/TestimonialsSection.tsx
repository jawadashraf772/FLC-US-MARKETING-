"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      text: "“In the first month, we closed our first contract, which was a promising start. Faseeh Lall & Co. helped us build a robust sales pipeline.”",
      author: "Patrick Benasillo",
      role: "CCO, EVP & Co-Founder",
      industry: "Design",
      avatarInitials: "PB"
    },
    {
      text: "“They consistently delivered on time and were extremely responsive to our needs, resulting in seamless communication and integration.”",
      author: "Rob Domenico",
      role: "Chief Revenue Officer",
      industry: "Business services",
      avatarInitials: "RD"
    },
    {
      text: "“Faseeh Lall & Co. impressed us with their ability to consistently deliver high-quality appointments, exceeding our requirements.”",
      author: "Chris Thomas",
      role: "VP of Sales at Kingbee Vans",
      industry: "Manufacturing",
      avatarInitials: "CT"
    },
    {
      text: "“Their creative approach to breaking through the clutter of digital marketing is impressive.”",
      author: "Scott Chatten",
      role: "Senior Director of Technology",
      industry: "Software Development",
      avatarInitials: "SC"
    },
    {
      text: "“I highly recommend Faseeh Lall & Co. to any organization seeking a vendor that can deliver exceptional results.”",
      author: "Jeremiah Guappone",
      role: "General Manager at Data Genomix",
      industry: "Advertising & Marketing",
      avatarInitials: "JG"
    },
    {
      text: "“Their commitment to helping us achieve success with our goals was thoroughly recognized through their hard work.”",
      author: "Veronica Andrews",
      role: "Marketing Specialist at Cengage",
      industry: "Healthcare & Pharmaceutical",
      avatarInitials: "VA"
    },
    {
      text: "“We had an increase in our pipeline by 200% in the first 3 months.”",
      author: "Roman Eaton",
      role: "Head of Sales and Customer Success",
      industry: "Manufacturing",
      avatarInitials: "RE"
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".snap-start");
      if (card) {
        const cardWidth = card.clientWidth;
        const scrollAmount = direction === "left" ? -cardWidth - 32 : cardWidth + 32;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="testimonials" className="bg-[#FAF9F6] py-24 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-heading font-black">
            What our clients say
          </h2>
        </div>

        {/* Cards Scroll Wrapper */}
        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scrollbar -mx-6 px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((item, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[85vw] sm:w-[400px] rounded-[2rem] border border-slate-150 bg-white p-8 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="space-y-6">
                  {/* Rating & Industry Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5 text-[#D90429]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#D90429] stroke-none" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-700">5.0</span>
                    </div>
                    <span className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 text-[10px] font-black text-slate-500 uppercase tracking-wide">
                      {item.industry}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm font-black text-slate-800 leading-relaxed">
                    "{item.text.replace(/[“”"']/g, "")}"
                  </p>
                </div>

                {/* Author Metadata */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-4">
                  {/* Circular Avatar */}
                  <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black text-[#D90429]">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => handleScroll("left")}
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:border-[#D90429]/50 hover:text-[#D90429] hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:border-[#D90429]/50 hover:text-[#D90429] hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Ratings score block below */}
        <div className="mt-20 border-t border-slate-150 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-150 rounded-[2rem] p-8 md:p-12 shadow-xs">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                We’re the top-rated <br />
                <span className="text-primary">B2B lead gen company</span> in the USA
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-400">
                See what others are saying about Faseeh Lall & Co.’s B2B lead generation services and how we helped hack their growth.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-[#FAF9F6] border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:border-[#D90429]/25 hover:shadow-sm transition-all duration-300">
                <div>
                  <span className="text-xs font-black text-slate-800 block">clutch</span>
                  <span className="text-[11px] font-bold text-slate-400">230 reviews</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#D90429] font-heading">4.9</span>
                  <span className="text-[10px] font-black text-slate-400 block uppercase tracking-wider">score</span>
                </div>
              </div>

              <div className="bg-[#FAF9F6] border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:border-[#D90429]/25 hover:shadow-sm transition-all duration-300">
                <div>
                  <span className="text-xs font-black text-slate-800 block">g2</span>
                  <span className="text-[11px] font-bold text-slate-400">93 reviews</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#D90429] font-heading">4.8</span>
                  <span className="text-[10px] font-black text-slate-400 block uppercase tracking-wider">score</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
