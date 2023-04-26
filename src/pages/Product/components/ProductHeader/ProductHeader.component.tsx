import React from 'react';
import {Grid, Paper, styled, Typography} from '@mui/material';
import Colors from '../../../../config/colors';
import {useTranslation} from 'react-i18next';

const ProductHeaderPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${Colors.purpleLighter};
`;

const ProductHeaderTitle = styled(Typography)`
	font-family: 'Avenir Black';
	color: ${Colors.purple};
	padding-bottom: 20px;
`;


const ProductHeader = () => {
	const {t} = useTranslation();
	return (
		<>
			<ProductHeaderPaper elevation={0} sx={{padding: {xs: '50px 0', md: '70px 0', lg: '100px 0'}}}>
				<Grid container maxWidth="1280px" justifyContent="flex-start">
					<Grid item xs={12} >
						<ProductHeaderTitle sx={{fontSize: {xs: '40px', md: '48px' , lg: '68px'}}}>
							{t('productPage.pageHeader.title')}
						</ProductHeaderTitle>
					</Grid>
					<Grid item xs={12} >
						<Typography sx={{fontSize: {xs: '18px', md: '20px' , lg: '22px'}, whiteSpace: 'pre-wrap'}} fontFamily="Poppins Medium">
							{t('productPage.pageHeader.description')}
						</Typography>
					</Grid>
				</Grid>
			</ProductHeaderPaper>
		</>
	);
};

export default ProductHeader;
