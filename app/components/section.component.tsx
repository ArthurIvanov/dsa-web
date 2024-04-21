"use client";

import React from "react";
import styled from "styled-components";
import { Image } from "../components/img.component";
import Link from "next/link";

interface ISection {
	invert?: boolean;
	imagePath: any;
	buttonText?: string;
	heading?: string;
	children?: React.ReactNode;
	src: any;
}

const StyledSection = styled.section<ISection>`
	display: flex;
	flex-direction: row;
	width: 100%;
	gap: 32px;
	background-color: white;
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	height: 650px;

	font-size: 18px;
	line-height: 24px;
	p,
	ul,
	li,
	span {
		color: var(--tertiary-default);
	}

	@media (max-width: 768px) {
		height: auto;
		.section-image {
			display: none;
		}
	}

	.section-content {
		display: inherit;
		flex-direction: column;
		gap: 24px;
		padding: 64px;
		align-tems: center;
		justify-content: center;
	}

	.section-text {
		font-size: 18px;
		line-height: 24px;
		color: var(--tertiary-default);
	}

	${(props) =>
		props.invert &&
		`
    flex-direction: row-reverse;
    
    `}
`;

export const Section = ({
	invert,
	imagePath,
	buttonText,
	heading,
	children,
	src = "/",
}: ISection) => {
	return (
		<StyledSection invert={invert} src={src} imagePath={imagePath}>
			<Image
				className="section-image"
				min="50%"
				max="50%"
				def="50%"
				height="650px"
				path={imagePath}
			/>

			<div className="section-content">
				<h2>{heading}</h2>
				<>{children}</>
				<div>
					<Link className="button-primary" href={src}>
						{buttonText}
					</Link>
				</div>
			</div>
		</StyledSection>
	);
};
