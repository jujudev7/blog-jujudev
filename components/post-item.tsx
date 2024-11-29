import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold hover:text-indigo-600">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-base py-0 text-indigo-600"
          )}
        >
          Lire la suite →
        </Link>
      </div>
    </article>
  );
}
