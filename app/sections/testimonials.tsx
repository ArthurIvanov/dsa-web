import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "react-feather";
import { CardClient } from "../components/tesimonials/card";

const StyledTestimonials = styled.section`
	h2 {
		text-align: center;
	}

	.carousel-container {
		position: relative;
		/* width: 100%; */
		max-width: 1200px;
		margin: 0 auto;
		overflow: visible;
	}

	.carousel-wrapper {
		position: relative;
		overflow: hidden;
		margin: 0 auto;
		width: 60%;
	}

	.clients-list {
		display: flex;
		transition: transform 0.5s ease-in-out;
		width: 100%;
	}

	.carousel-item {
		min-width: 100%;
		flex-shrink: 0;
	}

	.carousel-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: var(--section-bg);
		border: 1px solid var(--tertiary-default);
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: all 0.3s ease;
		color: var(--tertiary-default);

		&:hover {
			background-color: var(--subsection-bg);
			border-color: var(--secondary-default);
			color: var(--secondary-default);
		}

		&:active {
			transform: translateY(-50%) scale(0.95);
		}

		&.prev {
			left: 200px;
		}

		&.next {
			right: 200px;
		}
	}

	.carousel-indicators {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 24px;
	}

	.indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: var(--tertiary-default);
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		padding: 0;

		&:hover {
			background-color: var(--secondary-default);
			transform: scale(1.2);
		}

		&.active {
			background-color: var(--secondary-default);
			width: 32px;
			border-radius: 6px;
		}
	}

	@media screen and (max-width: 1024px) {
		.carousel-button {
			width: 40px;
			height: 40px;

			&.prev {
				left: 8px;
			}

			&.next {
				right: 8px;
			}
		}
	}
`;

const testimonialsData = [
	{
		img: "/client-1.png",
		name: "Полина",
		role: "Senior UX/UI Designer, Design System",
		srcLKDN: "https://www.linkedin.com/in/polinagorkovenko/",
		company: "Home Credit Bank",
		content:
			"Очень много ценных материалов, приёмов и подходов получаешь за достаточно короткий срок. Чувствуется, что Артуру самому важно, чтобы ученики не просто ушли с курса с какой-то информацией, а положили в свои головы то, что потом им будет приносить пользу в долгую. Хочу поблагодарить за ту поддержку, которая была оказана в течении всего курса. Это правда ценно.  Информация разбиралась до мельчайших деталей, не было просто абстрактной теории, только практические, живые примеры",
	},
	{
		img: "/client-2.png",
		name: "Анатолий",
		role: "Product designer",
		srcTG: "https://t.me/skurygin08",
		company: "Shtab.app",
		content:
			"появилось понимание правильного построение компонентов которые синхронизируются с разработкой.  Начал более системно работать с дизайн-системой. Разобрался наконец-то с темной темой😅. Все супер, все по полочкам и фидбэк всегда по делу🦾. Все что было дано на курсе, стало для меня новым и хорошим пинком под зад в хорошем смысле слова😅",
	},
	{
		img: "/client-3.png",
		name: "Анна",
		role: "Product Designer, Design System",
		company: "Т-Банк",
		srcTG: "https://t.me/ansko99",
		content:
			"Очень понравилась наглядная демонстрация связки дизайна с кодом, это помогает в работе больше всего. Стало намного проще ориентироваться в пропсах компонентов и  собирать компоненты в дизайне более похожими на те, которые есть в коде. Материал был представлен доступно, порадовало, что можно задавать вопросы как по лекциям, так и по моментам, возникающим в работе. Спасибо за дополнительные материалы, которые ты для нас готовил)",
	},
];

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const [isHovered, setIsHovered] = useState(false);

	const goToNext = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
		);
	}, []);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		if (!isHovered) {
			intervalRef.current = setInterval(() => {
				goToNext();
			}, 5000);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isHovered, goToNext]);

	return (
		<StyledTestimonials className="display-flex flex-column gap-24 flex-align-center">
			<h2 className="centered">Выпускники говорят сами за себя</h2>
			<div
				className="carousel-container"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<button
					className="carousel-button prev"
					onClick={goToPrevious}
					aria-label="Предыдущий отзыв"
				>
					<ChevronLeft size={24} />
				</button>
				<div className="carousel-wrapper">
					<div
						className="clients-list"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{testimonialsData.map((testimonial, index) => (
							<div key={index} className="carousel-item">
								<CardClient
									className="flex-grow"
									img={testimonial.img}
									name={testimonial.name}
									role={testimonial.role}
									srcLKDN={testimonial.srcLKDN}
									srcTG={testimonial.srcTG}
									company={testimonial.company}
									content={testimonial.content}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="carousel-indicators">
					{testimonialsData.map((_, index) => (
						<button
							key={index}
							className={`indicator ${
								index === currentIndex ? "active" : ""
							}`}
							onClick={() => goToSlide(index)}
							aria-label={`Перейти к отзыву ${index + 1}`}
						/>
					))}
					<button
						className="carousel-button next"
						onClick={goToNext}
						aria-label="Следующий отзыв"
					>
						<ChevronRight size={24} />
					</button>
				</div>
			</div>
		</StyledTestimonials>
	);
};
