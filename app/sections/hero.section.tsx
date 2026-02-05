import React, { HTMLAttributes } from "react";
import { Calendar, Clock, Video } from "react-feather";
import { Detail } from "../components/detail/detail";
import styled from "styled-components";
import { Badge } from "../components/badge/badge";

interface IHeroSectionProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	date?: string;
	description?: string;
	stream?: string;
	linkToProgram?: string;
	heroImg?: string;
	timing?: string;
	actions?: boolean;
	lessons?: boolean;
	subTitle?: string;
	statusText?: string;
	status?: "green" | "blue";
}

const StyledHeroSection = styled.section<IHeroSectionProps>`
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	height: auto;
	position: relative;
	border-radius: 16px;
	overflow: hidden;

	.hero-section-bg {
		background: url(${(props) => props.heroImg});
		background-size: auto;
		background-position: center;
		background-repeat: no-repeat;
		min-height: 650px;
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
	.status {
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const HeroSection: React.FC<IHeroSectionProps> = ({
	title,
	subTitle,
	date,
	stream = "Онлайн уроки",
	description,
	linkToProgram,
	heroImg = "/heroHouse.png",
	timing,
	actions,
	lessons,
	status = "green",
	statusText,
}) => {
	return (
		<StyledHeroSection
			heroImg={heroImg}
			id="hero-section"
			className="section-shadow"
		>
			<div className="hero-section-bg">
				{statusText ? (
					<div className="status">
						<Badge appearance={status}>{statusText}</Badge>
					</div>
				) : null}
				<div className="display-flex flex-column gap-32">
					<div className="display-flex flex-column gap-16">
						<h1>{title}</h1>
						<h2>{subTitle}</h2>
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
								<Clock size={24} /> {timing} часа живых занятий
								в неделю
							</Detail>
						</div>
					) : null}

					<p className="text-hero">{description}</p>
				</div>
				{actions ? (
					<div>
						<a
							type="button"
							target="_blank"
							rel="noopener noreferrer"
							href={linkToProgram}
							className="button-primary"
						>
							Подробнее
						</a>
					</div>
				) : null}
			</div>
		</StyledHeroSection>
	);
};
