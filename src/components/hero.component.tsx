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
import WorkQualityBackground from '../assets/images/work-quality-background.png';

const HeroBox = styled(Box)`
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

const Hero = () => {
	const {t} = useTranslation();
	return (
		<CustomContainer sx={{position: 'relative', zIndex: 1}}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={5}>
					<HeroBox>
						<DescriptionHeading variant="h2" gutterBottom>{t('hero.description.heading')}</DescriptionHeading>
						<Typography variant="h5" component="h5" gutterBottom>{t('hero.description.text')}</Typography>
						<ButtonBox>
							<SecondaryButton>{t('hero.description.button.discover')}</SecondaryButton>
							<span style={{width: '15px'}}></span>
							<MainButton>{t('hero.description.button.bookDemo')}</MainButton>
						</ButtonBox>
					</HeroBox>
				</Grid>
				<Grid item xs={12} sm={7}>
					<Box sx={{position: 'relative', backgroundImage: `url(${HeroBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left' ,  height: '722px'}}>
						<CardContent sx={{}}>
							<Box>
								<div style={{
									position: 'absolute',
									top: '144px',
									left: '-9px',
								}}>
									<NotificationCard title="notification.top.title" description="notification.top.description"
										icon={Delete}/>
								</div>
								<div style={{
									position: 'absolute',
									bottom: '114px',
									right: '-9px',
								}}>
									<NotificationCard title="notification.bottom.title" description="notification.bottom.description"
										icon={PiggyBank}/>
								</div>
							</Box>
						</CardContent>
					</Box>
				</Grid>
			</Grid>
		</CustomContainer>
	);
};

export default Hero;
