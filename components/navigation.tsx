"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "What You'll Learn", href: "what-youll-learn" },
    { name: "Why PMM School", href: "why-pmm-school" },
    { name: "Pricing", href: "pricing" },
    { name: "Testimonials", href: "testimonials" },
    { name: "FAQ", href: "faq" },
    { name: "About", href: "about" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <a
            href="#home"
            className="font-bold text-lg text-gray-900 hover:text-violet-700 hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          >
            PMM School
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-gray-800 hover:text-purple-500 hover:scale-105 transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-gray-100 p-4"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-gray-600 hover:text-purple-500"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-500 rounded-sm "
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
