import React from "react";
import styled from "styled-components";

interface ICardClient {
	img?: string;
	name?: string;
	role?: string;
	content?: string;
	company?: string;
}

const StyledCardClient = styled.div<ICardClient>`
	background-color: var(--main-invert-default);
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
					<span>{role}</span>
					<span>{company}</span>
				</div>
			</div>
			<div className="client-card-body">
				<p>{content}</p>
			</div>
		</StyledCardClient>
	);
};
