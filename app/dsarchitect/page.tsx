"use client";

import { Box } from "../components/box/box";
import { Section } from "../components/section/section";
import { FaqSection } from "../sections/faq.section";
import { HeroSection } from "../sections/hero.section";
import { ReadySection } from "../sections/ready.section";
import { Testimonials } from "../sections/testimonials";
import { WhatLearnSection } from "../sections/what-learn.section";
import { Companies } from "../sections/companies";

const accordionData = [
	{
		title: "Почему именно этот курс?",
		content: `Курс на самом деле уникален. Он довольно непростой. В нем не будет монотонной начитки стандартных вещей которые можно найти в интернете. Так же не будет классической отрисовки UI-kit’a который будет подан как дизайн-система. В курсе вложен весь мой многолетний опыт работы с дизайн системами, практические выжимки задач и решений с которыми мне приходилось сталкиваться каждый день.
                Здесь мы не будем много рисовать но, будем много анализировать для того, чтобы понимать как правильно подходить к задаче и решать ее. Будем писать код, чтобы понимать и видеть мир дизайн систем глазами разработчика. Посмотрим на процесс сотрудником, которому нужно продать её важность в компании и, подумаем о дизайнере, который использует её каждый день. Также мы научимся разговаривать с разработкой на одном языке, не идти на поводу у технологий и понимать ограничения для того, чтобы грамотно строить и синхронизировать компоненты из дизайна в код`,
	},
	{
		title: "Я новичок в дизайн-системах, смогу потянуть?",
		content: `Буду честен, для абсолютных новичков, без опыта во фронте либо в использовании или создании дизайн библиотек это будет очень сложно но, если есть желание превозмочь себя и пересмотреть лекции N раз чтобы вкачаться то, добро пожаловать на борт`,
	},

	{
		title: "Что я получу по итогу?",
		content: `Настоящий трухард. Прочувствуете на себе работу по выстраиванию дизайн-системы на всех её этапах. Посмотрите на неё со стороны Дизайна, Разработки, Бизнеса. Разовьете не только хардовые ни и софтовые навыки так как в курсе есть своя изюминка которую я закладывал при его создании. Будет довольно сложно но, оно того стоит, поверьте.`,
	},
];

const learnData = [
	[
		{ text: "Дизайн", bold: false },
		{ text: "Дизайн", bold: false },
		{ text: "Дизайн", bold: false },
		{ text: "Дизайн", bold: false },
		{ text: "Дизайн", bold: false },
	],

	[
		{ text: "Разработка", bold: false },
		{ text: "Основы Git, Github", bold: false },
		{ text: "База HTML, CSS, JS, TS, React", bold: false },
		{ text: "Создание библиотеки в коде", bold: false },
		{ text: "Storybook и публикация проекта", bold: false },
	],
	[
		{ text: "Управление и Евангелирование", bold: false },
		{ text: "Архитектура библиотек", bold: false },
		{ text: "Коммуникация с разработкой", bold: false },
		{ text: "Что такое ДС для продуктовых команд", bold: false },
		{ text: "Метрики Дизайн-системы", bold: false },
	],
];

export default function Home() {
	return (
		<>
			<HeroSection
				lessions
				actions
				title="Архитектор Дизайн-cистем"
				date="10 мая 2025"
				description="Уникальный курс, не имеющий аналогов во всём мире, который вобрал в себя весь огромный, практический опыт работы с дизайн-системами, от истоков образования до
наших дней"
				linkToProgram="https://www.figma.com/proto/vzVCZoKjuAbHN4xikNlKOB/DSA-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=&node-id=7-2&starting-point-node-id=7%3A2&mode=design&t=SMp2w0KdDqdS1Esz-1"
				heroImg="/heroHouse.png"
				timing="2.5 - 3"
			/>
			<Companies />
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
						Небольшие группы на потоке (10-15 человек)
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
				srcTG={"https://t.me/arturdsgn"}
				srcLKDN={"https://www.linkedin.com/in/artur-dsgn/"}
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
			<FaqSection accordionData={accordionData} />
			<ReadySection title="Готов прокачать свой уровень в Архитектуре Дизайн-систем?" />
		</>
	);
}
