import './App.css';
import DaylyNotes from "../dayli-notes/dayli-notes-page/DaylyNotes";
import {Provider} from "react-redux";
import {store} from "../redux-store/store";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Prijemnij from "../priemnij/Prijemnij";
import Navigation from "../pages/MainPage";
import Operation from "../operations/Operation";

function App() {
	return (
		<Provider store={store}>
			<Router>
			<div className="App">
				<Navigation/>
				<Routes>
					<Route path="/дневники" element={<DaylyNotes/>}/>
					<Route path="/приёмный-статус" element={<Prijemnij/>}/>
					<Route path="/операции" element={<Operation/>}/>
				</Routes>
			</div>
			</Router>
		</Provider>
	);
}

export default App;
