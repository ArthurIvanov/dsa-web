import { Image } from "./img";

export default {
	title: "Components/Image",
	component: Image,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		path: { control: "text" },
		height: { control: "text" },
		def: { control: "text" },
		min: { control: "text" },
		max: { control: "text" },
	},
};

export const Default = {
	args: {
		path: "/who.png",
		def: "100%",
		height: "200px",
	},
};

export const Square = {
	args: {
		path: "/heroHouseSquare.png",
		def: "300px",
		height: "300px",
	},
};

export const Responsive = {
	args: {
		path: "/format.png",
		min: "200px",
		max: "400px",
		def: "100%",
		height: "250px",
	},
};
