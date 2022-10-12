import React from 'react';
import {useSelector} from "react-redux";

import './ResultNotes.css';

const ResultNotes = () => {
	const stateFromStore = useSelector(state => state.daylyNotes);
	console.log('strateFromStore', stateFromStore);
	//* dayIn: "2022-10-11"
	//* dayOut: "2022-10-19"
	//* diagnosis: "ЭКХ"
	//* name: "Capitan America"
	//* operation: "Иссечение ЭКХ"
	//* operationDay: "2022-10-12"


	/*
	 @param {end, start} : Date
	 */

	const formDayList = (end, start) => {
		const firstDay = new Date(start);
		const lastDay = new Date(end)
	    const result = [];
		const days = (lastDay - firstDay) / 1000 / 60 / 60 /  24;
		for (let i = 0; i < days; i++) {
			let date = new Date(firstDay.setDate(firstDay.getDate() + 1))
			result.push(date);
		}

		const resultLastIndex = result.length - 1;


		return result.map((item, i) => {

			let min = Math.floor(Math.random() * 10) * 5 ;
			if (min < 10) min = '0' + min;

			let doctor = 'лечащего врача';

			if (i === result.length - 1 || i === 1 ) doctor = 'заведующего отделением';
			console.log('проверка жалоб', item, new Date(stateFromStore.operationDay))
			let complains = () => {
				switch (i) {
					case 0:
						return 'прежние' ;
					case 1:
						return (item > new Date(stateFromStore.operationDay)) ?
							'боли в области послеоперационной(ых) ран(ы)': 'прежние' ;
					case 2:
						return (item > new Date(stateFromStore.operationDay)) ?
							'боли в области послеоперационной(ых) ран(ы)': 'прежние' ;
					case resultLastIndex:
						return 'нет';
					default:
						return 'слабые боли в области послеоперационной(ых) ран(ы)';
				}
			}
			// ! можно оптимизировать
			const pulse = Math.floor(Math.random() * (85 - 60) + 60);
			const adH = Math.floor(Math.random() * 5) * 5 + 110;
			const adL = Math.floor(Math.random() * 5) * 5 + 60;
			const chDD = Math.floor(Math.random() * 5) + 12;

			const stul = () => {
				switch (i) {
					case 0:
						return (item === new Date(stateFromStore.operationDay)) ?
							'Стула не было' : 'Стул';
					case 1, 2:
						return (item > new Date(stateFromStore.operationDay)) ?
							'Стула не было' : 'Стул';
					default:
						return 'Стул оформленный, дефекация умеренно болезенная';
				}
			}

			const diagnosis = stateFromStore.diagnosis; // ! оптимизировать - вытащить из объекта
			const bandage = () => {
				switch (i) {
					case 0:
						return null ;
					case 1:
						return (item > new Date(stateFromStore.operationDay)) ?
							'Перевязка с мазью левосин, послеоперационная(ые) рана(ы) без признаков воспаления,' +
							' \nзаживает(ют) вторичным натяжением': 'прежние' ;
					case 2:
						return (item > new Date(stateFromStore.operationDay)) ?
							'Перевязка с мазью левосин, послеоперационная(ые) рана(ы) без признаков воспаления,' +
							' \nзаживает(ют) вторичным натяжением': 'прежние' ;
					default:
						return 'Перевязка с мазью левосин, послеоперационная(ые) рана(ы) без признаков воспаления, ' +
							'\nзаживает(ют) вторичным натяжением';
				}
			}

			const discharge = i === result.length - 1 ? 'К выписке. Даны рекомендации по режиму, питанию, уходу за' +
				' ранами.' : null;

			console.log("день недели", item.getDay())
			return (
				<div className={"daiary__item"}>
					<div className={"daiary__item__header"}>Осмотр {doctor}.</div>
					<div className={"daiary__item__date"}>Дата: {item.toLocaleDateString()} Время: 8:{min}</div>
					<div className={"daiary__item__info"}>Жалобы: {complains()}.</div>
					<div className={"daiary__item__info"}>Состояние удовлетворительное.</div>
					<div className={"daiary__item__info"}>Кожный покров чистый, обычной окраски.</div>
					<div className={"daiary__item__info"}>Пульс {pulse} ударов в минуту, ритмичный. АД {adH}/{adL} мм.рт.ст.</div>
					<div className={"daiary__item__info"}>Дыхание везикулярное, проводится во все отделы. Хрипов нет. ЧДД {chDD} в минуту.</div>
					<div className={"daiary__item__info"}>Живот не вздут, мягкий, безболезненный, перитонеальных симптомов нет.</div>
					<div className={"daiary__item__info"}>{stul()}, диурез в норме.</div>
					<div className={"daiary__item__diagnosis"}>
						{doctor === 'заведующего отделением' ? `Диагноз: ${diagnosis}.` : null}
					</div>
					<div className={"daiary__item__info"}>{bandage()}</div>
					<div className={"daiary__item__info"}>Дополнения к лечению: нет.</div>
					<div className={"daiary__item__info"}>{discharge}</div>
					<div className="daiary__item__doctor">Врач: Орлов В.И.</div>
					<div className={"daiary__item__span"}></div>
				</div>
			)
		});
	}

	return (
		<div className="daiary">
			{formDayList(stateFromStore.dayOut, stateFromStore.dayIn)}
		</div>
	);
};

export default ResultNotes;
