import styled from "styled-components";
import { CardClient } from "../components/tesimonials/card";

const StyledTestimonials = styled.section`
	h2 {
		text-align: center;
	}

	.clients-list {
		display: flex;
		gap: 24px;
		flex-direction: row;
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
			<div className="clients-list">
				<CardClient
					className="flex-grow"
					img="/client-1.png"
					name="Полина"
					role="Senior UX/UI Designer, Design System"
					srcLKDN={"https://www.linkedin.com/in/polinagorkovenko/"}
					company="Home Credit Bank"
					content="Очень много ценных материалов, приёмов и подходов получаешь за достаточно короткий срок.
Чувствуется, что Артуру самому важно, чтобы ученики не просто ушли с курса с какой-то информацией, а положили в свои головы то, что потом им будет приносить пользу в долгую.
Хочу поблагодарить за ту поддержку, которая была оказана в течении всего курса. Это правда ценно.  Информация разбиралась до мельчайших деталей, не было просто абстрактной теории, только практические, живые примеры"
				/>
				<CardClient
					className="flex-grow"
					img="/client-2.png"
					name="Анатолий"
					role="Product designer"
					srcTG={"https://t.me/skurygin08"}
					company="Shtab.app"
					content="появилось понимание правильного построение компонентов которые синхронизируются с разработкой.  Начал более системно работать с дизайн-системой. Разобрался наконец-то с темной темой😅. Все супер, все по полочкам и фидбэк всегда по делу🦾. Все что было дано на курсе, стало для меня новым и хорошим пинком под зад в хорошем смысле слова😅"
				/>
				<CardClient
					className="flex-grow"
					img="/client-3.png"
					name="Анна"
					role="Product Designer, Design System"
					company="Т-Банк"
					srcTG={"https://t.me/ansko99"}
					content={`Очень понравилась наглядная демонстрация связки дизайна с кодом, это помогает в работе больше всего. Стало намного проще ориентироваться в пропсах компонентов и  собирать компоненты в дизайне более похожими на те, которые есть в коде. 
                    Материал был представлен доступно, порадовало, что можно задавать вопросы как по лекциям, так и по моментам, возникающим в работе. Спасибо за дополнительные материалы, которые ты для нас готовил)`}
				/>
			</div>
		</StyledTestimonials>
	);
};
