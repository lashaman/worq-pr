import {CustomContainer} from '../atoms/custom-components';
import React from 'react';
import {Box, CardContent, Grid, styled, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {MainButton, SecondaryButton} from '../atoms/common-button.component';
import Colors from '../config/colors';
import NotificationCard from '../atoms/notification-card.component';
import PiggyBank from '../assets/icons/piggy-bank.svg';
import Delete from '../assets/icons/delete.svg';
import HeroBackground from '../assets/images/hero-background.png';

const HeroDescBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 229px 0 0 0;
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
  font-size: 4.25rem;
  text-align: left;
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
	height: 772px;
`;

const TopNotificationBox = styled(Box)`
	position: absolute;
	top: 144px;
	left: -9px;
`;

const BottomNotificationBox = styled(Box)`
	position: absolute;
	bottom: 144px;
	right: -9px;
`;


const Hero = () => {
	const {t} = useTranslation();
	return (
		<HeroContainer>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={5}>
					<HeroDescBox>
						<DescriptionHeading variant="h2" gutterBottom>{t('hero.description.heading')}</DescriptionHeading>
						<Typography variant="h5" component="h5" gutterBottom>{t('hero.description.text')}</Typography>
						<ButtonBox>
							<SecondaryButton>{t('hero.description.button.discover')}</SecondaryButton>
							<span style={{width: '15px'}}></span>
							<MainButton>{t('hero.description.button.bookDemo')}</MainButton>
						</ButtonBox>
					</HeroDescBox>
				</Grid>
				<Grid item xs={12} sm={7}>
					<HeroBox>
						<CardContent>
							<Box>
								<TopNotificationBox>
									<NotificationCard title="notification.top.title" description="notification.top.description"
										icon={Delete}/>
								</TopNotificationBox>
								<BottomNotificationBox>
									<NotificationCard title="notification.bottom.title" description="notification.bottom.description"
										icon={PiggyBank}/>
								</BottomNotificationBox>
							</Box>
						</CardContent>
					</HeroBox>
				</Grid>
			</Grid>
		</HeroContainer>
	);
};

export default Hero;
