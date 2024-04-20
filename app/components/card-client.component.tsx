import React from "react";
import styled from "styled-components";

interface ICardClient {
	img?: string;
	name?: string;
	role?: string;
	content?: string;
}

const StyledCardClient = styled.div<ICardClient>`
	padding: 117px 64px 64px 64px;
	position: relate;
`;

export const CardClient = ({ img, name, role, content }: ICardClient) => {
	return (
		<StyledCardClient>
			<div className="card-header-absolute">
				<img alt="user" src={img} />
				<div>
					<h4>{name}</h4>
					<span>{role}</span>
				</div>
			</div>
			<p>{content}</p>
		</StyledCardClient>
	);
};
