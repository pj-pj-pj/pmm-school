"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./animated-section";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-none">
                Launch and grow your{" "}
                <span className="text-violet-600">PMM career</span>
              </h1>
              <p className="text-base text-gray-900">
                Get the complete toolkit to master product marketing from A to
                Z, ace your interviews, and accelerate your career.
              </p>
            </div>

            <AnimatedSection className="space-y-3">
              {[
                "Master product marketing from A to Z",
                "Ace your PMM interviews with confidence",
                "Make an impact and accelerate your career",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex cursor-default items-center gap-3 hover:scale-[101%] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:text-gray-300"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </AnimatedSection>

            <div className="pt-2">
              <Button
                onClick={handleClick}
                size={"default"}
                className="text-base cursor-pointer hover:scale-[101%] hover:brightness-150 hover:text-gray-400 bg-violet-500 hover:bg-violet-900 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-white py-5 rounded-xs"
              >
                Start Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative px-8">
            <AnimatedSection className="relative overflow-hidden w-full flex items-center justify-center">
              <Image
                src="/WebsiteAssets/Headshot 1.JPG"
                alt="PMM School Instructor"
                width={300}
                height={500}
                className="shadow-2xl rounded-tr-2xl rounded-br-2xl object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to left, rgba(0,0,0,1) 80%, rgba(0,0,0,.01))",
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
