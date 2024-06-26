import React, { useState} from 'react';
import Colors from '../../../../config/colors';
import {Box, Grid, IconButton, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import Container from '@mui/material/Container';
import TestimonialsCard from '../../../../components/TestimonialsCard/TestimonialsCard.component';
import {Trans, useTranslation} from 'react-i18next';
import {TestimonialsInterface} from '../../../../interfaces/testimonials.interface';
import TestimonialsCompanyIcon from '../../../../assets/images/testimonials-company.png';
import {Right} from '../../../../components/JsxIcons/JsxIcons.component';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsContainer = styled(Container)`
	display: flex;
	width: 100%;
	background-color: ${Colors.purpleLighter};
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	font-weight: 700;
	font-family: 'Avenir black';
	& > span {
		color: ${Colors.purple};
  }
`;

const TestimonialsSubTitle = styled(Typography)`
	width: 325px;
	font-family: 'Poppins Medium';
	white-space: pre-wrap;
	padding: 30px 0;
	& > span {
		font-family: 'Poppins Bold';
  }
`;

const TestimonialsControlsGrid = styled(Grid)`
	display: flex;
	justify-content: flex-end;
`;

const CustomSwiper = styled(Swiper)`
	padding-bottom: 50px;
	& > .swiper-wrapper {
		& > .sriper-pagination {
			top: 10px;
    }
  }
`;

interface TestimonialsProps {
	title: string;
	subTitle: string;
	testimonials: TestimonialsInterface[];
}

const Testimonials = ({title, subTitle, testimonials}: TestimonialsProps) => {
	const {t} = useTranslation();
	const theme = useTheme();
	const showPagination = useMediaQuery(theme.breakpoints.down('md'));


	const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);

	const swiper = useSwiper();

	return (
		<TestimonialsContainer maxWidth={false} sx={{height: {md: '593px', lg: '822px'}, padding: {xs: '50px 16px 20px 16px' , lg: '100px 0'}}}>
			<TestimonialsBox>
				<Grid container>
					<Grid item xs={12}>
						<TestimonialsTitle variant={'h2'} sx={{
							fontSize: {xs: '28px', lg: '36px'},
							width: {xs: '80%', lg: '100%'},
						}}>
							<Trans
								i18nKey={title}
								components={{ span: <span />}}
							/>
						</TestimonialsTitle>
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={10}>
							<TestimonialsSubTitle variant={'h2'} sx={{fontSize: {xs: '16px', md: '20px'}, borderBottom: {md: `1px solid ${Colors.purple}`}, marginBottom: {md: '20px'}}} >
								<Trans
									i18nKey={subTitle}
									components={{ span: <span />}}
								/>
							</TestimonialsSubTitle>
						</Grid>
						<TestimonialsControlsGrid item xs={2} sx={{display: {xs: 'none', md: 'flex'}}}>
							<IconButton color="primary"  component="label" className="prev-button" onClick={() => swiper?.slidePrev()}>
								<Right left={true} disabled={prevButtonDisabled}/>
							</IconButton>
							<IconButton color="primary"  component="label" className="next-button" onClick={() => swiper?.slideNext()}>
								<Right disabled={nextButtonDisabled}/>
							</IconButton>
						</TestimonialsControlsGrid>
					</Grid>
				</Grid>
				<Grid container className="swiper-container" >
					<CustomSwiper
						modules={[Navigation, Pagination]}
						pagination={showPagination}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 1,
								spaceBetween: 30,
							},
							1280: {
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
					>
						{testimonials.map((testimonial: TestimonialsInterface, index: number) => (
							<SwiperSlide key={index} virtualIndex={index} >
								<TestimonialsCard {...testimonial}/>
							</SwiperSlide>
						))}
					</CustomSwiper>
				</Grid>
			</TestimonialsBox>
		</TestimonialsContainer>
	);
};

export default Testimonials;

