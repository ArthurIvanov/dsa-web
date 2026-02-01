"use client";

import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import styled from "styled-components";
import { Box } from "../components/box/box";

const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 48px 24px;
`;

const BackLink = styled(Link)`
	display: inline-block;
	color: var(--secondary-default);
	font-size: 14px;
	line-height: 20px;
	text-decoration: none;

	&:hover {
		color: var(--main-default);
	}
`;

const Title = styled.h1`
	font-size: 32px;
	line-height: 40px;
	font-weight: 600;
	margin-bottom: 32px;
	color: var(--main-default);
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	flex-direction: row;
`;

const Item = styled.li`
	background: var(--section-bg);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	overflow: hidden;
	transition: box-shadow 0.2s;
	border-radius: 16px;
	min-width: 200px;
	max-width: 300px;

	&:hover {
		box-shadow: 0px 12px 40px rgba(34, 49, 69, 0.08);
	}
`;

const PostLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	display: block;
`;

const PreviewWrap = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 9;
	background: var(--grey-100);
	overflow: hidden;

	img {
		object-fit: cover;
	}
`;

const CardContent = styled.div`
	padding: 24px;
`;

const PostTitle = styled.h2`
	font-size: 20px;
	line-height: 28px;
	font-weight: 600;
	margin: 0 0 8px;
	color: var(--main-default);
`;

const PostDate = styled.time`
	font-size: 14px;
	line-height: 20px;
	color: var(--tertiary-default);
`;

const Empty = styled.p`
	color: var(--tertiary-default);
	font-size: 16px;
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
		<Wrap>
			<Box direction="column" distance={4}>
				<BackLink href="/">← На главную</BackLink>
				<Title>Статьи</Title>
			</Box>
			{posts.length > 0 ? (
				<List>
					{posts.map((post) => (
						<Item key={post.slug}>
							<PostLink href={`/articles/${post.slug}`}>
								{post.image && (
									<PreviewWrap>
										<Image
											src={post.image}
											alt=""
											fill
											sizes="(max-width: 768px) 100vw, 1200px"
										/>
									</PreviewWrap>
								)}
								<CardContent>
									<PostTitle>{post.title}</PostTitle>
									<PostDate dateTime={post.date}>
										{formatDate(post.date)}
									</PostDate>
								</CardContent>
							</PostLink>
						</Item>
					))}
				</List>
			) : (
				<Empty>Пока нет статей.</Empty>
			)}
		</Wrap>
	);
}
