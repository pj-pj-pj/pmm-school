"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Launch and grow your{" "}
                <span className="text-purple-600">PMM career</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the complete toolkit to master product marketing from A to
                Z, ace your interviews, and accelerate your career.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Master product marketing from A to Z 💪",
                "Ace your PMM interviews with confidence 🎯",
                "Make an impact and accelerate your career 🚀",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                onClick={handleClick}
                size="lg"
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative px-12">
            <div className="relative overflow-hidden w-full flex items-center justify-center">
              <Image
                src="/WebsiteAssets/Headshot 1.JPG"
                alt="PMM School Instructor"
                width={350}
                height={600}
                className="shadow-2xl rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
