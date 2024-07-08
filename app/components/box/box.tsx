import styled from "styled-components";

interface IBoxProps {
	direction?: "column" | "row" | "column-reverse" | "row-reverse";
	distance: 4 | 8 | 16 | 24 | 32;
	padding?: 4 | 8 | 16 | 24 | 32 | 64;
	centered?: boolean;
	justifyCentered?: boolean;
	border?: boolean;
}

export const Box = styled.div<IBoxProps>`
	display: flex;
	width: 100%;

	${(props) =>
		props.direction &&
		`
    flex-direction: ${props.direction};
  `}

	${(props) =>
		props.centered &&
		`
    align-items: center;
  `}

	${(props) =>
		props.justifyCentered &&
		`
    justify-content: center;
  `}

  ${(props) =>
		props.distance &&
		`
    gap: ${props.distance}px;
  `}

  ${(props) =>
		props.padding &&
		`
    padding: ${props.padding}px;
  `}

  ${(props) =>
		props.border &&
		`
    border: 1px solid lightgrey;
  
  `}
`;
