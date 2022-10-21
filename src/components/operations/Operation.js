import React from 'react';
import {Formik} from "formik";

const OperationForm = () => {

	return (
		<>
			<h1>Заполните данные для операции</h1>
			<div>
				<Formik initialValues={{}} onSubmit={values => {
					console.log(values);
				}}>


				</Formik>
			</div>
		</>
	);
};

export default OperationForm;
