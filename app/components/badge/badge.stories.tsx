import { Badge } from "./badge";

export default {
	title: "Components/Badge",
	component: Badge,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		appearance: {
			control: "select",
			options: ["green", "blue"],
		},
		children: { control: "text" },
	},
};

export const Green = {
	args: {
		appearance: "green",
		children: "Новый",
	},
};

export const Blue = {
	args: {
		appearance: "blue",
		children: "Инфо",
	},
};

export const Default = {
	args: {
		children: "Бейдж",
	},
};
