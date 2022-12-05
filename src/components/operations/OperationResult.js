import React from 'react';
import {useSelector} from "react-redux";
import "./OperationResult.css";
import "../dayli-notes/result-notes/ResultNotes.css"
import SingleDiary from "../dayli-notes/result-notes/SingleDiary";
import {v4 as uuidv4} from "uuid";


const OperationResult = () => {
	const {
		name,
		operation,
		birthDate,
		operationDay,
		operationTimeStart,
		operationTimeEnd,
		diagnosis,
		surgeon,
		assistent,
		anestesiologist,
		sister,
		narkoz,
		opisanieOperacii,
		doctor
	} = useSelector(state => state.operation)
	let afterOperation;
	const birthDay = new Date(birthDate).toLocaleDateString()
	const operDay = new Date(operationDay).toLocaleDateString()
	if (operationTimeEnd) {
		afterOperation = (Number.parseInt(operationTimeEnd.substring(0, 3)) + 1) + ':' + operationTimeEnd.substring(3);
	}
	//

	const content = (
		<div className="container align-content-lg-stretch operation operation__secondCopy">
			<h3 className="operation__header">Протокол операции: {operation}</h3>
			<div className="operation__name">Пациент: {name} {birthDay} г.р.</div>
			<div className="operation__date">
				Дата операции: {operDay}. Время операции: {operationTimeStart}-{operationTimeEnd}
			</div>
			<div>Хирург: {surgeon}</div>
			<div>Операционная сестра: {sister}</div>
			{assistent && <div>Ассистент: {assistent}</div>}
			<div>Анестезиолог: {anestesiologist}</div>
			<div>Анестезия: {narkoz}</div>
			<div className="operation__opisanie">
				После обработки операционного поля раствором йодопирона трёхкратно, отграничено стерильным
				бельем. {opisanieOperacii}
			</div>
			<div className="operation__diagnosis"><b>Диагноз: {diagnosis}.</b></div>
			<div>Врач: {doctor}</div>
		</div>)
	console.log('operationDay', operationDay)
	return (
		<>
			{content}
			{afterOperation && <SingleDiary className="container align-content-lg-stretch operation operation__secondCopy"
			              item={new Date(operationDay)}
			              i={2}
			              key={uuidv4()}
			              resultLastIndex={10}
			              diagnosis={diagnosis}
			              operation={operation}
			              multipleWounds={'да'}
			              operDay={operationDay}
			              afteOperation={afterOperation}
			/>}
			{content}
		</>
	);
};

export default OperationResult;
