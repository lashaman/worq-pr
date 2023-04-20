import {Box, Card, CardActions, CardContent, CardHeader, IconButton, styled, Typography} from '@mui/material';
import Colors from '../config/colors';
import React from 'react';

const ProductIcon = styled(Box)`
  width: 82px;
  height: 82px;
  background-color: ${Colors.purpleLighter};
	margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductTitle = styled(Typography)`
	font-size: 1.66rem;
	font-weight: 700;
	color: ${Colors.black};
`;

const ProductCustomCard = styled(Card)`
	width: 100%;
	height: 288px;
	border-radius: 30px;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), -1px 19px 19px rgba(41, 0, 102, 0.02), 0px 5px 10px rgba(41, 0, 102, 0.02), 0px 0px 0px rgba(41, 0, 102, 0.02);
	background-color: ${Colors.white};
`;


interface ProductCardProps {
	title: string;
	description: string;
	icon: string;
	buttonText: string;
}

const ProductCard = ({title, description, icon}: ProductCardProps) => {
	return (
		<ProductCustomCard>
			<CardHeader
				avatar={
					<ProductIcon>
						<img src={icon} alt="O"/>
					</ProductIcon>
				}
				title={
					<ProductTitle variant="h3" >
						{title}
					</ProductTitle>
				}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="share">
				</IconButton>
			</CardActions>
		</ProductCustomCard>
	);
};

export default ProductCard;
