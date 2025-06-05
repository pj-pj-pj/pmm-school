"use client";
import { Button } from "@/components/ui/button";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function PromotionalBanner() {
  return (
    <section className="bg-gray-900 text-white py-4 md:py-3 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center font-medium">
          <span className="hidden sm:inline text-sm">
            Apply code{" "}
            <span className="font-bold text-purple-400">"MARKETREADY"</span> to
            get $100 off at checkout
          </span>
          <span className="sm:hidden text-xs text-center">
            Apply code{" "}
            <span className="font-bold text-purple-400">"MARKETREADY"</span> to
            get $100 off at checkout
          </span>
        </div>
        <Button
          size="sm"
          className=" cursor-pointer text-purple-400 rounded-xs bg-transparent border border-purple-400 hover:bg-gray-700 text-xs md:text-sm font-medium px-3 py-2"
          onClick={handleClick}
        >
          Start My PMM Journey
        </Button>
      </div>
    </section>
  );
}
