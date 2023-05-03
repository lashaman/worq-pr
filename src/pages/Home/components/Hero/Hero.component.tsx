import {CustomContainer} from '../../../../components/CustomMaterialComponents/CustomMaterial.component';
import React from 'react';
import {Box, CardContent, Grid, styled, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {MainButton, SecondaryButton} from '../../../../components/Buttons/Buttons.component';
import Typewriter from 'typewriter-effect';
import Colors from '../../../../config/colors';
import NotificationCard from '../../../../components/NotificationCard/NotificationCard.component';
import PiggyBank from '../../../../assets/icons/piggy-bank.svg';
import Delete from '../../../../assets/icons/delete.svg';
import HeroBackground from '../../../../assets/images/hero-background.png';

const HeroDescBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 0;
`;

const ButtonBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;

const DescriptionHeading = styled(Typography)`
  width: 100%;
  white-space: pre-wrap;
  text-align: left;
	font-family: 'Avenir Black';
  color: ${Colors.purple};
	min-height: 176.8px;
  font-weight: 700;
`;


const HeroContainer = styled(CustomContainer)`
	position: relative;
	z-index: 1;
`;

const HeroBox = styled(Box)`
	position: relative;
	background-image: url(${HeroBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: left;
`;

interface HeroNotification {
	title: string;
	description: string;
}

interface ButtonTexts {
	secondary: string;
	mainXs: string;
	mainMd: string;
}

interface HeroProps {
	title: string;
	titles: string[];
	description: string;
	buttonTexts: ButtonTexts;
	topNotification: HeroNotification;
	bottomNotification: HeroNotification;
}

const Hero = ({title, titles, description, buttonTexts, topNotification, bottomNotification}: HeroProps) => {
	const {t} = useTranslation();
	return (
		<HeroContainer>
			<Grid container >
				<Grid item xs={12} sm={6} lg={5}>
					<HeroDescBox sx={{paddingTop: {xs: '50px', md: '100px'}}}>
						<DescriptionHeading variant="h2"  sx={{fontSize: {xs:'40px' , md: '60px', lg: '68px'}}} gutterBottom>
							<Typewriter
								options={{
									strings: titles.map(title => t(title)),
									autoStart: true,
									loop: true,
								}}
							/>
						</DescriptionHeading>
						<Typography variant="h5" component="h5" sx={{fontFamily: 'Poppins Light', fontSize: {xs:'17px' ,md: '20px', lg: '22px'}}} gutterBottom>{t(description)}</Typography>
						<ButtonBox>
							<SecondaryButton>{t(buttonTexts.secondary)}</SecondaryButton>
							<span style={{width: '15px'}}></span>
							<MainButton sx={{display: {xs: 'none', md: 'block'}}}>{t(buttonTexts.mainMd)}</MainButton>
							<MainButton sx={{display: {xs: 'block', md: 'none'}}}>{t(buttonTexts.mainXs)}</MainButton>
						</ButtonBox>
					</HeroDescBox>
				</Grid>
				<Grid item xs={12} sm={6} lg={7} sx={{display: {xs: 'none', md: 'block' }}}>
					<HeroBox sx={{
						height: {
							sm: '432px',
							lg: '772px'
						}
					}}>
						<CardContent>
							<Box>
								<Box sx={{
									position: 'absolute',
									top: {md: '67px', lg: '144px'},
									left: {md: '-74px', lg: '-9px'},
								}}>
									<NotificationCard title={topNotification.title} description={topNotification.description}
										icon={Delete}/>
								</Box>
								<Box sx={{
									position: 'absolute',
									bottom: {md: '-47px',lg: '144px'},
									right: {md: '24px',lg: '-9px'},
								}}>
									<NotificationCard title={bottomNotification.title} description={bottomNotification.description}
										icon={PiggyBank}/>
								</Box>
							</Box>
						</CardContent>
					</HeroBox>
				</Grid>
			</Grid>
		</HeroContainer>
	);
};

export default Hero;
