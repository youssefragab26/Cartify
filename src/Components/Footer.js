import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-30 h-30 bg-gradient-to-r bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <img
                  src="/appLogo.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-6">
              Your premium destination for Apple products and accessories.
              Discover the latest technology with exceptional service.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                <span className="text-lg">
                  <FaFacebook />
                </span>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/25">
                <span className="text-lg">
                  <FaInstagram />
                </span>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25">
                <span className="text-lg">
                  <FaLinkedin />
                </span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-200"></span>
                  Home
                </a>
              </li>
              <li>
                  <Link href={"Products/iPhones"}>
                    <div className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base flex items-center group">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-200"></span>
                    iPhone</div>
                  </Link>
              </li>
              <li>
                <Link href={"Products/Macs"}>
                    <div className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base flex items-center group">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-200"></span>
                    Mac</div>
                  </Link>
              </li>
              <li>
                <a
                  href="/airpods"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-200"></span>
                  AirPods
                </a>
              </li>
              <li>
                <a
                  href="/ipad"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-blue-400 transition-colors duration-200"></span>
                  iPad
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-green-400 transition-colors duration-200"></span>
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest products and exclusive
              offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r bg-blue-600 hover:bg-blue-700  text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Cartify. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
