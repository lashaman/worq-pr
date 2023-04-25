import React from 'react';
import Colors from '../../config/colors';
import {Box, Card, CardActions, CardContent, styled, Typography} from '@mui/material';
import {TestimonialsInterface} from '../../interfaces/testimonials.interface';


const TestimonialsCustomCard = styled(Card)`
  width: 100%;
  border-radius: 30px;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), -1px 19px 19px rgba(41, 0, 102, 0.02), 0 5px 10px rgba(41, 0, 102, 0.02), 0 0 0 rgba(41, 0, 102, 0.02);
  background-color: ${Colors.white};	
`;

const TestimonialsCardActions = styled(CardActions)`
	border-top: 1px solid ${Colors.purpleLight};
`;

const TestimonialDescription = styled(Typography)`
	font-family: 'Poppins light';
	font-size: 1.05rem;
	line-height: 1.15;
	&  span {
		font-family: 'Poppins bold';
		font-weight: 900;
	}
`;

type TestimonialsCardProps = TestimonialsInterface;

const TestimonialsCard = ({
	description,
	companyIcon,
	companyRepresentative,
	companyRepresentativePosition
}: TestimonialsCardProps) => {
	return (
		<TestimonialsCustomCard>
			<CardContent sx={{	padding: {xs: '7.5px 20px 5px 20px', md: '15px 30px 10px 30px'}}}>
				<TestimonialDescription variant="subtitle1" sx={{fontSize: {xs: '16px', md: '18px', lg: '20px'}}} >
					{description}
				</TestimonialDescription>
			</CardContent>
			<TestimonialsCardActions sx={{padding: {xs: '10px 15px', md: '24px 20px'}}}>
				<Box sx={{marginRight: '20px'}}>
					<img	src={companyIcon} alt="O"/>
				</Box>
				<Box>
					<Typography variant="h6"  sx={{fontFamily: 'Poppins Bold', fontSize: {xs: '18px', md: '20px'}}}>
						{companyRepresentative}
					</Typography>
					<Typography variant="subtitle1" sx={{fontFamily: 'Poppins Medium', fontSize: {xs: '14px', md: '16px'}}}>
						{companyRepresentativePosition}
					</Typography>
				</Box>
			</TestimonialsCardActions>
		</TestimonialsCustomCard>
	);
};

export default TestimonialsCard;
