"use client";

import Image from "next/image";

export default function GraduatesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="bg-violet-400 px-2">PMM School graduates</span>{" "}
            work at companies like:
          </h2>
        </div>

        <div className="flex justify-center">
          <Image
            src="/WebsiteAssets/GraduatesCompanies.png"
            alt="Company logos including Google, NVIDIA, Microsoft, and Indeed"
            width={800}
            height={200}
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
