"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HardTruthSection from "@/components/HardTruthSection";
import RoadmapSection from "@/components/RoadmapSection";
import CoreOfferSection from "@/components/CoreOfferSection";
import TransparencySection from "@/components/TransparencySection";
import AssetProtectionSection from "@/components/AssetProtectionSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <HardTruthSection />
        <RoadmapSection />
        <CoreOfferSection />
        <TransparencySection />
        <PricingSection />
        <AssetProtectionSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
