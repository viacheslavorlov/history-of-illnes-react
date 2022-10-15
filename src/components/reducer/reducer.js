//* начальное состояние
const initialState = {
	daylyNotes: {},
	prijemnijStatus: {}
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
			return {...state, prijemnijStatus: action.payload}
		default:
			return state;
	}
}

export default reducer;