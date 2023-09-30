import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PostItem from "@/components/post-item";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Welcome to IstiaqHossain!</h1>
      <p>
        Lorem Ipsum is a dummy text. It helps to add dummy text while working on
        any task where anyone needs to add some random text for a certain
        period.
      </p>
      <Separator className="my-10" />
      <h2 className="text-2xl font-medium">Featured Posts</h2>
      <PostItem />
      <PostItem />
      <Separator className="my-10" />
      <h2 className="text-2xl font-medium">Recent Posts</h2>
      <PostItem />
      <PostItem />
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
