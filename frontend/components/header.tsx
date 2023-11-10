import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import ModeToggle from "@/components/mode-toggle";
import Navigation from "@/components/navigation";

const Header = () => {
  return (
    <header className="p-5 max-w-[786px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="">
          <Link href="/" className="font-extrabold text-3xl">
            IstiaqHossain
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          <Navigation />
          <ModeToggle />
        </div>
      </div>
      <Separator className="my-6" />
    </header>
  );
};

export default Header;
