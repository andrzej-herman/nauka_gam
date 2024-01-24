"use client";

import { Music }  from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { NavbarMenu } from "./navbar-menu";

const Navbar = () => {

  return (
    <div className="z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 w-full py-3 border-b shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
       <Music size={42} className="mr-5"/>
        <NavbarMenu />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;