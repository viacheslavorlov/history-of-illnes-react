import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
	return (
		<div>

			<NavLink to='дневники'>
				Дневники
			</NavLink>
			<NavLink to='приёмный-статус'>
				Приёмный статус
			</NavLink>
			<NavLink to='операции'>
				Операции
			</NavLink>
			<NavLink to='выписка'>
				Выписной эпикриз
			</NavLink>
		</div>
	);
};

export default Navigation;
