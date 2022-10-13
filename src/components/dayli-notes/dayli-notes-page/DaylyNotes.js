import React, {useState} from 'react';
import Header from "../header/Header";
import {Form} from "formik";
import FormData from "../form-data/FormData";
import ResultNotes from "../result-notes/ResultNotes";
import "./DaylyNotes.css";

const DaylyNotes = (props) => {
	const [date, setDate] = useState(new Date().toLocaleDateString());

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