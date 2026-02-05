"use client";

import { Box } from "../components/box/box";
import { Section } from "../components/section/section";
import { FaqSection } from "../sections/faq.section";
import { HeroSection } from "../sections/hero.section";
import { ReadySection } from "../sections/ready.section";
import { Testimonials } from "../sections/testimonials";
import { WhatLearnAPDSection } from "../sections/what-learn.section-apd";
import { Companies } from "../sections/companies";

const accordionData = [
	{
		title: "Почему именно этот курс?",
		content: `Хардкорный курс, который покрывает практически все аспекты дизайна и разработки плагинов для Figma, а также сборки компонентов разной сложности. Структурировано, выверено, осмысленно. Мы будем не просто писать забросы, а анализировать полученный код чтобы докручивать необходимого нам состояния`,
	},
	{
		title: "Я новичок в разработке, смогу потянуть?",
		content: `Да. Курс расчитан на ребят с разным уровнем знания языков программирования. Мы будем плавно погружаться, затрагивая только необходимые топики`,
	},

	{
		title: "Что я получу по итогу?",
		content: `Настоящий трухард. Будем нырять максимально глубоко в топик, разбирать детально каждый кейс, обретём системные знания по разработке плагинов любой сложности и научимся реализовывать компоненты не хуже чем фронтэнд разработчик`,
	},
];

export default function Home() {
	return (
		<>
			<HeroSection
				lessons
				actions
				stream="1-й поток"
				title="AI [tech] дизайнер-разработчик"
				new-changes
				date="TBD"
				description="Хардкорный курс, который покрывает практически все аспекты дизайна и разработки плагинов для Figma, а также сборки компонентов разной сложности. Структурировано, выверено, осмысленно"
				linkToProgram="https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=&node-id=7-2&starting-point-node-id=7%3A2&mode=design&t=SMp2w0KdDqdS1Esz-1"
				heroImg="/ai-tech-course.png"
				timing="3 - 3.5"
				status="blue"
				statusText="Курс в разработке"
			/>
			{/* <Companies /> */}
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
							Руководители дизайн отделов
						</span>
						<span className="text-strong text-large color-secondary">
							Продуктовые дизайнеры
						</span>
						<span className="text-strong text-large color-secondary">
							Дизайнеры дизайн-системы
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
				// buttonText="Узнать больше"
			>
				<Box direction="column" distance={8}>
					<span className="text-strong text-large color-secondary">
						Общая длительность 8 недель
					</span>
					<span className="text-strong text-large color-secondary">
						3 - 3.5 часа живых занятий в неделю
					</span>
					<span className="text-strong text-large color-secondary">
						Только практика
					</span>
					<span className="text-strong text-large color-secondary">
						Небольшие группы на потоке (20-25 человек)
					</span>
				</Box>
			</Section>

			<WhatLearnAPDSection />

			<Section
				src={"https://t.me/arturdsgn"}
				invert
				imagePath="/format.png"
				heading="Формат занятий"
				buttonText="Есть вопросы, пиши!"
			>
				<p className="text-large">
					В течении всего курса (8 недель) по выходным (суббота или
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
				srcTG={"https://t.me/arturdsgn"}
				srcLKDN={"https://www.linkedin.com/in/artur-dsgn/"}
				buttonText="Будем на связи!"
			>
				<p className="text-large">
					Привет! Меня зовут Артур. Я автор, идейный вдохновитель
					этого курса. Кратко о себе. В дизайне более 13-ти лет. На
					данный момент работаю на позиции Design Lead, руковожу
					разработкой дизайн-системы для B2B линейки продуктов в
					Лаборатории Касперского. Отлично разбираюсь во Фронте, Бэке
					и смежных областях
				</p>
			</Section>
			{/* <Testimonials /> */}
			<FaqSection accordionData={accordionData} />
			<ReadySection
				title="Готов прокачать себя в хардкорном
вайб-кодинге?"
			/>
		</>
	);
}
