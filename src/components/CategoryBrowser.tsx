export default function CategoryBrowser() {
  const categories = [
    { title: "NUT BUTTERS", image: "/images/cat_nut_butters.jpg" },
    { title: "PROTEIN BARS", image: "/images/cat_protein_bars.jpg" },
    { title: "ROLLED OATS", image: "/images/cat_rolled_oats.jpg" },
    { title: "KIDS NUTRITION", image: "/images/cat_kids_nutrition.jpg" },
  ];

  return (
    <section className="w-full py-24 bg-[#fcfbf9] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
        <span className="text-[#a41f13] text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold block mb-4">
          DISCOVERY
        </span>
        <h2 className="font-headline-xl text-[44px] md:text-[56px] leading-[1] text-[#111] uppercase font-black tracking-tighter mb-6">
          OUR SNACK COLLECTIONS
        </h2>
        <p className="font-body-md text-[#555] text-[14px] md:text-[16px] max-w-2xl mx-auto mb-16">
          Wholesome snacks for every mood and every moment, crafted with scientific precision.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              {/* Square Tile */}
              <div className="w-full aspect-square border-[1px] border-[#333] rounded-lg bg-[#efebe3] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#e8e4d8]">
                {/* Inner floating landscape image */}
                <div className="w-[85%] aspect-[3/2] overflow-hidden relative">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <h3 className="font-headline-md text-[18px] md:text-[22px] uppercase font-black tracking-tighter text-[#111] mt-5">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
