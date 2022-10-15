import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {prijemnijStatus} from "../../actions/actions";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";

import "./PrijemnijForm.css";
import {randomNumber} from "../../../utils/utils";

const PrijemnijForm = () => {
	const dispatch = useDispatch();


	const complains = (diagnos) => {
		switch (diagnos) {
			case 'ЭКХ':
				return 'на отверстия в коже в области копчика, с периодически появляющимся гнойным отделяемым.';
			case 'Хроническая анальная трещина':
				return 'на боли в анальном канале при дефекации, следы крови в стуле и на туалетной бумаге.';
			case 'Хронический комбинированный геморрой 3 ст':
				return 'Кровь в стуле, выпадение геморроидальных узлов требующее ручного пособия при вправлении.';
			case 'Хронический комбинированный геморрой 4 ст':
				return 'Кровь в стуле, невправимое выпадение геморроидальных узлов при дефекации.';
			case 'Хронический комбинированный геморрой 2 ст':
				return 'Кровь в стуле, выпадение геморроидальных узлов, вправляющееся самостоятельно.';
			case 'Полный, экстрасфинктерный свищ прямой кишки':
				return 'отверстие в перианальной области с гнойным отделяемым';
			case 'Полный, транссфинктерный свищ прямой кишки':
				return 'отверстие в перианальной области с гнойным отделяемым';
			case 'Полный, интрасфинктерный свищ прямой кишки':
				return 'отверстие в перианальной области с гнойным отделяемым';
			case 'Неполный внутренний свищ прямой кишки':
				return 'выделение гноя из анального канала, периодические боли в перианальной области.';
			case 'Полип анального канала':
				return 'наличие полипа в анальном канале, выпадающего при дефекации';
			default:
				return '';
		}
	}

	const statusLocalis = (diagnos) => {
		switch (diagnos) {
			case 'ЭКХ':
				return 'в области межьягодичной складки первичные и вторичные отверстия ЭКХ с серозно-гнойным' +
					' отделяемым';
			case 'Хроническая анальная трещина':
				return 'Перианальная область не изменена, сфинтктер в нормотонусе, ' +
					'на 3, 7, 11 часов геморроидальные узлы в анальном канале дефект с грубыми краями, с' +
					' наружным и внутренним сторожевым бугорками. На высоте 6 см без дополнительной патологи.';
			case 'Хронический комбинированный геморрой 3 ст':
				return `Перианальная область не изменена, сфинтктер в нормотонусе,` +
					` на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(1, 8)}см` +
				 `На высоте 6 см без дополнительной патологи.`;
			case 'Хронический комбинированный геморрой 4 ст':
				return `Перианальная область не изменена, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(4, 9)}см
				 На высоте 6 см без дополнительной патологи.`;
			case 'Хронический комбинированный геморрой 2 ст':
				return `Перианальная область не изменена, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(1,6)}см 
				На высоте 6 см без дополнительной патологи.`;
			case 'Полный, экстрасфинктерный свищ прямой кишки':
				return `В перианальной области свищевое отверстие на ____ часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ___ часах.`;
			case 'Полный, транссфинктерный свищ прямой кишки':
				return `В перианальной области свищевое отверстие на ____ часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ___ часах.`;
			case 'Полный, интрасфинктерный свищ прямой кишки':
				return `В перианальной области свищевое отверстие на ____ часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ___ часах.`;
			case 'Неполный внутренний свищ прямой кишки':
				return `Перианальная область не изменена, сфинктер в нормотонусе. 
				На 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				На высоте 6 см без дополнительной патологи.`;
			case 'Полип анального канала':
				return `Перианальная область не изменена, сфинктер в нормотонусе. 
				На 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				На высоте _____ часах полип размером  ____ см.`;
			default:
				return '';
		}
	}

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
						allergis: '',
						statusLocalis: '',
						diagnosis: '',
						// zavOtdeleniem: ''
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
							lnDate: Yup.date().required('с какого числа больничный лист'),
							allergis: Yup.string().required('аллергии'),
							// statusLocalis: Yup.string().required('местный статус'),
							diagnosis: Yup.string().required('Введите диагноз'),
							// zavOtdeleniem: Yup.string().required('зав. отделением')
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
						<div id="desises">Сопутствующие заболевания.</div>
						<div className="field__desises" role="group" aria-labelledby="desises">
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
						<label htmlFor="allergis">Аллергии: </label>
						<Field
							id="allergis"
							name="allergis"
							type="text"/>
						<ErrorMessage name="allergis" className="error" component="div"/>
						<button type="submit">Принять</button>
					</Form>
				</Formik>
			</>
		</div>
	);
};

export default PrijemnijForm;
