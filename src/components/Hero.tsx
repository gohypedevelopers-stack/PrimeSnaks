export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] bg-surface-container flex items-center justify-start overflow-hidden border-b-2 border-deep-ink">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpg"
          alt="Primesnaks Natural Nutrition Products"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative z-10 w-full max-w-[1280px] px-margin-mobile lg:px-margin-desktop mx-auto flex flex-col items-start pt-24">
        <h1 className="font-headline-xl text-[56px] md:text-[88px] text-white uppercase mb-6 drop-shadow-xl leading-[0.9] font-black tracking-tight">
          FUTURE-FORWARD<br />
          NOURISHMENT.
        </h1>
        <button className="bg-[#FFD200] text-deep-ink font-label-caps text-[18px] font-bold px-10 py-3 border-[1.5px] border-deep-ink rounded hover:bg-[#e6bd00] transition-all shadow-none mt-2">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
