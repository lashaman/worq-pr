import React from 'react';
import {Grid, Paper, styled, Typography} from '@mui/material';
import Colors from '../../config/colors';
import Box from '@mui/material/Box';
import {CustomContainer} from '../CustomMaterialComponents/CustomMaterial.component';
const ProductFooterPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const ProductFooterTitle = styled(Typography)`
	font-family: 'Avenir Black';
	color: ${Colors.purple};
`;

interface FooterPaperProps {
	title: string;
	css?: React.CSSProperties;
	elevation: number;
	maxWidth: string;
	xs: number,
	md: number,
	lg: number,
	children: React.ReactNode
}

const GridColumns = 12;

const FooterPaper = ({title, children, elevation, maxWidth, xs, md, lg, css}: FooterPaperProps) => {
	return (
		<ProductFooterPaper sx={{padding: {xs: '40px 16px', md: '70px 0', lg: '80px 0'}, ...css}} elevation={elevation}>
			<CustomContainer maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>
				<Grid container maxWidth={maxWidth} columns={GridColumns} justifyContent={{xs: 'center', md: 'flex-start'}}>
					<Grid item xs={xs} md={md} lg={lg}>
						<ProductFooterTitle sx={{
							fontSize: {xs: '40px', md: '48px' , lg: '67px', lineHeight: 1.15},
							textAlign: {xs: 'center', md: 'left'},
							paddingBottom: {xs: '20px', md: '10px'}
						}} >
							{title}
						</ProductFooterTitle>
					</Grid>
					<Grid item xs={GridColumns - xs} md={GridColumns - md} lg={GridColumns - lg}>
						<Box sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
							{children}
						</Box>
					</Grid>
				</Grid>
			</CustomContainer>
		</ProductFooterPaper>
	);
};

export default FooterPaper;
