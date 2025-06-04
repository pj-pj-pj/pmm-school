"use client";
import { Button } from "@/components/ui/button";

const handleClick = () => {
  window.open("https://whop.com/checkout/plan_N33HzUKtBVsCn/", "_blank");
};

export default function PromotionalBanner() {
  return (
    <section className="bg-gray-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center font-medium">
          <span className="hidden sm:inline text-sm lg:text-base">
            Apply code{" "}
            <span className="font-bold text-purple-400">"MARKETREADY"</span> to
            get $100 off at checkout
          </span>
          <span className="sm:hidden text-xs text-center">
            Code{" "}
            <span className="font-bold text-purple-400">"MARKETREADY"</span> to
            get $100 off
          </span>
        </div>
        <Button
          size="sm"
          className="bg-purple-600 hover:bg-purple-700 text-white border-0 text-xs lg:text-sm font-semibold"
          onClick={handleClick}
        >
          START NOW
        </Button>
      </div>
    </section>
  );
}
