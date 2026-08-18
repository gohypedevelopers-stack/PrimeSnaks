export default function BundlePromo() {
  return (
    <section className="w-full py-24 bg-[#f6f2ef] relative overflow-hidden flex justify-center">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-16 relative">
        <div className="w-full bg-[#FFD200] border-[4px] border-black p-8 md:p-16 flex flex-col md:flex-row shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
          
          {/* Sticker */}
          <div className="absolute top-0 right-8 -translate-y-1/2 rotate-[6deg] bg-[#e43b2c] text-white border-2 border-black px-4 py-1 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-headline-md text-[14px] font-black uppercase tracking-widest">LIMITED EDITION BUNDLE</span>
          </div>

          <div className="flex-1 flex flex-col items-start pr-0 md:pr-12">
            <h2 className="font-headline-xl text-[56px] md:text-[80px] leading-[0.85] text-black uppercase font-black tracking-tighter mb-6">
              BUILD YOUR<br />ULTIMATE<br />STACK.
            </h2>
            <p className="font-body-md text-black text-[16px] font-medium leading-relaxed mb-8 max-w-md">
              Get the full rotation: 2x Peanut Butter Jars, 4x Protein Bars, and 1x Rolled Oats pouch. The perfect pantry reset.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-md mb-8">
              <div className="flex items-center gap-3 border-[1.5px] border-black p-3 bg-black/5">
                <span className="material-symbols-outlined text-[#e43b2c] text-[20px]">check_circle</span>
                <span className="font-body-md text-[14px] font-bold text-black uppercase tracking-widest">SAVE 15% VS INDIVIDUAL PURCHASE</span>
              </div>
              <div className="flex items-center gap-3 border-[1.5px] border-black p-3 bg-black/5">
                <span className="material-symbols-outlined text-[#e43b2c] text-[20px]">check_circle</span>
                <span className="font-body-md text-[14px] font-bold text-black uppercase tracking-widest">FREE OVERNIGHT SHIPPING</span>
              </div>
            </div>

            <button className="bg-[#e43b2c] text-white font-headline-md text-[24px] font-black uppercase tracking-tight px-8 py-5 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 group">
              GRAB THE BUNDLE - &#8377;2499 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform font-bold">arrow_forward</span>
            </button>
          </div>

          <div className="flex-1 mt-12 md:mt-0 relative flex justify-center items-center">
            {/* Dark background square to mimic the shadow of the tilted image in the screenshot */}
            <div className="absolute w-[80%] h-[80%] bg-black rotate-[6deg] translate-x-4 translate-y-4 shadow-lg" />
            <img 
              src="/images/hero_desktop.jpg" 
              alt="Ultimate Stack Bundle" 
              className="w-full max-w-[450px] aspect-[4/4] object-cover rotate-[-3deg] border-[12px] border-[#f6f2ef] relative z-10 shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
