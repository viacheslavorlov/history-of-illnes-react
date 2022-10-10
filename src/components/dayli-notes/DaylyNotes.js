import React, {useState} from 'react';
import Header from "./Header";
import {Form} from "formik";
import FormData from "./FormData";

const DaylyNotes = (props) => {
	const [date, setDate] = useState(new Date().toLocaleDateString());

	return (
		<>
			<Header date={date}/>
			<FormData/>
		</>
	)
}

export default DaylyNotes;