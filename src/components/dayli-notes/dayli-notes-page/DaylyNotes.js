import React from 'react';
import Header from "../header/Header";
import FormData from "../form-data/FormData";
import ResultNotes from "../result-notes/ResultNotes";


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