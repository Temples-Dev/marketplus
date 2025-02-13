import Header from "@/components/Header"
import SearchSection from "@/components/SearchSection"
import Hero from "@/components/Hero"
import FeaturedCategories from "@/components/FeaturedCategories"
import TrendingProducts from "@/components/TrendingProducts"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  

  return (
    <HydrateClient>
      <div className="min-h-screen bg-[#fcf8f5]">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <SearchSection />
        <FeaturedCategories />
        <TrendingProducts />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
    </HydrateClient>
  );
}
