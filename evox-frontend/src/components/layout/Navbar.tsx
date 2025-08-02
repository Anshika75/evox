"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isResponsibilityOpen, setIsResponsibilityOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav style={{ boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.25)" }} className="bg-white border-b border-gray-100 z-50">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-8 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center justify-items-start">
              <Image
                src="/images/common/logo-black.png"
                alt="Evox Logo"
                width={100}
                height={100}
                className="h-4 w-auto flex md:hidden"
                />
                  <Image
                    src="/images/common/logo-black.png"
                    alt="Evox Logo"
                    width={100}
                    height={100}
                    className="h-8 w-auto hidden md:block"
                  />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline md:space-x-4 lg:space-x-12">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium"
              >
                Home
              </Link>
              <Link
                href="/company"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium"
              >
                Company
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium"
              >
                Services
              </Link>

              {/* Responsibility Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResponsibilityOpen(true)}
                onMouseLeave={() => setIsResponsibilityOpen(false)}
              >
                <button className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium flex items-center space-x-1">
                  <span>Responsibility</span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isResponsibilityOpen ? "rotate-180" : ""}`}
                  ></i>
                </button>

                {/* Dropdown Menu */}
                {isResponsibilityOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1">
                    <Link
                      href="/responsibility/hse-policy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 plus-jakarta-sans-medium"
                    >
                      Our HSE Policy
                    </Link>
                    <Link
                      href="/responsibility/esg-policy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 plus-jakarta-sans-medium"
                    >
                      Our ESG Policy
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium transition-colors duration-200 plus-jakarta-sans-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Get Started Button & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-started"
              className="text-xs px-4 py-1 md:text-lg bg-white border border-gray-300 text-gray-900 md:px-6 md:py-2 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 plus-jakarta-sans-medium"
            >
              Get started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-end py-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-sm`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <Link href="/" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium plus-jakarta-sans-medium">
                Home
              </Link>
              <Link href="/company" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium plus-jakarta-sans-medium">
                Company
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium plus-jakarta-sans-medium">
                Blog
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium plus-jakarta-sans-medium"
              >
                Services
              </Link>

              {/* Mobile Responsibility Section */}
              <div>
                <button
                  onClick={() => setIsResponsibilityOpen(!isResponsibilityOpen)}
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between plus-jakarta-sans-medium"
                >
                  <span>Responsibility</span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isResponsibilityOpen ? "rotate-180" : ""}`}
                  ></i>
                </button>
                {isResponsibilityOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/responsibility/hse-policy"
                      className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm font-medium plus-jakarta-sans-medium"
                    >
                      Our HSE Policy
                    </Link>
                    <Link
                      href="/responsibility/esg-policy"
                      className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm font-medium plus-jakarta-sans-medium"
                    >
                      Our ESG Policy
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium plus-jakarta-sans-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
