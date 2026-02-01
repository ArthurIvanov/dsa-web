import { getPosts } from "@/lib/posts";
import ArticlesList from "./articles-list";

export default function ArticlesPage() {
	const posts = getPosts();
	return <ArticlesList posts={posts} />;
}
