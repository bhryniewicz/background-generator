"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/paths";
import { Button } from "../ui/button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const mappedRoutes = () => (
    <ul className="flex flex-col md:flex-row justify-start gap-10 flex-grow-1 w-full">
      {routes.map(({ label, route }) => {
        const isActive = pathname === route;
        return (
          <Link href={route} key={route} prefetch>
            <li
              className={` hover:text-white text-xl md:text-base font-semibold relative before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:w-full before:h-[2px] before:transition-opacity before:duration-300 ${
                isActive
                  ? "before:opacity-100 before:bg-white text-white"
                  : "before:opacity-0 hover:before:opacity-100 before:bg-white text-white/70"
              }`}
            >
              {label}
            </li>
          </Link>
        );
      })}
      <Button className="w-full md:w-auto mt-auto max-md:mb-16">Sign in</Button>
    </ul>
  );

  return (
    <div className="pointer-events-none text-base col-span-full 2xl:col-span-12 2xl:col-start-1 flex items-center justify-between font-semibold md:px-8 text-white pt-8 z-100">
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <Link href="/" className="flex items-center gap-4">
          <h1 className="font-semibold text-3xl">PicMorph</h1>
        </Link>
        <div className="hidden md:block">{mappedRoutes()}</div>

        {/* mobile */}
        <div className="block md:hidden">
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogTrigger asChild>
              <MenuIcon />
            </DialogTrigger>
            {isMenuOpen && (
              <>
                <DialogTitle className="text-white "></DialogTitle>
                <DialogContent className="flex flex-col gap-6 items-start bg-[#131313] h-screen z-50 w-full pointer-events-auto rounded-none text-white p-8 list-none border-0">
                  <DialogHeader className="mb-24 text-3xl font-semibold">
                    PicMorph
                  </DialogHeader>
                  {mappedRoutes()}
                </DialogContent>
              </>
            )}
          </Dialog>
        </div>
      </div>
    </div>
  );
};
