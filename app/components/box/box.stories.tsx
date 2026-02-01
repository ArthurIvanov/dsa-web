import { Box } from "./box";

export default {
	title: "Components/Box",
	component: Box,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		direction: {
			control: "select",
			options: ["column", "row", "column-reverse", "row-reverse"],
		},
		distance: {
			control: "select",
			options: [4, 8, 16, 24, 32],
		},
		padding: {
			control: "select",
			options: [4, 8, 16, 24, 32, 64],
		},
		centered: { control: "boolean" },
		justifyCentered: { control: "boolean" },
		border: { control: "boolean" },
	},
};

export const Row = {
	args: {
		direction: "row",
		distance: 16,
		children: (
			<>
				<span>Элемент 1</span>
				<span>Элемент 2</span>
				<span>Элемент 3</span>
			</>
		),
	},
};

export const Column = {
	args: {
		direction: "column",
		distance: 8,
		children: (
			<>
				<span>Строка 1</span>
				<span>Строка 2</span>
				<span>Строка 3</span>
			</>
		),
	},
};

export const Centered = {
	args: {
		direction: "column",
		distance: 16,
		centered: true,
		justifyCentered: true,
		children: <span>Центрированный контент</span>,
	},
};

export const WithBorder = {
	args: {
		direction: "row",
		distance: 24,
		padding: 16,
		border: true,
		children: (
			<>
				<span>Блок</span>
				<span>с рамкой</span>
			</>
		),
	},
};
