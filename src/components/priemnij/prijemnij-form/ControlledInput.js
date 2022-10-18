import React from 'react';

const ControledInputSelect = ({children, handleChange, diagnosis}) => {
	return (
			<select value={diagnosis} onChange={handleChange}>{children}</select>
	);
};

export default ControledInputSelect;
