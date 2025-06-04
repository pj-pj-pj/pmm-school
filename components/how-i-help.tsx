"use client";

import { Trophy, Rocket, BookOpenText, WandSparkles } from "lucide-react";

export default function HowIHelp({ isVisible }: any) {
  const stats = [
    {
      heading: "Master PMM foundations",
      label: "with real case studies and expert insights",
      icon: BookOpenText,
    },
    {
      heading: "Build a standout resume",
      label: "that catches recruiters’ attention",
      icon: WandSparkles,
    },
    {
      heading: "Ace your interviews",
      label: "with detailed mock interview breakdowns",
      icon: Trophy,
    },
    {
      heading: "Make an impact",
      label: "with simple, effective PMM frameworks",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 flex-col mb-10">
          <h2 className="text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Here's How I Can Help
          </h2>
          <p className="mx-3 text-lg lg:text-2xl text-center text-gray-800 max-w-3xl">
            I've turned <span className="font-bold text-black">10+ years</span>{" "}
            of PMM experience at Google and startups into a{" "}
            <span className="font-bold text-black">step-by-step system</span> to
            help you
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-animate
          id="stats"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer "
              style={{
                transform: isVisible["stats"]
                  ? "translateY(0)"
                  : "translateY(30px)",
                opacity: isVisible["stats"] ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                {/* Numbered badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-200 z-10">
                  {index + 1}
                </div>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl lg:text-2xl font-bold text-gray-900">
                {stat.heading}
              </div>
              <div className="text-gray-700 text-md lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
