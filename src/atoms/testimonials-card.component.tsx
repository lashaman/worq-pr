import React from 'react';
import Colors from '../config/colors';
import {Box, Card, CardActions, CardContent, styled, Typography} from '@mui/material';
import {TestimonialsInterface} from '../interfaces/testimonials.interface';


const TestimonialsCustomCard = styled(Card)`
  width: 100%;
  border-radius: 30px;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), -1px 19px 19px rgba(41, 0, 102, 0.02), 0 5px 10px rgba(41, 0, 102, 0.02), 0 0 0 rgba(41, 0, 102, 0.02);
  background-color: ${Colors.white};	
`;

const TestimonialsCardContent = styled(CardContent)`
	padding: 15px 30px 10px 30px;
`;

const TestimonialsCardActions = styled(CardActions)`
	padding: 24px 0;
	margin: 0 30px;
	border-top: 1px solid ${Colors.purpleLight};
`;

const TestimonialDescription = styled(Typography)`
	font-size: 1.05rem;
	&  span {
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
			<TestimonialsCardContent>
				<TestimonialDescription variant="subtitle1" sx={{fontSize: {md: '14px', lg: '18px'}}} >
					{description}
				</TestimonialDescription>
			</TestimonialsCardContent>
			<TestimonialsCardActions>
				<Box sx={{marginRight: '20px'}}>
					<img	src={companyIcon} alt="O"/>
				</Box>
				<Box>
					<Typography variant="h6" >
						{companyRepresentative}
					</Typography>
					<Typography variant="subtitle1">
						{companyRepresentativePosition}
					</Typography>
				</Box>
			</TestimonialsCardActions>
		</TestimonialsCustomCard>
	);
};

export default TestimonialsCard;
