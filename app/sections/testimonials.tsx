import { CardClient } from "../components/tesimonials/card";

export const Testimonials = () => {
	return (
		<div className="display-flex flex-column gap-24 flex-align-center">
			<h2>Выпускники говорят сами за себя</h2>
			<div className="display-flex gap-24">
				<CardClient
					className="flex-grow"
					img="/client-1.png"
					name="Полина"
					role="Дизайнер"
					company="Yandex"
					content="Это реальный хардкор! Такого глубокого погружения я не ожидала. Мы прошли весь путь, от создания цветов до соборки всего в коде. Уверена что аналогов ему нет. У Артура очень крутой формат подачи материала, он умудряется даже очень сложные вещи рассказывать доступными словами. Очень рада тому что попала к нему на поток"
				/>
				<CardClient
					className="flex-grow"
					img="/client-2.png"
					name="Анна"
					role="Дизайнер"
					company="Yandex"
					content="Изначально шла за знаниями в разработке чтобы научится плотнее взаимодействовать с разработкой но, почерпнула много больше, научилась работать с цветами, типографикой и собирать компоненты 'Как надо'"
				/>
				<CardClient
					className="flex-grow"
					img="/client-3.png"
					name="Елена"
					role="Дизайнер"
					company="Yandex"
					content="Я пришла почти с нулевым опытом в дизайн-системах, скажу честно, было довольно не просто но, Артур максимально плавно погрузил меня в этот мир, а также помог науится понимать разработку и видеть мир ДС глазами не только дизайнера"
				/>
			</div>
		</div>
	);
};
