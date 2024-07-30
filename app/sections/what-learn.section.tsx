"use client";
import React from "react";
import { Cell } from "../components/cell/cell";
import styled from "styled-components";

const StyledWhatLearnSection = styled.section`
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

export const WhatLearnSection = () => {
	return (
		<StyledWhatLearnSection className="container">
			<div className="flex-align-center gap-32 p-32 flex-justify-stretch display-flex flex-column background-gl section-shadow w-100">
				<h2 className="display-flex">Что ты изучишь</h2>
				<div className="display-flex adaptive-content gap-24  ">
					<div className="items-col">
						<Cell bold={true}>Дизайн</Cell>
						<Cell>Цвета. Палитры, темы, токены</Cell>
						<Cell>Типографика. Адаптивность, нейминг</Cell>
						<Cell>Сетки, скругления, отступы, тени</Cell>
						<Cell borderColor={false}>
							Компоненты. Архитектура, документация
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Разработка</Cell>
						<Cell>Основы Git, Github</Cell>
						<Cell>База HTML, CSS, JS, TS, React</Cell>
						<Cell>Создание библиотеки в коде</Cell>
						<Cell borderColor={false}>
							Storybook и публикация проекта
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Управление и Евангелирование</Cell>
						<Cell>Архитектура библиотек</Cell>
						<Cell>Коммуникация с разработкой</Cell>
						<Cell>Что такое ДС для продуктовых команд</Cell>
						<Cell borderColor={false}>Метрики Дизайн-системы</Cell>
					</div>
				</div>
			</div>
		</StyledWhatLearnSection>
	);
};
