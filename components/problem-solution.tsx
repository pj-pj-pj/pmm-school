"use client";

import { CheckCircle, X } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Feeling <span className="bg-violet-200 px-1">stuck</span>, in your
            PMM Journey?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Does <span className="text-red-400">this</span> sound like you?
            </h3>
            <div className="space-y-6">
              {[
                "You want to break into PMM but don't know where to start",
                "You're overwhelmed by all the conflicting advice online",
                "You're stuck in analysis paralysis, unsure of your next step",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              There's a <span className="text-green-600">better</span> way:
            </h3>
            <div className="space-y-6">
              {[
                "Get clarity on the exact steps to land a PMM role",
                "Learn the right PMM skills that hiring managers look for",
                "Take action with a proven roadmap designed to help you break in",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
