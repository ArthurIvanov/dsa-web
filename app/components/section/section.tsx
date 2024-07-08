"use client";

import React from "react";
import styled from "styled-components";
import { Image } from "../img/img";
import Link from "next/link";
import { Box } from "../box/box";

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
	background-color: var(--main-invert-default);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	height: 650px;

	@media (max-width: 768px) {
		height: auto;
		.section-image {
			display: none;
		}
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

			<Box distance={32} direction="column" padding={64} justifyCentered>
				<h2>{heading}</h2>
				{children}
				<div>
					<Link
						className="button-primary"
						href={src}
						target="_blank"
						rel="noopener noreferrer"
					>
						{buttonText}
					</Link>
				</div>
			</Box>
		</StyledSection>
	);
};
