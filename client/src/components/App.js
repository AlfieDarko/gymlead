import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateWorkout from "./createWorkout/CreateWorkout";
import "./App.css";

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/addworkout" component={CreateWorkout} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
