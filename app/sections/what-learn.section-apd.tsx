"use client";
import React from "react";
import { Cell } from "../components/cell/cell";
import styled from "styled-components";

const StyledWhatLearnAPDSection = styled.section`
	background: var(--section-bg);
	border-radius: 16px;
	overflow: hidden;

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

export const WhatLearnAPDSection = () => {
	return (
		<StyledWhatLearnAPDSection className="container">
			<div className="flex-align-center gap-32 p-32 flex-justify-stretch display-flex flex-column section-shadow w-100">
				<h2 className="display-flex">Что ты изучишь</h2>
				<div className="display-flex adaptive-content gap-24  ">
					<div className="items-col">
						<Cell bold={true}>Figma API & MCP</Cell>
						<Cell>MCP Servers что это и как работает</Cell>
						<Cell>Доступные инструменты и их назначение</Cell>
						<Cell borderColor={false}>
							Как работать с Figma Plugin API
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Разработка</Cell>
						<Cell>Основы Git, Github</Cell>
						<Cell>База HTML, CSS, JS, TS</Cell>
						<Cell borderColor={false}>
							Кодинг простых и сложных компонентов
						</Cell>
					</div>
					<div className="items-col">
						<Cell bold>Figma plugins</Cell>
						<Cell>Планирование разработки</Cell>
						<Cell>Логика описания запросов</Cell>
						<Cell borderColor={false}>
							Разработка плагинов разной сложности
						</Cell>
					</div>
				</div>
			</div>
		</StyledWhatLearnAPDSection>
	);
};
