import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FlavorSpotlight from "@/components/FlavorSpotlight";
import SloganBanner from "@/components/SloganBanner";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <div className="flex flex-col w-full overflow-x-hidden">
          <Hero />
          <Collections />
          <FlavorSpotlight />
          <SloganBanner />
          <Features />
          <SocialProof />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
