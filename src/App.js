import React, { Component } from "react";
import { TextEditor } from './components/Text-EditorComponents';
import NavBar  from './components/NavBarComponents/NavBar';
import BoxComponent from './components/BoxComponents/BoxComponent';

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<div className = "container">
					<h1 className="heading">John Doe Interview</h1>
					<TextEditor />
					<BoxComponent/>
				</div>
			</div>
		);
	}
}

export default App;
