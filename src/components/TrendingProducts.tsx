"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Wireless Earbuds",
    price: 79.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shop-placeholder-fbpn26zTIvidDCqi1jsgeBn8PSbnln.png",
  },
  {
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shop-placeholder-fbpn26zTIvidDCqi1jsgeBn8PSbnln.png",
  },
  {
    name: "Laptop Stand",
    price: 39.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shop-placeholder-fbpn26zTIvidDCqi1jsgeBn8PSbnln.png",
  },
  {
    name: "Portable Charger",
    price: 49.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shop-placeholder-fbpn26zTIvidDCqi1jsgeBn8PSbnln.png",
  },
]

export default function TrendingProducts() {
  return (
    <section className="py-16 bg-[#fcf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Trending Products</h2>
          <Link
            href="/products"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#f97316] text-white px-4 py-2 rounded-full flex items-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </motion.button>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-[#f97316] font-bold">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

