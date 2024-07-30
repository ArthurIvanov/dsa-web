"use client";
import React from "react";
import styled from "styled-components";

interface ICell {
	children: React.ReactNode;
	bold?: boolean;
	borderColor?: boolean;
}

const StyledCell = styled.div<ICell>`
	padding: 16px 0;
	font-size: 18px;
	line-height: 24px;
	border-bottom: 1px solid transparent;
	display: flex;
	min-width: 100%;
	max-width: 100%;
	width: 100%;

	${(props) =>
		props.bold &&
		`
        font-weight: 700;
    
    `}

	${(props) =>
		props.borderColor &&
		`
        border-color: var(--border-clean);
    
    `}
`;

export const Cell = ({ children, bold, borderColor = true }: ICell) => {
	return (
		<StyledCell borderColor={borderColor} bold={bold}>
			{children}
		</StyledCell>
	);
};
