"use client";

import Link from "next/link";
import { useState } from "react";

function DesktopMenu() {
  return (
    <nav className="hidden space-x-8 text-2xl sm:block" aria-label="main">
      <Link href="/about" className="hover:opacity-80" prefetch={true}>
        About Me
      </Link>
      <Link href="/projects" className="hover:opacity-80" prefetch={true}>
        My Projects
      </Link>
      <Link href="/contact" className="hover:opacity-80" prefetch={true}>
        Contact Me
      </Link>
    </nav>
  );
}

type toggleFunc = (arg0: boolean) => void;

function Navbar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: toggleFunc }) {
  return (
    <section className="mx-auto flex max-w-5xl items-center justify-between p-4">
      <h1 className="text-3xl font-medium">
        <Link href="/about" prefetch={true}>VK Portfolio</Link>
      </h1>
      <div>
        <button
          id="hamburger-button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-3xl focus:outline-none sm:hidden"
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
      className={`absolute top-0 flex w-full flex-col items-center justify-center bg-black text-5xl ${ isMobileMenuOpen ? "h-[115vh]" : "h-0" } transition-all duration-300 ease-in-out`}
    >
      <button
        className={`self-end px-6 text-8xl ${ isMobileMenuOpen ? "" : "hidden" }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        &times;
      </button>
      <nav
        className={`flex min-h-screen flex-col items-center py-8 ${ isMobileMenuOpen ? "" : "hidden" }`}
        aria-label="mobile"
      >
        <Link
          href="/about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full py-6 text-center hover:opacity-90"
          prefetch={true}
        >
          About Me
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full py-6 text-center hover:opacity-90"
          prefetch={true}
        >
          My Projects
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full py-6 text-center hover:opacity-90"
          prefetch={true}
        >
          Contact Me
        </Link>
      </nav>
    </section>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[#37123C] text-white">
      <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
}
