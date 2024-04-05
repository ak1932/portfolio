'use client'
import Image from "next/image";
import { useRef } from 'react';

export default function Home() {
    const dropdownHover = useRef<HTMLDivElement>(null);
    function openmenu() {
        dropdownHover.current!.classList.toggle('hidden')

    }
    const className="block px-2 py-1 hover:border-gray-300 hover:bg-blue-950 hover:text-white"
  return (
    <div className="w-full h-full">
        <Image
          src="/terror.webp"
          alt="terror animation"
          fill={true}
          style={{objectFit:"cover"}}
        objectFit='contain'
        />
        <div className="absolute left-[80%] top-[50%]">
            <div onMouseOver={openmenu} className="relative text-white text-3xl mb-4" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">
                yo
            </div>
            <div ref={dropdownHover} onMouseLeave={openmenu} id="dropdownHover" className="relative z-10 hidden bg-gray-200 w-32 border-t-white border-l-white border-b-gray-400 border-r-gray-400 border-2">
                <ul className="text-sm text-black" aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="#" className={className}>Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className={className}>Settings</a>
                  </li>
                  <li>
                    <a href="#" className={className}>Earnings</a>
                  </li>
                  <li>
                    <a href="#" className={className}>Sign out</a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
