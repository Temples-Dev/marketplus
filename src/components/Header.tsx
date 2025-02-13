"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart, ShoppingBag } from "lucide-react"

const navigation = [
  { name: "SHOP", href: "#" },
  { name: "BLOG", href: "#" },
  { name: "ABOUT", href: "#" },
  { name: "CONTACT", href: "#" },
]

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-white w-full transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50 animate-slideDown" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#f97316]">MarketPlus</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#2d2d2d] hover:text-[#f97316] font-medium relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f97316] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-[#2d2d2d] hover:text-[#f97316] relative group">
              <Heart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#f97316] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-[#2d2d2d] hover:text-[#f97316] relative group">
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-[#f97316] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="/signin"
              className="bg-[#f97316] text-white px-4 py-2 rounded-md hover:bg-[#f97316]/90 transition-colors"
            >
              Sign In
            </Link>
            <button className="md:hidden text-[#2d2d2d]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-[#2d2d2d] hover:bg-gray-50 flex items-center justify-between"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

