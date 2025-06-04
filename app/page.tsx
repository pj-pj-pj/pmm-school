"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Quote,
  Play,
  Pause,
} from "lucide-react";
import { useState, useEffect } from "react";
import PromotionalBanner from "@/components/promotional-banner";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import HowIHelp from "@/components/how-i-help";
import Curriculum from "@/components/curriculum";
import BonusSection from "@/components/bonus-section";
import PMMSchoolDifference from "@/components/difference";
import Pricing from "@/components/pricing";

export default function PMMSchoolLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Special case for hero section - always animate
          if (entry.target.id.includes("hero")) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            return;
          }

          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-200px 0px 0px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotating testimonials
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const testimonials = [
    {
      name: "Zach",
      role: "Senior PMM at Google",
      image: "/WebsiteAssets/What people are saying/Zach.jpg",
      quote:
        "No frills, no fluff—just straight-to-the-point, actionable insights. I landed my first PMM role thanks to this course!",
      rating: 5,
    },
    {
      name: "Brie",
      role: "Product Marketing Lead at Meta",
      image: "/WebsiteAssets/What people are saying/Brie.jpeg",
      quote:
        "The most practical and direct PMM course I’ve taken. It showed real-world approaches to how PMM actually works inside companies.",
      rating: 5,
    },
    {
      name: "Alicia",
      role: "PMM Manager at Stripe",
      image: "/WebsiteAssets/What people are saying/Alicia.jpeg",
      quote:
        "Everything was so easy to understand! The case studies and examples were spot-on—exactly what a PMM faces in real life.",
      rating: 5,
    },
    {
      name: "Lei",
      role: "Product Marketing Lead at Meta",
      image: "/WebsiteAssets/What people are saying/Lei.jpeg",
      quote:
        "They just extended my offer! I can't thank you enough for your guidance—it made all the difference.",
      rating: 5,
    },
  ];

  return (
    <div
      id="hero"
      className="min-h-screen bg-white"
    >
      {/* Floating cursor effect */}
      <div
        className="fixed w-6 h-6 bg-purple-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Promotional Banner */}
      <PromotionalBanner />
      {/* Navigation */}
      <div className="sticky top-0 z-[999999]">
        <Navigation />
      </div>

      {/* Hero Section */}
      <HeroSection isVisible={isVisible} />

      {/* Problem/Solution Section */}
      <ProblemSolution isVisible={isVisible} />

      {/* How I Help Section */}
      <HowIHelp isVisible={isVisible} />

      {/* What You'll Learn */}
      <Curriculum isVisible={isVisible} />

      {/* BONUS section */}
      <BonusSection isVisible={isVisible} />

      {/* Hero Section */}
      <PMMSchoolDifference isVisible={isVisible} />

      {/* Pricing */}
      <Pricing isVisible={isVisible} />

      {/* Interactive Testimonials */}
      <section
        id="testimonials"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What people are saying about PMM School:
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:scale-105 transition-transform duration-200"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                      index === currentTestimonial
                        ? "bg-purple-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-purple-600 mx-auto mb-6 animate-pulse" />
                  <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="rounded-full h-16 hover:scale-110 transition-transform duration-200 object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <div className="flex gap-1 mt-1">
                        {[
                          ...Array(testimonials[currentTestimonial].rating),
                        ].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Companies Section
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-10"
            data-animate
            id="tech-title"
            style={{
              transform: isVisible["tech-title"]
                ? "translateY(0)"
                : "translateY(30px)",
              opacity: isVisible["tech-title"] ? 1 : 0,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Built With Modern Technologies
            </h2>
            <p className="text-gray-600 mt-2">
              This website was crafted using the following technologies:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Next.js",
                desc: "React Framework",
                bg: "bg-black",
                text: "N",
              },
              {
                name: "Tailwind CSS",
                desc: "Utility-first CSS",
                bg: "bg-sky-500",
                text: "tw",
              },
              {
                name: "shadcn/ui",
                desc: "UI Components",
                bg: "bg-gray-900",
                text: "UI",
              },
              {
                name: "Vercel",
                desc: "Deployment",
                bg: "bg-purple-600",
                text: "V",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer"
                data-animate
                id={`tech-${index}`}
                style={{
                  transform: isVisible[`tech-${index}`]
                    ? "translateY(0)"
                    : "translateY(30px)",
                  opacity: isVisible[`tech-${index}`] ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-16 h-16 ${tech.bg} rounded-full flex items-center justify-center mb-3 hover:rotate-12 transition-transform duration-300`}
                >
                  <span className="text-white font-bold">{tech.text}</span>
                </div>
                <h3 className="font-medium text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 hover:scale-105 transition-transform duration-200">
              Fully responsive, accessible, and optimized for performance
            </p>
          </div>
        </div>
      </section> */}

      {/* Personal Introduction Section
      <section
        id="personal-intro"
        className="relative py-20 overflow-x-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 opacity-15 animate-gradient-xy"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center space-y-8"
              data-animate
              id="personal-intro-content"
              style={{
                transform: isVisible["personal-intro-content"]
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.95)",
                opacity: isVisible["personal-intro-content"] ? 1 : 0,
              }}
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight hover:scale-105 transition-transform duration-300">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Paula Joyce Ucol
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="hover:scale-105 transition-transform duration-200">
                  It's just a rough version for now and may not fully reflect
                  the final content or layout.
                </p>

                <p className="hover:scale-105 transition-transform duration-200">
                  If you're interested, I'd be happy to continue working on it
                  and complete the full redesign. Just let me know!
                </p>

                <div className="pt-4">
                  <p className="text-xl font-medium text-gray-900 hover:scale-105 transition-transform duration-200">
                    Thanks,
                    <br />
                    Paula Joyce Ucol
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="mailto:ucol.12.paula@gmail.com"
                  className="font-bold px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 inline-block"
                >
                  Email me at ucol.12.paula@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="hover:scale-105 transition-transform duration-200">
              <h3 className="font-bold text-lg mb-4">PMM School</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {[
              {
                title: "Course",
                links: ["Curriculum", "Pricing", "Success Stories"],
              },
              {
                title: "Resources",
                links: ["Blog", "Templates", "Community"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Privacy"],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-200"
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="hover:scale-105 transition-transform duration-200">
              &copy; 2025 PMM School. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
