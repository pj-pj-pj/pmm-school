"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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
        "The most practical and direct PMM course I've taken. It showed real-world approaches to how PMM actually works inside companies.",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What People Are Saying About{" "}
            <span className="text-purple-600">PMM School</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <Quote className="h-8 w-8 text-purple-600 mb-6" />
                  <p className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full h-14 w-14 object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
