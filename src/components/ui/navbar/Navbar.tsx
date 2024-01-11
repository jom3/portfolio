"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sidenav } from "../sidenav/Sidenav";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleSidenav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-full flex flex-row justify-between items-center p-5 fixed bg-first-basic bg-opacity-80 z-20">
        <div></div>
        <button
          onClick={() => toggleSidenav()}
          className="sm:hidden border-white border-2 p-2 rounded-full"
        >
          <Image
            src="/images/icons/menu.png"
            alt="menu"
            width={15}
            height={15}
          />
        </button>
        <div className="hidden sm:flex justify-center items-center gap-5">
          <Link
            href="#about"
            className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
          >
            About
          </Link>
          <Link
            href="#tech"
            className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
          >
            Technologies
          </Link>
          <Link
            href="#projects"
            className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:underline hover:font-semibold text-sm text-first-primary underline-offset-8 uppercase"
          >
            Contact
          </Link>
        </div>
        <div></div>
      </nav>
      {isOpen && <Sidenav />}
    </>
  );
};
