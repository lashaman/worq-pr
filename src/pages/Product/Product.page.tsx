import React from 'react';
import {Container, Grid, styled} from '@mui/material';
import ProductHeader from './components/ProductHeader/ProductHeader.component';
import ProductPageCard from './components/ProductPageCard/ProductPageCard.component';
import Colors from '../../config/colors';
import ProductList from '../../config/product-list';
import FooterPaper from '../../components/FooterPaper/FooterPaper.component';
import {MainButton} from '../../components/Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';


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
	const {t} = useTranslation();
	return (
		<>
			<Container maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>
				<ProductHeader/>
				<ProductPageGrid
					maxWidth="1280px"
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					sx={
						{padding: {xs: '50px 16px', md: '70px 0', lg: '100px 0'}}
					}>
					{ProductList.map((item, index) => (
						<Grid item xs={12} md={6} key={index} sx={{padding: '30px'}}>
							<ProductPageCard key={index} {...item}/>
						</Grid>
					))}
				</ProductPageGrid>
				<FooterPaper
					title={t('productPage.pageFooter.title')}
					css={{backgroundColor: Colors.purpleLighter}}
					maxWidth="1075px"
					gridSplit={{text: 9, button: 3}}
					elevation={1}>
					<MainButton sx={{ fontSize: '18px'}}>
						{t('bookDemo.long')}
					</MainButton>
				</FooterPaper>
			</Container>
		</>
	);
};

export default Product;

