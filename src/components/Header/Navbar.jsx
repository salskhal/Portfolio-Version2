import { useState } from "react";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import MobileNav from "./MobileNav";
import { HamburgerIcon } from "../../icons";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }
  
  return (
    <nav className="flex items-center md:px-10 p-5 text-white fixed w-full bg-[#111827] z-50">
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div
        className=" ml-auto 
        space-x-10
        hidden sm:flex
      "
      >
        <ul
          className="flex items-center space-x-10 text-lg font-semibold
        "
        >
          <a href="#home">
            <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
              About
            </li>
          </a>
          <a href="#projects">
            <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
              Projects
            </li>
          </a>
        </ul>
        <a
          href="https://github.com/salskhal"
          target="blank"
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <img src={github} alt="github" className="w-8 cursor-pointer" />
        </a>
      </div>
      <div></div>
      <div className="sm:hidden ml-auto flex items-center space-x-10">
        <a
          href="https://github.com/salskhal"
          target="blank"
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <img src={github} alt="github" className="w-8 cursor-pointer" />
        </a>
        <div onClick={handleMobileNav}>
          <HamburgerIcon className="w-8 cursor-pointer" />
        </div>
      </div>
      {isMobileNavOpen && (
        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      )}
    </nav>
  );
}
