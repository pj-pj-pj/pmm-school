"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CircleX } from "lucide-react";

export default function ProblemSolution({ isVisible }: any) {
  return (
    <section
      id="problem-solution"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
          data-animate
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Feeling{" "}
            <span className="inline-block transform -rotate-6 hover:rotate-0 mx-1.5">
              STUCK
            </span>{" "}
            in your PMM journey?
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card
            className="p-8 border-red-200 bg-red-50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            data-animate
            id="problem-card"
            style={{
              transform: isVisible["problem-card"]
                ? "translateX(0)"
                : "translateX(-50px)",
              opacity: isVisible["problem-card"] ? 1 : 0,
            }}
          >
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Does this sound like you?
              </h3>
              <div className="space-y-4">
                {[
                  "You want to break into PMM but don't know where to start",
                  "You're overwhelmed by all the conflicting advice online",
                  "You're stuck in analysis paralysis, unsure of your next step",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200"
                  >
                    <CircleX
                      strokeWidth={2}
                      size={24}
                      className="rounded-full text-red-500 mt-0.5 hover:scale-110 transition-transform duration-200"
                    />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="p-8 border-green-200 bg-green-50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            data-animate
            id="solution-card"
            style={{
              transform: isVisible["solution-card"]
                ? "translateX(0)"
                : "translateX(50px)",
              opacity: isVisible["solution-card"] ? 1 : 0,
            }}
          >
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                There's a better way:
              </h3>
              <div className="space-y-4">
                {[
                  "Get clarity on the exact steps to land a PMM role",
                  "Learn the right PMM skills that hiring managers look for",
                  "Take action with a proven roadmap designed to help you break in",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200"
                  >
                    <CheckCircle
                      strokeWidth={2}
                      size={24}
                      className=" text-green-500 mt-0.5 hover:scale-110 transition-transform duration-200"
                    />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
