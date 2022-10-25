import React from 'react';
import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import SingleDiary from "./SingleDiary";

import './ResultNotes.css';


const ResultNotes = () => {
	const {operationDay, dayIn, dayOut, diagnosis, operation, multipleWounds} = useSelector(state => state.daylyNotes);

	const formDayList = (end, start) => {
		const firstDay = new Date(start);
		const lastDay = new Date(end)
		const result = [];
		const days = (lastDay - firstDay) / 1000 / 60 / 60 / 24;
		for (let i = 0; i < days; i++) {
			let date = new Date(firstDay.setDate(firstDay.getDate() + 1))
			result.push(date);
		}

		const resultLastIndex = result.length - 1;
		const operDay = new Date(operationDay).toLocaleDateString();

		return result.map((item, i) => {
			return <SingleDiary
				item={item}
				i={i}
				key={uuidv4()}
				resultLastIndex={resultLastIndex}
				diagnosis={diagnosis}
				operation={operation}
				multipleWounds={multipleWounds}
				operDay={operDay}
			/>
		});
	};
	return (
		<div className="daiary">
			{formDayList(dayOut, dayIn)}
		</div>
	);
}

export default ResultNotes;
