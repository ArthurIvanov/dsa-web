import { Cell } from "./cell";

export default {
	title: "Components/Cell",
	component: Cell,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		bold: { control: "boolean" },
		borderColor: { control: "boolean" },
	},
};

export const Default = {
	args: {
		children: "Обычная ячейка",
		borderColor: true,
	},
};

export const Bold = {
	args: {
		children: "Жирная ячейка",
		bold: true,
		borderColor: true,
	},
};

export const NoBorder = {
	args: {
		children: "Ячейка без нижней границы",
		borderColor: false,
	},
};
