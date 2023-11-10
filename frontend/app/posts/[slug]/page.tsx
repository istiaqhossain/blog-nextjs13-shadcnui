import { CalendarDays } from "lucide-react";
import moment from "moment";

import { getPostBySlug } from "@/lib/markdownApi";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: Props) => {
  const post = getPostBySlug(params.slug, ["title", "date", "content"]);
  const content = await markdownToHtml(post.content || "");
  const postDate = moment(post.date);
  return (
    <>
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <div className="flex items-center gap-x-2 mt-1 mb-8">
        <CalendarDays className="w-5 h-5" />
        <span>
          <i>{postDate.format("MMMM Do YYYY, h:mm:ss A")}</i>
        </span>
      </div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Post;
