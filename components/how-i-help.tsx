"use client";

import AnimatedSection from "./animated-section";
import { Card, CardContent } from "./ui/card";

export default function HowIHelp() {
  const steps = [
    {
      number: 1,
      title: "Master PMM foundations",
      description:
        "Learn through real-world case studies and actionable expert insights.",
      emoticon: "🚀",
      color: "bg-purple-200",
    },
    {
      number: 2,
      title: "Build a standout resume",
      description: "Craft a resume that instantly grabs recruiters' attention.",
      emoticon: "✒️",
      color: "bg-purple-100",
    },
    {
      number: 3,
      title: "Ace your interviews",
      description:
        "Prepare confidently with in-depth mock interview breakdowns.",
      emoticon: "💡",
      color: "bg-purple-200",
    },
    {
      number: 4,
      title: "Make an impact",
      description:
        "Apply simple, effective PMM frameworks to drive real results.",
      emoticon: "✨",
      color: "bg-purple-100",
    },
  ];

  return (
    <section
      id="how-i-help"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Here's how I can help:
          </h2>
        </AnimatedSection>

        <div className="border-t border-gray-200 pt-4 mb-6"></div>

        <div className="text-center mb-8">
          <p className="max-w-2xl mx-auto text-lg text-gray-800">
            I've turned <span className="font-bold">10+ years</span> of PMM
            experience at Google and startups into a{" "}
            <span className="font-bold">step-by-step system</span> to help you:
          </p>
        </div>

        <AnimatedSection className="mx-auto space-y-7">
          <div className="flex flex-col md:flex-row gap-8 md:gap-3 justify-between">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-white border border-purple-300 shadow-sm flex-1 relative pt-6 pb-8 hover:scale-105 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                <CardContent className="px-6 pb-4 flex flex-col h-full">
                  <AnimatedSection className="flex-grow mb-6">
                    {" "}
                    <div className="flex items-center">
                      <div className="bg-white shadow-xs border border-purple-100 rounded-md p-2 text-2xl flex items-center justify-center text-slate-700 font-semibold">
                        {step.emoticon}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1 leading-tight mt-5">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-800">
                      {step.description}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection
                    className={`${step.color} z-40 mt-auto ml-auto -mb-16 mr-2 text-gray-800 w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg shadow-sm border border-purple-300`}
                  >
                    {step.number}
                  </AnimatedSection>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
