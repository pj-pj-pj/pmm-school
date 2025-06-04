"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Pricing({ isVisible }: any) {
  return (
    <section
      id="pricing"
      className="py-20 bg-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Learn practical and actionable product marketing:
          </h2>
          <p className="text-xl text-gray-600">
            One-time payment, lifetime access to everything you need
          </p>
        </div>

        <Card className="p-8 border-2 border-purple-200 relative overflow-x-hidden overflow-y-auto">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-bold">
            GET IT NOW!
          </div>
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Complete PMM Mastery
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="text-lg text-red-500 font-medium rotate-6 line-through">
                  $1995
                </span>
              </div>
              <p className="text-gray-600">
                One-time payment • Lifetime access
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "7+ hours of expert-led content",
                "One complimentary 1:1 coaching",
                "LinkedIn certification",
                "Exclusive bonus content",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r hover:scale-105 hover:-rotate-1 z-50 font-medium from-purple-600 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white py-6 text-md">
              Start Your PMM Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Use code MARKETREADY for $100 off (limited time)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
