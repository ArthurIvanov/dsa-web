"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 560px;
	background-color: var(--main-default);
	color: var(--main-invert-default);

	.footer-content {
		padding: 64px;
		display: flex;
		gap: 32px;
		max-width: 1622px;
		width: 100%;
		margin: 0 auto;
	}

	ul {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		gap: 16px;
	}

	.footer-signature {
		padding: 16px;
		border-top: 1px solid var(--border-clean-invert);
		text-align: center;
		font-size: 14px;
		line-height: 24px;
	}
`;

const Footer = ({ children }: any) => {
	return (
		<StyledFooter>
			<div className="footer-content">
				<ul>
					<li className="text-base  color-tertiary">Контакты</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="link-inverted"
							href="mailto:artur.dsgn@yandex.ru"
						>
							artur.dsgn@yandex.ru
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="link-inverted"
							href="tel:+79622637027"
						>
							+7 962 263 70 27
						</a>
					</li>
				</ul>

				<ul>
					<li className="text-base  color-tertiary">Курсы</li>
					<li>
						<a href="#hero-section" className="link-inverted">
							Архитектор Дизайн-систем
						</a>
					</li>
					<li>
						<a
							className="link-inverted"
							target="_blank"
							rel="noopener noreferrer"
							href="https://rutube.ru/plst/353013/"
						>
							Бесплатные материалы
						</a>
					</li>
				</ul>

				<ul>
					<li className="text-base  color-tertiary">Документы</li>
					<li>
						<Link
							className="link-inverted"
							href={"/documents/forpeople"}
						>
							Публичная оферта для Физ лиц
						</Link>
					</li>
					<li>
						<Link
							className="link-inverted"
							href={"/documents/forbusiness"}
						>
							Публичная оферта для Юр лиц
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer-signature">
				2024 © Design System Architect
			</div>
		</StyledFooter>
	);
};

export default Footer;
