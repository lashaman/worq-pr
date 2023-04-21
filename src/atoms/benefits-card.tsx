import {Box, Card, CardContent, Grid, styled, Typography} from '@mui/material';
import React from 'react';
import {CustomCardProps} from '../interfaces/custom-card-props.interface';
import Colors from '../config/colors';

const BenefitsCustomCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border: 0;
	box-shadow: none;
	min-height: 105px;
	padding: 0 0 0 0;
`;


const BenefitsCardContent = styled(CardContent)`
	padding-left: 0;
	padding-top: 0;
	padding-bottom: 20px;
`;

const BenefitsHeaderIcon = styled(Box)`
	width: 60px;
	height: 60px;
  background-color: ${Colors.purpleLighter};
  border-radius: 10px;
	margin-left: 13.83px;
  display: flex;
  align-items: center;
  justify-content: center;
	& > img {
		width: 30px;
		height: 30px;
  }
`;

const BenefitsCard = ({icon,title, description}: CustomCardProps) => {
	return (
		<BenefitsCustomCard>
			<Grid
				container
				direction="row"
				justifyContent="start"
				alignItems="start"
			>
				<Grid item xs={2}>
					<BenefitsHeaderIcon>
						<img src={icon} alt="O"/>
					</BenefitsHeaderIcon>
				</Grid>
				<Grid item xs={10}>
					<BenefitsCardContent>
						<Typography variant="h6" >
							{title}
						</Typography>
						<Typography variant="body1" fontSize="1.25rem" >
							{description}
						</Typography>
					</BenefitsCardContent>
				</Grid>
			</Grid>
		</BenefitsCustomCard>
	);
};

export default BenefitsCard;
