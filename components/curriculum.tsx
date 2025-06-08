"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./animated-section";

const handleClick = () => {
  window.open(
    "https://docs.google.com/document/d/1FBtZxDsY58Tp2BXL1sTDyuVgX_EFKQTRIgHdU6ADbAs/edit?usp=sharing",
    "_blank"
  );
};

export default function Curriculum() {
  const modules = [
    {
      emoji: "🎯",
      title: "Module 1",
      subtitle: "PMM Foundations A-Z",
      value: 299,
      description: `Master the fundamentals of product marketing through an  <span style="background-color: #ffedd5; padding: 0 0.25rem;">engaging, mentor-style Q&A format</span>. You'll gain insights into the strategic role of product marketing, how it intersects with other functions, and the key skills that top PMMs use to drive success.`,
      image: "/WebsiteAssets/CurriculumModules/Module 1.png",
    },
    {
      emoji: "🤝",
      title: "Module 2",
      subtitle: "Product Market Yourself",
      value: 299,
      description: `Landing a product marketing role takes more than just qualifications—it's about <span style="background-color: #e9d5ff; padding: 0 0.25rem;">storytelling</span>. This module teaches you how to craft a compelling resume that highlights your impact, position yourself effectively in the job market, and ace PMM interviews with confidence.`,
      image: "/WebsiteAssets/CurriculumModules/Module 2.png",
    },
    {
      emoji: "🎬",
      title: "Module 3",
      subtitle: "Watch Real Mock Interviews",
      value: 299,
      description: `Gain a competitive edge by observing real product marketing candidates as they navigate PMM interview questions. Watch <span style="background-color:	#bfdbfe; padding: 0 0.25rem;">detailed breakdowns</span> of their responses, see expert feedback in action, and understand what differentiates a strong answer from a weak one.`,
      image: "/WebsiteAssets/CurriculumModules/Module 3.png",
    },
    {
      emoji: "🧩",
      title: "Module 4",
      subtitle: "Drive Impact with PMM Frameworks",
      value: 399,
      description: `Learn the <span style="background-color: #fecaca; padding: 0 0.25rem;">high-impact frameworks</span> that top product marketers use to drive business results. From crafting go-to-market strategies to executing successful product launches, this module covers battle-tested methodologies that you can apply immediately.`,
      image: "/WebsiteAssets/CurriculumModules/Module 4.png",
    },
  ];

  return (
    <section
      id="what-youll-learn"
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What <span className="bg-violet-200 px-1">You'll Learn</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Master the complete PMM toolkit with our comprehensive curriculum
          </p>
          <Button
            onClick={handleClick}
            variant="outline"
            size={"sm"}
            className="hover:scale-[102%] transition-transform duration-200 hover:brightness-90 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer border-violet-400 text-violet-500 hover:text-violet-500 hover:bg-violet-200 text-sm py-4 rounded-xs"
          >
            View Full Syllabus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <AnimatedSection className="space-y-16 lg:space-y-24">
          {modules.map((item, index) => (
            <div
              key={index}
              className={`grid gap-8 lg:gap-26 items-center ${
                index % 2 === 1
                  ? "lg:grid-flow-col-dense lg:grid-cols-[1.5fr_2fr]"
                  : "lg:grid-cols-[2fr_1.65fr]"
              }`}
            >
              {/* Content Side */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{item.emoji}</div>
                  <div className="">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="ml-auto text-violet-400 font-semibold">
                      ${item.value} Value
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.subtitle}
                </h4>
                <p
                  className="text-base text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              {/* Image Side with Half Background */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative hover:scale-105 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  {/* Half Background */}
                  <div
                    className={`absolute inset-0 rounded-xs rounded-br-2xl ${
                      index % 2 === 0
                        ? "-right-6 bg-blue-50"
                        : "-right-6 bg-red-50 rounded-tl-3xl"
                    } ${index === 1 && "!bg-violet-100 rounded-tr-lg"} ${
                      index === 0 && "!bg-orange-100 rounded-bl-3xl"
                    }`}
                    style={{
                      width: "97%",
                      height: "70%",
                      [index % 2 === 0 ? "left bottom" : "right"]: "0",
                    }}
                  ></div>

                  {/* Image */}
                  <div className="relative z-10 overflow-hidden rounded-xs flex items-center justify-center my-auto ">
                    <Image
                      src={item.image}
                      alt={`${item.title} illustration`}
                      width={340}
                      height={300}
                      className="object-cover h-80 -mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
