//* начальное состояние
const initialState = {
	mainData: {},
	daylyNotes: {},
	prijemnijStatus: {},
	operation: {}
};

//* reducer
// чистая функция зависит от state и action,
// сохраняется принцип иммутабешьности как при работе со стейтом в компоненте
const reducer = (state = initialState, action) => {
	console.log(state)
	switch (action.type) {
		case 'DAYLYNOTES':
			return {...state, daylyNotes: action.payload};
		case 'PRIJEMNIJ_STATUS':
			return {...state, prijemnijStatus: action.payload};
		case 'OPERATION':
			return {...state, operation: action.payload};
		case 'MAIN_DATA':
			return {...state, mainData: action.payload};
		default:
			return state;
	}
}

export default reducer;