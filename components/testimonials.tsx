"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Zach",
      image: "/WebsiteAssets/What people are saying/Zach.jpg",
      quote: `<span style="font-weight: 500; background-color:	#bfdbfe; padding-right: 0.4rem; padding-left: 0.15rem; margin-left: 4px;">No frills, no fluff</span>—just straight-to-the-point, actionable insights. I landed my first PMM role thanks to this course!`,
      rating: 5,
    },
    {
      name: "Brie",
      image: "/WebsiteAssets/What people are saying/Brie.jpeg",
      quote: `The most <span style="font-weight: 500; background-color:	#E9D5FF; padding-right: 0.4rem; padding-left: 0.15rem; margin-left: 4px;">practical</span> and <span style="font-weight: 500; background-color:	#FFEDD5; padding-right: 0.4rem; padding-left: 0.15rem; margin-left: 4px;">direct</span> PMM course I've taken. It showed real-world approaches to how PMM actually works inside companies.`,
      rating: 5,
    },
    {
      name: "Alicia",
      image: "/WebsiteAssets/What people are saying/Alicia.jpeg",
      quote: `Everything was so <span style="font-weight: 500; background-color:	#DBEAFE; padding-right: 0.4rem; padding-left: 0.15rem; margin-left: 4px;">easy to understand</span>! The case studies and examples were spot-on—exactly what a PMM faces in real life.`,
      rating: 5,
    },
    {
      name: "Lei",
      image: "/WebsiteAssets/What people are saying/Lei.jpeg",
      quote: `<span style="font-weight: 500; background-color:	#E9D5FF; padding-right: 0.4rem; padding-left: 0.15rem; margin-left: 4px;">They just extended my offer</span>! I can't thank you enough for your guidance—it made all the difference.`,
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What People Are Saying About{" "}
            <span className="text-violet-500">PMM School</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-sm h-full flex flex-col border border-violet-300"
            >
              <CardContent className="flex flex-col h-full py-4">
                <div className="flex flex-col h-full">
                  <Quote className="h-6 w-6 text-violet-500 mb-6" />
                  <p
                    className="text-base text-gray-900 mb-8 italic leading-relaxed flex-grow"
                    dangerouslySetInnerHTML={{
                      __html: `"${testimonial.quote}"`,
                    }}
                  />

                  <div className="flex items-center mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full h-12 w-12 object-cover mr-3 border border-black shadow-[-6px_2px_2px_0px_rgba(147,_51,_234,_0.5)]"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
