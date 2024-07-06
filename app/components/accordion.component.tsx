"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";

const StyledAccordion = styled.div`
	color: var(--main-default);
	background-color: var(--main-invert-default);
	padding: 32px;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 32px;
	box-shadow: 0px 8px 32px rgba(34, 49, 69, 0.04);

	.accordion-title {
		cursor: pointer;
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.accordion-content {
		font-size: 18px;
		line-height: 24px;
		color: var(--tertiary-default);
	}
`;

export const Accordion = ({ title, content }: any) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<StyledAccordion>
			<div
				className="accordion-title"
				onClick={() => setIsActive(!isActive)}
			>
				<h4>{title}</h4>

				{isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</StyledAccordion>
	);
};
