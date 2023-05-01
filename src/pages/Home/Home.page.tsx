import React from 'react';
import Clients from './components/Clients/Clients.component';
import Services from './components/Services/Services.component';
import Testimonials from './components/Testimonials/Testimonials.component';
import Hero from './components/Hero/Hero.component';
import Benefits from './components/Benefits/Benefits.component';
import ProductsComponent from './components/Products/Products.component';
import {HeroDetails} from '../../config/hero-details';
import {ClientsDetails} from '../../config/client-details';
import {BenefitsList} from '../../config/benefits-list';
import {ServicesList, TabPanelList} from '../../config/services-lists';
import {Products} from '../../config/products-section-list';
import {TestimonialsList} from '../../config/testimonials-list';


const Home = () => {
	return	(
		<>
			<Hero {...HeroDetails} />
			<Clients {...ClientsDetails}/>
			<Services title="services.title" servicesList={ServicesList} tabPanelList={TabPanelList}/>
			<ProductsComponent productsList={Products} title="products.productImage.title"/>
			<Benefits title="benefits.title" benefitsList={BenefitsList}/>
			<Testimonials title="testimonials.title" subTitle="testimonials.subtitle" testimonials={TestimonialsList}/>
		</>
	);
};

export default Home;
