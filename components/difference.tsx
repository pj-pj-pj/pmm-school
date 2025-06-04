"use client";

import { Film, LibraryBig, Flame, HandHeart } from "lucide-react";

export default function PMMSchoolDifference({ isVisible }: any) {
  const stats = [
    {
      heading: "Actionable & no fluff",
      label: "Learn real-world strategies, not theory you’ll never use.",
      icon: Flame,
    },
    {
      heading: "Watch & learn in action",
      label: "See real PMM interviews and expert feedback.",
      icon: Film,
    },
    {
      heading: "Step-by-Step Playbook",
      label: "Follow a clear roadmap to break into PMM.",
      icon: LibraryBig,
    },
    {
      heading: "Personalized Support",
      label: "Get one complimentary 1:1 coaching to fast-track your success.",
      icon: HandHeart,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 flex-col mb-10">
          <h2 className="text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What makes PMM School different?
          </h2>
          <p className="mx-3 text-lg lg:text-2xl text-center text-gray-800 max-w-3xl">
            The{" "}
            <span className="font-bold text-black">
              structured, no-fluff way
            </span>{" "}
            to break into product marketing
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
              <div className="relative w-16 h-16 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                {/* Numbered badge
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-110 transition-transform duration-200 z-10">
                  {index + 1}
                </div> */}
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
