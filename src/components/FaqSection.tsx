"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What exactly is this service, and what are your core expertise?",
      answer: "Our core focus is generating Sales Qualified Leads (SQLs) rather than generic digital marketing. We find pre-interested buyers via Meta, Google, and LinkedIn, filter them rigorously, and bring them directly to your calendar."
    },
    {
      question: "The package is too expensive, how do we keep costs minimum?",
      answer: "The investment is designed to pay for itself; closing even one high-value client often covers the first month. Tight budgets can start with the Basic package (PKR 200,000) for raw leads and upgrade later."
    },
    {
      question: "Is the ad spend included in the package?",
      answer: "No, ad spend is separate and paid directly to platforms. It typically ranges from PKR 30,000 to PKR 100,000 per month depending on your specific market and goals."
    },
    {
      question: "Who owns the system and CRM after the 90-day period?",
      answer: "You have 100% ownership. This includes the GHL CRM sub-account, landing pages, ad campaigns, and automation workflows. You can exit anytime with a 15-day notice."
    },
    {
      question: "Meta ads often bring garbage leads, how do you prevent this?",
      answer: "Garbage leads happen when the ICP is poorly defined. Our first 15 days are dedicated purely to ICP research and validation, ensuring we target the correct pain points before going live."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer a 20-day performance guarantee. If no meaningful progress (ICP validation and live campaigns) is made in the first 20 days, you have the option to exit with a refund for that cycle."
    },
    {
      question: "I am a founder, not a salesperson. How will I close these deals?",
      answer: "The meetings are pre-qualified and consulting-based. Taking a meeting is similar to responding to a high-intent proposal. We also provide a closing script to assist you."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-slate-50/50 py-24 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl font-heading leading-tight">
            Straight Answers to Your Concerns
          </h2>
          <p className="text-sm font-semibold text-slate-400 max-w-xl mx-auto font-sans">
            No agency fluff. Just the facts on how we deliver results.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-black text-brand-dark pr-4 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-slate-50 text-sm font-semibold leading-relaxed text-slate-500">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout */}
        <div className="mt-16 text-center bg-white border border-slate-100 rounded-3xl p-8 max-w-2xl mx-auto space-y-5 shadow-xs">
          <p className="text-sm font-bold text-slate-500">
            Have a specific question about your industry?
          </p>
          <a 
            href="https://wa.me/923000000000" // Placeholder phone number or WhatsApp link
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#25D366]/10"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-white stroke-none" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
