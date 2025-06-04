"use client";

import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from someone with{" "}
            <span className="text-purple-600">10+ years</span> of product
            marketing experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-end">
            <Image
              src="/WebsiteAssets/Headshot 2.jpg"
              alt="Henry - PMM School Instructor"
              width={400}
              height={500}
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                👋 Hey, I'm Henry!
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I studied{" "}
                  <span className="font-semibold">political science</span>,
                  almost went to law school, and somehow found my way into
                  product marketing at Google. Since then, I've led PMM teams at
                  high-growth startups across IoT, edtech, and adtech.
                </p>

                <p>
                  Outside work, I enjoy cooking, reading, and playing tennis.
                  I'm also a Jesus-lover.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/huiwanghenry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  <ExternalLink className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:henry@pmmschool.com"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  <Mail className="h-5 w-5" />
                  henry@pmmschool.com
                </a>
              </div>

              <p className="text-sm text-gray-500 italic pt-4">
                (Course pricing is final—please no discount inquiries.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
