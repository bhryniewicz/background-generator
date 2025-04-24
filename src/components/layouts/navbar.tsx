"use client";

import Image from "next/image";
import AppLogo from "@/assets/icon.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/paths";
import { Button } from "../ui/button";
import { useState } from "react";
import { CrossIcon, MenuIcon } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const mappedRoutes = () => (
    <>
      {routes.map(({ label, route }) => {
        const isActive = pathname === route;
        return (
          <Link href={route} key={route} prefetch>
            <li
              className={`relative before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:w-full before:h-[2px] before:transition-opacity before:duration-300 ${
                isActive
                  ? "before:opacity-100 before:bg-white"
                  : "before:opacity-0 hover:before:opacity-100 before:bg-white"
              }`}
            >
              {label}
            </li>
          </Link>
        );
      })}
      <Button>Sign in</Button>
    </>
  );

  return (
    <nav className="pointer-events-none text-base h-[8vh] col-span-full 2xl:col-span-8 2xl:col-start-3 flex items-center justify-between font-semibold md:px-8 md:bg-white/40 text-white rounded-xl md:border-2 md:border-white mt-2 md:mt-8 z-100">
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <Link href="/" className="flex items-center gap-4">
          <h1>BGenerator</h1>
        </Link>
        <ul className="hidden md:flex items-center gap-12">{mappedRoutes()}</ul>
        <div
          className="flex md:hidden z-1000"
          onClick={() => setIsMenuOpen((p) => !p)}
        >
          {isMenuOpen ? <CrossIcon className="fixed" /> : <MenuIcon />}
        </div>
        {isMenuOpen && (
          <div className="flex flex-col gap-4 items-center justify-center fixed inset-0 bg-amber-400 h-screen z-50 pointer-events-auto">
            {mappedRoutes()}
          </div>
        )}
      </div>
    </nav>
  );
};
