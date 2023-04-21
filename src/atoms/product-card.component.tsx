import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader, Grid,
	Stack,
	styled,
	Typography
} from '@mui/material';
import Colors from '../config/colors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Product} from '../interfaces/product.interface';

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

const ProductCardHeader = styled(CardHeader)`
	padding-bottom: 20px;
`;

const ProductCardContent = styled(CardContent)`
	height: 81px;
	padding-top: 0;
	padding-bottom: 20px;
`;

const ProductDescription = styled(Typography)`
	font-size: 1rem;
	color: ${Colors.black};
`;

const ProductCardActions = styled(CardActions)`
	padding: 0;
	height: 64px;
	width: 100%;
`;

const ProductCardButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 100%;
	width: 94%;
	margin: 0 auto;
	text-align: left;
	border-top: 2px solid ${Colors.purpleLighter};
	font-size: 1rem;
	font-weight: 700;
	color: ${Colors.purple};
	&:hover, 
	&:active,
	&:focus {
		background-color: ${Colors.white};
		transition: opacity 0.2s ease-in-out;
		opacity: 0.8;
  }
`;


interface ProductCardProps extends Product {
	handler: (id: number) => void;
}

const ProductCard = ({id, title, description, icon, buttonText, handler}: ProductCardProps) => {
	return (
		<ProductCustomCard>
			<Grid
				container
				direction="column"
				justifyContent="space-between"
				alignItems="center"
			>
				<ProductCardHeader
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
				<ProductCardContent>
					<ProductDescription variant="h6" >
						{description}
					</ProductDescription>
				</ProductCardContent>
				<ProductCardActions disableSpacing>
					<ProductCardButton
						size="small"
						onClick={() => handler(id)}
						endIcon={<KeyboardArrowRightIcon fontSize="large" sx={{marginRight: '-2px'}} />}>
						{buttonText}
					</ProductCardButton>
				</ProductCardActions>
			</Grid>
		</ProductCustomCard>
	);
};

export default ProductCard;
