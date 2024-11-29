import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 mx-auto max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.personalSite}
              className="relative group"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 h-10 px-0 flex items-center justify-center sm:inline-flex hover:bg-indigo-300"
                )}
              >
                <Image
                  src="/website-click.svg"
                  alt="Site julienpenna.com"
                  width={28}
                  height={28}
                  className="dark:invert"
                />
                <span className="sr-only">Site Web</span>
                {/* Tooltip */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Site Web
                </span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="relative group"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 h-10 px-0 flex items-center justify-center sm:inline-flex hover:bg-indigo-300"
                )}
              >
                <Icons.gitHub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
                {/* Tooltip */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </div>
            </Link>
            {/* <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="relative group"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 h-10 px-0 flex items-center justify-center sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">X / Twitter</span>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  X / Twitter
                </span>
              </div>
            </Link> */}
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
