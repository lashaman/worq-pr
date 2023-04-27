import React from 'react';
import {Grid, Paper, styled, Typography} from '@mui/material';
import Colors from '../../../../config/colors';
import { useTranslation } from 'react-i18next';
import {MainButton} from '../../../../components/Buttons/Buttons.component';
import Box from '@mui/material/Box';
const ProductFooterPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${Colors.purpleLighter};
`;

const ProductFooterTitle = styled(Typography)`
	font-family: 'Avenir Black';
	color: ${Colors.purple};
`;

const ProductFooter = () => {
	const {t} = useTranslation();
	return (
		<ProductFooterPaper sx={{padding: {xs: '40px 16px', md: '70px 0', lg: '80px 0'}}}>
			<Grid container maxWidth="1075px" justifyContent="flex-start">
				<Grid item xs={12} md={9} >
					<ProductFooterTitle sx={{
						fontSize: {xs: '40px', md: '48px' , lg: '68px', lineHeight: 1.15},
						textAlign: {xs: 'center', md: 'left'},
						paddingBottom: {xs: '20px', md: '10px'}
					}} >
						{t('productPage.pageFooter.title')}
					</ProductFooterTitle>
				</Grid>
				<Grid item xs={12} md={3}>
					<Box sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
						<MainButton sx={{ fontSize: '18px'}}>
							{t('bookDemo.long')}
						</MainButton>
					</Box>
				</Grid>
			</Grid>
		</ProductFooterPaper>
	);
};

export default ProductFooter;
