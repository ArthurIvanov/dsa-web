import { CardClient } from "../components/tesimonials/card";

export const Testimonials = () => {
	return (
		<div className="display-flex flex-column gap-24 flex-align-center">
			<h2>Выпускники говорят сами за себя</h2>
			<div className="display-flex space-between gap-24">
				<CardClient
					img="/client-1.png"
					name="Полина"
					role="Дизайнер"
					company="Yandex"
					content="The best thing I’ve done for myself lately! They gave me super-wide knowledge, honest feedback and lectures from some fascinating professionals in the industry, and a set of very practical skills. A more fabulous bootcamp you’ll never find."
				/>
				<CardClient
					img="/client-2.png"
					name="Анна"
					role="Дизайнер"
					company="Yandex"
					content="The best thing I’ve done for myself lately! They gave me super-wide knowledge, honest feedback and lectures from some fascinating professionals in the industry, and a set of very practical skills. A more fabulous bootcamp you’ll never find."
				/>
				<CardClient
					img="/client-3.png"
					name="Елена"
					role="Дизайнер"
					company="Yandex"
					content="The best thing I’ve done for myself lately! They gave me super-wide knowledge, honest feedback and lectures from some fascinating professionals in the industry, and a set of very practical skills. A more fabulous bootcamp you’ll never find."
				/>
			</div>
		</div>
	);
};
