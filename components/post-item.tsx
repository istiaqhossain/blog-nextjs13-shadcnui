import { CalendarDays } from "lucide-react";
import Link from "next/link";
import moment from "moment";

import PostType from "@/interfaces/post";

const PostItem = ({ post }: { post: PostType }) => {
  const postDate = moment(post.date);
  return (
    <div className="my-5">
      <h2>
        <Link
          className="text-xl text-primary hover:underline hover:decoration-dashed hover:underline-offset-4"
          href={"/posts/hello-world"}
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex items-center gap-x-2 my-1">
        <CalendarDays className="w-5 h-5" />
        <span>
          <i>{postDate.format("MMMM Do YYYY, h:mm:ss A")}</i>
        </span>
      </div>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostItem;
