"use client";

export default function Newsletter() {
  return (
    <>
      {/* Testimonials */}
      <section className="w-full py-24 bg-[#f6f2ef]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center">
            <h2 className="font-headline-xl text-[36px] md:text-[46px] text-black mb-12 uppercase font-extrabold tracking-tight">Trusted by Thousands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "Primesnaks has completely changed my post-workout recovery. Best protein bars on the market!", author: "@FitnessJourney" },
                { text: "I swapped my sugary cereals for their Organic Rolled Oats and Muesli. Never looking back.", author: "Sarah T." },
                { text: "The Peanut Butter is incredibly smooth. My whole family is obsessed.", author: "Mike L." }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-black/10 flex flex-col items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow">
                  <div className="flex text-[#FFD200] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="material-symbols-outlined fill">star</span>
                    ))}
                  </div>
                  <p className="font-body-lg text-[#333] mb-6 italic text-center">"{review.text}"</p>
                  <span className="font-label-caps text-label-caps text-[#555] font-bold uppercase tracking-wider">{review.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-24 md:py-32 bg-[#a41f13] border-t-2 border-b-2 border-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline-xl text-[56px] md:text-[80px] leading-[0.9] text-white uppercase font-black tracking-tighter drop-shadow-sm">
            JOIN THE RITUAL.
          </h2>
          <h2 className="font-headline-xl text-[56px] md:text-[80px] leading-[0.9] text-[#FFD200] uppercase font-black tracking-tighter mb-8 drop-shadow-sm">
            GET 15% OFF.
          </h2>
          <p className="font-body-md text-white/95 text-[16px] md:text-[18px] mb-12 font-medium max-w-2xl mx-auto">
            Be the first to know about new drops, limited flavors, and exclusive community events. No spam, just snacks.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-white text-black font-bold px-6 py-4 rounded-lg border-2 border-black outline-none focus:ring-4 focus:ring-[#FFD200]/50 flex-1 w-full text-[15px]"
            />
            <button 
              type="submit" 
              className="bg-[#FFD200] text-black font-headline-md text-xl font-black px-10 py-4 rounded-lg border-2 border-black hover:bg-[#e6bd00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none uppercase tracking-tight"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-white/80 text-[10px] uppercase font-bold tracking-[0.2em]">
            BY SIGNING UP, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
          </p>
        </div>
      </section>
    </>
  );
}
