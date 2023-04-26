import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home.page';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Product from '../pages/Product/Product.page';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product" element={<Product />} />
			<Route path="*" element={<div>404</div>} />
		</Routes>
		<Footer />
	</>
);


export default App;
