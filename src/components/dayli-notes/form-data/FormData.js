import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {daylyNotes} from "../../actions/actions";

import './FormData.css';

const FormData = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Заполните данные пациента.</h2>
			<Formik initialValues={{
				name: '',
				dayIn: '',
				dayOut: '',
				operation: '',
				operationDay: '',
				diagnosis: '',
				multipleWounds: false
			}} onSubmit={(values) => {
				dispatch(daylyNotes(values));
				console.log((JSON.stringify(values, null, 2)));
			}}
			        validationSchema={Yup.object().shape({
				        name: Yup.string()
					        .min(6, 'Слишком короткое имя!')
					        .required('Введите имя!'),
				        dayIn: Yup.date()
					        .required('Введите дату поступления'),
				        dayOut: Yup.date()
					        .required('Введите дату выписки'),
				        operation: Yup.string()
					        .min(5, 'Введите название операции')
					        .required('Введите название операции'),
				        operationDay: Yup.date()
					        .required('Введите дату поступления'),
				        diagnosis: Yup.string()
					        .min(3)
					        .required('Введите диагноз'),
				        multipleWounds: Yup.string()
					        .required('Укажите одна или много ран')
			        })}>
				<Form>
					<label htmlFor="name">ФИО пациента: </label>
					<Field
						id="name"
						type="text"
						name="name"/>
					<br/>
					<ErrorMessage className="error" name="name" component="div"/>
					<br/>
					<label htmlFor="date">Дата поступления: </label>

					<Field
						id="date"
						type="date"
						name="dayIn"/>
					<br/>
					<ErrorMessage className="error" name="dayIn" component="div"/>
					<br/>
					<label htmlFor="dayOut">Дата выписки: </label>
					<Field
						id="dayOut"
						type="date"
						name="dayOut"/>
					<br/>
					<ErrorMessage className="error" name="dayOut" component="div"/>
					<br/>
					<label htmlFor="operation">Название операции: </label>
					<Field
						id="operation"
						type="text"
						name="operation"/>
					<br/>
					<ErrorMessage className="error" name="operation" component="div"/>
					<br/>
					<label htmlFor="operationDay">День операции: </label>
					<Field
						id="operationDay"
						type="date"
						name="operationDay"/>
					<br/>
					<ErrorMessage className="error" name="operationDay" component="div"/>
					<br/>
					<label htmlFor="diagnosis">Диагноз: </label>
					<Field
						id="diagnosis"
						type="text"
						name="diagnosis"/>
					<ErrorMessage className="error" name="diagnosis" component="div"/>
					<br/>
					<div></div>
					<div id="radio-group"> Множественные раны: </div>
						<div role="group" aria-labelledby="radio-group-">
							<label htmlFor="multipleWoundsTrue">ДА
								<Field
									id="multipleWoundsTrue"
									name="multipleWounds"
									type="radio"
									value="да"
								/>
							</label>
							<label htmlFor="multipleWoundsFalse">НЕТ
								<Field
									id="multipleWoundsFalse"
									name="multipleWounds"
									type="radio"
									value="нет"
								/>
							</label>
						</div>
					<ErrorMessage name="multipleWounds" className="error" component="div"/>


					<br/>
					<br/>
					<button type="submit">Принять</button>
				</Form>
			</Formik>
		</div>
	)
};

export default FormData;