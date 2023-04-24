import React, { useState} from 'react';
import Colors from '../../../../config/colors';
import {Box, Grid, IconButton, styled, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import TestimonialsCard from '../../../../components/TestimonialsCard/TestimonialsCard.component';
import {Trans, useTranslation} from 'react-i18next';
import {TestimonialsInterface} from '../../../../interfaces/testimonials.interface';
import TestimonialsCompanyIcon from '../../../../assets/images/testimonials-company.png';
import {Right} from '../../../../components/JsxIcons/JsxIcons.component';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Virtual} from 'swiper';

// Import Swiper styles
import 'swiper/css';

const TestimonialsContainer = styled(Container)`
	display: flex;
	width: 100%;
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
	font-weight: 700;
	& > span {
		color: ${Colors.purple};
		margin-left: 10px;
  }
`;

const TestimonialsSubTitle = styled(Typography)`
	display: flex;
	width: 325px;
	white-space: pre-wrap;
	padding: 30px 0;
	margin-bottom: 40px;
	border-bottom: 1px solid ${Colors.purple};
  flex: 1;
	font-size: 1.5rem;
`;

const TestimonialsControlsGrid = styled(Grid)`
	display: flex;
	justify-content: flex-end;
`;

const Testimonials = () => {
	const {t} = useTranslation();
	const testimonialsList: TestimonialsInterface[] = [
		{
			description: <Trans i18nKey="testimonials.first.description" components={{span: <span />, p: <p />}} />,
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.first.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.first.companyRepresentative.position')
		},
		{
			description: <Trans i18nKey="testimonials.second.description" components={{span: <span />, p: <p />}} />,
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.second.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.second.companyRepresentative.position')
		},
		{
			description: <Trans i18nKey="testimonials.first.description" components={{span: <span />, p: <p />}} />,
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.first.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.first.companyRepresentative.position')
		},
		{
			description: <Trans i18nKey="testimonials.second.description" components={{span: <span />, p: <p />}} />,
			companyIcon: TestimonialsCompanyIcon,
			companyRepresentative: t('testimonials.second.companyRepresentative.name'),
			companyRepresentativePosition: t('testimonials.second.companyRepresentative.position')
		},
	];

	const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);

	const handlePrev = (e: any) => {
		e.target.closest('.swiper-container')?.swiper.slidePrev();
	};

	const handleNext = (e: any) => {
		e.target.closest('.swiper-container')?.swiper.slideNext();
	};

	return (
		<TestimonialsContainer maxWidth={false} sx={{height: {md: '593px', lg: '822px'}}}>
			<TestimonialsBox>
				<Grid container>
					<Grid item xs={12}>
						<TestimonialsTitle variant={'h2'} sx={{
							fontSize: {md: '28px', lg: '36px'},
						}}>
							<Trans
								i18nKey="testimonials.title"
								components={{ span: <span />}}
							/>
						</TestimonialsTitle>
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={10}>
							<TestimonialsSubTitle variant={'h2'} >
								{t('testimonials.subtitle')}
							</TestimonialsSubTitle>
						</Grid>
						<TestimonialsControlsGrid item xs={2} >
							<IconButton color="primary"  component="label" className="prev-button" onClick={handlePrev}>
								<Right left={true} disabled={prevButtonDisabled}/>
							</IconButton>
							<IconButton color="primary"  component="label" className="next-button" onClick={handleNext}>
								<Right disabled={nextButtonDisabled}/>
							</IconButton>
						</TestimonialsControlsGrid>
					</Grid>
				</Grid>
				<Grid container className="swiper-container" >
					<Swiper
						modules={[Navigation, Pagination, Virtual]}
						spaceBetween={20}
						breakpoints={{
							// when window width is >= 640px
							1024: {
								width: 959,
								slidesPerView: 1,
								spaceBetween: 30,
							},
							1280: {
								width: 1280,
								slidesPerView: 2,
								spaceBetween: 20,
							},
						}}
						navigation={{
							prevEl: '.prev-button',
							nextEl: '.next-button'
						}}
						onToEdge={(swiper) => {
							if (swiper.isBeginning) {
								setPrevButtonDisabled(true);
							}
							if (swiper.isEnd) {
								setNextButtonDisabled(true);
							}

						}}
						onFromEdge={(swiper) => {
							if (!swiper.isBeginning) {
								setPrevButtonDisabled(false);
							}
							if (!swiper.isEnd) {
								setNextButtonDisabled(false);
							}
						}}
						virtual
					>
						{testimonialsList.map((testimonial: TestimonialsInterface, index: number) => (
							<SwiperSlide key={index} virtualIndex={index} >
								<TestimonialsCard {...testimonial}/>
							</SwiperSlide>
						))}
					</Swiper>
				</Grid>
			</TestimonialsBox>
		</TestimonialsContainer>
	);
};

export default Testimonials;

