// components/TestimonialGrid.tsx
"use client";

export default function TestimonialGrid({
  testimonials,
}: {
  testimonials: any[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1.55fr] auto-rows-min gap-4 lg:gap-6 mb-14">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-white border-2 border-gray-600 gray-200 rounded-lg p-6 shadow-[-7px_7px_0px_0px_rgba(147,_51,_234,_0.5)] ${testimonial.span}`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div
              className={`w-12 h-12 rounded-full ${testimonial.color} flex-shrink-0`}
            />
            <div className="flex-1 min-w-0">
              <div className="bg-gray-500 h-4 w-26 rounded-xs mb-1"></div>
              <div className="bg-gray-400 h-3 w-32 rounded-xs"></div>
            </div>
          </div>
          <p
            className="text-base text-gray-900 mt-6"
            dangerouslySetInnerHTML={{ __html: testimonial.text }}
          />
        </div>
      ))}
    </div>
  );
}
