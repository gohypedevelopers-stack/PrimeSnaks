import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBrowser from "@/components/CategoryBrowser";
import FeaturedProducts from "@/components/FeaturedProducts";
import FlavorSpotlight from "@/components/FlavorSpotlight";
import SloganBanner from "@/components/SloganBanner";
import Features from "@/components/Features";
import BundlePromo from "@/components/BundlePromo";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <div className="flex flex-col w-full overflow-x-hidden">
          <Hero />
          <CategoryBrowser />
          <FeaturedProducts />
          <FlavorSpotlight />
          <SloganBanner />
          <Features />
          <BundlePromo />
          <SocialProof />
          <Newsletter />
          <Manifesto />
        </div>
      </main>
      <Footer />
    </>
  );
}
