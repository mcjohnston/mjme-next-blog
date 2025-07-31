import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/utils/api/posts-api";
import PostHeader from "@/components/posts/post-header";
import { formatBlogDate } from "@/utils/format-dates";
import BasePageWrap from "@/components/shared/BasePageWrap";

type PostBySlugParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostSlugPage(props: PostBySlugParams) {
  const awaitedParams = await props.params;
  const postContent = await getPostBySlug(`${awaitedParams.slug}.mdx`);
  const { title, coverImage, date } = postContent.frontmatter;

  // early return to 404 if we don't get a post, TODO: Custom 404 for blog
  if (!postContent) {
    return notFound();
  }

  // TODO: Add some logic here to toggle a sidebar

  return (
    <main>
      <BasePageWrap>
        <article className="mb-32">
          <PostHeader {...{ title, coverImage, date }} />
          {postContent.content}
        </article>
      </BasePageWrap>
    </main>
  );
}

export async function generateMetadata(
  props: PostBySlugParams
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.frontmatter.title} - ${formatBlogDate(
    post.frontmatter.date
  )}`;

  return {
    title,
    openGraph: {
      title,
      images: post.frontmatter.ogImage?.url
        ? [post.frontmatter.ogImage.url]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
