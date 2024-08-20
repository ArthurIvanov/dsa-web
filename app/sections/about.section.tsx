import React from "react";

export const AboutSection = () => {
	return (
		<section id="about-me" className="container">
			<div id="about-me" className="about-bg" />
			<div className="display-flex flex-row gap-32 card flex-align-center section-shadow">
				<div className="display-flex flex-column gap-32 p-32 background-gl">
					<h2>Давай знакомиться</h2>

					<span>
						Привет! Меня зовут Артур. Я автор, идейный вдохновитель
						и тот кто будет тебя обучать на этом курсе. Кратко о
						себе. В дизайне более 10 лет. На данный момент работаю в
						позиции Team Lead и руковожу разработкой дизайн-системы
						для B2B линейки продуктов в Лаборатории Касперского.
						Опыт работы с дизайн-системами 6+ лет. Отлично
						разбираюсь во Фронте, Бэке и смежных областях:
					</span>

					<div>
						<a className="button-primary">Напиши привет!</a>
					</div>
				</div>
			</div>
		</section>
	);
};
