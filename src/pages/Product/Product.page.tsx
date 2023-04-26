import React from 'react';
import {Container, Grid, styled} from '@mui/material';
import ProductHeader from './components/ProductHeader/ProductHeader.component';
import ProductFooter from './components/ProductFooter/ProductFooter.component';
import {CustomCardProps} from '../../interfaces/custom-card-props.interface';
import Monitor from '../../assets/icons/monitor.svg';
import Ai from '../../assets/icons/ai.svg';
import CustomerService from '../../assets/icons/customer-service.svg';
import Dashboard from '../../assets/icons/dashboard.svg';
import Analysis from '../../assets/icons/analysis.svg';
import ProductPageCard from './components/ProductPageCard/ProductPageCard.component';
import Colors from '../../config/colors';


const ProductPageGrid = styled(Grid)`
	margin: 0 auto;
	@media (min-width: 0) {
		& > .MuiGrid-item {
			border-bottom: 1px solid ${Colors.purpleLighter};
		}
	}
	@media (min-width: 900px) {
    & > .MuiGrid-item:nth-child(3),
    & > .MuiGrid-item:nth-child(4) {
      border-top: 1px solid ${Colors.purpleLighter};
      border-bottom: 1px solid ${Colors.purpleLighter};
    }

    & > .MuiGrid-item:nth-child(3),
    & > .MuiGrid-item:nth-child(1),
    & > .MuiGrid-item:nth-child(5) {
      border-right: 1px solid ${Colors.purpleLighter};
    }
		& > .MuiGrid-item:nth-child(5) {
      border-bottom: none;
		}
  }
`;

const Product = () => {
	const ProductList: CustomCardProps[] = [
		{
			title: 'productPage.list.monitor.title',
			description: 'productPage.list.monitor.description',
			icon: Monitor,
		},
		{
			title: 'productPage.list.analysis.title',
			description: 'productPage.list.analysis.description',
			icon: Analysis,
		},
		{
			title: 'productPage.list.customerService.title',
			description: 'productPage.list.customerService.description',
			icon: CustomerService,
		},
		{
			title: 'productPage.list.ai.title',
			description: 'productPage.list.ai.description',
			icon: Ai,
		},
		{
			title: 'productPage.list.dashboard.title',
			description: 'productPage.list.dashboard.description',
			icon: Dashboard,
		},
	];

	return (
		<>
			<Container maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>
				<ProductHeader/>
				<ProductPageGrid maxWidth="1280px" container direction="row" justifyContent="flex-start" alignItems="center" sx={{padding: {xs: '50px 16px', md: '70px 0', lg: '100px 0'}}}>
					{ProductList.map((item, index) => (
						<Grid item xs={12} md={6} key={index} sx={{padding: '30px'}}>
							<ProductPageCard key={index} {...item}/>
						</Grid>
					))}
				</ProductPageGrid>
				<ProductFooter/>
			</Container>
		</>
	);
};

export default Product;

