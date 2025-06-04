"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Learn <span className="bg-violet-400 px-1">Practical</span> and{" "}
            <span className="bg-violet-300 px-1">Actionable</span> Product
            Marketing
          </h2>
          <p className="text-xl text-gray-600">
            One-time payment, lifetime access to everything you need
          </p>
        </div>

        <Card className="border-0 shadow-2xl relative overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Complete PMM Mastery
              </h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-6xl font-bold text-gray-900">$499</span>
                <div className="text-left">
                  <div className="text-2xl text-gray-400 line-through">
                    $1995
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Save 75%
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                One-time payment • Lifetime access
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {[
                "7+ hours of expert-led content",
                "One complimentary 1:1 coaching",
                "LinkedIn certification",
                "Exclusive bonus content",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={handleClick}
              className="w-full bg-purple-600 hover:bg-purple-700 text-md text-white py-6 font-semibold rounded-lg"
            >
              Start Your PMM Journey Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="text-center text-gray-500 mt-6">
              Use code{" "}
              <span className="font-semibold text-purple-600">MARKETREADY</span>{" "}
              for $100 off
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
