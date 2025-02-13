"use client"

import { motion } from "framer-motion"

const FloatingShape = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, 15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  />
)

export default function Hero() {
  return (
    <section className="relative bg-[#fcf8f5] py-20 overflow-hidden">
      {/* Background Shapes */}
      <FloatingShape className="w-24 h-24 bg-[#f97316]/10 rounded-full -top-12 left-1/4" />
      <FloatingShape className="w-32 h-32 bg-[#00c4b3]/10 rounded-full top-20 -right-16" />
      <FloatingShape className="w-20 h-20 bg-[#f97316]/10 rotate-45 bottom-12 left-16" />
      <FloatingShape className="w-28 h-28 bg-[#00c4b3]/10 rounded-lg -bottom-14 right-1/4" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2d2d2d]">
              Beyond Shopping, Experience Convenience
            </h1>
            <p className="text-xl mb-8 text-[#2d2d2d]">Discover amazing products from verified vendors</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#f97316] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#f97316]/90 transition-colors"
              >
                Become a Seller
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-[#f97316] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#f97316] hover:bg-[#f97316] hover:text-white transition-colors"
              >
                Sign Up to Shop
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

