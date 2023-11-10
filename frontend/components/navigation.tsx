"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navs: { title: string; href: string }[] = [
  {
    title: "Posts",
    href: "/posts",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Connect",
    href: "/connect-with-me",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      {navs.map((nav) => (
        <Link
          key={nav.href}
          href={nav.href}
          className={cn(
            "font-bold text-xl hover:text-primary",
            pathname === nav.href && "nav-active text-primary"
          )}
        >
          {nav.title}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
