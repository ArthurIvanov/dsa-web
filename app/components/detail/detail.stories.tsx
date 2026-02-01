import { Detail } from "./detail";

export default {
	title: "Components/Detail",
	component: Detail,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		children: { control: "text" },
	},
};

export const Default = {
	args: {
		children: "Дополнительная информация",
	},
};

export const WithIcon = {
	args: {
		children: (
			<>
				<span>📅</span>
				<span>2.5 — 3 часа занятий</span>
			</>
		),
	},
};
