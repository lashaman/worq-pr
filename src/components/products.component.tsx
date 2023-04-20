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

interface Product {
	title: string;
	description: string;
	icon: string;
	button: string;
}

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
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), -1px 19px 19px rgba(41, 0, 102, 0.02), 0px 5px 10px rgba(41, 0, 102, 0.02), 0px 0px 0px rgba(41, 0, 102, 0.02);
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
	const Products: Product[] = [{
		title: t('products.workQuality.title'),
		description: t('products.workQuality.description'),
		icon: CrownIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.organizeKnowledge.title'),
		description: t('products.organizeKnowledge.description'),
		icon: ListCheckIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.registersInformation.title'),
		description: t('products.registersInformation.description'),
		icon: BooksIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.bestSecurity.title'),
		description: t('products.bestSecurity.description'),
		icon: ShieldCheckIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.bestWork.title'),
		description: t('products.bestWork.description'),
		icon: BadgeCheckIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.familiarTools.title'),
		description: t('products.familiarTools.description'),
		icon: SparklesIcon,
		button: t('products.workQuality.button'),
	},
	{
		title: t('products.create.improve.title'),
		description: t('products.create.improve.description'),
		icon: SelectIcon,
		button: t('products.workQuality.button'),
	}
	];
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
				<Grid item xs={4} key={product.title}>
					<ProductCard  title={product.title} description={product.description} icon={product.icon} buttonText={product.button} />
				</Grid>
			))}
		</ProductsGrid>
	);
};

export default ProductsComponent;
