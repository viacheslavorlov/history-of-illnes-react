import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {daylyNotes} from "../../actions/actions";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";

const PrijemnijForm = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Внесите данные для приёмного статуса</h1>
			<>
				<Formik
					initialValues={{
						name: '',
						dateTime: '',
						complains: '',
						desises: '',
						ln: '',
						allergis: '',
						statusLocalis: '',
						diagnosis: '',
						zavOtdeleniem: ''
					}}
					onSubmit={(values) => {
						dispatch(daylyNotes(values));
						console.log((JSON.stringify(values, null, 2)));
					}}
					validationSchema={
						Yup.object().shape({
							name: Yup.string().min(5, 'Слишком короткое имя!').required('Введите имя пациента'),
							dateTime: Yup.date().required('Введите дату поступления'),
							complains: Yup.string().required('Введите жалобы'),
							desises: Yup.string().required('Введите сопутствующие заболевания'),
							lnSort: Yup.string().required('какой больничный лист ПЕРВИЧНЫЙ/ПРОДОЛЖЕНИЕ'),
							lnDate: Yup.date().required('с какого числа больничный лист'),
							allergis: Yup.string().required('аллергии'),
							statusLocalis: Yup.string().required('местный статус'),
							diagnosis: Yup.string().required('Введите диагноз'),
							zavOtdeleniem: Yup.string().required('зав. отделением')
						})
					}>
					<Form>
						<label htmlFor="name">ФИО пациента: </label>
						<Field
							name="name"
							id="name"
							type="text"
							/>
						<ErrorMessage name="name" className="error" component="div"/>
						<br/>
						<label htmlFor="dateTime">Дата поступления: </label>
						<Field
							name="dateTime"
							id="dateTime"
							type="datetime-local"
						/>
						<ErrorMessage name="dateTime" className="error" component="div"/>
					</Form>
				</Formik>


				</>
		</div>
	);
};

export default PrijemnijForm;
