import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import PromotionalBanner from "./promotional-banner";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "hero" },
    { name: "Why PMM School", href: "problem-solution" },
    { name: "Learn", href: "curriculum" },
    { name: "Pricing", href: "pricing" },
    { name: "Testimonials", href: "testimonials" },
    { name: "About", href: "personal-intro" },
  ];

  // Close mobile menu when clicking a navigation link
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav
      id="navigation"
      className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300"
    >
      <PromotionalBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gray-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
            PMM School
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-purple-600 hover:scale-110 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden font-medium">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="block py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
// https://whop.com/checkout/plan_N33HzUKtBVsCn/
