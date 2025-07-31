import PostList from "@/components/posts/post-list";
import BasePageWrap from "@/components/shared/BasePageWrap";
import { getAllPosts } from "@/utils/api/posts-api";

export default async function BlogIndexPage() {
  const allPosts = await getAllPosts();

  return (
    <main>
      <BasePageWrap>
        {allPosts.length > 0 && <PostList posts={allPosts} />}
      </BasePageWrap>
    </main>
  );
}
