import styled from "styled-components";

interface IBadgeProps {
	appearance?: "green" | "blue";
}

export const Badge = styled.div<IBadgeProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	border-bottom-right-radius: 8px;
	line-height: 14px;
	height: 24px;
	width: auto;
	padding: 0 16px;
	background-color: var(--status-bg-default);
	color: white;
	position: relative;

	${(props) =>
		props.appearance === "green" &&
		`
        background-color: var(--status-bg-default);
        `}

	${(props) =>
		props.appearance === "blue" &&
		`
        background-color: var(--info-bg-default);
        `}
`;
