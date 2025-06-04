"use client";

import { Film, LibraryBig, Flame, HandHeart } from "lucide-react";

export default function PMMSchoolDifference() {
  const features = [
    {
      heading: "Actionable & no fluff",
      label: "Learn real-world strategies, not theory you'll never use.",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Makes <span className="bg-violet-300 px-1">PMM School</span>{" "}
            Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The structured, no-fluff way to break into product marketing
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
