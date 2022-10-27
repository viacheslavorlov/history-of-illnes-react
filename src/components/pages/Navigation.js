import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	const active = "noprint active";
	return (
		<div className="navbar">
			<NavLink className={({isActive}) => isActive ? active : "noprint"}
			         to="/"
			         end>
				Главная
			</NavLink>
			<NavLink
				end
				className={({isActive}) => isActive ? active : "noprint"}
				to='dayly-notes'>
				Дневники
			</NavLink>
			<NavLink
				end
				className={({isActive}) => isActive ? active : "noprint"}
				to='prijemnij-status'>
				Приёмный статус
			</NavLink>
			<NavLink
				end
				className={({isActive}) => isActive ? active : "noprint"}
				to='operation'>
				Операции
			</NavLink>
			<NavLink
				end
				className={({isActive}) => isActive ? active : "noprint"}
				to='discharge'>
				Выписной эпикриз
			</NavLink>
		</div>
	);
};

export default Navigation;
