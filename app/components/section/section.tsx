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
	srcLKDN?: any;
	srcTG?: any;
}

const StyledSection = styled.section<ISection>`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: var(--section-bg);
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);
	height: 650px;
	border-radius: 16px;
	overflow: hidden;

	.section-heading {
		display: inline-flex;
		flex-direction: column;
		gap: 8px;
	}

	.section-social {
		display: inline-flex;
		gap: 8px;
	}

	.section-content {
		padding: 64px;
		gap: 32px;
	}

	@media (max-width: 1024px) {
		height: auto;
		text-align: center;
		.section-content {
			padding: 16px;
			gap: 16px;
		}
		.section-image {
			display: none;
		}
	}

	@media screen and (max-width: 560px) {
		a {
			display: flex;
			align-items: center;
			justify-content: center;
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
	srcLKDN,
	srcTG,
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

			<Box
				distance={32}
				direction="column"
				justifyCentered
				className="section-content"
			>
				<div className="section-heading">
					<h2>{heading}</h2>
					{srcTG ? (
						<div className="section-social">
							<Link
								type="button"
								href={srcLKDN}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="32"
										height="32"
										fill="#0B66C2"
									/>
									<path
										d="M20 12C21.5913 12 23.1174 12.6321 24.2426 13.7574C25.3679 14.8826 26 16.4087 26 18V25H22V18C22 17.4696 21.7893 16.9609 21.4142 16.5858C21.0391 16.2107 20.5304 16 20 16C19.4696 16 18.9609 16.2107 18.5858 16.5858C18.2107 16.9609 18 17.4696 18 18V25H14V18C14 16.4087 14.6321 14.8826 15.7574 13.7574C16.8826 12.6321 18.4087 12 20 12Z"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 13H6V25H10V13Z"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>
							<Link
								type="button"
								href={srcTG}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="32"
										height="32"
										fill="#29ABEE"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.30615 15.0269C12.4064 13.0512 15.8074 11.7487 17.5091 11.1194C22.3677 9.32254 23.3773 9.01042 24.0354 9.00011C24.1801 8.99784 24.5037 9.02973 24.7133 9.18096C24.8903 9.30866 24.939 9.48116 24.9623 9.60223C24.9856 9.7233 25.0146 9.9991 24.9916 10.2146C24.7283 12.6743 23.589 18.6433 23.0094 21.3983C22.7642 22.564 22.2813 22.9548 21.8138 22.9931C20.7978 23.0762 20.0263 22.3961 19.0422 21.8225C17.5024 20.9251 16.6325 20.3664 15.1378 19.4907C13.4105 18.4786 14.5303 17.9223 15.5147 17.0132C15.7723 16.7753 20.2488 13.1551 20.3354 12.8267C20.3463 12.7856 20.3563 12.6325 20.254 12.5517C20.1517 12.4708 20.0007 12.4985 19.8918 12.5204C19.7373 12.5516 17.2775 13.9972 12.5121 16.8573C11.8139 17.2836 11.1815 17.4913 10.6148 17.4804C9.99014 17.4684 8.78851 17.1664 7.89523 16.9082C6.79958 16.5915 5.92878 16.4241 6.0046 15.8863C6.0441 15.6062 6.47795 15.3197 7.30615 15.0269Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					) : null}
				</div>
				{children}
				<div>
					<Link
						type="button"
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
