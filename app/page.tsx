"use client";

import { Box } from "./components/box/box";
import { Section } from "./components/section/section";
import { FaqSection } from "./sections/faq.section";
import { HeroSection } from "./sections/hero.section";
import { ReadySection } from "./sections/ready.section";
import { Testimonials } from "./sections/testimonials";
import { WhatLearnSection } from "./sections/what-learn.section";

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
				<Box direction="column" distance={16}>
					<p className="color-tertiary text-large">
						Курс предназначен для специалистов, <br />
						работающих в следующих областях:
					</p>
					<Box direction="column" distance={8}>
						<span className="text-strong text-large color-secondary">
							Продуктовые дизайнеры
						</span>
						<span className="text-strong text-large color-secondary">
							Визуальные дизайнеры
						</span>
						<span className="text-strong text-large color-secondary">
							Фронт-энд разработчики
						</span>
					</Box>
				</Box>
			</Section>

			<Section
				src={
					"https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=0%3A1&type=design&node-id=7-2&viewport=-905%2C502%2C0.99&t=jcU0HBumZVcMgV3v-1&scaling=min-zoom&starting-point-node-id=7%3A2&mode=design"
				}
				imagePath="/keys.png"
				heading="Ключевые моменты"
				buttonText="Узнать больше"
			>
				<Box direction="column" distance={8}>
					<span className="text-strong text-large color-secondary">
						Общая длительность 12 недель
					</span>
					<span className="text-strong text-large color-secondary">
						2.5 - 3 часа живых занятий в неделю
					</span>
					<span className="text-strong text-large color-secondary">
						4+ часов дополнительных видео материалов
					</span>
					<span className="text-strong text-large color-secondary">
						Много практики
					</span>
					<span className="text-strong text-large color-secondary">
						Небольшие группы на потоке (до 10 человек)
					</span>
				</Box>
			</Section>

			<WhatLearnSection />

			<Section
				src={"https://t.me/arturdsgn"}
				invert
				imagePath="/format.png"
				heading="Формат занятий"
				buttonText="Есть вопросы, пиши!"
			>
				<p className="text-large">
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
				<p className="text-large">
					Привет! Меня зовут Артур. Я автор, идейный вдохновитель и
					тот, кто будет тебя обучать на этом курсе. Кратко о себе. В
					дизайне более 10 лет. На данный момент работаю на позиции
					Team Lead и руковожу разработкой дизайн-системы для B2B
					линейки продуктов в Лаборатории Касперского. Опыт работы с
					дизайн-системами более 6 лет. Отлично разбираюсь во Фронте,
					Бэке и смежных областях
				</p>
			</Section>
			<Testimonials />
			<FaqSection />
			<ReadySection />
		</>
	);
}
