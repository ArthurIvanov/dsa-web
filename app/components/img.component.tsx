import React from "react";
import styled from "styled-components";

interface IImage {
	max?: string;
	min?: string;
	def?: string;
	height?: string;
	path?: string;
}

export const Img = styled.div<IImage>`
	background: url(${(props) => props.path});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: ${(props) => props.height};
	width: ${(props) => props.def};
	max-width: ${(props) => props.max};
	min-width: ${(props) => props.min};
`;

export const Image = ({ min, max, def, height, path }: IImage) => {
	return <Img min={min} max={max} def={def} height={height} path={path} />;
};

export default Image;
