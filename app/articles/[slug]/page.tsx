import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import ArticleBody from "./article-body";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return getPostSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: Props) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();
	return <ArticleBody post={post} />;
}
