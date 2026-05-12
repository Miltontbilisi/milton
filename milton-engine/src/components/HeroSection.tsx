export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4">
      {/* ფონის დეკორაცია (დაბლარული წრე) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ქვესათაური */}
      <div className="mb-6 overflow-hidden">
        <span className="block text-gray-500 uppercase tracking-[0.8em] text-[10px] animate-reveal">
          Artistry in Hair Extensions
        </span>
      </div>

      {/* მთავარი სათაური */}
      <h1 className="text-white text-5xl md:text-8xl font-extralight uppercase tracking-[0.15em] leading-tight text-center mb-10">
        Milton <br /> 
        <span className="italic font-serif normal-case tracking-normal text-gray-300">Studio</span>
      </h1>

      {/* ხაზი */}
      <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12"></div>

      {/* მოქმედების ღილაკი */}
      <button className="group relative px-12 py-5 border border-white/10 overflow-hidden transition-all hover:border-white/40">
        <span className="relative z-10 text-white text-[11px] uppercase tracking-[0.4em]">
          Book Your Appointment
        </span>
        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </button>

      {/* გვერდითა წარწერა */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <p className="text-gray-700 text-[9px] uppercase tracking-[0.5em] rotate-90 origin-right">
          Based in Tbilisi / Since 2018
        </p>
      </div>
    </section>
  );
}