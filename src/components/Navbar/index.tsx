"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Style classes
  const baseClass = "block py-2 px-3 rounded transition-all duration-200";
  const activeClass = "text-white bg-blue-700";
  const hoverClass = "text-white hover:bg-blue-600";

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="flex items-center">
      <span
        className={`${baseClass} ${
          pathname === href ? activeClass : hoverClass
        }`}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <div>
      <nav className="bg-blue-500 ">
        <div className="md:mx-8 lg:mx-20 flex flex-wrap items-center justify-between mx-auto py-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/myImages/LOGO.png"
              width={60}
              height={10}
              alt="Logo"
              onClick={() => router.push("/")}
              className="cursor-pointer"
            />
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center   text-sm text-white rounded-xl lg:hidden hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium mb-0 flex flex-col p-4 md:p-0 mt-4 border border-blue-200 rounded-lg bg-blue-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-500">
              <NavLink href="/" label="HOME" />
              <NavLink href="/about" label="ABOUT US" />
              <NavLink href="/contact" label="CONTACT US" />
              <NavLink href="/service" label="SERVICES" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
