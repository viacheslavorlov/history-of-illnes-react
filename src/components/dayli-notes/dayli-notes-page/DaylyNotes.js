import React, {useState} from 'react';
import Header from "../header/Header";
import {Form} from "formik";
import FormData from "../form-data/FormData";
import ResultNotes from "../result-notes/ResultNotes";

const DaylyNotes = (props) => {
	const [date, setDate] = useState(new Date().toLocaleDateString());

	return (
		<>
			<Header date={date}/>
			<FormData/>
			<ResultNotes/>
		</>
	)
}

export default DaylyNotes;