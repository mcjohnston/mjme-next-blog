import { type MDXPost } from "@/types/post";
import PostPreview from "./post-preview";

type PostListProps = {
  posts: MDXPost[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1">
        {posts.map((post) => {
          const { title, coverImage, date, excerpt } = post.frontmatter;
          return (
            <PostPreview
              key={`post-preview-key--${post.slug}`}
              title={title}
              coverImage={coverImage}
              date={date}
              slug={post.slug}
              excerpt={excerpt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PostList;
