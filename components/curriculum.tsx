"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const handleClick = () => {
  window.open(
    "https://docs.google.com/document/d/1FBtZxDsY58Tp2BXL1sTDyuVgX_EFKQTRIgHdU6ADbAs/edit?usp=sharing",
    "_blank"
  );
};

export default function Curriculum() {
  const modules = [
    {
      icon: Target,
      title: "Module 1",
      subtitle: "PMM Foundations A-Z",
      value: 299,
      description:
        "Master the fundamentals of product marketing through an engaging, mentor-style Q&A format. You'll gain insights into the strategic role of product marketing, how it intersects with other functions, and the key skills that top PMMs use to drive success.",
      image: "/WebsiteAssets/CurriculumModules/Module 1.png",
    },
    {
      icon: Brain,
      title: "Module 2",
      subtitle: "Product Market Yourself",
      value: 299,
      description:
        "Landing a product marketing role takes more than just qualifications—it's about storytelling. This module teaches you how to craft a compelling resume that highlights your impact, position yourself effectively in the job market, and ace PMM interviews with confidence.",
      image: "/WebsiteAssets/CurriculumModules/Module 2.png",
    },
    {
      icon: Rocket,
      title: "Module 3",
      subtitle: "Watch Real Mock Interviews",
      value: 299,
      description:
        "Gain a competitive edge by observing real product marketing candidates as they navigate PMM interview questions. Watch detailed breakdowns of their responses, see expert feedback in action, and understand what differentiates a strong answer from a weak one.",
      image: "/WebsiteAssets/CurriculumModules/Module 3.png",
    },
    {
      icon: Users,
      title: "Module 4",
      subtitle: "Drive Impact with PMM Frameworks",
      value: 399,
      description:
        "Learn the high-impact frameworks that top product marketers use to drive business results. From crafting go-to-market strategies to executing successful product launches, this module covers battle-tested methodologies that you can apply immediately.",
      image: "/WebsiteAssets/CurriculumModules/Module 4.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What <span className="bg-violet-200 px-1">You'll Learn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the complete PMM toolkit with our comprehensive curriculum
          </p>
          <Button
            onClick={handleClick}
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            View Full Syllabus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center mb-6 gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-sm text-purple-600 font-semibold">
                        ${item.value} Value
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {item.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} illustration`}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
