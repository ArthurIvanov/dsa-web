import { NavLink } from "./link";

export default {
	title: "Components/Link",
	component: NavLink,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		href: { control: "text" },
		children: { control: "text" },
	},
};

export const Default = {
	args: {
		href: "/",
		children: "Главная",
	},
};

export const External = {
	args: {
		href: "https://example.com",
		children: "Внешняя ссылка",
	},
};

export const CourseLink = {
	args: {
		href: "/dsarchitect",
		children: "Архитектор дизайн-систем",
	},
};
