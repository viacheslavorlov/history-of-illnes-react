//* начальное состояние
const initialState = {
	daylyNotes: []
};

//* reducer
// чистая функция зависит от state и action,
// сохраняется принцип иммутабешьности как при работе со стейтом в компоненте
const reducer = (state = initialState, action) => {
	console.log(state)
	switch (action.type) {
		case  'DAYLYNOTES':
			return {...state, daylyNotes: action.payload}
		default:
			return state;
	}
}

export default reducer;