import styled from "styled-components";
import { CardClient } from "../components/tesimonials/card";

const StyledTestimonials = styled.section`
	h2 {
		text-align: center;
	}

	.clients-list {
		display: flex;
		gap: 24px;
	}

	@media screen and (max-width: 1024px) {
		.clients-list {
			flex-direction: column;
		}
	}
`;

export const Testimonials = () => {
	return (
		<StyledTestimonials className="display-flex flex-column gap-24 flex-align-center">
			<h2 className="centered">Выпускники говорят сами за себя</h2>
			<div className="lients-list">
				<CardClient
					className="flex-grow"
					img="/client-1.png"
					name="Полина"
					role="Senior UX/UI Designer, Design System"
					company="Home Credit Bank"
					content="Очень много ценных материалов, приёмов и подходов получаешь за достаточно короткий срок.
Чувствуется, что Артуру самому важно, чтобы ученики не просто ушли с курса с какой-то информацией, а положили в свои головы то, что потом им будет приносить пользу в долгую.
Хочу поблагодарить за ту поддержку, которая была оказана в течении всего курса. Это правда ценно.  Информация разбиралась до мельчайших деталей, не было просто абстрактной теории, только практические, живые примеры"
				/>
				<CardClient
					className="flex-grow"
					img="/client-2.png"
					name="Нюдля"
					role="UI Designer"
					company="Инфотекс"
					content="Очень много качественного и сложного материала) многие вещи знала только в теории и, честно говоря, не очень понимала. Сейчас появилось понимание и структура) 
                    Было очень интересно слушать, два часа всегда пролетали быстро и незаметно) Спасибо, что поделился своим опытом!"
				/>
				<CardClient
					className="flex-grow"
					img="/client-3.png"
					name="Анна Скользнева"
					role="Senior Graphic Designer"
					company="Инфотекс"
					content={`Очень понравилась наглядная демонстрация связки дизайна с кодом, это помогает в работе больше всего. Стало намного проще ориентироваться в пропсах компонентов и  собирать компоненты в дизайне более похожими на те, которые есть в коде. 
                    Материал был представлен доступно, порадовало, что можно задавать вопросы как по лекциям, так и по моментам, возникающим в работе. Спасибо за дополнительные материалы, которые ты для нас готовил)`}
				/>
			</div>
		</StyledTestimonials>
	);
};
