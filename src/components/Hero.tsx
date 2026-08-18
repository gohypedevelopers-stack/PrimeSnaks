export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-[1.5px] border-[#111]">
      <div className="absolute inset-0 z-0 bg-[#111]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero_desktop.jpg" />
          <img
            src="/images/hero_mobile.jpg"
            alt="PrimeSnacks Natural Nutrition Products"
            className="w-full h-full object-cover opacity-80"
          />
        </picture>
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1280px] px-6 mx-auto flex flex-col items-center text-center">
        <h1 className="font-headline-xl text-[48px] md:text-[88px] text-white uppercase mb-6 drop-shadow-2xl leading-[0.9] font-black tracking-tighter">
          FUTURE-FORWARD<br />
          NOURISHMENT.
        </h1>
        <button className="bg-[#FFD200] text-[#111] font-headline-md text-[18px] md:text-[20px] font-black tracking-widest px-12 py-4 border-[1.5px] border-[#111] hover:bg-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-4">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
