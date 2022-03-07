import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/cruds/CrudAdd";
import CrudList from "./components/cruds/CrudList";
import CrudTable from "./components/cruds/CrudTable";
import CrudCardViewHorizontal from "./components/cruds/CrudCardViewHorizontal";
import CrudCardViewVertical from "./components/cruds/CrudCardViewVertical";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Footer from "./components/common/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/cruds" element={<CrudTable />} />
					<Route exact path="/cruds/list" element={<CrudList />} />
					<Route
						exact
						path="/cruds/card-horizontal"
						element={<CrudCardViewHorizontal />}
					/>
					<Route
						exact
						path="/cruds/card-vertical"
						element={<CrudCardViewVertical />}
					/>
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
