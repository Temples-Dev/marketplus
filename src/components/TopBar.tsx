import Link from "next/link"
import { Mail } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-[#2d2d2d] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span className="text-sm">support@marketplus.com</span>
          </div>
          <div>
            <Link href="/become-vendor" className="text-sm hover:text-[#f97316]">
              Become a Vendor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

