"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Rocket, Target, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const handleClick = () => {
  window.open(
    "https://docs.google.com/document/d/1FBtZxDsY58Tp2BXL1sTDyuVgX_EFKQTRIgHdU6ADbAs/edit?usp=sharing",
    "_blank"
  );
};

export default function Curriculum({ isVisible }: any) {
  return (
    <>
      <section
        id="curriculum"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="absolute top-40 left-30 w-40 h-40 bg-purple-300/25 rounded-full animate-ping"
            style={{ animationDelay: "1s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute top-60 right-20 w-30 h-30 bg-blue-300/20 rounded-full animate-ping"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-400/20 rounded-full animate-ping"
            style={{ animationDelay: "0s", animationDuration: "7s" }}
          ></div>
          <div
            className="text-center mb-16"
            data-animate
            id="curriculum-title"
            style={{
              transform: isVisible["curriculum-title"]
                ? "translateY(0)"
                : "translateY(30px)",
              opacity: isVisible["curriculum-title"] ? 1 : 0,
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the complete PMM toolkit
            </p>
            <Button
              onClick={handleClick}
              size="lg"
              className="mt-4 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              View Full Syllabus
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Module 1",
                subtitle: "PMM Foundations A-Z",
                value: 299,
                description:
                  "Master the fundamentals of product marketing through an <b>engaging, mentor-style Q&A format</b>. You’ll gain insights into the strategic role of product marketing, how it intersects with other functions, and the key skills that top PMMs use to drive success.",
                image: "/WebsiteAssets/CurriculumModules/Module 1.png",
              },
              {
                icon: Brain,
                title: "Module 2",
                subtitle: "Product Market Yourself",
                value: 299,
                description:
                  "Landing a product marketing role takes more than just qualifications—it’s about <b>storytelling</b>. This module teaches you how to craft a compelling resume that highlights your impact, position yourself effectively in the job market, and ace PMM interviews with confidence. ",
                image: "/WebsiteAssets/CurriculumModules/Module 2.png",
              },
              {
                icon: Rocket,
                title: "Module 3",
                subtitle: "Watch Real Mock Interviews",
                value: 299,
                description:
                  "Gain a competitive edge by observing real product marketing candidates as they navigate PMM interview questions. Watch <b>detailed breakdowns</b> of their responses, see expert feedback in action, and understand what differentiates a strong answer from a weak one. ",
                image: "/WebsiteAssets/CurriculumModules/Module 3.png",
              },
              {
                icon: Users,
                title: "Module 4",
                subtitle: "Drive Impact with PMM Frameworks",
                value: 399,
                description:
                  "Learn the high-impact frameworks that top product marketers use to drive business results. From crafting go-to-market strategies to executing successful product launches, this module covers battle-tested methodologies that you can apply immediately. ",
                image: "/WebsiteAssets/CurriculumModules/Module 4.png",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl hover:-translate-y-4 transition-all duration-500 overflow-hidden group cursor-pointer ${
                  index === 0 || index === 2 ? "md:mt-[-2rem] md:mb-8" : ""
                }  `}
                data-animate
                id={`module-${index}`}
                style={{
                  transform: isVisible[`module-${index}`]
                    ? "translateY(0) scale(1)"
                    : "translateY(50px) scale(0.95)",
                  opacity: isVisible[`module-${index}`] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4 gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="flex flex-col gap-[2px] text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      <span>{item.title}</span>
                      <Badge className="bg-green-100 text-sm text-green-700 hover:bg-green-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                        💰 ${item.value} Value
                      </Badge>
                    </h3>
                  </div>
                  <h3 className="mb-2 text-lg bg-purple-100 rounded-br-full rounded-tr-full px-4 py-1 font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                    {item.subtitle}
                  </h3>
                  <p
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <div className="mt-auto rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.title} illustration`}
                      width={300}
                      height={200}
                      className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
