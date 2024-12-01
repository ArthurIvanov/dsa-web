import React from "react";
import styled from "styled-components";

interface IReadyProps {
	title: string;
}

const StyledReadySection = styled.section`
	@media screen and (max-width: 560px) {
		a {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const ReadySection: React.FC<IReadyProps> = ({ title = "Готов?" }) => {
	return (
		<StyledReadySection className="container display-flex flex-column gap-32 flex-align-center text-center">
			<h1>{title}</h1>
			<div>
				<a
					type="button"
					href={"https://t.me/arturdsgn"}
					className="button-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Запишись на следующий поток
				</a>
			</div>
		</StyledReadySection>
	);
};
