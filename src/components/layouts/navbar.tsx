"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/paths";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const mappedRoutes = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center justify-start gap-10 flex-grow-1 w-full">
      {routes.map(({ label, route }) => {
        const isActive = pathname === route;
        return (
          <Link href={route} key={route} prefetch>
            <li
              className={`hover:text-white text-xl md:text-base font-semibold relative before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:w-full before:h-[2px] before:transition-opacity before:duration-300 ${
                isActive
                  ? "before:opacity-100 before:bg-white text-white"
                  : "before:opacity-0 before:bg-white text-white/70"
              }`}
            >
              {label}
            </li>
          </Link>
        );
      })}
      <Button className="md:w-auto mt-auto" size={"sm"}>
        Sign in
      </Button>
    </ul>
  );

  return (
    <div className="pointer-events-none text-base col-span-full 2xl:col-span-12 2xl:col-start-1 flex items-center justify-between font-semibold  text-white pt-8 z-100 h-auto lg:h-[10vh]">
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <Link href="/" className="flex items-center gap-4">
          <h1 className="font-semibold text-3xl">PicMorph</h1>
        </Link>
        <div className="block max-md:hidden">{mappedRoutes()}</div>

        {/* mobile */}
        <div className="hidden max-md:block">
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogTrigger asChild>
              <MenuIcon />
            </DialogTrigger>
            {isMenuOpen && (
              <>
                <DialogTitle className="text-white "></DialogTitle>
                <DialogContent className="h-[100dvh] flex flex-col gap-6 items-start bg-[#131313] z-50 w-full pointer-events-auto rounded-none text-white px-4 py-8 list-none border-0">
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
