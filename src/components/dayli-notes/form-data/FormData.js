import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {daylyNotes, showModal} from "../../actions/actions";

import './FormData.css';

const FormData = () => {
	const dispatch = useDispatch();
	const {name, diagnosis} = useSelector(state => state.mainData)
	return (
		<div>
			<h2>Заполните данные пациента.</h2>
			<Formik initialValues={{
				name: name || '',
				dayIn: '',
				dayOut: '',
				operation: '',
				operationDay: '',
				diagnosis: diagnosis || '',
				multipleWounds: ''
			}} onSubmit={(values) => {
				dispatch(daylyNotes(values));
				console.log(JSON.stringify(values, null, 2));
				dispatch(showModal());
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
				<Form className="form bg-black bg-opacity-10 border-1 border-dark border">
					<label htmlFor="name">ФИО пациента: </label>
					<Field
						id="name"
						type="text"
						name="name"/>

					<ErrorMessage className="error" name="name" component="div"/>

					<label htmlFor="date">Дата поступления: </label>

					<Field
						id="date"
						type="date"
						name="dayIn"/>
					<ErrorMessage className="error" name="dayIn" component="div"/>
					<label htmlFor="dayOut">Дата выписки: </label>
					<Field
						id="dayOut"
						type="date"
						name="dayOut"/>
					<ErrorMessage className="error" name="dayOut" component="div"/>
					<label htmlFor="operation">Название операции: </label>
					<Field
						id="operation"
						type="text"
						name="operation"/>
					<ErrorMessage className="error" name="operation" component="div"/>
					<label htmlFor="operationDay">День операции: </label>
					<Field
						id="operationDay"
						type="date"
						name="operationDay"/>
					<ErrorMessage className="error" name="operationDay" component="div"/>
					<label htmlFor="diagnosis">Диагноз: </label>
					<Field
						id="diagnosis"
						type="text"
						name="diagnosis"/>
					<ErrorMessage className="error" name="diagnosis" component="div"/>
					<div></div>
					<div id="radio-group"> Множественные раны:</div>
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
					<button className="btn btn-lg btn-dark m-3" type="submit">Принять</button>
				</Form>
			</Formik>
		</div>
	)
};

export default FormData;