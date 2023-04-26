import React from 'react';
import Clients from './components/Clients/Clients.component';
import Services from './components/Services/Services.component';
import Testimonials from './components/Testimonials/Testimonials.component';
import Hero from './components/Hero/Hero.component';
import Benefits from './components/Benefits/Benefits.component';
import ProductsComponent from './components/Products/Products.component';


const Home = () =>  (
	<>
		<Hero />
		<Clients />
		<Services />
		<ProductsComponent />
		<Benefits />
		<Testimonials />
	</>
);

export default Home;
