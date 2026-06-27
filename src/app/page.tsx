"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePropBanner from "@/components/ValuePropBanner";
import ChallengesSection from "@/components/ChallengesSection";
import PipelineSection from "@/components/PipelineSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ValuePropBanner />
        <ChallengesSection />
        <PipelineSection />
        <DifferentiatorsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <TeamSection />
        <KnowledgeSection />
      </main>
      <Footer />
    </>
  );
}
