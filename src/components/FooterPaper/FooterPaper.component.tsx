import React from 'react';
import {Grid, Paper, styled, Typography} from '@mui/material';
import Colors from '../../config/colors';
import { useTranslation } from 'react-i18next';
import {MainButton} from '../Buttons/Buttons.component';
import Box from '@mui/material/Box';
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
		gridSplit: {text: number, button: number},
		children: React.ReactNode
}

const FooterPaper = ({title, children, elevation, maxWidth, gridSplit, css}: FooterPaperProps) => {
	return (
		<ProductFooterPaper sx={{padding: {xs: '40px 16px', md: '70px 0', lg: '80px 0'}, ...css}} elevation={elevation}>
			<Grid container maxWidth={maxWidth} justifyContent="flex-start">
				<Grid item xs={12} md={gridSplit.text} >
					<ProductFooterTitle sx={{
						fontSize: {xs: '40px', md: '48px' , lg: '68px', lineHeight: 1.15},
						textAlign: {xs: 'center', md: 'left'},
						paddingBottom: {xs: '20px', md: '10px'}
					}} >
						{title}
					</ProductFooterTitle>
				</Grid>
				<Grid item xs={12} md={gridSplit.button}>
					<Box sx={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
						{children}
					</Box>
				</Grid>
			</Grid>
		</ProductFooterPaper>
	);
};

export default FooterPaper;
