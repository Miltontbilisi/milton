import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-black/80 backdrop-blur-md border-b border-white/5">
      
      {/* ბრენდის სახელი / ლოგო */}
      <div className="text-xl font-light tracking-[0.6em] uppercase text-white">
        Milton
      </div>

      {/* ნავიგაციის ლინკები (დესკტოპისთვის) */}
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
        <Link href="/" className="hover:text-white transition-colors duration-300">
          Home
        </Link>
        <Link href="/services" className="hover:text-white transition-colors duration-300">
          Services
        </Link>
        <Link href="/booking" className="hover:text-white transition-colors duration-300">
          Booking
        </Link>
        <Link href="/shop" className="hover:text-white transition-colors duration-300">
          Shop
        </Link>
      </div>

      {/* მარჯვენა ღილაკი */}
      <div className="flex items-center">
        <button className="text-[9px] uppercase tracking-[0.4em] border border-white/20 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
          Reserve
        </button>
      </div>

    </nav>
  );
}