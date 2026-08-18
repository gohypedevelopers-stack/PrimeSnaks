export default function SocialProof() {
  return (
    <section className="w-full py-24 bg-[#f6f2ef] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="mb-10">
          <h2 className="font-headline-xl text-[42px] md:text-[56px] leading-[0.9] text-black uppercase font-black tracking-tighter">
            SEEN IN THE WILD
          </h2>
          <p className="font-body-md text-[#555] text-[15px] mt-3 font-medium">
            Primesnaks is built for your lifestyle, not the pantry shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Left: Wide (Post Workout) */}
          <div className="md:col-span-2 group relative rounded-2xl overflow-hidden border border-black aspect-[16/9] bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/post_workout.jpg" alt="Post Workout Perfection" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            
            <div className="absolute top-6 w-full text-center">
                <h3 className="font-headline-md text-white text-[24px] uppercase font-black tracking-tight drop-shadow-md">WIN THE MORNING. WIN THE DAY.</h3>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em] block mb-1 drop-shadow">GYM & GAINS</span>
              <h3 className="font-headline-md text-white text-[28px] md:text-[36px] uppercase font-black tracking-tight leading-none drop-shadow-lg">POST-WORKOUT PERFECTION</h3>
            </div>
          </div>

          {/* Top Right: Square (Office) */}
          <div className="md:col-span-1 group relative rounded-2xl overflow-hidden border border-black aspect-square bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/office_genz.jpg" alt="Office Fuel" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 border border-black rounded-sm shadow-sm">
              <span className="text-[#333] text-[10px] uppercase font-bold tracking-widest">OFFICE FUEL</span>
            </div>
          </div>

          {/* Bottom Left: Square (Weekend) */}
          <div className="md:col-span-1 group relative rounded-2xl overflow-hidden border border-black aspect-square bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/family_outdoors.jpg" alt="Weekend Vibes" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 border border-black rounded-sm shadow-sm">
              <span className="text-[#333] text-[10px] uppercase font-bold tracking-widest">WEEKEND VIBES</span>
            </div>
          </div>

          {/* Bottom Right: Wide (Yoga Mat) */}
          <div className="md:col-span-2 group relative rounded-2xl overflow-hidden border border-black aspect-[16/9] bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src="/images/yoga_mat.jpg" alt="Yoga & Wellness" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
