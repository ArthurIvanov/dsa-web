import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface PostMeta {
	title: string;
	slug: string;
	date: string;
	image?: string;
}

export interface Post extends PostMeta {
	content: string;
}

/** Список всех постов (только мета) для списка на главной статей */
export function getPosts(): PostMeta[] {
	const files = fs.readdirSync(CONTENT_DIR, "utf-8");
	const posts = files
		.filter((fn) => fn.endsWith(".md"))
		.map((fn) => {
			const fullPath = path.join(CONTENT_DIR, fn);
			const raw = fs.readFileSync(fullPath, { encoding: "utf-8" });
			const { data } = matter(raw);
			return {
				title: data.title as string,
				slug: data.slug as string,
				date: data.date as string,
				image: data.image as string | undefined,
			};
		})
		.sort((a, b) => (new Date(b.date).getTime() > new Date(a.date).getTime() ? 1 : -1));
	return posts;
}

/** Один пост по slug (мета + контент) */
export function getPostBySlug(slug: string): Post | null {
	const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
	if (!fs.existsSync(fullPath)) return null;
	const raw = fs.readFileSync(fullPath, { encoding: "utf-8" });
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		slug: data.slug as string,
		date: data.date as string,
		image: data.image as string | undefined,
		content,
	};
}

/** Все slug для generateStaticParams */
export function getPostSlugs(): string[] {
	const files = fs.readdirSync(CONTENT_DIR, "utf-8");
	return files
		.filter((fn) => fn.endsWith(".md"))
		.map((fn) => fn.replace(/\.md$/, ""));
}
