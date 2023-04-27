import React from 'react';
import {Card, CardContent, CardHeader, Grid, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import Colors from '../../../../config/colors';
import {CustomCardProps} from '../../../../interfaces/custom-card-props.interface';
import {Trans} from 'react-i18next';

const ProductPageCustomCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border: 0;
	box-shadow: none;
	padding: 0 0 0 0;
`;

const ProductPageCardContent = styled(CardContent)`
	padding-left: 0;
	padding-top: 0;
	padding-bottom: 20px;
`;

const ProductPageCardTitle = styled(Typography)`
	font-family: 'Avenir Black';
	white-space: pre-wrap;
  color: ${Colors.black};
	& > span {
		color: ${Colors.purple};
	}
`;

const ProductPageCardDescription = styled(Typography)`
	font-family: 'Poppins Light';
	color: ${Colors.black};
	& > span {
		font-family: 'Poppins Bold';
  }
`;


const ProductPageCard = ({icon, title, description}: CustomCardProps) => {
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'));
	return (
		<ProductPageCustomCard sx={{
			minHeight: {xs: '90px', lg: '105px'}}}>
			<Grid
				container
				direction="row"
				justifyContent="start"
				alignItems="start"
			>
				{isScreenSmall ? (<>
					<CardHeader
						sx={{padding: '0', width: '100%'}}
						avatar={<Box component="img" src={icon} alt="O" sx={{height: '100px', width: '100px'}} />}
						title={
							<ProductPageCardTitle variant="h6" alignItems="center" sx={{fontSize: {xs: '24px', lg: '36px'}, height: '100px', paddingTop: '16px'}}>
								<Trans i18nKey={title} components={{span: <span  />}} />
							</ProductPageCardTitle>
						}
					/>
					<ProductPageCardContent>
						<ProductPageCardDescription variant="body1" sx={{fontSize: {xs: '16px', lg: '20px'}}}>
							<Trans i18nKey={description} components={{span: <span  />}} />
						</ProductPageCardDescription>
					</ProductPageCardContent>
				</>
				): (
					<>
						<Grid item xs={2}>
							<Box component="img" src={icon} alt="O" sx={{height: '100px', width: '100px'}} />
						</Grid>
						<Grid item xs={10} sx={{paddingLeft: {xs: '26px', lg: '0'}}}>
							<ProductPageCardContent sx={{paddingLeft: '30px'}}>
								<ProductPageCardTitle variant="h6" sx={{fontSize: {xs: '24px', lg: '36px'}}}>
									<Trans i18nKey={title} components={{span: <span  />}} />
								</ProductPageCardTitle>
								<ProductPageCardDescription variant="body1" sx={{fontSize: {xs: '16px', lg: '20px'}}}>
									<Trans i18nKey={description} components={{span: <span  />}} />
								</ProductPageCardDescription>
							</ProductPageCardContent>
						</Grid>
					</>
				)
				}
			</Grid>
		</ProductPageCustomCard>
	);
};

export default ProductPageCard;
