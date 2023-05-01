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
import Services from '../pages/Services/Services.page';
import worqRoutes from '../config/routes';
import About from '../pages/About/About.page';
import ErrorPage from '../pages/Error/Error.page';
import {FooterColumns} from '../config/footer-columns';
import pages from '../config/pages';

const App = () => (
	<>
		<Header menuList={pages} />
		<Routes>
			<Route path={worqRoutes.home} element={<Home />} />
			<Route path={worqRoutes.products} element={<Product />} />
			<Route path={worqRoutes.services} element={<Services />} />
			<Route path={worqRoutes.about} element={<About />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
		<Footer footerLists={FooterColumns}/>
	</>
);


export default App;
