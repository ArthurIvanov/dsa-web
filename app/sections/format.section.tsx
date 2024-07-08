"use client";
import React from "react";
import { Image } from "../components/img/img";

export function FormatSection() {
	return (
		<section className="container">
			<div className="display-flex flex-row gap-32 card flex-align-center section-shadow">
				<div className="display-flex flex-column gap-32 p-32 backgeound-gl">
					<h2>Формат занятий</h2>

					<span>
						В течении всего курса (12 недель) по выходным (суббота
						или воскресенье), в 11:00 (начало обсуждаемо с
						участниками потока) будет проходить занятие в режиме
						онлайн конференции. После каждой лекции будет даваться
						домашнее задание а также дополнительные материалы.
					</span>

					<div>
						<a className="button-primary">Есть вопросы, пиши!</a>
					</div>
				</div>
				<Image
					min="50%"
					max="50%"
					def="50%"
					height="650px"
					path="/format.png"
				/>
			</div>
		</section>
	);
}
