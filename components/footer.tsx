"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-semibold text-lg">PMM School</div>
          <p className="text-purple-100 text-sm">
            © {new Date().getFullYear()} PMM School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
