import React from 'react';
import Header from '../components/header.component';
import Hero from '../components/hero.component';
import Clients from '../components/clients.component';
import ProductsComponent from '../components/products.component';
import Benefits from '../components/benefits.component';
import Testimonials from '../components/testimonials.component';
import Footer from '../components/footer.component';

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Clients />
			<ProductsComponent />
			<Benefits />
			<Testimonials />
			<Footer />
		</>
	);
};

export default Home;
