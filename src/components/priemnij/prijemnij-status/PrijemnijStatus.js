import React from 'react';
import {randomNumber, randomNumberWhithSteps} from "../../../utils/utils";
import {useSelector} from "react-redux";

const PrijemnijStatus = () => {
	const {
		complains, name, ln, lnDate, lnFirst,
		desieses, diagnosis, zavOtdeleniem, statusLocalis,
		allergis, lnNumber, anamnesis, stul, dateTime
	} = useSelector(state => state.prijemnijStatus);
	const pulse = randomNumber(63, 82);
	const adH = randomNumberWhithSteps(5, 5, 110);
	const adL = randomNumberWhithSteps(5, 5, 60);
	const chDD = randomNumber(14, 17);
	const date = new Date(dateTime).toLocaleString().slice(0, 17).replace(',', ' Время: ');
	const lnFinal = () => {
		switch (ln) {
			case 'первичный':
				return `${ln}, с ${date.slice(0, 10)}`;
			case 'продолжение с':
				return lnNumber !== 0 ?
					`на руках ЛН №${lnNumber} первичный ЛН c ${new Date(lnFirst).toLocaleString().slice(0, 10)},
					 ${ln} ${new Date(lnDate).toLocaleString().slice(0, 10)}` :
					`ЛН не представлен первичный ЛН c ${lnFirst}, ${ln} ${new Date(lnDate).toLocaleString().slice(0, 10)}`;
			case 'не требуется':
				return 'не требуется';
			default: return '';
		}
	}

	return name ? (
		<div>
			<h1 className="">Приемный статус</h1>
			<div>Дата: {date}</div>
			<div>Жалобы: {complains}.</div>
			<div>Анамнез заболевания: {anamnesis}.</div>
			<div>Анамнез жизни: {desieses.join(', ')}</div>
			<div>Аллергоанамнез: {allergis}.</div>
			<div>Больничный лист: {lnFinal()}.</div>
			<div>Состояние удовлетворительное.</div>
			<div>Кожный покров чистый, обычной окраски.</div>
			<div>Отёков нет.</div>
			<div>Пульс {pulse} ударов в минуту, ритмичный. АД {adH}/{adL} мм.рт.ст.</div>
			<div>Тоны сердца римтичные. Шумов нет.</div>
			<div>Границы сердца соответствуют возрастной норме.</div>
			<div>Дыхание везикулярное, проводится во все отделы. Хрипов нет. ЧДД {chDD} в минуту.</div>
			<div>Живот не вздут, мягкий, безболезненный, перитонеальных симптомов нет.</div>
			<div>Местный статус: {statusLocalis}.</div>
			<div>{stul}, диурез в норме.</div>
			<div><b>Обоснование диагноза:</b></div>
			<div>
				Диагноз установлен на основании жалоб ({complains}), анамнеза ({anamnesis}),
				данных осмотра ({statusLocalis}).
			</div>
			<h3>Клинический диагноз: {diagnosis}</h3>
			<div>Врач: Орлов В.И.</div>
			<div>Заведующий отделением: {zavOtdeleniem}</div>
		</div>
	) : null;
};

export default PrijemnijStatus;
