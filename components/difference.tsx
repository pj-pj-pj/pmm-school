"use client";

import { CheckCircle } from "lucide-react";

export default function PMMSchoolDifference() {
  const features = [
    {
      heading: "Actionable & no fluff",
      label: "Learn real-world strategies, not theory you'll never use.",
    },
    {
      heading: "Watch & learn in action",
      label: "See real PMM interviews and expert feedback.",
    },
    {
      heading: "Step-by-Step Playbook",
      label: "Follow a clear roadmap to break into PMM.",
    },
    {
      heading: "Personalized Support",
      label: "Get one complimentary 1:1 coaching to fast-track your success.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Makes <span className="bg-purple-300 px-1">PMM School</span>{" "}
            Different?
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            The <span className="bg-blue-200 font-medium px-1">structured</span>
            ,{" "}
            <span className="bg-indigo-200 font-medium px-1">no-fluff way</span>{" "}
            to break into product marketing
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 mb-6 lg:mb-10"></div>

        <div className="space-y-6 mx-auto max-w-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.heading}
                </h3>
                <p className="text-base text-gray-800">{feature.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
