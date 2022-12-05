import './App.css';
import DaylyNotes from "../pages/dayli-notes-page/DaylyNotes";
import {Provider} from "react-redux";
import {store} from "../redux-store/store";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Prijemnij from "../pages/Prijemnij";
import Navigation from "../pages/Navigation";
import MainPage from "../pages/main-page/MainPage";
import Operation from "../pages/Operation";
import Modal from "../modal/Modal";

function App() {

	return (
		<Provider store={store}>
			<Router>
			<div className="App">
				<Navigation/>
				<Modal message={"Данные добавлены"}/>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/dayly-notes" element={<DaylyNotes/>}/>
					<Route path="/prijemnij-status" element={<Prijemnij/>}/>
					<Route path="/operation" element={<Operation/>}/>
					<Route path="/discharge" element={<h1>Пока элемент не написан</h1>}/>
				</Routes>
			</div>
			</Router>
		</Provider>
	);
}

export default App;
