import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background backdrop-blur-sm border max-w-screen-xl mx-auto rounded-full z-50 shadow-md">
      <div className="h-full flex items-center justify-between md:justify-start mx-auto px-4 gap-8">
        {/* <Logo /> */}
        <Link href="/">
          <Image src="/Zeal-Banner.png" width={100} height={28} alt="Zeal_ Studio" />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
