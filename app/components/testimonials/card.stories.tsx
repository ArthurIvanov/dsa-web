import { CardClient } from "./card";

export default {
	title: "Components/Testimonials/Card",
	component: CardClient,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		img: { control: "text" },
		name: { control: "text" },
		role: { control: "text" },
		company: { control: "text" },
		content: { control: "text" },
	},
};

export const Default = {
	args: {
		img: "/user-1.png",
		name: "Иван Иванов",
		role: "Product Designer",
		company: "Тинькофф",
		content:
			"Курс дал структурированное понимание дизайн-систем и практические навыки, которые сразу применил в работе.",
	},
};

export const WithSocial = {
	args: {
		img: "/user-photo.png",
		name: "Анна Петрова",
		role: "UX Researcher",
		company: "Сбер",
		content:
			"Продвинутый ресёрч — один из лучших курсов по исследованиям. Рекомендую коллегам.",
		srcLKDN: "https://linkedin.com",
		srcTG: "https://t.me/example",
	},
};

export const ShortContent = {
	args: {
		img: "/fedor.jpeg",
		name: "Фёдор Сидоров",
		role: "Design Lead",
		company: "VK",
		content: "Отличный курс. Всем советую.",
	},
};
