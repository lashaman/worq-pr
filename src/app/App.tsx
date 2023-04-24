import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home.page';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
