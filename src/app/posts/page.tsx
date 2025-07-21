import PostList from "@/components/posts/post-list";
import { getAllPosts } from "@/utils/api/posts-api";

export default function BlogIndexPage() {
  const allPosts = getAllPosts();

  return <main>{allPosts.length > 0 && <PostList posts={allPosts} />}</main>;
}
