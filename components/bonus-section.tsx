"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BonusSection() {
  return (
    <section className="py-16 md:py-24 pb-20 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:lg:grid-cols-[2fr_1.5fr] gap-4 md:gap-14 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-violet-600">
                  Master Product Marketing
                </span>{" "}
                – Skip the Learning Curve 🚀
              </h2>
              <p className="text-lg text-gray-800">
                Access exclusive bonus content and 1:1 coaching to accelerate
                your PMM journey
              </p>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-sm text-sm font-semibold">
                $699 Value
              </div>
            </div>

            <div className="space-y-4">
              {[
                "<b>Complimentary 1:1 Coaching Call</b> – Receive direct, personalized feedback on your resume, interview prep, or career strategy.",
                "<b>Exclusive Videos & Insights</b> – Access premium content not available anywhere else, including in-depth case studies and insider career tips.",
                "<b>LinkedIn Certification</b> – Showcase your achievement on LinkedIn and strengthen your personal brand.",
                "<b>Q&A Forum</b> – Ask me any product marketing-related question, and I'll personally respond within 48 hours.",
                "<b>Video Request Forum</b> – Have a specific topic you want covered? Submit your request, and get priority on new video content.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span
                    className="text-base text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative px-4 md:ml-7 md:my-auto">
            <div className="hidden lg:inline absolute inset-0 w-[85%] md:bg-green-100 rounded-br-4xl ml-auto mt-auto"></div>
            {/* Scattered Background Emojis */}
            {/* <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
              <span className="absolute top-20 left-4 text-3xl animate-float">
                ✒️
              </span>
              <span
                className="absolute top-20 right-8 text-4xl animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                �
              </span>
              <span
                className="absolute bottom-16 left-20 text-4xl animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                🤝
              </span>
              <span
                className="absolute top-1/2 left-1/3 text-6xl animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🎯
              </span>
              <span
                className="absolute bottom-8 right-4 text-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                💡
              </span>
              
              <span
                className="absolute top-1/4 right-12 text-3xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                📊
              </span>
              <span
                className="absolute bottom-24 right-1/4 text-3xl animate-float"
                style={{ animationDelay: "0.6s" }}
              >
                🚀
              </span>
              <span
                className="absolute top-32 left-1/4 text-2xl animate-spin-slow"
                style={{ animationDelay: "0.3s" }}
              >
                ✨
              </span>
            </div> */}

            <div className="relative overflow-hidden lg:-ml-22 lg:pt-34 mx-auto">
              <Image
                src="/WebsiteAssets/CurriculumModules/Bonus.png"
                alt="Bonus Content"
                width={400}
                height={300}
                className="lg:w-full h-54 lg:h-auto object-cover lg:object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
