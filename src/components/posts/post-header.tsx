import { Post } from "@/types/post";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type PostHeaderProps = Pick<Post, "title" | "coverImage" | "date">;

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
