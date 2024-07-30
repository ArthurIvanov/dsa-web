import React, { HTMLAttributes } from "react";
import { Calendar, Clock, Video } from "react-feather";
import { Detail } from "../components/detail/detail";
import styled from "styled-components";

const StyledHeroSection = styled.section<HTMLAttributes<HTMLDivElement>>`
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	height: auto;

	.hero-section-bg {
		background: url("/heroHouse.png");
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

	@media screen and (max-width: 1024px) {
		.hero-section-bg {
			padding: 32px;
			gap: 16px;
			min-height: 320px;
		}

		.hero-section-list {
			flex-direction: column;
			gap: 8px;
		}
	}
`;

export const HeroSection = () => {
	return (
		<StyledHeroSection id="hero-section">
			<div className="hero-section-bg section-shadow">
				<div className="display-flex flex-column gap-32">
					<h1>Архитектор Дизайн-систем</h1>
					<div className="hero-section-list">
						<Detail>
							<Video size={24} /> Онлайн уроки
						</Detail>
						<Detail>
							<Calendar size={24} /> 07 сентября 2024
						</Detail>
						<Detail>
							<Clock size={24} /> 2.5 - 3 часа живых занятий в
							неделю
						</Detail>
					</div>
					<p className="text-hero">
						Уникальный курс не имеющий аналогов во всём мире который
						вобрал в себя весь огромный, практический опыт работы с
						дизайн-системами от истоков образования до наших дней
					</p>
				</div>
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=&node-id=7-2&starting-point-node-id=7%3A2&mode=design&t=SMp2w0KdDqdS1Esz-1"
						className="button-primary"
					>
						Подробнее
					</a>
				</div>
			</div>
		</StyledHeroSection>
	);
};
