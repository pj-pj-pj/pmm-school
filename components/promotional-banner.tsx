"use client";
import { Button } from "@/components/ui/button";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function PromotionalBanner() {
  return (
    <section className="bg-neutral-900 text-white py-4 md:py-3 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center font-medium">
          <span className="hidden sm:inline text-sm">
            Apply code{" "}
            <span className="font-bold text-blue-500">"MARKETREADY"</span> to
            get $100 off at checkout
          </span>
          <span className="sm:hidden text-xs text-center">
            Apply code{" "}
            <span className="font-bold text-blue-500">"MARKETREADY"</span> to
            get $100 off at checkout
          </span>
        </div>
        <Button
          size="sm"
          className="cursor-pointer hover:brightness-120 hover:scale-[101%] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-blue-600 text-white-500 rounded-xs border-2 border-blue-600 hover:bg-blue-900 hover:text-gray-400 text-xs md:text-sm font-medium px-3 py-2"
          onClick={handleClick}
        >
          Start My PMM Journey
        </Button>
      </div>
    </section>
  );
}
