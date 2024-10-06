import React from "react";
import styled from "styled-components";

const StyledReadySection = styled.section`
	@media screen and (max-width: 560px) {
		a {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const ReadySection = () => {
	return (
		<StyledReadySection className="container display-flex flex-column gap-32 flex-align-center text-center">
			<h1>Готов прокачать свой уровень в Архитектуре Дизайн-систем?</h1>
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
