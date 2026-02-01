import { Accordion } from "./accordion";

export default {
	title: "Components/Accordion",
	component: Accordion,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		content: { control: "text" },
	},
};

export const Default = {
	args: {
		title: "Как записаться на курс?",
		content:
			"Нажмите кнопку «Записаться» и заполните форму. Мы свяжемся с вами в течение 24 часов.",
	},
};

export const LongContent = {
	args: {
		title: "Что входит в программу курса?",
		content:
			"Курс включает теоретические модули, практические задания, разбор кейсов и финальный проект. Вы получите доступ к материалам и записям занятий на 6 месяцев после окончания курса.",
	},
};
