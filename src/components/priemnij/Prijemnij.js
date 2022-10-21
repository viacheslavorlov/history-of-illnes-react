import React from 'react';
import PrijemnijForm from "./prijemnij-form/PrijemnijForm";
import PrijemnijStatus from "./prijemnij-status/PrijemnijStatus";

const Prijemnij = () => {
	return (
		<div>
			<PrijemnijForm/>
			<PrijemnijStatus/>
		</div>
	);
};

export default Prijemnij;
