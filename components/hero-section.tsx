"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function HeroSection({ isVisible }: any) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-18 mx-auto z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 opacity-10 animate-gradient-x"></div>

      {/* Floating shapes */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div
            className="space-y-8 transform transition-all duration-1000"
            data-animate
            id="hero-content"
            style={{
              transform: isVisible["hero-content"]
                ? "translateY(0) scale(1)"
                : "translateY(50px) scale(0.95)",
              opacity: isVisible["hero-content"] ? 1 : 0,
            }}
          >
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 hover:scale-105 transition-all duration-200 cursor-pointer">
                🚀 #1 PMM Career Accelerator
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Launch and grow your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  {" "}
                  <span className="lg:text-7xl">PMM career</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the complete toolkit:
              </p>
            </div>

            <div className="space-y-2">
              {[
                "Master product marketing from A to Z 💪 ",
                "Ace your PMM interviews with confidence 🎯 ",
                "Make an impact and accelerate your career 🚀 ",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 transform transition-all duration-500 hover:translate-x-2 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleClick}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200 cursor-pointer"
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
            </div> */}
          </div>

          <div className="relative mx-auto">
            <div className="relative group">
              {/* Outer animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 animate-pulse transition-all duration-500"></div>

              {/* Inner glowing frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300"></div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-purple-500 rounded-tl-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-blue-500 rounded-tr-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-blue-500 rounded-bl-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-purple-500 rounded-br-lg group-hover:scale-125 transition-transform duration-300"></div>

              {/* Floating dots */}
              <div
                className="absolute -top-1 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute -right-1 top-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-1 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -left-1 bottom-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div
                className="relative z-10 transform transition-all duration-1000 group-hover:scale-105 -rotate-2 group-hover:rotate-3 px-2 py-2"
                data-animate
                id="hero-image"
                style={{
                  transform: isVisible["hero-image"]
                    ? "translateY(0) rotate(0deg)"
                    : "translateY(30px) rotate(-5deg)",
                  opacity: isVisible["hero-image"] ? 1 : 0,
                }}
              >
                <Image
                  src="/WebsiteAssets/Headshot 1.JPG"
                  alt="PMM School Instructor"
                  width={420}
                  height={320}
                  className="rounded-2xl object-cover shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 relative z-10"
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
