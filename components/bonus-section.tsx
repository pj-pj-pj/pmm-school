"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BonusSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Master Product Marketing – Skip the Learning Curve 🚀
              </h2>
              <p className="text-xl text-gray-600">
                Access exclusive bonus content and 1:1 coaching to accelerate
                your PMM journey
              </p>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                $699 Value
              </div>
            </div>

            <div className="space-y-6">
              {[
                "Complimentary 1:1 Coaching Call – Receive direct, personalized feedback on your resume, interview prep, or career strategy.",
                "Exclusive Videos & Insights – Access premium content not available anywhere else, including in-depth case studies and insider career tips.",
                "LinkedIn Certification – Showcase your achievement on LinkedIn and strengthen your personal brand.",
                "Q&A Forum – Ask me any product marketing-related question, and I'll personally respond within 48 hours.",
                "Video Request Forum – Have a specific topic you want covered? Submit your request, and get priority on new video content.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src="/WebsiteAssets/CurriculumModules/Bonus.png"
                alt="Bonus Content"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
