"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Electronics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-placeholder.jpg-9kJqPdloLqTai3drcEwIHav5OYbx34.jpeg",
  },
  {
    name: "Fashion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-placeholder.jpg-9kJqPdloLqTai3drcEwIHav5OYbx34.jpeg",
  },
  {
    name: "Home & Living",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-placeholder.jpg-9kJqPdloLqTai3drcEwIHav5OYbx34.jpeg",
  },
  {
    name: "Beauty",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-placeholder.jpg-9kJqPdloLqTai3drcEwIHav5OYbx34.jpeg",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Categories</h2>
          <Link
            href="/categories"
            className="text-[#f97316] hover:text-[#f97316]/80 font-medium flex items-center gap-2 group"
          >
            View More
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <h3 className="text-center font-medium text-[#2d2d2d] group-hover:text-[#f97316] transition-colors">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

