import {Box, Grid, Paper, styled, Typography} from '@mui/material';
import {Trans} from 'react-i18next';
import React from 'react';
import PageHero from '../../../../assets/images/page-hero.png';
import InstructionsManual from '../../../../assets/images/instructions-manual.png';
import Colors from '../../../../config/colors';
const HeroPaper = styled(Paper)`
	background: url(${PageHero}) no-repeat center center;
	background-size: cover;
	border-radius: 30px;
`;

const HeroPageTitle = styled(Typography)`
  font-family: 'Avenir Black';
  white-space: pre;
	color: ${Colors.black};
	& > span {
		color: ${Colors.purple};
	}
`;

interface SopsProps {
	isDesktop: boolean;
}

const Sops = ({isDesktop}: SopsProps) => (
	<HeroPaper elevation={0} sx={{padding: {xs: '16px', md: '30px', lg: '30px 94px'}}}>
		<Grid
			container
			direction={isDesktop ? 'row' : 'column-reverse'}
			justifyContent="flex-start"
			alignItems="center"
			spacing={2} >
			<Grid item xs={12} md={6}>
				<Box component="img" src={InstructionsManual}/>
			</Grid>
			<Grid item xs={12} md={6}>
				<HeroPageTitle sx={{fontSize: {xs: '28px', md: '40px', lg:'48px'}, padding: {xs: '50px 0 0 0', md: 'unset'}}}>
					<Trans i18nKey="servicePage.hero.title" components={{span: <span />}} />
				</HeroPageTitle>
			</Grid>
		</Grid>
	</HeroPaper>
);

export default Sops;
