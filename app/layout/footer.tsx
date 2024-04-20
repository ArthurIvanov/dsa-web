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
	}

	ul {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		gap: 16px;
	}

	.footer-signature {
		padding: 16px;
		border-top: 1px solid var(--tertiary-default);
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
					<li className="text-secondary">Контакты</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="link-inverted"
							href="mailto:artur.dsgn@yandex.ru"
						>
							hello@dsarchitect.ru
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
					<li className="text-secondary">Курсы</li>
					<li>
						<a href="#hero-section" className="link-inverted">
							Архитектор Дизайн Систем
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://rutube.ru/channel/24000387/"
						>
							Открытые материалы
						</a>
					</li>
				</ul>

				<ul>
					<li className="text-secondary">Документы</li>
					<li>
						<Link href={"/documents/forpeople"}>
							Публичная оферта для Физ лиц
						</Link>
					</li>
					<li>
						<Link href={"/documents/forbusiness"}>
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
