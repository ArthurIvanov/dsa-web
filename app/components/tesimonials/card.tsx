import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface ICardClient extends HTMLAttributes<HTMLDivElement> {
	img?: string;
	name?: string;
	role?: string;
	content?: string;
	company?: string;
}

const StyledCardClient = styled.div<ICardClient>`
	background-color: var(--main-invert-default);
	display: flex;
	width: 100%;
	flex-direction: column;
	img {
		width: 120px;
	}
	.client-card-header {
		display: flex;
		align-items: center;
		background-color: var(--main-invert-hover);
	}
	.client-card-header-content {
		min-height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 12px;
	}

	.client-card-body {
		padding: 24px;
		color: var(--tertiary-default);
	}
`;

export const CardClient = ({
	img,
	name,
	role,
	content,
	company,
}: ICardClient) => {
	return (
		<StyledCardClient>
			<div className="client-card-header">
				<img alt="user" src={img} />
				<div className="client-card-header-content">
					<h5>{name}</h5>
					<span className="color-secondary text-large text-strong">
						{company}
					</span>
					<span className="color-tertiary text-small text-strong">
						{role}
					</span>
				</div>
			</div>
			<div className="client-card-body">
				<p className="text-large">{content}</p>
			</div>
		</StyledCardClient>
	);
};
