import Image from "next/image";
import Link from "next/link"
import RotatingText from "@/components/RotatingText";
import AboutPage from "./about/page";
import Contacts from "@/sections/Contacts";

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-50 font-sans p-20 bg-[url('/apartment.png')] bg-cover bg-center bg-no-repeat flex">
        <div className="w-1/2 pt-30 text-[#3d4348] flex flex-col gap-2 pb-17">
          <p className="text-[#6e8d97]">BUILDING BETTER TOMORROWS</p>
          <h1 className="text-7xl font-bold">Spaces for<br /> Every <span className="text-[#608087]"><RotatingText /></span></h1>
          <p className="w-[70%]">Thoughtfully designed apartments that combine modern architecture, quality construction, and lasting value</p>
          <div className="flex gap-5">
            <button className="rounded-full
                bg-[#6D8A89]
                px-7
                py-3.5
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#5D7776]"><Link href="/projects">Explore Projects</Link></button>
            <button className="rounded-full border border-[#4a5d5c] text-[#4b5e5d] transition-all duration-300 hover:scale-105 px-7 py-3.5"><Link href="/contact">Contact Us</Link></button>
          </div>

        </div>
        <div className="w-1/2">
          <p></p>
          <p></p>

        </div>

      </div>
      <AboutPage />
      <Contacts />

    </div>
  );
}
