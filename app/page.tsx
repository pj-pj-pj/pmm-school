"use client";

import PromotionalBanner from "@/components/promotional-banner";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import HowIHelp from "@/components/how-i-help";
import Curriculum from "@/components/curriculum";
import BonusSection from "@/components/bonus-section";
import PMMSchoolDifference from "@/components/difference";
import Pricing from "@/components/pricing";
import GraduatesSection from "@/components/graduates-section";
import FAQSection from "@/components/faq-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import CareerInvestmentSection from "@/components/career-investment-section";

export default function PMMSchoolLanding() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-white"
    >
      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Problem/Solution Section */}
      <ProblemSolution />

      {/* How I Help Section */}
      <HowIHelp />

      {/* What You'll Learn */}
      <Curriculum />

      {/* BONUS section */}
      <BonusSection />

      {/* PMM School Difference */}
      <PMMSchoolDifference />

      {/* Pricing */}
      <Pricing />

      {/* Career Investment Section */}
      <CareerInvestmentSection />

      {/* Testimonials */}

      {/* Graduates Section */}
      <GraduatesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
