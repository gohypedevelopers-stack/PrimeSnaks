export default function Footer() {
  return (
    <footer className="w-full bg-[#111] pt-24 pb-8 overflow-hidden flex flex-col items-center">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6 md:col-span-6">
            <h3 className="font-headline-md text-[32px] text-white font-black tracking-tight uppercase">
              Prime<span className="text-[#a41f13]">snaks</span>
            </h3>
            <p className="font-body-md text-[#888] max-w-sm font-medium leading-relaxed">
              Pure, natural, and scientifically crafted nutrition built for your lifestyle, not the pantry shelf.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <h5 className="font-headline-md text-[13px] tracking-[0.2em] uppercase text-white font-bold">SHOP</h5>
            <ul className="space-y-4">
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Peanut Butter</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Protein Bars</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Oats & Muesli</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Healthy Snacks</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <h5 className="font-headline-md text-[13px] tracking-[0.2em] uppercase text-white font-bold">EXPLORE</h5>
            <ul className="space-y-4">
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Our Story</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">The Science</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Sustainability</a></li>
              <li><a href="#" className="font-body-md text-[#888] hover:text-[#FFD200] transition-colors font-medium">Contact Us</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Massive Brand Name & Bottom Bar */}
      <div className="w-full flex flex-col items-center">
        {/* Massive Text */}
        <div className="w-full overflow-hidden flex justify-center mb-8 px-4">
          <h1 className="text-[12vw] leading-[0.8] font-black text-white uppercase tracking-tighter text-center select-none">
            PRIMESNAKS
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-headline-md text-[10px] text-[#555] uppercase font-bold tracking-widest">
            © 2026 PRIMESNAKS CORP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-headline-md text-[10px] text-[#555] hover:text-white uppercase font-bold tracking-widest transition-colors">INSTAGRAM</a>
            <a href="#" className="font-headline-md text-[10px] text-[#555] hover:text-white uppercase font-bold tracking-widest transition-colors">TIKTOK</a>
            <a href="#" className="font-headline-md text-[10px] text-[#555] hover:text-white uppercase font-bold tracking-widest transition-colors">X (TWITTER)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
