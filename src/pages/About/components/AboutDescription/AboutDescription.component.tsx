import React from 'react';
import {Box, Grid, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import {CustomContainer} from '../../../../components/CustomMaterialComponents/CustomMaterial.component';
import {Trans} from 'react-i18next';
import Colors from '../../../../config/colors';
import LogoBig from '../../../../assets/images/logo-big.svg';

interface AboutDescriptionProps {
	title: string;
	description: string;
	mobileDescription: string;
}

const AboutDescriptionTitle = styled(Typography)`
	font-family: 'Avenir Black';
	color: ${Colors.black};
	& > span {
		color: ${Colors.purple};
		white-space: pre-wrap;
  }
`;

const AboutDescriptionDescription = styled(Typography)`
	font-family: 'Poppins Light';
	color: ${Colors.black};
	& > p {
		margin-top: 30px;
		margin-bottom: 30px;
		& > span {
			font-family: 'Poppins Bold';
    }
  }
`;

const AboutDescription = ({title, description, mobileDescription}: AboutDescriptionProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<CustomContainer>
			<AboutDescriptionTitle  sx={{
				fontSize: {xs: '40px', md: '48px' , lg: '68px', lineHeight: 1.15},
				textAlign: 'left',
				paddingBottom: {xs: '20px', md: '10px'}
			}}>
				<Trans i18nKey={title} components={{span: <span />}} />
			</AboutDescriptionTitle>
			<Grid container justifyContent="center" spacing={{xs: 2, md: 2.6, lg: 6}} sx={{paddingTop: {xs: '39px', md: '50px'}}}>
				{isMobile ? (
					<>
						<Grid item xs={3}>
							<Box sx={{display: 'flex', padding: {xs: '24px 17px', md: '65px 46px', lg: '115.5px 81.5px'}, justifyContent: 'center', alignItems: 'center', borderRadius: '30px', backgroundColor: Colors.purpleLighter}}>
								<Box component="img" src={LogoBig} width={{xs: '46px', md: '124px', lg: '220px'}}  alt="about-description" />
							</Box>
						</Grid>
						<Grid item xs={9}>
							<Typography fontFamily="Poppins Bold" fontSize="18px">
								<Trans i18nKey={mobileDescription} />
							</Typography>
						</Grid>
					</>
				) : (
					<Grid item xs={12} md={3} lg={4}>
						<Box sx={{display: 'flex', padding: {xs: '24px 17px', md: '65px 46px', lg: '115.5px 81.5px'}, justifyContent: 'center', alignItems: 'center', borderRadius: '30px', backgroundColor: Colors.purpleLighter}}>
							<Box component="img" src={LogoBig} width={{xs: '46px', md: '124px', lg: '220px'}}  alt="about-description" />
						</Box>
					</Grid>)}
				<Grid item xs={12} md={9} lg={8}>
					<AboutDescriptionDescription sx={{
						marginTop: '-30px',
						fontSize: {xs: '16px', md: '18px' , lg: '22px', lineHeight: 1.15},
					}}>
						<Trans i18nKey={description} components={{p: <p />, span: <span />}} />
					</AboutDescriptionDescription>
				</Grid>
			</Grid>
		</CustomContainer>
	);
};

export default AboutDescription;
