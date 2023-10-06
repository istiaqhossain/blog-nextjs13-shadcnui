import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PostItem from "@/components/post-item";
import { Separator } from "@/components/ui/separator";

import PostType from "@/interfaces/post";
import { getAllPosts } from "@/lib/markdownApi";

export default function Home() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "featured",
  ]);
  const recentPosts = allPosts.slice(0, 3);
  const featuedPost = allPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Welcome to IstiaqHossain!</h1>
      <p>
        Lorem Ipsum is a dummy text. It helps to add dummy text while working on
        any task where anyone needs to add some random text for a certain
        period.
      </p>
      <Separator className="my-10" />
      <h2 className="text-2xl font-medium mb-5">Featured Posts</h2>
      {featuedPost.length > 0 ? (
        featuedPost.map((post) => (
          <PostItem key={post.slug} post={post as PostType} />
        ))
      ) : (
        <p>No post is available.</p>
      )}
      <Separator className="my-10" />
      <h2 className="text-2xl font-medium mb-5">Recent Posts</h2>
      {recentPosts.map((post) => (
        <PostItem key={post.slug} post={post as PostType} />
      ))}
      <div className="flex justify-center my-10">
        <Link
          href={"/posts"}
          className="flex items-center gap-x-2 hover:text-primary text-lg font-medium"
        >
          All Posts
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
}
