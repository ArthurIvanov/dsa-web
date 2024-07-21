import styled from "styled-components";

const StyledButton = styled.button`
	display: inline-flex;
	padding: 16px 32px;
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	color: var(--main-invert-default);
	background: var(--main-default);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		color: var(--main-invert-default);
		background: var(--main-hover);
	}

	&:active {
		color: var(--main-invert-default);
		background: var(--main-active);
	}
`;

export const Button = ({ children }: any) => {
	return <StyledButton>{children}</StyledButton>;
};
