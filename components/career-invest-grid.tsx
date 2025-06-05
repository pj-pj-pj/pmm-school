"use client";

import Masonry from "react-masonry-css";

export default function TestimonialGrid({
  testimonials,
}: {
  testimonials: any[];
}) {
  const breakpointColumnsObj = {
    default: 2,
    768: 1, // mobile
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-8"
      columnClassName="space-y-8"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-white border-2 border-gray-600 rounded-lg p-5 shadow-[-7px_7px_0px_0px_rgba(147,_51,_234,_0.5)]`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div
              className={`w-10 h-10 rounded-full ${testimonial.color} flex-shrink-0`}
            />
            <div className="flex-1 min-w-0">
              <div className="bg-gray-400 h-4 w-26 rounded-xs mb-1"></div>
              <div className="bg-gray-300 h-3 w-32 rounded-xs"></div>
            </div>
          </div>
          <p
            className="text-base text-gray-900 mt-6"
            dangerouslySetInnerHTML={{ __html: testimonial.text }}
          />
        </div>
      ))}
    </Masonry>
  );
}
