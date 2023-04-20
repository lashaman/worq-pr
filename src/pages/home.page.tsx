import React from 'react';
import Header from '../components/header.component';
import Hero from '../components/hero.component';
import Clients from '../components/clients.component';
import ProductsComponent from '../components/products.component';

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Clients />
			<ProductsComponent />
		</div>
	);
};

export default Home;
