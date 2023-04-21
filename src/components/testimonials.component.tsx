import React from 'react';
import Colors from '../config/colors';
import {Box, Grid, styled, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import TestimonialsCard from '../atoms/testimonials-card.component';
import {useTranslation} from 'react-i18next';
import {TestimonialsInterface} from '../interfaces/testimonials.interface';
import TestimonialsCompanyIcon from '../assets/images/testimonials-company.png';

const TestimonialsContainer = styled(Container)`
	display: flex;
	width: 100%;
	height: 822px;
	background-color: ${Colors.purpleLighter};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px 0;
`;

const TestimonialsBox = styled(Box)`
	display: flex;
	width: 100%;
	max-width: 1280px;
	height: 100%;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 0 0 0 0;
`;

const TestimonialsTitle = styled(Typography)`
	display: flex;
	font-size: 2.2rem;
	font-weight: 700;
`;

const TestimonialsSubTitle = styled(Typography)`
	display: flex;
	width: 25%;
	white-space: pre-wrap;
	padding: 30px 0;
	margin-bottom: 40px;
	border-bottom: 1px solid ${Colors.purple};
  flex: 1;
	font-size: 1.5rem;
`;


const Testimonials = () => {
	const {t} = useTranslation();
	const testimonialsList: TestimonialsInterface[] = [
		{
			description: t('testimonials.first.description'),
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.first.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.first.companyRepresentative.position')
		},
		{
			description: t('testimonials.second.description'),
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.second.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.second.companyRepresentative.position')
		}
	];
	return (
		<TestimonialsContainer maxWidth={false}>
			<TestimonialsBox>
				<Grid container>
					<Grid item xs={12}><TestimonialsTitle variant={'h2'}>{t('testimonials.title')}</TestimonialsTitle></Grid>
					<Grid item xs={12}><TestimonialsSubTitle variant={'h2'}>{t('testimonials.subtitle')}</TestimonialsSubTitle></Grid>
				</Grid>
				<Grid container spacing={3}>
					{testimonialsList.map((testimonial: TestimonialsInterface, index: number) => <Grid item key={index} xs={6}><TestimonialsCard {...testimonial}/></Grid>)}
				</Grid>
			</TestimonialsBox>
		</TestimonialsContainer>
	);
};

export default Testimonials;

