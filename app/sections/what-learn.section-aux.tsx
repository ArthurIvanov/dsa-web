"use client";
import React from "react";
import { Cell } from "../components/cell/cell";
import styled from "styled-components";

const StyledWhatLearnAUXSection = styled.section`
	background: var(--section-bg);

	h2 {
		display: flex;
	}
	.adaptive-content {
		flex-direction: row;
		align-items: stretch;
	}
	.items-col {
		flex-direction: column;
		display: flex;
		align-items: stretch;
	}

	@media screen and (max-width: 1024px) {
		.adaptive-content {
			flex-direction: column;
			align-items: stretch;
		}
	}
`;

export const WhatLearnAUXSection = () => {
	return (
		<StyledWhatLearnAUXSection className="container">
			<div className="flex-align-center gap-32 p-32 flex-justify-stretch display-flex flex-column section-shadow w-100">
				<h2 className="display-flex">Что ты изучишь</h2>
				<div className="display-flex adaptive-content gap-24  ">
					<div className="items-col">
						<Cell bold={true}>Исследования</Cell>
						<Cell>Правильно ставить цели и задачи</Cell>
						<Cell>Выбирать метод исследования</Cell>
						<Cell>Определять выборку и проводить опросы</Cell>
						<Cell borderColor={false}>
							Проводить юзабилити-тесты, глубинные интервью
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Анализ</Cell>
						<Cell>Кластеризировать данные</Cell>
						<Cell>Применять фреймворк JTBD</Cell>
						<Cell>Создавать CJM</Cell>
						<Cell borderColor={false}>
							Создавать персона-модели и карты эмпатии
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Презентации и воркшопы</Cell>
						<Cell>Создавать презентации исследований</Cell>
						<Cell>Правильно презентовать результаты</Cell>
						<Cell>Планирование воркшопа</Cell>
						<Cell borderColor={false}>
							Групповая динамика и ассертивность
						</Cell>
					</div>
				</div>
			</div>
		</StyledWhatLearnAUXSection>
	);
};
