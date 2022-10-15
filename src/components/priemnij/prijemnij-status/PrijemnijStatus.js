import React from 'react';
import {randomNumberWhithSteps, randomNumber} from "../../../utils/utils";

const PrijemnijStatus = () => {
	const date = new Date();
	const pulse = randomNumber(63, 82);
	const adH = randomNumberWhithSteps(5, 5, 110);
	const adL= randomNumberWhithSteps(5, 5, 60);
	const chDD = randomNumber(14, 17);

	return (
		<div>
			<h1>Приемный статус</h1>
			<div>Дата: {date.toLocaleDateString()}</div>
			<div>Жалобы: {/**/}</div>
			<div>Анамнез заболевания: {/**/}</div>
			<div>Анамнез жизни: {/**/}</div>
			<div>Страховой анамнез:</div>
			<div>Состояние удовлетворительное.</div>
			<div>Кожный покров чистый, обычной окраски.</div>
			<div>Пульс {pulse} ударов в минуту, ритмичный. АД {adH}/{adL} мм.рт.ст.</div>
			<div>Дыхание везикулярное, проводится во все отделы. Хрипов нет. ЧДД {chDD} в минуту.</div>
			<div>Живот не вздут, мягкий, безболезненный, перитонеальных	симптомов нет.</div>
			<div>{{/*Стул*/}}, диурез в норме.</div>
			<div>Клинический диагноз: {{/*diagnosis*/}}</div>
			<div>Врач: Орлов В.И.</div>
			<div>Заведующий отделением: Богов В.М.</div>
		</div>
	);
};



export default PrijemnijStatus;
