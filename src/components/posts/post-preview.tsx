import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Post } from "@/types/post";

type PostPreviewProps = Pick<
  Post,
  "title" | "coverImage" | "date" | "excerpt" | "slug"
>;

const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  return (
    <div>
      {coverImage && (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      )}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
