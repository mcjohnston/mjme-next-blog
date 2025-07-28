import { promises as fs } from "fs";
import { join } from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXPost, type Post } from "@/types/post";
import PostHeader from "@/components/posts/post-header";
import DebugMdx from "@/components/shared/DebugMdx";

const postsDirectory = join(process.cwd(), "src", "source-md", "blog");

export async function getPostSlugs() {
  let files: string[] = [];
  try {
    files = await fs.readdir(postsDirectory);
  } catch (err) {
    console.error(err);
  }

  return files;
}

export async function getPostBySlug(slug: string): Promise<MDXPost> {
  const formattedSlug = slug.includes(".mdx") ? slug : `${slug}.mdx`;
  const postContent = await fs.readFile(join(postsDirectory, formattedSlug), {
    encoding: "utf-8",
  });

  const compiledPostContent = await compileMDX<Post>({
    source: postContent,
    options: { parseFrontmatter: true },
    components: {
      PostHeader,
      DebugMdx,
    },
  });

  // trim off file extension for slug and send compiled content
  return { ...compiledPostContent, slug: slug.replace(".mdx", "") }; // resulting object here should be { content, frontmatter, slug }
}

export async function getAllPosts(): Promise<MDXPost[]> {
  const slugs = await getPostSlugs();
  const posts: MDXPost[] = [];

  for (const slug of slugs) {
    const postContent = await getPostBySlug(slug);
    posts.push(postContent);
  }

  return posts.length > 0 ? posts : [];
}
