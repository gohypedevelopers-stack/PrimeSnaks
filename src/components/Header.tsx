import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b-2 border-deep-ink">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="material-symbols-outlined text-primary text-2xl mr-1">eco</span>
            <span className="font-headline-md text-2xl text-deep-ink font-bold tracking-tight">prime<span className="font-normal text-secondary">snaks</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="font-label-caps text-label-caps text-deep-ink hover:text-primary transition-colors font-bold tracking-wider" href="#">SHOP</Link>
            <Link className="font-label-caps text-label-caps text-deep-ink hover:text-primary transition-colors font-bold tracking-wider" href="#">COLLECTIONS</Link>
            <Link className="font-label-caps text-label-caps bg-[#FFD200] px-2 py-0.5 border border-deep-ink text-deep-ink hover:bg-[#e6bd00] font-bold tracking-wider transition-colors" href="#">GENZ</Link>
            <Link className="font-label-caps text-label-caps text-deep-ink hover:text-primary transition-colors font-bold tracking-wider" href="#">ABOUT</Link>
            <Link className="font-label-caps text-label-caps text-deep-ink hover:text-primary transition-colors font-bold tracking-wider" href="#">RECIPES</Link>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <button className="p-1 text-deep-ink hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#9B1C1C] flex items-center justify-center border-[1.5px] border-deep-ink cursor-pointer hover:bg-red-900 transition-colors">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
          <button className="relative p-1 text-deep-ink hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="absolute -top-1 -right-1 bg-[#FFD200] border border-deep-ink rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold text-deep-ink">3</div>
          </button>
        </div>
      </div>
    </header>
  );
}
