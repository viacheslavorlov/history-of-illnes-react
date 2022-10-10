import './App.css';
import DaylyNotes from "../dayli-notes/DaylyNotes";
import {Provider} from "react-redux";
import {store} from "../redux-store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<DaylyNotes/>
			</div>
		</Provider>
	);
}

export default App;
