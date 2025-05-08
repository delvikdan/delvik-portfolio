"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

import Menu from "./Menu";
import Logo from "./Logo";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center xl:hidden">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-12 text-center text-2xl">
          <div className="inline" onClick={handleLinkClick}>
            <Logo />
          </div>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          <Menu
            onLinkClick={handleLinkClick}
            className={`text-xl capitalize hover:text-accent transition-all`}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
