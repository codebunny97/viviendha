import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-2">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            flex
            items-center
            justify-between

            rounded-full

            border
            border-white/30

            bg-white/15

            backdrop-blur-2xl

            shadow-[0_10px_50px_rgba(0,0,0,0.08)]

            px-10
            py-5

            transition-all
            duration-500
          "
        >
          {/* Logo */}
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="Viviendha Developers"
              width={2400}
              height={700}
              priority
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-14 text-[18px] font-medium text-slate-700">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#6D8A89]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors duration-300 hover:text-[#6D8A89]"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="transition-colors duration-300 hover:text-[#6D8A89]"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-[#6D8A89]"
            >
              Contact
            </Link>

            <Link
              href="https://www.google.com/maps/place/Viviendha+Twins+-+Mukundha+%26+Murari/@17.5318209,78.3463257,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8d006ea9e8a5:0x5b771ac932e578ab!8m2!3d17.5318209!4d78.3463257!16s%2Fg%2F11ycl4g1lp?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="
                rounded-full
                bg-[#6D8A89]
                px-7
                py-3.5
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#5D7776]
              "
            >
              Visit our Site
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}