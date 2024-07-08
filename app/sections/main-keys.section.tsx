"use client";
import React from "react";
import { Image } from "../components/img/img";

export const MainKeysSection = () => {
	return (
		<section className="container">
			<Image
				min="50%"
				max="50%"
				def="50%"
				height="650px"
				path="/keys.png"
			/>
			<div className="display-flex flex-row gap-32 card flex-align-center section-shadow">
				<div className="display-flex flex-column gap-32 p-32 backgeound-gl">
					<h2>Для кого этот курс</h2>
					<div className="display-flex gap-16 flex-column">
						<span>
							Курс предназначен для специалистов, работающих
							преимущественно в следующих областях областях:
						</span>
						<ul>
							<li>Продуктовые дизайнеры</li>
							<li>Визуальные дизайнеры</li>
							<li>Фронт энд разработчики</li>
						</ul>
					</div>
					<div>
						<a className="button-primary">Узнать больше</a>
					</div>
				</div>
			</div>
		</section>
	);
};
