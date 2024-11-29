import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex items-center justify-center space-x-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:penna.julien@gmail.com"
            className="relative group hover:bg-indigo-300 hover:rounded-lg"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-12 w-12 p-2" />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Mail
            </span>
          </a>
          {/* <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">X / Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </a> */}
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="relative group hover:bg-indigo-300 hover:rounded-lg"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-11 w-12 p-2" />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.personalSite}
            className="relative group hover:bg-indigo-300 hover:rounded-lg"
          >
            <span className="sr-only">Site Web</span>
            <Image
              src="/website-click.svg"
              alt="Site julienpenna.com"
              width={48}
              height={48}
              className="dark:invert p-2"
            />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Site Web
            </span>
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text text-muted-foreground hover:text-indigo-600">
          <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  );
}
