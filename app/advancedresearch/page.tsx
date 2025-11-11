"use client";

import { Box } from "../components/box/box";
import { Section } from "../components/section/section";
import { FaqSection } from "../sections/faq.section";
import { HeroSection } from "../sections/hero.section";
import { ReadySection } from "../sections/ready.section";
import { WhatLearnAUXSection } from "../sections/what-learn.section-aux";

const linkToFigmaPresentation =
	"https://www.figma.com/proto/X7qFquFZQ73lWDPOgDvpwB/AUX-%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0?page-id=0%3A1&node-id=1-19&node-type=canvas&viewport=798%2C382%2C0.18&t=K7q1oJ7sxj6A4Rg9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A19";

const accordionData = [
	{
		title: "Почему именно этот курс?",
		content: `В рамках нашего курса мы стремимся показать, как проходят исследования в реальном мире, а не в идеализированных методичках. Мы опираемся на многолетний опыт проведения исследований и расскажем, как избежать ловушек процессов и извлечь максимум из любых нестандартных ситуаций (а такие ситуации часто преобладают)
`,
	},
	{
		title: "Я новичок в исследованиях, смогу потянуть?",
		content: `Продуктовые исследования - не ядерная физика. Мы расскажем обо всем доступным и простым языком`,
	},

	{
		title: "Что я получу по итогу?",
		content: `Вы будете знать нюансы, которые не знают даже опытные специалисты. Вы получите не только знания методологий, но и исследовательский майндсет`,
	},
];

export default function Home() {
	return (
		<>
			<HeroSection
				lessions
				actions
				stream="2-й поток"
				title="Продвинутый Ресёрч"
				new-changes
				date="15 Августа 2025"
				description="Окунись в мир пользовательских исследований на продвинутом уровне. Только релевантные топики. Исследования, их виды и какой метод выбрать в каком случае. Проведение и анализ интервью. Использование ИИ. Защита и аргументация итогов перед командой"
				linkToProgram={linkToFigmaPresentation}
				timing="2 - 2.5"
				heroImg="/AUXheroSection.png"
				status="green"
				statusText="Поток идёт"
			/>

			<Section
				src={"https://t.me/FRaklov"}
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
							UX/CX исследователи
						</span>
						<span className="text-strong text-large color-secondary">
							Продуктовые дизайнеры
						</span>
						<span className="text-strong text-large color-secondary">
							Продакт и проджект менеджеры
						</span>
					</Box>
				</Box>
			</Section>

			<Section
				src={linkToFigmaPresentation}
				imagePath="/keys.png"
				heading="Ключевые моменты"
				buttonText="Узнать больше"
			>
				<Box direction="column" distance={8}>
					<span className="text-strong text-large color-secondary">
						Общая длительность 12 недель
					</span>
					<span className="text-strong text-large color-secondary">
						1.5 - 2 часа живых занятий в неделю
					</span>
					<span className="text-strong text-large color-secondary">
						4+ часов дополнительных видео материалов
					</span>
					<span className="text-strong text-large color-secondary">
						Много практики
					</span>
					<span className="text-strong text-large color-secondary">
						Небольшие группы на потоке (до 20-ти человек)
					</span>
				</Box>
			</Section>

			<WhatLearnAUXSection />

			<Section
				src={"https://t.me/FRaklov"}
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
				src={"https://t.me/FRaklov"}
				imagePath="/fedor.jpeg"
				heading="Давай знакомиться"
				buttonText="Будем на связи!"
				srcLKDN={"https://www.linkedin.com/in/fedor-raklov-a26bab140/"}
				srcTG={"https://t.me/FRaklov"}
			>
				<p className="text-large">
					Меня зовут Фёдор Раклов. Я UX Expert Researcher в Kaspersky.
					Специализируюсь на исследовании сложных продуктов
					кибер-безопасности в сегменте B2B, также работаю по
					продуктам входящим в Kaspersky OS. Работал в Ингосстрах.
					Улучшал пользовательский опыт во всех страховых продуктах. В
					свободное время помогаю компаниям выстроить сервис, служащий
					клиенту. Также провожу глубинные интервью с применением
					JTBD, чтобы помочь бизнесу развиваться.
				</p>
			</Section>

			<FaqSection accordionData={accordionData} />
			<ReadySection title="Готов стать высоклассным Исследователем пользовательского опыта?" />
		</>
	);
}
