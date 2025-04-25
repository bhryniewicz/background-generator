"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/paths";
import { Button } from "../ui/button";
import { useState } from "react";
import { CrossIcon, MenuIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              className={`text-lg font-semibold relative before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:w-full before:h-[2px] before:transition-opacity before:duration-300 ${
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
      <Button className="w-full md:w-auto mt-auto">Sign in</Button>
    </>
  );

  return (
    <div className="pointer-events-none text-base col-span-full 2xl:col-span-8 2xl:col-start-3 flex items-center justify-between font-semibold md:px-8 md:bg-white/40 text-white rounded-xl md:border-2 md:border-white pt-8 md:mt-8 z-100">
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <Link href="/" className="flex items-center gap-4">
          <h1>BGenerator</h1>
        </Link>
        <ul className="hidden md:flex items-center gap-12">{mappedRoutes()}</ul>

        {/* mobile */}
        <div className="block md:hidden">
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogTrigger asChild>
              <MenuIcon />
            </DialogTrigger>
            {isMenuOpen && (
              <>
                <DialogTitle className="text-white "></DialogTitle>
                <DialogContent className="flex flex-col gap-6 items-start justify-center bg-[#131313] h-screen z-50 w-full pointer-events-auto rounded-none text-white p-8 list-none border-0">
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
