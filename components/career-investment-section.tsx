"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/components/career-invest-testimonials-data";
import dynamic from "next/dynamic";
import AnimatedSection from "./animated-section";

const TestimonialGrid = dynamic(
  () => import("@/components/career-invest-grid"),
  {
    ssr: false,
  }
);

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function CareerInvestmentSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-violet-500">invest</span> in your
            career?
          </h2>
          <p className="text-lg text-gray-700 max-w-lg mx-auto mb-8">
            Join product marketers who've transformed their careers with PMM
            School
          </p>
        </div>

        <AnimatedSection>
          <TestimonialGrid testimonials={testimonials} />
        </AnimatedSection>

        <AnimatedSection className="text-center mt-12 lg:mt-16">
          <Button
            onClick={handleClick}
            className="hover:scale-[102%] hover:text-gray-400 hover:brightness-125 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer bg-violet-500 hover:bg-violet-600 text-white py-5 text-sm font-medium rounded-xs"
          >
            Start Your Success Story Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
