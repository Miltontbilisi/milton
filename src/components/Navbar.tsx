import Link from 'next/link' 

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="text-xl font-light tracking-[0.5em] uppercase text-white">
        Milton
      </div>
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/booking" className="hover:text-white transition-colors">Booking</Link>
        <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
      </div>
      <button className="text-[10px] uppercase tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">
        Reserve
      </button>
    </nav>
  );
}
