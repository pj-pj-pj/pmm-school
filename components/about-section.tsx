"use client";

import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            Learn from someone with{" "}
            <span className="text-purple-500">10+ years</span> of product
            marketing experience
          </h2>
        </div>

        <div className="grid md:grid-cols-[1.1fr_2fr] gap-16 items-center">
          <div className="relative flex justify-end">
            <Image
              src="/WebsiteAssets/Headshot 2.jpg"
              alt="Henry - PMM School Instructor"
              width={400}
              height={500}
              className="object-cover rounded-full md:rounded-2xl  shadow-2xl mx-auto w-[350px] h-[350px] lg:w-full lg:h-full"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 ">
                👋 Hey, I'm Henry!
              </h3>

              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p className="">
                  I studied{" "}
                  <span className="font-semibold">political science</span>,
                  almost went to law school, and somehow found my way into
                  product marketing at Google. Since then, I've led PMM teams at
                  high-growth startups across IoT, edtech, and adtech.
                </p>

                <p className="">
                  Outside work, I enjoy cooking, reading, and playing tennis.
                  I'm also a Jesus-lover.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/huiwanghenry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-500 hover:text-purple-600 font-medium  text-base"
                >
                  <ExternalLink className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:henry@pmmschool.com"
                  className="flex items-center gap-2 text-purple-500 hover:text-purple-600 font-medium  text-base"
                >
                  <Mail className="h-5 w-5" />
                  henry@pmmschool.com
                </a>
              </div>

              <p className="text-sm text-gray-500 italic pt-4 ">
                (Course pricing is final—please no discount inquiries.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
