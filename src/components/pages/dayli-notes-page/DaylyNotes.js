import React from 'react';
import Header from "../../dayli-notes/header/Header";
import FormData from "../../dayli-notes/form-data/FormData";
import ResultNotes from "../../dayli-notes/result-notes/ResultNotes";


import "./DaylyNotes.css";

const DaylyNotes = () => {

	const date = new Date().toLocaleDateString();
	console.log(date);
	return (
		<>
			<div className='form'>
				<Header date={date}/>
				<FormData/>
			</div>
			<ResultNotes/>
		</>
	)
}

export default DaylyNotes;