"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight } from "lucide-react";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function Pricing() {
  const features = [
    {
      description: `<span style="background-color: #dcfce7; font-weight: 600; padding: 0 3px;">7+ hours</span> of expert-led content`,
      colorText: "text-orange-400",
    },
    {
      description: `One complimentary <span style="background-color: #dcfce7; font-weight: 600; padding: 0 3px;">1:1 coaching</span>`,
      colorText: "text-blue-400",
    },
    {
      description: `LinkedIn <span style="background-color: #dcfce7; font-weight: 600; padding: 0 3px;">certification</span>`,
      colorText: "text-red-400",
    },
    {
      description: `<span style="background-color: #dcfce7; font-weight: 600; padding: 0 3px;">Exclusive</span> bonus content`,
      colorText: "text-violet-400",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learn <span className="bg-indigo-200 px-1">Practical</span> and{" "}
            <span className="bg-indigo-300 px-1">Actionable</span> Product
            Marketing
          </h2>
          <p className="text-lg text-gray-800">
            One-time payment, lifetime access to everything you need
          </p>
        </div>

        <div className="grid md:grid-cols-[1.9fr_2fr] gap-6 mb-10">
          {/* Left Card - Total Value */}
          <div className="bg-gray-100 p-8 rounded-sm shadow-md border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">
                Total Value of PMM School:
              </h3>
              <div className="text-2xl font-bold text-gray-400 line-through mb-6">
                $1995
              </div>
            </div>

            <div className="space-y-4">
              {["But obviously", "You don't", "have", "$1995"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 italic"
                  >
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-base text-gray-400 line-through">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Card - Actual Price */}
          <div className="bg-white p-8 rounded-sm shadow-md border-2 border-gray-300">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                So instead you'll just pay:
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">$499</span>
                <span className="text-base text-gray-600">
                  (lifetime access)
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8 md:mb-12 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className={`h-5 w-5 text-green-500 flex-shrink-0`}
                  />
                  <span
                    className="text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              ))}
            </div>

            <Button
              onClick={handleClick}
              className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-base font-semibold rounded-xs"
            >
              Start My PMM Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Use code{" "}
              <span className="font-semibold text-indigo-600">MARKETREADY</span>{" "}
              for $100 off
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
