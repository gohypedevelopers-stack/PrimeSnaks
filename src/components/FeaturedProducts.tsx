export default function FeaturedProducts() {
  return (
    <section className="w-full py-20 bg-[#fbf9f6]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Header and Filters */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12">
          <div className="flex flex-col justify-end">
            <span className="text-[#a41f13] text-[10px] md:text-[12px] mb-2 block uppercase tracking-[0.2em] font-bold">
              CALIFORNIA PANTRY ESSENTIALS
            </span>
            <h2 className="font-headline-xl text-[44px] md:text-[56px] leading-[0.9] text-black uppercase font-black tracking-tighter">
              SHOP THE COLLECTION
            </h2>
          </div>
          <div className="flex gap-6 md:gap-8 mt-6 lg:mt-0 items-center overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            <button className="font-headline-md text-[16px] font-black uppercase text-[#6e5d53] hover:text-black transition-colors whitespace-nowrap">
              ENERGY BARS
            </button>
            <button className="font-headline-md text-[16px] font-black uppercase text-[#6e5d53] hover:text-black transition-colors whitespace-nowrap">
              BREAKFAST MIXES
            </button>
            <button className="font-headline-md text-[16px] font-black uppercase text-black border-b-[2px] border-[#a41f13] pb-1 whitespace-nowrap">
              HEALTHY SNACKS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col border border-black bg-[#fbf9f6] group cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
            <div className="relative aspect-[4/3] bg-[#efebe3] overflow-hidden border-b border-black flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 bg-[#111] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10 shadow-sm">
                NEW RELEASE
              </div>
              <img src="/images/cat_nut_butters.jpg" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline-md text-[24px] md:text-[28px] uppercase font-black tracking-tighter text-black leading-none">NATURAL PEANUT BUTTER</h3>
                <span className="font-mono text-[#a41f13] text-[16px] md:text-[18px] font-bold">&#8377;499</span>
              </div>
              <p className="font-body-md text-[#555] text-[14px] leading-relaxed mb-8 flex-1">
                Our signature crunchy peanut butter crafted for everyday energy. 100% roasted peanuts.
              </p>
              <button className="w-full border border-black py-4 uppercase font-headline-md font-bold tracking-widest text-[14px] text-black hover:bg-black hover:text-white transition-colors">
                ADD TO BAG
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-black bg-[#fbf9f6] group cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
            <div className="relative aspect-[4/3] bg-[#efebe3] overflow-hidden border-b border-black flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 bg-[#a41f13] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10 shadow-sm">
                BESTSELLER
              </div>
              <img src="/images/cat_protein_bars.jpg" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline-md text-[24px] md:text-[28px] uppercase font-black tracking-tighter text-black leading-none">ENERGY BAR V2.0</h3>
                <span className="font-mono text-[#a41f13] text-[16px] md:text-[18px] font-bold">&#8377;899</span>
              </div>
              <p className="font-body-md text-[#555] text-[14px] leading-relaxed mb-8 flex-1">
                Bio-available energy in a sleek, portable form factor. 15g Protein. Low sugar.
              </p>
              <button className="w-full border border-black py-4 uppercase font-headline-md font-bold tracking-widest text-[14px] text-black hover:bg-black hover:text-white transition-colors">
                ADD TO BAG
              </button>
            </div>
          </div>

          {/* Card 3 (Yellow CTA Block) */}
          <div className="flex flex-col border border-black bg-[#FFD200] group cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] rotate-[-10deg] scale-150 pointer-events-none flex flex-col justify-center items-center">
              <span className="font-headline-xl text-[120px] font-black leading-none whitespace-nowrap">BUNDLE</span>
              <span className="font-headline-xl text-[120px] font-black leading-none whitespace-nowrap">BUNDLE</span>
              <span className="font-headline-xl text-[120px] font-black leading-none whitespace-nowrap">BUNDLE</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
              <div className="flex justify-between items-center mb-4 mt-auto pt-16">
                <h3 className="font-headline-md text-[24px] md:text-[32px] uppercase font-black tracking-tighter text-black leading-none">THE FULL STACK</h3>
                <span className="font-mono text-[#a41f13] text-[16px] md:text-[18px] font-bold">&#8377;2499</span>
              </div>
              <p className="font-body-md text-[#555] text-[14px] leading-relaxed mb-8 flex-1">
                Everything you need for a week of high-performance snacking. Save 15%.
              </p>
              <button className="w-full bg-[#111] text-white border border-black py-4 uppercase font-headline-md font-bold tracking-widest text-[14px] hover:bg-[#FFD200] hover:text-black transition-colors">
                GRAB BUNDLE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
