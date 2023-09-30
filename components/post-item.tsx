import { CalendarDays } from "lucide-react";
import Link from "next/link";

const PostItem = () => {
  return (
    <div className="my-5">
      <h2>
        <Link
          className="text-xl text-primary hover:underline hover:decoration-dashed hover:underline-offset-4"
          href={"/posts/hello-world"}
        >
          Post Title
        </Link>
      </h2>
      <div className="flex items-center gap-x-2 my-1">
        <CalendarDays className="w-5 h-5" />
        <span>
          <i>September 30, 2023</i>
        </span>
        <span>|</span>
        <span>
          <i>02:35 AM</i>
        </span>
      </div>
      <p>
        Lorem Ipsum is a dummy text. It helps to add dummy text while working on
        any task where anyone needs to add some random text for a certain
        period.
      </p>
    </div>
  );
};

export default PostItem;
