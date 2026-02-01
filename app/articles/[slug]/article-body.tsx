"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { Post } from "@/lib/posts";
import styled from "styled-components";

const Wrap = styled.article`
	max-width: 800px;
	margin: 0 auto;
	padding: 48px 24px;

	.post-image {
		border-radius: 16px;
		overflow: hidden;
	}
`;

const BackLink = styled(Link)`
	display: inline-block;
	margin-bottom: 24px;
	color: var(--secondary-default);
	font-size: 14px;
	line-height: 20px;
	text-decoration: none;

	&:hover {
		color: var(--main-hover);
	}
`;

const PostTitle = styled.h1`
	font-size: 32px;
	line-height: 40px;
	font-weight: 600;
	margin: 0 0 16px;
	color: var(--main-default);
`;

const PostDate = styled.time`
	display: block;
	margin-bottom: 32px;
	font-size: 14px;
	line-height: 20px;
	color: var(--tertiary-default);
`;

const CoverWrap = styled.div`
	border-radius: 16px;

	position: relative;
	width: 100%;
	aspect-ratio: 16 / 9;
	background: var(--grey-100);
	overflow: hidden;
	margin-bottom: 32px;
	border-radius: 0;

	img {
		object-fit: cover;
	}
`;

const Body = styled.div`
	color: var(--main-default);
	font-size: 18px;
	line-height: 28px;

	p {
		margin: 0 0 1em;
	}
	p:last-child {
		margin-bottom: 0;
	}
	h2 {
		font-size: 24px;
		line-height: 32px;
		margin: 1.5em 0 0.5em;
		font-weight: 600;
	}
	h3 {
		font-size: 20px;
		line-height: 28px;
		margin: 1.25em 0 0.5em;
		font-weight: 600;
	}
	ul,
	ol {
		margin: 0 0 1em;
		padding-left: 1.5em;
	}
	a {
		color: var(--blue-500);
		text-decoration: underline;
	}
	a:hover {
		color: var(--blue-600);
	}
	strong {
		font-weight: 600;
	}
`;

function formatDate(dateStr: string): string {
	const d = new Date(dateStr);
	return d.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export default function ArticleBody({ post }: { post: Post }) {
	return (
		<Wrap>
			<BackLink href="/articles">← Статьи</BackLink>
			{post.image && (
				<CoverWrap>
					<Image
						className="post-image"
						src={post.image}
						alt=""
						fill
						sizes="(max-width: 800px) 100vw, 800px"
						priority
					/>
				</CoverWrap>
			)}
			<PostTitle>{post.title}</PostTitle>
			<PostDate dateTime={post.date}>{formatDate(post.date)}</PostDate>
			<Body>
				<ReactMarkdown>{post.content}</ReactMarkdown>
			</Body>
		</Wrap>
	);
}
