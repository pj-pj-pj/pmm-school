"use client";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-bold text-2xl mb-2">PMM School</div>
          <p className="text-purple-200">
            © {new Date().getFullYear()} PMM School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
