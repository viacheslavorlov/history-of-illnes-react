import React from 'react';
import {useSelector} from "react-redux";
import "./OperationResult.css";


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
		opisanieOperacii
	} = useSelector(state => state.operation)
	const birthDay = new Date(birthDate).toLocaleDateString()
	const operDay = new Date(operationDay).toLocaleDateString()
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
		<div className="operation__diagnosis"> <b>Диагноз: {diagnosis}.</b></div>
	</div>)
	return (
		<>
			{content}
			{content}
		</>
	);
};

export default OperationResult;
