import './App.css';
import DaylyNotes from "../dayli-notes/dayli-notes-page/DaylyNotes";
import {Provider} from "react-redux";
import {store} from "../redux-store/store";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Prijemnij from "../priemnij/Prijemnij";
import Navigation from "../pages/Navigation";
import OperationForm from "../operations/OperationForm";

function App() {
	return (
		<Provider store={store}>
			<Router>
			<div className="App">
				<Navigation/>
				<Routes>
					<Route path="/" element={<Navigation/>}/>
					<Route path="/dayly-notes" element={<DaylyNotes/>}/>
					<Route path="/prijemnij-status" element={<Prijemnij/>}/>
					<Route path="/operation" element={<OperationForm/>}/>
					<Route path="/discharge" element={<h1>Пока элемент не написан</h1>}/>
				</Routes>
			</div>
			</Router>
		</Provider>
	);
}

export default App;
