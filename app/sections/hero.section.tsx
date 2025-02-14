import React, { HTMLAttributes } from "react";
import { Calendar, Clock, Video } from "react-feather";
import { Detail } from "../components/detail/detail";
import styled from "styled-components";

interface IHeroSectionProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	date?: string;
	description?: string;
	linkToProgram?: string;
	heroImg?: string;
	timing?: string;
	actions?: boolean;
	lessions?: boolean;
	subTitle?: string;
}

const StyledHeroSection = styled.section<IHeroSectionProps>`
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	height: auto;

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
`;

export const HeroSection: React.FC<IHeroSectionProps> = ({
	title,
	subTitle,
	date,
	description,
	linkToProgram,
	heroImg = "/heroHouse.png",
	timing,
	actions,
	lessions,
}) => {
	return (
		<StyledHeroSection heroImg={heroImg} id="hero-section">
			<div className="hero-section-bg section-shadow">
				<div className="display-flex flex-column gap-32">
					<div className="display-flex flex-column gap-16">
						<h1>{title}</h1>
						<h2>{subTitle}</h2>
					</div>
					{lessions ? (
						<div className="hero-section-list">
							<Detail>
								<Video size={24} /> Онлайн уроки
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
