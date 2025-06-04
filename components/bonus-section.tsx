"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BonusSection({ isVisible }: any) {
  return (
    <section className="relative overflow-x-hidden py-20 lg:py-18 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 opacity-10 animate-gradient-x"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 items-center">
          <div
            className="space-y-8  transform transition-all duration-1000"
            data-animate
            id="bonus-content"
            style={{
              transform: isVisible["bonus-content"]
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.95)",
              opacity: isVisible["bonus-content"] ? 1 : 0,
            }}
          >
            <div className="space-y-4">
              <h1 className="flex flex-col text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span>Wait!</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  {" "}
                  <span className="lg:text-7xl">THERE'S MORE!</span>
                </span>
              </h1>
              <div className="text-xl md:text-3xl font-medium text-gray-700 leading-relaxed">
                <span className="flex flex-wrap space-x-2">
                  <span>Get</span>{" "}
                  <span className="font-bold">1:1 coaching</span>
                  <span>and</span>
                  <span className="font-bold ">access</span>
                  <span>to</span>
                  <span className="italic underline underline-offset-4 ">
                    bonus content
                  </span>
                </span>
                <Badge className="rounded-full px-4 bg-green-100 text-base md:text-md text-green-700 hover:bg-green-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                  💰 $699 Value
                </Badge>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto mt-10">
              {[
                "<b>Complimentary 1:1 Coaching Call</b> – Receive direct, personalized feedback on your resume, interview prep, or career strategy.",
                "<b>Exclusive Videos & Insights</b> – Access premium content not available anywhere else, including in-depth case studies and insider career tips.",
                "<b>LinkedIn Certification</b> – Showcase your achievement on LinkedIn and strengthen your personal brand.",
                "<b>Q&A Forum</b> – Ask me any product marketing-related question, and I’ll personally respond within 48 hours.",
                "<b>Video Request Forum</b> – Have a specific topic you want covered? Submit your request, and get priority on new video content.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 transform transition-all duration-500 hover:translate-x-2 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle className="w-4 text-green-500 shrink-0" />
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="relative group">
              {/* Outer animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 animate-pulse transition-all duration-500 rotate-3"></div>

              {/* Inner glowing frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300 rotate-3"></div>

              <div
                className="relative z-10 transform transition-all duration-1000 group-hover:scale-105 group-hover:-rotate-3 px-2 py-2"
                data-animate
                id="bonus-image"
                style={{
                  transform: isVisible["bonus-image"]
                    ? "translateY(0) rotate(0deg)"
                    : "translateY(30px) rotate(-5deg)",
                  opacity: isVisible["bonus-image"] ? 1 : 0,
                }}
              >
                <Image
                  src="/WebsiteAssets/CurriculumModules/Bonus.png"
                  alt="PMM School Instructor"
                  width={450}
                  height={450}
                  className="rounded-2xl h-80 object-cover shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 relative z-10"
                />

                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
