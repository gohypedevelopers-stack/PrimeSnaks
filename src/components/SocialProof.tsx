export default function SocialProof() {
  return (
    <section className="w-full py-24 bg-[#f6f2ef] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="font-headline-xl text-[64px] md:text-[80px] leading-[0.8] text-[#111] uppercase font-black tracking-tighter">
            VIBE CHECK
          </h2>
          <span className="font-headline-md text-[#333] text-[12px] md:text-[14px] uppercase font-bold tracking-[0.3em] mt-4 block">
            REAL ENERGY FROM THE COMMUNITY
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 w-full">
          {/* Polaroid 1 */}
          <div className="relative group w-full max-w-[280px] transform rotate-[-4deg] hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105">
            <div className="bg-[#f6f2ef] border-[1.5px] border-black p-1.5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden border border-black/10">
                <img src="/images/office_genz.jpg" alt="Desk setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Polaroid 2 */}
          <div className="relative group w-full max-w-[280px] transform rotate-[3deg] hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105 md:-mt-8">
            <div className="bg-[#f6f2ef] border-[1.5px] border-black p-1.5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden border border-black/10">
                <img src="/images/family_outdoors.jpg" alt="Outdoor snacking" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Polaroid 3 */}
          <div className="relative group w-full max-w-[280px] transform rotate-[-1deg] hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105 md:mt-4">
            <div className="bg-[#f6f2ef] border-[1.5px] border-black p-1.5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden border border-black/10 relative">
                <img src="/images/post_workout.jpg" alt="Post workout" className="w-full h-full object-cover" />
                {/* IG style overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-3 left-3 right-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                  </div>
                  <span className="text-white text-[10px] font-bold tracking-wider drop-shadow-md">@primesnaks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid 4 */}
          <div className="relative group w-full max-w-[280px] transform rotate-[5deg] hover:rotate-0 hover:z-10 transition-all duration-300 hover:scale-105 md:-mt-12">
            <div className="bg-[#f6f2ef] border-[1.5px] border-black p-1.5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden border border-black/10">
                <img src="/images/gym_active.jpg" alt="Gym" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
