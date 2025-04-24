"use client";

import Image from "next/image";
import AppLogo from "@/assets/icon.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/paths";
import { Button } from "../ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-sm h-[8vh] col-span-full xl:col-start-3 xl:col-end-11 flex items-center justify-between font-semibold py-4 px-8 bg-white/40 text-white rounded-xl border-2 border-white mt-8">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image src={AppLogo} alt="app logo" width={40} height={40} />
          <h1>BGenerator</h1>
        </div>
      </Link>
      <ul className="flex gap-16 ">
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
      </ul>
      <Button>Sign in</Button>
    </nav>
  );
};
