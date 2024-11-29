"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2 group">
        <Icons.logo className="h-6 w-6 group-hover:stroke-indigo-600 transition-all" />
        <span className="font-bold group-hover:text-indigo-600 transition-colors">
          {siteConfig.name}
        </span>
      </Link>

      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-indigo-600 hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        À Propos
      </Link>
    </nav>
  );
}
