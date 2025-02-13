import { ShieldCheck, Truck, UserCheck } from "lucide-react"

const benefits = [
  { title: "Secure Payments", icon: ShieldCheck, description: "Your transactions are always safe" },
  { title: "Fast Delivery", icon: Truck, description: "Get your products quickly" },
  { title: "Verified Vendors", icon: UserCheck, description: "Shop with confidence" },
]

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MarketPlus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <benefit.icon size={48} className="text-[#00c4b3]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-[#2d2d2d]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

