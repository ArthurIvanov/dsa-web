"use client";
import React from "react";
import { Cell } from "../components/cell/cell";

export const WhatLearnSection = () => {
	return (
		<section className="container">
			<div className="flex-align-center gap-32 p-32 display-flex flex-column background-gl section-shadow w-100">
				<h2>Что ты изучишь</h2>
				<div className="display-flex flex-row gap-24  flex-justify-stretch">
					<div className="display-flex flex-column">
						<Cell bold={true}>Дизайн</Cell>
						<Cell>Цвета. Палитры, темы, токены</Cell>
						<Cell>Типографика. Адаптивность, нейминг</Cell>
						<Cell>Сетки, скругления, отступы, тени</Cell>
						<Cell borderColor={false}>
							Компоненты. Архитектура, документация
						</Cell>
					</div>
					<div className="display-flex flex-column">
						<Cell bold>Разработка</Cell>
						<Cell>Основы Git, Github</Cell>
						<Cell>База HTML, CSS, JS, TS, React</Cell>
						<Cell>Создание библиотеки в коде</Cell>
						<Cell borderColor={false}>
							Storybook и публикация проекта
						</Cell>
					</div>
					<div className="display-flex flex-column">
						<Cell bold>Управление и Евангелирование</Cell>
						<Cell>Архитектура библиотек</Cell>
						<Cell>Коммуникация с разработкой</Cell>
						<Cell>Что такое ДС для продуктовых команд</Cell>
						<Cell borderColor={false}>Метрики Дизайн-системы</Cell>
					</div>
				</div>
			</div>
		</section>
	);
};
