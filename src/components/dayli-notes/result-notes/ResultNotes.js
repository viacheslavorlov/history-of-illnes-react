import React from 'react';
import {useSelector} from "react-redux";

const ResultNotes = () => {
	const stateFromStore = useSelector(state => state.daylyNotes)
	console.log(stateFromStore)
	return (
		<div>

		</div>
	);
};

export default ResultNotes;
