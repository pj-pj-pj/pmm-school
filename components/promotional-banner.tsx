"use client";
import { Button } from "@/components/ui/button";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function PromotionalBanner() {
  return (
    <section
      id="banner"
      className="bg-gradient-to-r h-12 from-purple-700 to-blue-600 text-white py-2 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-400 opacity-30 animate-pulse"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center md:font-medium">
          <span className="bg-white/20 text-xs lg:text-base px-2 py-1 rounded font-bold animate-pulse mr-2 hidden sm:inline">
            LIMITED TIME
          </span>
          <span className="hidden sm:inline">
            Apply code <span className="font-bold">"MARKETREADY"</span> to get
            $100 off at checkout
          </span>
          <span className="sm:hidden text-xs md:text-md text-center">
            Code <span className="font-bold">"MARKETREADY"</span> to get $100
            off
          </span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white border-2 cursor-pointer text-xs md:text-sm border-purple-200 text-purple-600 hover:bg-gray-100 hover:scale-110 hover:pt-0 transition-all duration-200 px-4 md:px-6 rounded-lg md:pt-1 pt-0"
          onClick={handleClick}
        >
          START NOW
        </Button>
      </div>
    </section>
  );
}
