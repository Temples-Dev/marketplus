import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MarketPlus</h3>
            <p className="text-sm text-[#d1d5db]">Beyond Shopping, Experience Convenience</p>
            <div className="mt-4 flex items-center text-sm text-[#d1d5db]">
              <Mail size={16} className="mr-2" />
              <span>support@marketplus.com</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#d1d5db] hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Support</h4>
            <p className="text-[#d1d5db] mb-2">24/7 Customer Service</p>
            <p className="text-lg font-semibold">+233247466205</p>
            <span className="inline-block mt-1 bg-blue-600 text-white px-2 py-0.5 rounded text-xs">24/7 time</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#4a4a4a] text-center">
          <p className="text-sm text-[#d1d5db]">&copy; {new Date().getFullYear()} MarketPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

