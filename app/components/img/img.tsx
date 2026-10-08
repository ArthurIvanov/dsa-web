import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { withBasePath } from "@/lib/basePath";

interface IImage extends HTMLAttributes<HTMLDivElement> {
	max?: string;
	min?: string;
	def?: string;
	height?: string;
	path?: string;
}

const Img = styled.div<IImage>`
	background: url(${(props) => props.path});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: ${(props) => props.height};
	width: ${(props) => props.def};
	max-width: ${(props) => props.max};
	min-width: ${(props) => props.min};
	display: block;

	// @media (max-width: 768px) {
	// 	display: none;
	// }
`;

export const Image = ({
	min,
	max,
	def = "100%",
	height,
	path = "/who.png",
	className,
	...props
}: IImage) => {
	return (
		<Img
			min={min}
			max={max}
			def={def}
			height={height}
			path={withBasePath(path)}
			className={className}
			{...props}
		/>
	);
};

export default Image;
