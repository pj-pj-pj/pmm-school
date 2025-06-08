"use client";

import Image from "next/image";
import AnimatedSection from "./animated-section";

export default function GraduatesSection() {
  return (
    <section className="py-16 md:py-26 bg-white overflow-x-hidden">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-18">
            PMM School graduates work at companies like:
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-20 items-center px-4">
          {[
            {
              src: "/WebsiteAssets/GraduateCompanies/Google_2015_logo.svg.png",
              alt: "Google",
            },
            {
              src: "/WebsiteAssets/GraduateCompanies/Nvidia_logo.svg.png",
              alt: "NVIDIA",
            },
            {
              src: "/WebsiteAssets/GraduateCompanies/Microsoft_logo_(2012).svg.png",
              alt: "Microsoft",
            },
            {
              src: "/WebsiteAssets/GraduateCompanies/Indeed_logo.svg.png",
              alt: "Microsoft",
            },
          ].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-auto"
            >
              <Image
                src={company.src}
                alt={company.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 200px"
                className="hover:scale-105 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] w-full h-auto max-h-16 md:max-h-24 object-contain self-center mx-auto"
                style={{ width: "auto" }}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
