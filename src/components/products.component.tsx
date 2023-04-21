import {
	Box,
	Grid, styled, Typography,
} from '@mui/material';
import React from 'react';
import ProductCard from '../atoms/product-card.component';
import {useTranslation} from 'react-i18next';
import HowWeHelp from '../assets/images/how-we-help.png';
import CrownIcon from '../assets/icons/crown.svg';
import BadgeCheckIcon from '../assets/icons/badge-check.svg';
import ShieldCheckIcon from '../assets/icons/shield-check.svg';
import ListCheckIcon from '../assets/icons/list-check.svg';
import SelectIcon from '../assets/icons/select.svg';
import SparklesIcon from '../assets/icons/sparkles.svg';
import BooksIcon from '../assets/icons/books.svg';
import Colors from '../config/colors';
import {Product} from '../interfaces/product.interface';

const ProductsGrid = styled(Grid)`
	max-width: 1300px;
	padding: 63px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

const ProductImage = styled(Box)`
  width: 100%;
  height: 288px;
  border-radius: 30px;
	background-image: url(${HowWeHelp});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), 
	-1px 19px 19px rgba(41, 0, 102, 0.02), 
	0 5px 10px rgba(41, 0, 102, 0.02),
	0 0 0 rgba(41, 0, 102, 0.02);
`;

const ProductImageTitle = styled(Typography)`
	display: flex;
	height: 100%;
	padding: 0 100px;
	align-items: center;
	text-align: center;
	justify-content: end;
	font-size: 3rem;
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
			description: t('products.workQuality.description'),
			icon: CrownIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 1,
			title: t('products.organizeKnowledge.title'),
			description: t('products.organizeKnowledge.description'),
			icon: ListCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 2 ,
			title: t('products.registersInformation.title'),
			description: t('products.registersInformation.description'),
			icon: BooksIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 3,
			title: t('products.bestSecurity.title'),
			description: t('products.bestSecurity.description'),
			icon: ShieldCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 4 ,
			title: t('products.bestWork.title'),
			description: t('products.bestWork.description'),
			icon: BadgeCheckIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 5,
			title: t('products.familiarTools.title'),
			description: t('products.familiarTools.description'),
			icon: SparklesIcon,
			buttonText: t('products.workQuality.button'),
		},
		{
			id: 6,
			title: t('products.create.improve.title'),
			description: t('products.create.improve.description'),
			icon: SelectIcon,
			buttonText: t('products.workQuality.button'),
		}
	];

	const ProductCardClickHandler = (id: number) => {
		console.log(id);
	};
	return (
		<ProductsGrid container spacing={2.5}>
			<Grid item xs={8}>
				<ProductImage>
					<ProductImageTitle>
						{t('products.productImage.title')}
					</ProductImageTitle>
				</ProductImage>
			</Grid>
			{Products.map((product) => (
				<Grid item xs={4} key={product.id}>
					<ProductCard {...product} handler={ProductCardClickHandler} />
				</Grid>
			))}
		</ProductsGrid>
	);
};

export default ProductsComponent;
