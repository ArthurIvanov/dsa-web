import React from "react";
import { Calendar, Clock, Video } from "react-feather";

export const HeroSection = () => {
	return (
		<section id="hero-section" className="container">
			<div className="display-flex flex-column gap-64 hero-section-bg section-shadow">
				<div className="display-flex flex-column gap-32">
					<h1>Архитектор Дизайн Систем</h1>
					<div className="display-flex gap-32">
						<div className="display-flex gap-8 flex-justify-center">
							<Video size={24} />
							<span className="text-large">Онлайн уроки</span>
						</div>
						<div className="display-flex gap-8 flex-justify-center">
							<Calendar size={24} />
							<span className="text-large">28 апреля 2024</span>
						</div>
						<div className="display-flex gap-8 flex-justify-center">
							<Clock size={24} />
							<span className="text-large">
								2.5 - 3 часа живых занятий в неделю
							</span>
						</div>
					</div>
					<p className="text-hero ">
						Уникальный курс не имеющий аналогов во всём мире который
						вобрал в себя весь огромный, практический опыт работы с
						дизайн системами от истоков образования до наших дней
					</p>
				</div>
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=&node-id=7-2&starting-point-node-id=7%3A2&mode=design&t=SMp2w0KdDqdS1Esz-1"
						className="button-primary"
					>
						Подробнее о курсе
					</a>
				</div>
			</div>
		</section>
	);
};
