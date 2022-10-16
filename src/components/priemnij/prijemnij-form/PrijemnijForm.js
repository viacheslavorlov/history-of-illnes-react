import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {prijemnijStatus} from "../../actions/actions";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {complains, statusLocalis} from "../../../utils/utils";

import "./PrijemnijForm.css";

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
						desieses: [],
						ln: '',
						lnDate: '',
						lnNumber: 0,
						allergis: '',
						stul: 'стул регулярный, оформленный. Диурез в норме',
						anamnesis: '',
						diagnosis: '',
						zavOtdeleniem: 'Богов В.М.'
					}}

					onSubmit={(values) => {
						console.log('values', values);
						dispatch(prijemnijStatus({
							...values,
							complains: complains(values.diagnosis),
							statusLocalis: statusLocalis(values.diagnosis)}));
						console.log((JSON.stringify({...values, complains: complains(values.diagnosis)}, null, 2)));
					}}
					validationSchema={
						Yup.object().shape({
							name: Yup.string().min(5, 'Слишком короткое имя!').required('Введите имя пациента'),
							dateTime: Yup.date().required('Введите дату поступления'),
							desieses: Yup.array(Yup.string()),
							ln: Yup.string().required('какой больничный лист ПЕРВИЧНЫЙ/ПРОДОЛЖЕНИЕ'),
							lnDate: Yup.date(),
							lnNumber: Yup.number(),
							stul: Yup.string().required(),
							anamnesis: Yup.string().required('напишите анамнез'),
							allergis: Yup.string().required('аллергии'),
							diagnosis: Yup.string().required('Введите диагноз'),
							zavOtdeleniem: Yup.string().required('зав. отделением')
						})
					}>
					<Form className="form">
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
						<br/>

						<label htmlFor="diagnosis">Диагноз: </label>
						<Field
							as="select"
							name="diagnosis"
							id="diagnosis"
						>
							<option value=""></option>
							<option value="ЭКХ">ЭКХ</option>
							<option value="Хроническая анальная трещина">Хроническая анальная трещина</option>
							<option value="Хронический комбинированный геморрой 3 ст">Хронический комбинированный
								геморрой 3 ст
							</option>
							<option value="Хронический комбинированный геморрой 4 ст">Хронический комбинированный
								геморрой 4 ст
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
							<option value="Неполный внутренний свищ прямой кишки">Неполный внутренний свищ прямой
								кишки
							</option>
							<option value="Полип анального канала">Полип анального канала</option>
						</Field>
						<ErrorMessage name="diagnosis" className="error" component="div"/>
						<br/>
						<label htmlFor="anamnesis">Анамнез заболевания: </label>
						<Field
							as="textarea"
							name="anamnesis"
							id="anamnesis"/>
						<br/>
						<label htmlFor="stul">Стул: </label>
						<Field
							as="select"
							name="stul"
							id="stul">
							<option value="стул регулярный, оформленный. Диурез в норме">стул регулярный, оформленный. Диурез в норме</option>
							<option value="запоры. Диурез в норме">Запоры. Диурез в норме</option>
							<option value="жидкий стул, регулярный. Диурез в норме">жидкий стул, регулярный. Диурез в норме</option>
							<option value="жидкий стул, не регулярный до 10-15 р в день. Диурез в норме">жидкий стул, не регулярный до 10-15 р в день. Диурез в норме</option>
						</Field>
						<br/>
						<div id="desises">Сопутствующие заболевания.</div>
						<div className="field__desises" role="group" aria-labelledby="desises">
							<label>
								<Field name="desieses" type="checkbox" value="Простудные" checked/>
								Простудные.
							</label>
							<label>
								<Field name="desieses" type="checkbox" value="ИБС, Атеросклеротический кардиосклероз"/>
								ИБС, Атеросклеротический кардиосклероз.
							</label>
							<label>
								<Field name="desieses" type="checkbox" value="ГБ 3 ст. риск. 4"/>
								ГБ 3 ст. риск. 4.
							</label>
							<label>
								<Field name="desieses" type="checkbox" value="ГБ 2 ст. риск. 3"/>
								ГБ 2 ст. риск. 3.
							</label>
							<label>
								<Field name="desieses" type="checkbox" value="Бронхиальная астма, вне обострения"/>
								Бронхиальная астма, вне обострения.
							</label>
							<label>
								<Field name="desieses" type="checkbox" value="Язвенная болезнь желудка вне обострения"/>
								Язвенная болезнь желудка вне обострения.
							</label>
							<label>
								<Field name="desieses" type="checkbox"
								       value="Фибрилляция предсердий, постоянная форма"/>
								Фибрилляция предсердий, постоянная форма.
							</label>

						</div>
						<ErrorMessage name={"desieses"} className="error" component="div"/>
						<label htmlFor="ln">Больныичный лист: </label>
						<Field
							id="ln"
							as="select"
							name="ln">
							<option value="первичный">первичный</option>
							<option value="продолжение с">продолжение с</option>
							<option value="не требуется">не требуется</option>
						</Field>
						<ErrorMessage name="ln" className="error" component="div"/>
						<br/>
						<label htmlFor="lnDate">Больныичный лист / продолжение c: </label>
						<Field
							id="lnDate"
							type="date"
							name="lnDate"/>
						<ErrorMessage name="lnDate" className="error" component="div"/>
						<br/>
						<label htmlFor="lnNumber">Номер больничного листа: </label>
						<Field
							type="number"
							name="lnNumber"
							id="lnNumber"/>
						<ErrorMessage name="lnNumber" className="error" component="div"/>
						<br/>
						<label htmlFor="allergis">Аллергии: </label>
						<Field
							id="allergis"
							name="allergis"
							type="text"/>
						<ErrorMessage name="allergis" className="error" component="div"/>
						<br/>
						<label htmlFor="zav">Зав. отделением: </label>
						<Field
							id="zav"
							name="zavOtdeleniem"
							as="select"
							default
						>
							<option value="Богов В.М.">Богов В.М.</option>
							<option value="Малышев А.Ю.">Малышев А.Ю.</option>
						</Field>
						<button type="submit">Принять</button>
					</Form>
				</Formik>
			</>
		</div>
	);
};

export default PrijemnijForm;
