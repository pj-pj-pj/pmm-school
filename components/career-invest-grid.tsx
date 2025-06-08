"use client";

import Masonry from "react-masonry-css";
import ReactPlayer from "react-player/youtube";
import { Star } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./animated-section";

export default function TestimonialGrid({
  testimonials,
}: {
  testimonials: any[];
}) {
  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  function getYouTubeId(url: string): string | null {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-8"
      columnClassName="space-y-8"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-white border-2 border-gray-600 rounded-lg shadow-[-7px_7px_0px_0px_rgba(147,_51,_234,_0.5)] hover:scale-[103%] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}
        >
          {testimonial.videoUrl ? (
            <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full group">
                <ReactPlayer
                  url={`${testimonial.videoUrl}?rel=0&controls=0&iv_load_policy=3&disablekb=1`}
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={true}
                  light={`https://img.youtube.com/vi/${getYouTubeId(
                    testimonial.videoUrl
                  )}/hqdefault.jpg`}
                  onPlay={() => {
                    const overlay = document.getElementById(`overlay-${index}`);
                    if (overlay) overlay.style.display = "none";

                    const overlayGradient = document.getElementById(
                      `overlay-gradient-${index}`
                    );
                    if (overlayGradient) overlayGradient.style.display = "none";
                  }}
                  onPause={() => {
                    const overlay = document.getElementById(`overlay-${index}`);
                    if (overlay) overlay.style.display = "flex";

                    const overlayGradient = document.getElementById(
                      `overlay-gradient-${index}`
                    );
                    if (overlayGradient)
                      overlayGradient.style.display = "inline";
                  }}
                />

                {/* Gradient overlay - visible on hover */}
                <div
                  id={`overlay-gradient-${index}`}
                  className="absolute bottom-0 left-0 w-full h-24 pointer-events-none transition-opacity duration-300 group-hover:inline"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    zIndex: 1,
                    display: "inline",
                  }}
                />

                {/* Profile, Name and Stars Overlay - visible on hover */}
                <div
                  id={`overlay-${index}`}
                  className="absolute bottom-4 left-4 flex items-center gap-3 text-white z-10 pointer-events-none transition-opacity duration-300 group-hover:flex"
                  style={{ display: "flex" }}
                >
                  <div className="flex flex-col justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-5 w-5 fill-[#ffd966] text-[#ffd966]"
                        />
                      ))}
                    </div>
                    <h3 className="text-xl">{testimonial.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`p-5`}>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base">{testimonial.name}</h3>
                  {/* <div className="bg-gray-300 h-3 w-32 rounded-xs"></div> */}
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-[#ffd966] text-[#ffd966]"
                  />
                ))}
              </div>
              <p
                className="text-base text-gray-700 mt-4"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />
            </div>
          )}
        </div>
      ))}
    </Masonry>
  );
}
