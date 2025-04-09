"use client";

import Image from "next/image";
import AppLogo from "@/assets/app_icon.png";
import { routes } from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-sm max-h-min col-start-3 col-end-11 flex items-center justify-between font-semibold py-4 px-8 bg-white/40 text-white rounded-xl border-2 border-white mt-8">
      <Link href="/">
        <div className="flex items-center gap-4">
          {/* <Image
        src={AppLogo}
        alt="app logo"
        width={40}
        height={40}
        placeholder="blur"
      /> */}
          <h1>BGenerator</h1>
        </div>
      </Link>
      <ul className="flex gap-16 ">
        {routes.map(({ label, route }) => {
          const isActive = pathname === route;

          return (
            <Link href={route} key={route}>
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
      <div>Sign in</div>
    </nav>
  );
};
