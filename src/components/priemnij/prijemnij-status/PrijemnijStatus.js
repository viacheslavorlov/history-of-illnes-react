import React from 'react';
import {randomNumber, randomNumberWhithSteps} from "../../../utils/utils";
import {useSelector} from "react-redux";

const PrijemnijStatus = () => {
	const {
		complains, name, ln, lnDate,
		desieses, diagnosis, zavOtdeleniem, statusLocalis,
		allergis, lnNumber, anamnesis, stul
	} = useSelector(state => state.prijemnijStatus);
	const date = new Date();
	const pulse = randomNumber(63, 82);
	const adH = randomNumberWhithSteps(5, 5, 110);
	const adL = randomNumberWhithSteps(5, 5, 60);
	const chDD = randomNumber(14, 17);

	return name ? (
		<div>
			<h1 className="">Приемный статус</h1>
			<div>Дата: {date.toLocaleDateString()}</div>
			<div>Жалобы: {complains}.</div>
			<div>Анамнез заболевания: {/**/}.</div>
			<div>Анамнез жизни: {desieses.join(', ')}.</div>
			<div>Аллергоанамнез: {allergis}.</div>
			<div>Страховой анамнез: больничный лист {ln}, {lnNumber === 0 ? 'не представлен' : `№${lnNumber}`}  {ln !== 'не' +
			' требуется' ? lnDate : null}.</div>
			<div>Состояние удовлетворительное.</div>
			<div>Кожный покров чистый, обычной окраски.</div>
			<div>Отёков нет.</div>
			<div>Пульс {pulse} ударов в минуту, ритмичный. АД {adH}/{adL} мм.рт.ст.</div>
			<div>Тоны сердца римтичные. Шумов нет.</div>
			<div>Граничы сердца соответствуют возрастной норме.</div>
			<div>Дыхание везикулярное, проводится во все отделы. Хрипов нет. ЧДД {chDD} в минуту.</div>
			<div>Живот не вздут, мягкий, безболезненный, перитонеальных симптомов нет.</div>
			<div>Местный статус: {statusLocalis}</div>
			<div>{stul}, диурез в норме.</div>
			<div>Обоснование диагноза:</div>
			<div>
				Диагноз установлен на основании жалоб ({complains}), анамнеза ({anamnesis}),
				данных осмотра ({statusLocalis}).
			</div>
			<h2>Клинический диагноз: {diagnosis}</h2>
			<div>Врач: Орлов В.И.</div>
			<div>Заведующий отделением: {zavOtdeleniem}</div>
		</div>
	) : null;
};

export default PrijemnijStatus;
