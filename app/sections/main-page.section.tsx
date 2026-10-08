import React, { HTMLAttributes } from "react";
import { Calendar, Clock, Video } from "react-feather";
import { Detail } from "../components/detail/detail";
import styled from "styled-components";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

interface IMainPageSectionProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	date?: string;
	stream?: string;
	description?: string;
	linkToProgram?: any;
	heroImg?: any;
	timing?: string;
	actions?: boolean;
	lessons?: boolean;
	subTitle?: string;
	invert?: boolean;
	imagePath?: any;
	buttonText?: string;
	heading?: string;
	children?: React.ReactNode;
	src?: any;
	srcLKDN?: any;
	srcTG?: any;
}

const StyledMainPageSection = styled.section<IMainPageSectionProps>`
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	max-height: 650px;
	border-radius: 0;

	@media (max-width: 1024px) {
		border-radius: 16px;
		overflow: hidden;
	}
	@media (max-width: 1200px) {
		border-radius: 0;
		overflow: hidden;
	}

	.hero-section-bg {
		background-color: var(--section-bg);
		min-height: 650px;
		width: 100%;
		padding: 64px;
		justify-content: center;
		flex-direction: column;
		display: flex;
		gap: 32px;
	}

	.hero-section-left-bg {
		background: url(${(props) => withBasePath(props.heroImg || "")});
		background-size: auto;
		background-position: center;
		background-repeat: no-repeat;
		max-height: 650px;

		width: 100%;
		padding: 64px;
		justify-content: center;
		flex-direction: column;
		display: flex;
		gap: 64px;
	}

	.hero-section-list {
		display: flex;
		gap: 24px;
	}

	@media screen and (max-width: 1024px) {
		.hero-section-bg {
			padding: 32px;
			min-height: 320px;
		}
	}

	@media screen and (max-width: 560px) {
		a {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.hero-section-bg {
			padding: 16px;
			gap: 16px;
			min-height: 320px;
		}

		.hero-section-list {
			flex-direction: column;
			gap: 8px;
		}
	}
`;

const StyledSection = styled.section<IMainPageSectionProps>`
	display: flex;
	flex-direction: row;
	height: auto;
	gap: 0;
	border-radius: 16px;
	overflow: hidden;

	@media (max-width: 1024px) {
		height: auto;

		.text-hero {
			font-size: 16px;
			line-height: 24px;
		}

		.section-image {
			display: none;
		}
	}
	@media (max-width: 1200px) {
		height: auto;

		.text-hero {
			font-size: 16px;
			line-height: 24px;
		}
	}

	${(props) =>
		props.invert &&
		`
    flex-direction: row-reverse;
    `}
`;

export const MainPageSection: React.FC<IMainPageSectionProps> = ({
	title,
	subTitle,
	date,
	stream = "Онлайн",
	description,
	linkToProgram,
	heroImg,
	timing,
	actions,
	lessons,
	invert,
}) => {
	return (
		<StyledSection invert={invert}>
			<StyledMainPageSection
				heroImg={heroImg}
				id="hero-section"
				className="section-image section-shadow"
			>
				<div className="hero-section-left-bg "></div>
			</StyledMainPageSection>
			<StyledMainPageSection id="hero-section">
				<div className="hero-section-bg ">
					<div className="display-flex flex-column gap-32">
						<div className="display-flex flex-column gap-16">
							<h2>{title}</h2>
							<h3>{subTitle}</h3>
						</div>
						{lessons ? (
							<div className="hero-section-list">
								<Detail>
									<Video size={24} /> {stream}
								</Detail>
								<Detail>
									<Calendar size={24} /> {date}
								</Detail>
								<Detail>
									<Clock size={24} /> {timing} часа живых
									занятий в неделю
								</Detail>
							</div>
						) : null}

						<p className="text-hero">{description}</p>
					</div>
					{actions ? (
						<div>
							<Link
								href={linkToProgram}
								className="button-primary"
							>
								Подробнее
							</Link>
						</div>
					) : null}
				</div>
			</StyledMainPageSection>
		</StyledSection>
	);
};
