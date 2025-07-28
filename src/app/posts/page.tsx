import PostList from "@/components/posts/post-list";
import { getAllPosts } from "@/utils/api/posts-api";

export default async function BlogIndexPage() {
  const allPosts = await getAllPosts();

  return <main>{allPosts.length > 0 && <PostList posts={allPosts} />}</main>;
}
