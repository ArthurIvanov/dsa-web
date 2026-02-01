import { Section } from "./section";

export default {
	title: "Components/Section",
	component: Section,
	parameters: { layout: "fullscreen" },
	tags: ["autodocs"],
	argTypes: {
		invert: { control: "boolean" },
		heading: { control: "text" },
		buttonText: { control: "text" },
		src: { control: "text" },
		imagePath: { control: "text" },
	},
};

export const Default = {
	args: {
		imagePath: "/who.png",
		heading: "Заголовок секции",
		buttonText: "Подробнее",
		src: "/",
		children: <p>Описание или дополнительный контент секции.</p>,
	},
};

export const Inverted = {
	args: {
		invert: true,
		imagePath: "/heroHouseSquare.png",
		heading: "Секция с обратным порядком",
		buttonText: "Перейти",
		src: "/dsarchitect",
		children: <p>Изображение справа, текст слева.</p>,
	},
};

export const WithSocial = {
	args: {
		imagePath: "/me.png",
		heading: "Автор курса",
		buttonText: "Написать в Telegram",
		src: "https://t.me/arturdsgn",
		srcLKDN: "https://linkedin.com",
		srcTG: "https://t.me/arturdsgn",
		children: <p>Краткое описание и контакты.</p>,
	},
};
