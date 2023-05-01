import React from 'react';
import FooterPaper from '../../components/FooterPaper/FooterPaper.component';
import {MainButton, SecondaryButton} from '../../components/Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import {Container, Divider, useMediaQuery, useTheme} from '@mui/material';
import AboutDescription from './components/AboutDescription/AboutDescription.component';
import Team from './components/Team/Team.component';
import {TeamMembersList} from '../../config/team-members-list';
import Colors from '../../config/colors';


const About = () => {
	const {t} = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	return (
		<Container maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>
			<AboutDescription title="aboutPage.description.title" mobileDescription="aboutPage.mobileDescription" description="aboutPage.description.text"/>
			<Team title="aboutPage.team.title" teamMembers={TeamMembersList}/>
			{isDesktop && <FooterPaper title={t('productPage.pageFooter.title')} maxWidth="1280px" xs={7} md={7} lg={7} elevation={0}>
				<SecondaryButton sx={{ fontSize: '18px'}}>
					{t('Discover.short')}
				</SecondaryButton>
				<MainButton sx={{ fontSize: '18px', marginLeft: '10px'}}>
					{t('bookDemo.long')}
				</MainButton>
			</FooterPaper>}
			{isMobile && <Divider orientation="horizontal" sx={{borderColor: Colors.purple}} />}
		</Container>
	);
};

export default About;
