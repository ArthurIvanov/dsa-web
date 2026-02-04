"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import styled from "styled-components";
import { Box } from "../components/box/box";

const BackLink = styled(Link)`
	display: inline-block;
	color: var(--secondary-default);
	font-size: 14px;
	line-height: 20px;
	text-decoration: none;

	&:hover {
		color: var(--main-hover);
	}
`;

const List = styled.div`
	margin: 0;
	padding: 0;
	gap: 16px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
	gap: 16px;
`;

const PostLink = styled(Link)`
	text-decoration: none;
	background: var(--section-bg);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	overflow: hidden;
	transition: all 0.2s;
	border-radius: 16px;
	grid-column: span 1;
	display: flex;
	flex-direction: column;
	min-width: 360px;
	max-width: 640px;
	min-height: 320px;

	&:hover {
		box-shadow: 0px 12px 40px rgba(34, 49, 69, 0.08);
	}

	.item-img {
		object-fit: cover;
		display: flex;
		width: 100%;
		height: 240px;
		border-radius: none;
	}
`;

const Title = styled.h1`
	font-size: 32px;
	line-height: 40px;
	font-weight: 560px;
	color: var(--main-default);
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 24px;
`;

const PostTitle = styled.h2`
	font-size: 24px;
	line-height: 32px;
	font-weight: 500;
	color: var(--main-default);
`;

const PostDate = styled.time`
	font-size: 14px;
	line-height: 16px;
	color: var(--tertiary-default);
`;

const Empty = styled.p`
	color: var(--tertiary-default);
	font-size: 16px;
	line-height: 24px;
	margin: 0;
`;

function formatDate(dateStr: string): string {
	const d = new Date(dateStr);
	return d.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export default function ArticlesList({ posts }: { posts: PostMeta[] }) {
	return (
		<>
			<Box direction="column" distance={4}>
				{/* <BackLink href="/">← На главную</BackLink> */}
				<Title>
					Статьи, где мы делимся экспертизой в дизайне, разработке,
					менеджменте и других направлениях, которые актуальны сегодня
				</Title>
			</Box>
			{posts.length > 0 ? (
				<List>
					{posts.map((post) => (
						<PostLink
							key={post.slug}
							href={`/articles/${post.slug}`}
						>
							{post.image && (
								<img
									src={post.image}
									alt=""
									className="item-img"
								/>
							)}
							<CardContent>
								<PostTitle>{post.title}</PostTitle>
								<PostDate dateTime={post.date}>
									{formatDate(post.date)}
								</PostDate>
							</CardContent>
						</PostLink>
					))}
				</List>
			) : (
				<Empty>Пока нет статей.</Empty>
			)}
		</>
	);
}
