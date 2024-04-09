import React from "react";

export const HeroSection = () => {
	return (
		<section className="container">
			<div className="display-flex flex-column gap-64 hero-section-bg section-shadow">
				<div className="display-flex flex-column gap-32">
					<h1>Архитектор Дизайн Систем</h1>
					<div className="display-flex gap-32">
						<div className="display-flex gap-8">
							<span>И</span>
							<span>Онлайн уроки</span>
						</div>
						<div className="display-flex gap-8">
							<span>И</span>
							<span>TBD</span>
						</div>
						<div className="display-flex gap-8">
							<span>И</span>
							<span>2 - 2,5 часа в неделю</span>
						</div>
					</div>
					<p>
						Уникальный курс не имеющий аналогов во всём мире который
						вобрал в себя весь огромный, практический опыт работы с
						дизайн системами от истоков образования до наших дней
					</p>
				</div>
				<div>
					<a className="button-primary">Узнать больше</a>
				</div>
			</div>
		</section>
	);
};
