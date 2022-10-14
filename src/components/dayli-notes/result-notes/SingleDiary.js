import React from 'react';
import {v4 as uuidv4} from "uuid";
import {randomNumber, randomNumberWhithSteps} from "../../../utils/utils";

import "./ResultNotes.css";

const SingleDiary = ({operDay, item, i, resultLastIndex, operation, multipleWounds, diagnosis})=> {
	let today = item.toLocaleDateString();

	let min = Math.floor(Math.random() * 10) * 5;
	if (min < 10) min = '0' + min;

	let doctor = 'лечащего врача';
	let dayOfOperation = null;

	if (i === resultLastIndex || i === 0 || i === 3 || i === 7) {
		doctor = 'совместно с заведующим отделением';
	}

	if (today === operDay) {
		dayOfOperation = 'Осмотр перед операцией.';
	}

	let complains = () => {
		switch (i) {
			case 0:
				return 'прежние';
			case 1:
				return (today > operDay) ?
					`боли в области послеоперационн${multipleWounds ? 'ых' : 'ой'} ран${multipleWounds ? '' : 'ы'}` : 'прежние';
			case 2:
				return (today > operDay) ?
					`боли в области послеоперационн${multipleWounds ? 'ых' : 'ой'} ран${multipleWounds ? '' : 'ы'}` : 'прежние';
			case 3:
				return (today > operDay) ?
					`боли в области послеоперационн${multipleWounds ? 'ых' : 'ой'} ран${multipleWounds ? '' : 'ы'}` : 'прежние';
			case resultLastIndex:
				return 'нет';
			default:
				return `слабые боли в области послеоперационн${multipleWounds ? 'ых' : 'ой'} ран${multipleWounds ? '' : 'ы'}`;
		}
	}

	const pulse = randomNumber(85, 60);
	const adH = randomNumberWhithSteps(5, 5, 110);
	const adL = randomNumberWhithSteps(5, 5, 65);
	const chDD = randomNumberWhithSteps(5, 1, 13)

	const stul = () => {
		switch (i) {
			case 0:
				return (today === operDay) ?
					'Стула не было' : 'Стул';
			case 1:
				return (today > operDay) ?
					'Стула не было' : 'Стул';
			case 2:
				return (today > operDay) ?
					'Стула не было' : 'Стул';
			default:
				return 'Стул оформленный, дефекация умеренно болезенная';
		}
	}
	console.log('today', today, 'operDay', operDay)
	const bandage = () => {
		return (today > operDay) ?
			`Перевязка с мазью левосин, послеоперационн${multipleWounds ? 'ые' : 'ая'} ран${multipleWounds ? 'ы' : 'а'} без признаков воспаления, 
							зажива${multipleWounds ? 'ют' : 'ет'} вторичным натяжением` : '';
	}

	const discharge = i === resultLastIndex ?
		`В течение госпитализации выполнена операция ${operation}. 
				К выписке. Даны рекомендации по режиму, питанию, уходу за  ран${multipleWounds ? 'ами' : 'ой'}.`
		: null;
	return (
		<section key={uuidv4()} className={"daiary__item breake__page"}>
			<div className={"daiary__item__header"}>Осмотр {doctor}.</div>
			<div className={"daiary__item__date"}>Дата: {today} Время: 8:{min}</div>
			<div className={"daiary__item__date"}>{dayOfOperation}</div>
			<div className={"daiary__item__info"}>Жалобы: {complains()}.</div>
			<div className={"daiary__item__info"}>Состояние удовлетворительное.</div>
			<div className={"daiary__item__info"}>Кожный покров чистый, обычной окраски.</div>
			<div className={"daiary__item__info"}>Пульс {pulse} ударов в минуту, ритмичный.
				АД {adH}/{adL} мм.рт.ст.
			</div>
			<div className={"daiary__item__info"}>Дыхание везикулярное, проводится во все отделы. Хрипов нет.
				ЧДД {chDD} в минуту.
			</div>
			<div className={"daiary__item__info"}>Живот не вздут, мягкий, безболезненный, перитонеальных
				симптомов нет.
			</div>
			<div className={"daiary__item__info"}>{stul()}, диурез в норме.</div>
			<div className={"daiary__item__diagnosis"}>
				{doctor === 'заведующего отделением' ? `Диагноз: ${diagnosis}.` : null}
			</div>
			<div className={"daiary__item__info"}>{bandage()}</div>
			<div className={"daiary__item__info"}>{i === resultLastIndex ? '' : 'Дополнения к лечению: нет.'}</div>
			<div className={"daiary__item__info"}>{discharge}</div>
			<div className="daiary__item__doctor">Врач: Орлов В.И.</div>
			<div className="daiary__item__doctor">
				{doctor === 'совместно с заведующим отделением' ? 'Заведующий отделением: Богов В.М.' : null}
			</div>
			<div className={"daiary__item__span"}></div>
		</section>
	);
}

export default SingleDiary;
