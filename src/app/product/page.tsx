import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";

export default function ProductPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6f2ef]">
      <Header />
      
      <section className="w-full pt-32 pb-12 lg:pt-40 lg:pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full rounded-3xl overflow-hidden border border-black/10 bg-[#f6f2ef] relative shadow-sm">
              {/* Premium New Launch Badge */}
              <div className="absolute top-6 right-6 flex items-center z-10 drop-shadow-xl">
                <div 
                  className="bg-[#600] text-white flex flex-col justify-center items-center h-12 pr-5 pl-4 font-black tracking-wider text-[11px] leading-tight shadow-md" 
                  style={{ clipPath: 'polygon(0 50%, 15% 0, 100% 0, 100% 100%, 15% 100%)', marginRight: '-12px' }}
                >
                  <span className="italic ml-2">NEW</span>
                  <span className="italic ml-2">LAUNCH</span>
                </div>
                <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-[3px] border-white">
                  <span className="material-symbols-outlined text-[#FFD200] text-[28px]">local_fire_department</span>
                </div>
              </div>
              <img src="/images/product_main.jpg" alt="Almond Crunch Peanut Butter" className="w-full h-[500px] md:h-[600px] object-cover" />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border-2 border-black bg-[#f6f2ef] cursor-pointer">
                <img src="/images/product_main.jpg" alt="Thumb 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border border-black/10 bg-[#f6f2ef] cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <img src="/images/product_texture.jpg" alt="Thumb 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border border-black/10 bg-[#f6f2ef] cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <img src="/images/product_lifestyle.jpg" alt="Thumb 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-32 flex flex-col items-start">
              
              <h1 className="font-headline-xl text-[36px] md:text-[50px] leading-[1] text-black uppercase font-black tracking-tighter mb-2">
                Almond Crunch <br /> Peanut Butter
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-black text-[16px]">
                  <span className="material-symbols-outlined fill">star</span>
                </div>
                <span className="font-body-md text-[14px] text-black font-bold">4.9 | 128 Reviews</span>
              </div>

              {/* Price Block */}
              <div className="flex items-center gap-3 mb-1">
                <span className="font-headline-md text-black font-black text-[28px]">
                  ₹499
                </span>
                <span className="font-headline-md text-[#888] font-bold text-[18px] line-through">
                  ₹650
                </span>
                <span className="bg-[#e43b2c] text-white font-bold text-[11px] px-2 py-0.5 rounded shadow-sm">
                  23% OFF
                </span>
              </div>
              <p className="font-body-md text-[#555] text-[12px] mb-6">MRP Incl. of all taxes</p>

              <p className="font-body-md text-[#333] text-[14px] leading-relaxed mb-6">
                Made with 100% organic peanuts and roasted almonds for an unbeatable crunch. No added sugar, no palm oil, just pure, natural energy to fuel your day... <span className="font-bold cursor-pointer underline underline-offset-2">Read More</span>
              </p>

              {/* Benefits Box */}
              <div className="w-full border border-black/10 rounded-2xl py-6 px-2 mb-8 flex justify-between items-start bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                <div className="flex flex-col items-center text-center gap-3 flex-1 px-2 border-r border-black/5">
                  <div className="w-10 h-10 rounded-full bg-[#f6f2ef] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-black">eco</span>
                  </div>
                  <span className="font-body-md text-[11px] font-medium text-[#555] leading-tight">100% Organic<br/>Peanuts</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 flex-1 px-2 border-r border-black/5">
                  <div className="w-10 h-10 rounded-full bg-[#f6f2ef] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-black">fitness_center</span>
                  </div>
                  <span className="font-body-md text-[11px] font-medium text-[#555] leading-tight">30g Protein<br/>Per 100g</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 flex-1 px-2 border-r border-black/5">
                  <div className="w-10 h-10 rounded-full bg-[#f6f2ef] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-black">block</span>
                  </div>
                  <span className="font-body-md text-[11px] font-medium text-[#555] leading-tight">Zero Added<br/>Sugar</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 flex-1 px-2">
                  <div className="w-10 h-10 rounded-full bg-[#f6f2ef] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-black">spa</span>
                  </div>
                  <span className="font-body-md text-[11px] font-medium text-[#555] leading-tight">Vegan &<br/>Keto Friendly</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="w-full mb-8">
                <h4 className="font-headline-md text-[16px] text-black font-black mb-1">Select Size</h4>
                <p className="font-body-md text-[#888] text-[13px] mb-4">Which one is best for you?</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Option 1 */}
                  <div className="flex-1 p-4 border border-[#a41f13] rounded-xl bg-[#fdfaf8] cursor-pointer shadow-sm relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-headline-md font-black text-black text-[15px]">350G JAR</span>
                      <span className="bg-[#e43b2c] text-white font-bold text-[9px] px-1.5 py-0.5 rounded">23% OFF</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-black text-[15px]">₹ 499</span>
                      <span className="text-[#888] text-[12px] line-through">₹ 650</span>
                    </div>
                    <p className="text-[#888] text-[12px]">₹ 1.42/g</p>
                  </div>
                  {/* Option 2 */}
                  <div className="flex-1 p-4 border border-black/20 rounded-xl bg-white cursor-pointer hover:border-black/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-headline-md font-bold text-black text-[15px]">1KG BUCKET</span>
                      <span className="bg-[#e43b2c] text-white font-bold text-[9px] px-1.5 py-0.5 rounded">27% OFF</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-black text-[15px]">₹ 1,299</span>
                      <span className="text-[#888] text-[12px] line-through">₹ 1,780</span>
                    </div>
                    <p className="text-[#888] text-[12px]">₹ 1.29/g</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Row */}
              <div className="w-full flex gap-4 mb-12">
                <div className="flex items-center border border-black/20 rounded-lg bg-white px-2">
                  <button className="w-10 h-12 flex items-center justify-center font-black text-[20px] text-[#555] hover:text-black transition-colors">-</button>
                  <span className="w-10 text-center font-bold text-[16px] text-black">1</span>
                  <button className="w-10 h-12 flex items-center justify-center font-black text-[20px] text-[#555] hover:text-black transition-colors">+</button>
                </div>
                <button className="flex-1 bg-black text-white font-headline-md text-[16px] font-bold rounded-lg hover:bg-[#222] transition-colors">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Features />

      {/* Reviews Section */}
      <section className="w-full py-24 bg-white border-t border-black/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Reviews Summary */}
            <div className="w-full md:w-1/3 flex flex-col">
              <h2 className="font-headline-xl text-[40px] leading-[0.9] text-black uppercase font-black tracking-tighter mb-4">
                CUSTOMER REVIEWS
              </h2>
              <div className="flex items-end gap-4 mb-6">
                <span className="font-headline-md text-[64px] font-black leading-none tracking-tighter">4.9</span>
                <div className="flex flex-col pb-2">
                  <div className="flex text-[#FFD200]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill text-2xl">star</span>
                    ))}
                  </div>
                  <span className="font-body-md text-[#555] font-bold text-[12px] uppercase mt-1 tracking-widest">BASED ON 128 REVIEWS</span>
                </div>
              </div>
              
              {/* Bars */}
              <div className="flex flex-col gap-3 w-full max-w-[300px]">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3">
                    <span className="font-body-md text-[12px] font-bold text-black w-4">{star}</span>
                    <span className="material-symbols-outlined fill text-[#FFD200] text-[14px]">star</span>
                    <div className="flex-1 h-3 bg-[#f6f2ef] rounded-full overflow-hidden">
                      <div className="h-full bg-black" style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '2%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              {[
                { name: "MARK T.", title: "BEST PEANUT BUTTER EVER", date: "OCTOBER 12, 2025", text: "I've tried every natural peanut butter on the market and this one destroys them all. The crunch is perfect and it doesn't separate into a pool of oil like the others." },
                { name: "SARAH J.", title: "MY POST-WORKOUT STAPLE", date: "SEPTEMBER 28, 2025", text: "I mix this into my protein shakes every morning. Unbelievable texture and you can actually taste the roasted almonds. Highly recommend!" },
                { name: "DAVID L.", title: "CLEAN INGREDIENTS", date: "SEPTEMBER 15, 2025", text: "Love that there's no palm oil or added sugar. Just peanuts, almonds, and a pinch of salt. Exactly what I was looking for." }
              ].map((review, i) => (
                <div key={i} className="flex flex-col pb-8 border-b border-black/10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <div className="flex text-[#FFD200] mb-1">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="material-symbols-outlined fill text-[16px]">star</span>
                        ))}
                      </div>
                      <h4 className="font-headline-md text-[16px] text-black font-black uppercase tracking-tight">{review.title}</h4>
                    </div>
                    <span className="font-body-md text-[10px] text-[#888] font-bold tracking-widest">{review.date}</span>
                  </div>
                  <p className="font-body-md text-[#333] text-[14px] leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <span className="font-body-md text-[12px] text-[#555] font-bold uppercase tracking-wider">
                    {review.name} <span className="text-[#a41f13] ml-2 font-black tracking-widest">✓ VERIFIED BUYER</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full py-24 bg-[#f6f2ef] border-t-2 border-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          
          <div className="flex justify-between items-end mb-12 border-b border-black/10 pb-6">
            <h2 className="font-headline-xl text-[32px] md:text-[40px] leading-[0.9] text-black uppercase font-black tracking-tighter">
              YOU MIGHT ALSO LIKE
            </h2>
            <button className="hidden md:flex font-headline-md text-[14px] font-bold uppercase text-[#555] hover:text-black transition-colors items-center gap-1 group">
              SHOP ALL <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Related Card 1 */}
            <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-4 hover:border-black/30 transition-colors bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-[#f6f2ef] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <img src="/images/protein_bars.jpg" alt="Protein & Energy Bars" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-start flex-1 px-1">
                <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                  PROTEIN & ENERGY<br />BARS
                </h4>
                <p className="font-body-md text-[#555] text-[13px] mt-1 mb-4 font-medium">
                  Clean fuel for the daily grind
                </p>
                <div className="flex justify-between items-center w-full mt-auto">
                  <span className="font-headline-md text-[#a41f13] font-black text-[22px]">₹299</span>
                  <button className="text-black hover:text-[#a41f13] transition-colors shrink-0 flex items-center justify-center p-1">
                    <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Related Card 2 */}
            <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-4 hover:border-black/30 transition-colors bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-[#f6f2ef] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <img src="/images/oats_bowl.jpg" alt="Oats & Breakfast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-start flex-1 px-1">
                <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                  OATS & BREAKFAST
                </h4>
                <p className="font-body-md text-[#555] text-[13px] mt-1 mb-4 font-medium">
                  Rolled & Instant Oats
                </p>
                <div className="flex justify-between items-center w-full mt-auto">
                  <span className="font-headline-md text-[#a41f13] font-black text-[22px]">₹199</span>
                  <button className="text-black hover:text-[#a41f13] transition-colors shrink-0 flex items-center justify-center p-1">
                    <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Related Card 3 */}
            <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-4 hover:border-black/30 transition-colors bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-[#f6f2ef] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <img src="/images/muesli_mix.jpg" alt="Healthy Snacks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-start flex-1 px-1">
                <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                  HEALTHY SNACKS
                </h4>
                <p className="font-body-md text-[#555] text-[13px] mt-1 mb-4 font-medium">
                  Roasted Makhana & Peanuts
                </p>
                <div className="flex justify-between items-center w-full mt-auto">
                  <span className="font-headline-md text-[#a41f13] font-black text-[22px]">₹149</span>
                  <button className="text-black hover:text-[#a41f13] transition-colors shrink-0 flex items-center justify-center p-1">
                    <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>

             {/* Related Card 4 */}
             <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-4 hover:border-black/30 transition-colors bg-white hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-[#f6f2ef] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <img src="/images/peanut_butter.jpg" alt="Classic Peanut Butter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-start flex-1 px-1">
                <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                  CLASSIC PEANUT<br />BUTTER
                </h4>
                <p className="font-body-md text-[#555] text-[13px] mt-1 mb-4 font-medium">
                  Smooth & Creamy
                </p>
                <div className="flex justify-between items-center w-full mt-auto">
                  <span className="font-headline-md text-[#a41f13] font-black text-[22px]">₹399</span>
                  <button className="text-black hover:text-[#a41f13] transition-colors shrink-0 flex items-center justify-center p-1">
                    <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SocialProof />
      <Newsletter />
      <Footer />
    </main>
  );
}
