"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function CareerInvestmentSection() {
  const testimonialImages = [
    {
      src: "/WebsiteAssets/Ready to invest/Testimonial 1.png",
      alt: "Testimonial about landing dream PMM role",
    },
    {
      src: "/WebsiteAssets/Ready to invest/Testimonial 2.png",
      alt: "Testimonial about extended offer in Japan",
    },
    {
      src: "/WebsiteAssets/Ready to invest/Testimonial 3.png",
      alt: "Testimonial about customer persona framework success",
    },
    {
      src: "/WebsiteAssets/Ready to invest/Testimonial 4.png",
      alt: "Testimonial about product marketing manager offer",
    },
    {
      src: "/WebsiteAssets/Ready to invest/Testimonial 5.png",
      alt: "Testimonial about quick job offer and contract signing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-purple-600">invest</span> in your
            career?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join product marketers who've transformed their careers with PMM
            School
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonialImages.map((testimonial, index) => (
            <div
              key={index}
              className="relative border-[1px] border-black rounded-sm overflow-hidden shadow-[6px_6px_0px_0px_#cb78ff] hover:shadow-xl transition-shadow group"
            >
              <Image
                src={testimonial.src || "/placeholder.svg"}
                alt={testimonial.alt}
                width={400}
                height={400}
                className="rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleClick}
            size="lg"
            className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-md font-semibold rounded-lg"
          >
            Start Your Success Story Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
