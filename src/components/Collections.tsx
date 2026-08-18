export default function Collections() {
  return (
    <section className="w-full py-24 bg-[#f6f2ef] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12">
          <div className="flex flex-col justify-end">
            <span className="text-[#a41f13] text-[10px] mb-2 block uppercase tracking-[0.2em] font-bold">
              CALIFORNIA PANTRY ESSENTIALS
            </span>
            <h2 className="font-headline-xl text-[36px] md:text-[46px] leading-[0.9] text-black uppercase font-extrabold tracking-tight">
              SHOP THE COLLECTION
            </h2>
          </div>
          <div className="hidden lg:flex gap-8 mt-6 lg:mt-0 items-center">
            <button className="font-headline-md text-[14px] font-bold uppercase text-[#555] hover:text-black transition-colors">
              ENERGY BARS
            </button>
            <button className="font-headline-md text-[14px] font-bold uppercase text-[#555] hover:text-black transition-colors">
              BREAKFAST MIXES
            </button>
            <button className="font-headline-md text-[14px] font-bold uppercase text-black border-b-[2px] border-[#a41f13] pb-1">
              HEALTHY SNACKS
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-3 hover:border-black/30 transition-colors">
            <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-white relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <img src="/images/peanut_butter.jpg" alt="Nut Butters & Spreads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-[#1a56ff] px-2.5 py-1 text-[10px] rounded text-white font-bold uppercase tracking-wider">
                BEST SELLER
              </div>
            </div>
            <div className="flex flex-col items-start flex-1 px-1">
              <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                NUT BUTTERS &<br />SPREADS
              </h4>
              <p className="font-body-md text-[#555] text-[13px] mt-1 mb-3 font-medium">
                Natural Peanut & Almond Butter
              </p>
              <span className="font-headline-md text-[#a41f13] font-extrabold text-[22px] mt-auto">₹499</span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-5 hover:border-black/30 transition-colors">
            <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-white relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <img src="/images/protein_bars.jpg" alt="Protein & Energy Bars" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col items-start flex-1 px-1">
              <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                PROTEIN & ENERGY<br />BARS
              </h4>
              <p className="font-body-md text-[#555] text-[13px] mt-1 mb-3 font-medium">
                Clean fuel for the daily grind
              </p>
              <span className="font-headline-md text-[#a41f13] font-extrabold text-[22px] mt-auto">₹299</span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-5 hover:border-black/30 transition-colors">
            <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-white relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <img src="/images/oats_bowl.jpg" alt="Oats & Breakfast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col items-start flex-1 px-1">
              <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                OATS & BREAKFAST
              </h4>
              <p className="font-body-md text-[#555] text-[13px] mt-1 mb-3 font-medium">
                Rolled & Instant Oats
              </p>
              <span className="font-headline-md text-[#a41f13] font-extrabold text-[22px] mt-auto">₹199</span>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="group cursor-pointer flex flex-col border border-black/15 rounded-3xl p-5 hover:border-black/30 transition-colors">
            <div className="aspect-[1/1] rounded-2xl overflow-hidden mb-5 bg-white relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <img src="/images/muesli_mix.jpg" alt="Healthy Snacks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col items-start flex-1 px-1">
              <h4 className="font-headline-md text-[17px] leading-[1.2] text-black uppercase font-bold tracking-tight">
                HEALTHY SNACKS
              </h4>
              <p className="font-body-md text-[#555] text-[13px] mt-1 mb-3 font-medium">
                Roasted Makhana & Peanuts
              </p>
              <span className="font-headline-md text-[#a41f13] font-extrabold text-[22px] mt-auto">₹149</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
