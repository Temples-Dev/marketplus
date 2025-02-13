"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    comment:
      "MarketPlus has revolutionized my online shopping experience. The variety and quality of products are unmatched!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment:
      "I love how easy it is to find exactly what I need. The user interface is intuitive and the delivery is always on time.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    comment: "The customer service is exceptional. They went above and beyond to resolve my issue quickly.",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-[#fcf8f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#f97316] hover:text-[#f97316]/80"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#f97316] hover:text-[#f97316]/80"
            >
              <ChevronRight size={24} />
            </button>
            <div className="text-center">
              <p className="text-lg mb-4">"{testimonials[currentIndex].comment}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

