"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ChevronDown } from "lucide-react"

const categories = ["All Categories", "Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Books"]

export default function SearchSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="bg-white py-8 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl relative" ref={categoryRef}>
            <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-md overflow-hidden hover:border-[#f97316] transition-colors focus-within:border-[#f97316] focus-within:ring-1 focus-within:ring-[#f97316]">
              <button
                className="flex items-center justify-between gap-2 px-4 py-2.5 hover:bg-gray-50 transition-colors border-b sm:border-b-0 sm:border-r border-gray-200 w-full sm:w-auto"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span className="truncate text-gray-700">{selectedCategory}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
                />
              </button>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-4 py-2.5 focus:outline-none w-full"
              />
              <button className="bg-[#f97316] text-white px-8 py-2.5 hover:bg-[#f97316]/90 transition-colors w-full sm:w-auto">
                <Search size={20} className="mx-auto" />
              </button>
            </div>
            {isCategoryOpen && (
              <div className="absolute top-full left-0 mt-1 w-full sm:w-auto bg-white border rounded-md shadow-lg z-50">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsCategoryOpen(false)
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

