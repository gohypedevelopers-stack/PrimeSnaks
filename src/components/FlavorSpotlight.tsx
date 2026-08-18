export default function FlavorSpotlight() {
  return (
    <section className="w-full bg-secondary py-section-gap border-b-2 border-deep-ink overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-deep-ink rotate-[-2deg] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-500 bg-surface">
              <img src="/images/cat_nut_butters.jpg" alt="PrimeSnacks Natural Peanut Butter" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 bg-tertiary text-on-tertiary w-24 h-24 rounded-full flex items-center justify-center font-headline-md text-center text-sm border-2 border-deep-ink rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
              100%<br />Pure
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-label-caps text-label-caps text-on-secondary mb-4 block uppercase bg-deep-ink/20 w-max px-3 py-1 rounded-full">Spotlight</span>
            <h2 className="font-headline-xl text-headline-lg-mobile lg:text-headline-xl text-on-secondary uppercase mb-6 drop-shadow-md">
              NATURAL CREAMY PEANUT BUTTER
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary/90 mb-8 max-w-xl">
              Experience the rich, velvety texture of our premium natural peanut butter. Crafted from the finest roasted peanuts for optimal taste and nutrition. No hidden ingredients, no misleading claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-background text-deep-ink font-headline-md text-xl px-12 py-5 border-2 border-deep-ink rounded-full hover:bg-primary hover:text-on-primary transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none uppercase">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
