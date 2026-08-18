export default function SloganBanner() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#161616] overflow-hidden flex items-center justify-center">
      {/* Abstract Shape: Top Left Square */}
      <div className="absolute top-12 left-12 md:top-16 md:left-24 w-16 h-16 md:w-20 md:h-20 border-[1.5px] border-[#FFD200]/40 rounded-xl" />
      
      {/* Abstract Shape: Bottom Right Diamond */}
      <div className="absolute bottom-0 right-12 md:right-32 w-32 h-32 md:w-48 md:h-48 border-[1.5px] border-[#9B1C1C]/40 rotate-45 translate-y-1/2" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="font-headline-xl text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95] text-white uppercase font-black tracking-tighter">
          THEY DIP.
        </h2>
        <h2 className="font-headline-xl text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#FFD200] uppercase font-black tracking-tighter drop-shadow-sm">
          THEY TASTE.
        </h2>
        <h2 className="font-headline-xl text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95] text-white uppercase font-black tracking-tighter">
          THEY EAT.
        </h2>
      </div>
    </section>
  );
}
