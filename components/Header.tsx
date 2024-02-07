"use client";

import Link from "next/link";
import { useState } from "react";

function DesktopMenu() {
  return (
    <nav className="hidden sm:block space-x-8 text-2xl" aria-label="main">
      <Link href="/about" className="hover:opacity-80">
        About me
      </Link>
      <Link href="/projects" className="hover:opacity-80">
        My projects
      </Link>
      <Link href="/contact" className="hover:opacity-80">
        Contact me
      </Link>
    </nav>
  );
}

type toggleFunc = (arg0: boolean) => void;

function Navbar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: toggleFunc }) {
  return (
    <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
      <h1 className="text-3xl font-medium">
        <Link href="/about">VK Portfolio</Link>
      </h1>
      <div>
        <button
          id="hamburger-button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-3xl sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <DesktopMenu />
      </div>
    </section>
  );
}

function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: toggleFunc;
}) {
  return (
    <section
      id="mobile-menu"
      className={`absolute top-0 bg-black w-full text-5xl flex flex-col justify-center items-center ${isMobileMenuOpen ? "h-[115vh]" : "h-0"} transition-all duration-300 ease-in-out`}
    >
      <button
        className={`text-8xl self-end px-6 ${isMobileMenuOpen ? "" : "hidden"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        &times;
      </button>
      <nav
        className={`flex flex-col min-h-screen items-center py-8 ${isMobileMenuOpen ? "" : "hidden"}`}
        aria-label="mobile"
      >
        <Link
          href="/about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:opacity-90 py-6 w-full text-center"
        >
          About me
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:opacity-90 py-6 w-full text-center"
        >
          My projects
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:opacity-90 py-6 w-full text-center"
        >
          Contact me
        </Link>
      </nav>
    </section>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#37123C] text-white sticky top-0 z-10">
      <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
}
