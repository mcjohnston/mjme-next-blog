import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/utils/api/posts-api";
import PostHeader from "@/components/posts/post-header";

import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import DebugMdx from "@/components/shared/DebugMdx";
import { Post } from "@/types/post";

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

  return (
    <main>
      <article className="mb-32">
        <PostHeader {...{ title, coverImage, date }} />
        {postContent.content}
      </article>
    </main>
  );
}

// export async function generateMetadata(
//   props: PostBySlugParams
// ): Promise<Metadata> {
//   const params = await props.params;
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title} - By: Matthew Johnston`;

//   return {
//     title,
//     openGraph: {
//       title,
//       images: post.ogImage?.url ? [post.ogImage.url] : [],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
