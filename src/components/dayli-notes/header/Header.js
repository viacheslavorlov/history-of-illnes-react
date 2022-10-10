import React from 'react';

const Header = ({date}) => {
	return (
		<div>
			<h1>Дневники</h1>
			<div>Сегодняшняя дата:</div>
			<div>
				<div>{date}</div>
			</div>
		</div>
	);
};

export default Header;
