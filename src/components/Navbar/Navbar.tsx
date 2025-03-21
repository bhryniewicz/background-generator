"use client";

import Image from "next/image";
import AppLogo from "@/assets/app_icon.png";
import { routes } from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-h-min col-start-1 col-end-13 flex items-center justify-between font-joti_one text-white">
      <div className="flex items-center gap-4">
        <Image
          src={AppLogo}
          alt="app logo"
          width={40}
          height={40}
          placeholder="blur"
        />
        <h1 className="text-2xl">BGenerator</h1>
      </div>
      <ul className="flex gap-20 text-lg">
        {routes.map(({ label, route }) => {
          const isActive = pathname === route;

          return (
            <Link href={route} key={route}>
              <li
                className={`relative before:content-[''] before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[3px] before:transition-opacity before:duration-300 ${
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
    </nav>
  );
};
