import PostItem from "@/components/post-item";
import PostType from "@/interfaces/post";
import { getAllPosts } from "@/lib/markdownApi";

const Posts = () => {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Posts</h1>
      {allPosts.map((post) => (
        <PostItem key={post.slug} post={post as PostType} />
      ))}
    </>
  );
};

export default Posts;
