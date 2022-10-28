import React from 'react';
import PrijemnijForm from "../priemnij/prijemnij-form/PrijemnijForm";
import PrijemnijStatus from "../priemnij/prijemnij-status/PrijemnijStatus";

const Prijemnij = () => {
	return (
		<div>
			<PrijemnijForm/>
			<PrijemnijStatus/>
		</div>
	);
};

export default Prijemnij;
