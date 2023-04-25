import {CustomContainer} from '../../../../components/CustomMaterialComponents/CustomMaterial.component';
import React from 'react';
import {Box, CardContent, Grid, styled, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {MainButton, SecondaryButton} from '../../../../components/Buttons/Buttons.component';
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


const Hero = () => {
	const {t} = useTranslation();
	return (
		<HeroContainer>
			<Grid container >
				<Grid item xs={12} sm={6} lg={5}>
					<HeroDescBox sx={{paddingTop: {xs: '50px', md: '100px'}}}>
						<DescriptionHeading variant="h2"  sx={{fontSize: {xs:'40px' , md: '60px', lg: '68px'}}} gutterBottom>{t('hero.description.heading')}</DescriptionHeading>
						<Typography variant="h5" component="h5" sx={{fontFamily: 'Poppins Light', fontSize: {xs:'17px' ,md: '20px', lg: '22px'}}} gutterBottom>{t('hero.description.text')}</Typography>
						<ButtonBox>
							<SecondaryButton>{t('hero.description.button.discover')}</SecondaryButton>
							<span style={{width: '15px'}}></span>
							<MainButton sx={{display: {xs: 'none', md: 'block'}}}>{t('hero.description.button.bookDemo')}</MainButton>
							<MainButton sx={{display: {xs: 'block', md: 'none'}}}>{t('bookDemo.short')}</MainButton>
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
									<NotificationCard title="notification.top.title" description="notification.top.description"
										icon={Delete}/>
								</Box>
								<Box sx={{
									position: 'absolute',
									bottom: {md: '-47px',lg: '144px'},
									right: {md: '24px',lg: '-9px'},
								}}>
									<NotificationCard title="notification.bottom.title" description="notification.bottom.description"
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
