"use client";

import { Section } from "./components/section.component";
import { FaqSection } from "./sections/faq.section";
import { HeroSection } from "./sections/hero.section";
import { ReadySection } from "./sections/ready.section";
import { Testimonials } from "./sections/testimonials";
import { WhatLearnSection } from "./sections/what-learn.section";

const List = () => {
	return (
		<ul>
			<li>Общая длительность 12 недель</li>
			<li>2.5 - 3 часа живых занятий в неделю</li>
			<li>4+ часов дополнительных видео материалов</li>
			<li>Много практики</li>
			<li>Небольшие группы на потоке (до 10 человек)</li>
		</ul>
	);
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<Section
				src={"https://t.me/arturdsgn"}
				invert
				imagePath="/who.png"
				heading="Для кого этот курс"
				buttonText="Узнать больше"
			>
				<p>
					Курс предназначен для специалистов, работающих
					преимущественно в следующих областях областях:
					<ul>
						<li>Продуктовые дизайнеры</li>
						<li>Визуальные дизайнеры</li>
						<li>Фронт энд разработчики</li>
					</ul>
				</p>
			</Section>

			<Section
				src={
					"https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=0%3A1&type=design&node-id=7-2&viewport=-905%2C502%2C0.99&t=jcU0HBumZVcMgV3v-1&scaling=min-zoom&starting-point-node-id=7%3A2&mode=design"
				}
				imagePath="/keys.png"
				heading="Ключевые моменты курса"
				buttonText="Узнать больше"
			>
				<List />
			</Section>

			<WhatLearnSection />

			<Section
				src={"https://t.me/arturdsgn"}
				invert
				imagePath="/format.png"
				heading="Формат занятий"
				buttonText="Есть вопросы, пиши!"
			>
				<p>
					В течении всего курса (12 недель) по выходным (суббота или
					воскресенье, день обсуждаем), в 11:00 по МСК, будет
					проходить занятие в режиме онлайн конференции. После каждой
					лекции будет даваться домашнее задание а также
					дополнительные материалы
				</p>
			</Section>

			<Section
				src={"https://t.me/arturdsgn"}
				imagePath="/me.png"
				heading="Давай знакомиться"
				buttonText="Будем на связи!"
			>
				<p>
					Привет! Меня зовут Артур. Я автор, идейный вдохновитель и
					тот кто будет тебя обучать на этом курсе. Кратко о себе. В
					дизайне более 10 лет. На данный момент работаю в позиции
					Team Lead и руковожу разработкой дизайн системы для B2B
					линейки продуктов в Лаборатории Касперского. Опыт работы с
					дизайн системами 6+ лет. Отлично разбираюсь во Фронте, Бэке
					и смежных областях
				</p>
			</Section>

			<Testimonials />

			<FaqSection />
			<ReadySection />
		</>
	);
}
