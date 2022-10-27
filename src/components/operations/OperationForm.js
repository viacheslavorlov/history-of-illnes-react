import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {operation} from "../actions/actions";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import OperationResult from "./OperationResult";
import {opisanieOperacii} from "../../utils/utils";
import * as data from "../../data/data.json";


const OperationForm = () => {
	const dispatch = useDispatch();
	const [diagnos, setDiagnos] = useState('');

	const {name, birthDay, diagnosis} = useSelector(state => state.mainData)
	const handleChange = (e) => {
		setDiagnos(e.target.value);
		console.log('handleChange')
	}

	return (
		<>
			<h1 className="form">Заполните данные для операции</h1>
			<Formik
				initialValues={{
					name: name,
					operation: data.default.operation[diagnosis],
					birthDate: birthDay,
					operationDay: '',
					operationTimeStart: '',
					operationTimeEnd: '',
					diagnosis: diagnosis,
					surgeon: 'Орлов В.И.',
					assistent: '',
					anestesiologist: '',
					sister: '',
					narkoz: '',
					svischOut: '',
					svischIn: '',
					razmerPolipaX: '',
					razmerPolipaY: '',
				}}
				validationSchema={
					Yup.object().shape({
						name: Yup.string().required(),
						operation: Yup.string().required(),
						birthDate: Yup.date().required(),
						operationDay: Yup.date().required(),
						operationTimeStart: Yup.string().required(),
						operationTimeEnd: Yup.string().required(),
						diagnosis: Yup.string().required(),
						anestesiologist: Yup.string(),
						surgeon: Yup.string().required(),
						assistent: Yup.string(),
						sister: Yup.string().required(),
						narkoz: Yup.string().required(),
						svischOut: Yup.number(),
						svischIn: Yup.number(),
						razmerPolipaY: Yup.number(),
						razmerPolipaX: Yup.number(),
					})
				}
				onSubmit={values => {
					dispatch(operation({
						...values,
						opisanieOperacii: opisanieOperacii(values.diagnosis, values.svischOut, values.svischIn, values.razmerPolipaY, values.razmerPolipaX)
					}));
				}}>
				<Form className="form bg-black bg-opacity-10 border-1 border-dark border">
					<label htmlFor="name">ФИО пациента: </label>
					<Field name="name" id="name"/>
					<ErrorMessage name="name" className='error' component={'div'}/>
					<label htmlFor="operation">Название операции:</label>
					<Field id="operation" name="operation" type="text"/>
					<ErrorMessage name="operation" className="error" component="div"/>
					<label htmlFor="birthDate">Дата рождения: </label>
					<Field name="birthDate" id="birthDate" type="date"/>
					<ErrorMessage name="birthDate" className='error' component={'div'}/>
					<br/>
					<label htmlFor="operationDay">Дата операции: </label>
					<Field name="operationDay" id="operationDay" type="date"/>
					<ErrorMessage name="operationDay" className='error' component={'div'}/>
					<br/>
					<label htmlFor="operationTimeStart">Начало операции: </label>
					<Field name="operationTimeStart" id="operationTimeStart" type="text"/>
					<ErrorMessage name="operationTimeStart" className='error' component={'div'}/>
					<br/>
					<label htmlFor="operationTimeEnd">Конец операции: </label>
					<Field name="operationTimeEnd" id="operationTimeEnd" type="text"/>
					<ErrorMessage name="operationTimeEnd" className='error' component={'div'}/>
					<br/>
					<label htmlFor="diagnosis">Диагноз: </label>
					<Field
						as="select"
						name="diagnosis"
						id="diagnosis"
						onInput={(e) => handleChange(e)}>
						<option value=""></option>
						<option value="ЭКХ">ЭКХ</option>
						<option value="Хроническая передняя анальная трещина">Хроническая передняя анальная трещина
						</option>
						<option value="Хроническая задняя анальная трещина">Хроническая задняя анальная трещина</option>
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
					<label htmlFor="surgeon">Хирург:</label>
					<Field id="surgeon" name="surgeon" as="select">
						<option value="Орлов В.И.">Орлов В.И.</option>
						<option value="Богов В.М.">Богов В.М.</option>
						<option value="Проскурин А.А.">Проскурин А.А.</option>
						<option value="Малышев А.Ю.">Малышев А.Ю.</option>
					</Field>
					<ErrorMessage name="surgeon" className="error" component="div"/>
					<br/>
					<label htmlFor="assistent">Ассистент:</label>
					<Field id="assistent" name="assistent" as="select">
						<option value=""></option>
						<option value="Орлов В.И.">Орлов В.И.</option>
						<option value="Богов В.М.">Богов В.М.</option>
						<option value="Проскурин А.А.">Проскурин А.А.</option>
						<option value="Малышев А.Ю.">Малышев А.Ю.</option>
					</Field>
					<ErrorMessage name="assistent" className="error" component="div"/>
					<br/>
					<label htmlFor="sister">Операционная сестра:</label>
					<Field id="sister" name="sister" type="text"/>
					<ErrorMessage name="sister" className="error" component="div"/>
					<br/>
					<label htmlFor="anestesiologist">Анестезиолог:</label>
					<Field id="anestesiologist" name="anestesiologist" type="text"/>
					<ErrorMessage name="anestesiologist" className="error" component="div"/>
					<br/>
					<label htmlFor="narkoz">Наркоз: </label>
					<Field id="narkoz" name="narkoz" as="select">
						<option value=""></option>
						<option value="общий наркоз (ЭТН)">общий наркоз (ЭТН)</option>
						<option value="общий наркоз (ларингиальная маска)">общий наркоз (ларингиальная маска)
						</option>
						<option value="эпидуральная анестезия">эпидуральная анестезия</option>
						<option value="внутривенный наркоз">внутривенный наркоз</option>
						<option value="местная анестезия (лидокаин 2%)">местная анестезия (лидокаин 2%)</option>
						<option value="комбинированная анестезия: ЭТН + эпидуральная анестезия">комбинированная
							анестезия: ЭТН + эпидуральная анестезия
						</option>
					</Field>
					<ErrorMessage name="narkoz" className="error" component="div"/>
					{diagnos.match(/свищ/ig) ?
						<>
							<label htmlFor="svischOut">Наружное отверстие свища: </label>
							<Field name="svischOut" id="svischOut" type="number"/>
							<ErrorMessage name={"svischOut"} className={"error"} component={"div"}/>
							<label htmlFor="svischIn">Внутреннее отверстие свища: </label>
							<Field name="svischIn" id="svischIn" type="number"/>
							<ErrorMessage name={"svischIn"} className={"error"} component={"div"}/>
						</> : null
					}
					{
						diagnos.match(/полип/ig) ?
							<>
								<label htmlFor="razmerPolipaX">Полип размером: </label>
								<Field name={"razmerPolipaX"} id={"razmerPolipaX"} type={"number"}/>
								<ErrorMessage name={"razmerPolipaX"} className={"error"} component={"div"}/>
								<label htmlFor="razmerPolipaY">Полип на скольки часах: </label>
								<Field name={"razmerPolipaY"} id={"razmerPolipaY"} type={"number"}/>
								<ErrorMessage name={"razmerPolipaY"} className={"error"} component={"div"}/>
							</> : null
					}

					<button type="submit" className="btn btn-dark">ПРИНЯТЬ</button>
				</Form>
			</Formik>
			<OperationResult/>
		</>
	);
};

export default OperationForm;
