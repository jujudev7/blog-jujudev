"use client";

import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";

interface Post {
  slug: string;
  date: string;
  title: string;
  description?: string;
  published?: boolean;
}

const POST_PER_PAGE = 5;

export default function Home() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  return (
    <>
      <section className="space-y-6 py-12">
        <div className="container mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-balance">
            Hello, c&apos;est Julien !
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground text-lg text-balance">
            Bienvenue sur mon Blog, développé avec Next.js, TypeScript, Tailwind
            CSS, Shadcn et Velite.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
          Les Derniers Articles
        </h2>
        <PostList posts={sortedPosts} postPerPage={POST_PER_PAGE} />
        <Suspense>
          <QueryPagination totalPages={totalPages} className="mt-4" />
        </Suspense>
      </section>
    </>
  );
}

function PostList({
  posts,
  postPerPage,
}: {
  posts: Post[];
  postPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get("page") || 1);
    setCurrentPage(page);
  }, []);

  const displayPosts = posts.slice(
    postPerPage * (currentPage - 1),
    postPerPage * currentPage
  );

  return displayPosts.length > 0 ? (
    <ul className="flex flex-col">
      {displayPosts.map((post) => (
        <li key={post.slug}>
          <PostItem
            slug={post.slug}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Il n&apos;y a pas encore d&apos;article.</p>
  );
}

