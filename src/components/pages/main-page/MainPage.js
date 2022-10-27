import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {mainData} from "../../actions/actions";

const MainPage = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Заполните основные данные которые понадобятся для всех шаблонов.</h1>
			<Formik
				initialValues={{
					name: '',
					birthDay: '',
					diagnosis: ''
				}}
				validationSchema={
					Yup.object().shape({
						name: Yup.string().min(5, 'Слишком короткое имя!').required('Введите имя пациента'),
						birthDay: Yup.date().required('Введите дату рождения пациента'),
						diagnosis: Yup.string().min(3, 'сдишком короткий дифгноз!').required()
					})
				}
				onSubmit={values => {
					dispatch(mainData({...values}))
				}}
			>
				<Form className="form bg-black bg-opacity-10 border-1 border-dark border">
					<label htmlFor="name">ФИО пациента:</label>
					<Field name="name" id="name" type="text"/>
					<ErrorMessage name="name" className="error" component="div"/>
					<label htmlFor="birthDay">Дата рождения:</label>
					<Field name="birthDay" id="birthDay" type="date"/>
					<ErrorMessage name="birthDay" className="error" component="div"/>
					<label htmlFor="diagnosis">Диагноз:</label>
					<Field
						as="select"
						name="diagnosis"
						id="diagnosis"
						>
						<option value=""></option>
						<option value="Хронический комбинированный геморрой 4 ст">Хронический комбинированный
							геморрой 4 ст
						</option>
						<option value="Хроническая задняя анальная трещина">Хроническая задняя анальная трещина</option>
						<option value="Хронический комбинированный геморрой 3 ст">Хронический комбинированный
							геморрой 3 ст
						</option>
						<option value="ЭКХ">ЭКХ</option>
						<option value="Хроническая передняя анальная трещина">Хроническая передняя анальная трещина
						</option>
						<option value="Хронический комбинированный геморрой 2 ст">Хронический комбинированный
							геморрой 2 ст
						</option>
						<option value="Полный, экстрасфинктерный свищ прямой кишки">Полный, экстрасфинктерный свищ
							прямой кишки
						</option>
						<option value="Полный, транссфинктерный свищ прямой кишки">Полный, транссфинктерный свищ
							прямой кишки
						</option>
						<option value="Полный, интрасфинктерный свищ прямой кишки">Полный, интрасфинктерный свищ
							прямой кишки
						</option>
						<option value="Полип анального канала">Полип анального канала</option>
						<option value="Неполный внутренний свищ прямой кишки">Неполный внутренний свищ прямой
							кишки
						</option>
					</Field>
					<ErrorMessage name="diagnosis" className="error" component="div"/>
					<button type="submit" className="btn btn-dark">Принять</button>
				</Form>
			</Formik>
		</div>
	);
};

export default MainPage;
