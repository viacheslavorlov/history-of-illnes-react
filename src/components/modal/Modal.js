import React, {useEffect} from 'react';
import './Modal.css';
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../actions/actions";

const Modal = ({message}) => {
	const dispatch = useDispatch();
	const show = useSelector(state => state.showModal);
	const showModalwindow = () => {
		if (show) {
			setTimeout(() => {
				dispatch(hideModal());
				console.log('modal close');
			}, 2000);
		}
	}
	showModalwindow();

	useEffect(() =>  showModalwindow, []);

	return (
		<div className="modal" style={{display: show ? "block" : "none"}}>
			<div className="modal__content">
				{message}
			</div>

		</div>
	);
};

export default Modal;
