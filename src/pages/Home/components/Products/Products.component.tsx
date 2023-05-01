import {
	Box, Container,
	Grid, styled, Typography,
} from '@mui/material';
import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard.component';
import {Trans, useTranslation} from 'react-i18next';
import HowWeHelp from '../../../../assets/images/how-we-help.png';
import DataAnalysis from '../../../../assets/images/data-analysis.png';
import CrownIcon from '../../../../assets/icons/crown.svg';
import BadgeCheckIcon from '../../../../assets/icons/badge-check.svg';
import ShieldCheckIcon from '../../../../assets/icons/shield-check.svg';
import ListCheckIcon from '../../../../assets/icons/list-check.svg';
import SelectIcon from '../../../../assets/icons/select.svg';
import SparklesIcon from '../../../../assets/icons/sparkles.svg';
import BooksIcon from '../../../../assets/icons/books.svg';
import Colors from '../../../../config/colors';
import {Product} from '../../../../interfaces/product.interface';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductsContainer = styled(Container)`
	max-width: 1280px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ProductsGrid = styled(Grid)`
	padding: 63px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const ProductImage = styled(Box)`
  width: 100%;
  border-radius: 30px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), 
	-1px 19px 19px rgba(41, 0, 102, 0.02), 
	0 5px 10px rgba(41, 0, 102, 0.02),
	0 0 0 rgba(41, 0, 102, 0.02);
`;

const ProductImageTitle = styled(Typography)`
  font-family: 'Avenir Black';
	display: flex;
	height: 100%;
	align-items: center;
	text-align: center;
	justify-content: center;
	font-weight: 900;
	white-space: pre;
	color: ${Colors.purpleDark};
`;

const ProductsComponent = () => {
	const {t} = useTranslation();
	const Products: Product[] = [
		{
			id: 0,
			title: t('products.workQuality.title'),
			description: <Trans i18nKey="products.workQuality.description" components={{span: <span />}}/>,
			icon: CrownIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 1,
			title: t('products.organizeKnowledge.title'),
			description: <Trans i18nKey="products.organizeKnowledge.description" components={{span: <span />}}/>,
			icon: ListCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 2 ,
			title: t('products.registersInformation.title'),
			description: <Trans i18nKey="products.registersInformation.description" components={{span: <span />}}/>,
			icon: BooksIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 3,
			title: t('products.bestSecurity.title'),
			description: <Trans i18nKey="products.bestSecurity.description" components={{span: <span />}}/>,
			icon: ShieldCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 4 ,
			title: t('products.bestWork.title'),
			description: <Trans i18nKey="products.bestWork.description" components={{span: <span />}}/>,
			icon: BadgeCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 5,
			title: t('products.familiarTools.title'),
			description: <Trans i18nKey="products.familiarTools.description" components={{span: <span />}}/>,
			icon: SparklesIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 6,
			title: t('products.create.improve.title'),
			description: <Trans i18nKey="products.familiarTools.description" components={{span: <span />}}/>,
			icon: SelectIcon,
			buttonText: t('products.workQuality.button'),
		}
	];

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const ProductCardClickHandler = (id: number) => {
		console.log(id);
	};
	return (
		<>
			<hr style={{borderTop: `1px solid ${Colors.purple}`}}/>
			<ProductsContainer maxWidth={false}>
				<ProductsGrid container spacing={ {xs: 1.5, md: 2.5}}>
					<Grid item xs={12} md={8} >
						<ProductImage sx={{backgroundImage: `url(${HowWeHelp})`, height: {xs: '397px', md: '261.4px', lg: '288px;'}}}>
							<Grid
								container
								direction={isMobile ?  'column-reverse' : 'row'}
								justifyContent="space-around"
								alignItems="center"
							>
								<Grid item xs={12} md={5} >
									<Box component="img" src={DataAnalysis} />
								</Grid>
								<Grid item xs={12} md={7}>
									<ProductImageTitle sx={{fontSize: {xs: '28px', md: '40px', lg:'48px'}, padding: {xs: '50px 0 0 0', md: 'unset'}}}>
										{t('products.productImage.title')}
									</ProductImageTitle>
								</Grid>
							</Grid>
						</ProductImage>
					</Grid>
					{Products.map((product) => (
						<Grid item xs={12} md={4} key={product.id}>
							<ProductCard {...product} handler={ProductCardClickHandler} />
						</Grid>
					))}
				</ProductsGrid>
			</ProductsContainer>
			<hr style={{borderTop: `1px solid ${Colors.purple}`}}/>
		</>
	);
};

export default ProductsComponent;
