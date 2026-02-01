import styled from "styled-components";

interface IButtonProps {
	children: React.ReactNode;
}

const StyledButton = styled.button`
	display: inline-flex;
	padding: 16px 32px;
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	color: var(var(--section-bg));
	background: var(--main-default);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		color: var(var(--section-bg));
		background: var(--main-hover);
	}

	&:active {
		color: var(var(--section-bg));
		background: var(--main-active);
	}
`;

export const Button = ({ children }: any) => {
	return <StyledButton>{children}</StyledButton>;
};
