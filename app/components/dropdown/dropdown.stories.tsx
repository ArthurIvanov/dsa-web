import { CourseDropdown } from "./dropdown";

const mockItems = {
	DSA: {
		title: "Архитектор Дизайн-систем",
		url: "/dsarchitect",
		cName: " ",
		ref: false,
	},
	AUX: {
		title: "Продвинутый ресёрч",
		url: "/advancedresearch",
		cName: " ",
		ref: false,
	},
	Materials: {
		title: "Материалы",
		url: "https://rutube.ru/plst/353013",
		cName: " ",
		ref: true,
	},
};

export default {
	title: "Components/Dropdown",
	component: CourseDropdown,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		dropdownTitle: { control: "text" },
	},
};

export const Default = {
	args: {
		dropdownTitle: "Курсы",
		items: mockItems,
	},
};

export const CustomTitle = {
	args: {
		dropdownTitle: "Выберите курс",
		items: mockItems,
	},
};
