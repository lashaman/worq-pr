import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
	styled,
	Typography
} from '@mui/material';
import Colors from '../../config/colors';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Product} from '../../interfaces/product.interface';
import {Trans} from 'react-i18next';


const ProductIconBox = styled(Box)`
  background-color: ${Colors.purpleLighter};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
	`;

const ProductTitle = styled(Typography)`
  font-family: 'Avenir Black';
	font-weight: 700;
	white-space: pre-wrap;
	color: ${Colors.black};
`;

const ProductCustomCard = styled(Card)`
	width: 100%;
	border-radius: 30px;
  box-shadow: -3px 42px 25px rgba(41, 0, 102, 0.01), -1px 19px 19px rgba(41, 0, 102, 0.02), 0 5px 10px rgba(41, 0, 102, 0.02), 0 0 0 rgba(41, 0, 102, 0.02);
	background-color: ${Colors.white};
`;

const ProductCardHeader = styled(CardHeader)`
	width: 100%;
`;

const ProductCardContent = styled(CardContent)`
	max-width: 100%;
	height: 81px;
	padding-top: 0;
`;

const ProductDescription = styled(Typography)`
	font-family: 'Poppins Light';
	color: ${Colors.black};
	& > span {
    font-family: 'Poppins Bold';
  }
`;

const ProductCardActions = styled(CardActions)`
	width: 100%;
	padding: 0;
`;

const ProductCardButton = styled(Button)`
	font-family: 'Avenir Medium';
	text-transform: none;
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
		<ProductCustomCard sx={{height: {xs: '257px', lg: '288px'}}}>
			<Grid
				container
				justifyContent="start"
				alignItems="center"
			>
				<ProductCardHeader
					sx={{paddingBottom: {xs: '16px', lg: '20px'}}}
					avatar={
						<ProductIconBox  sx={ {height: {xs:'60px', lg: '83px'}, width: {xs:'60px', lg: '83px'}}}>
							<img src={icon} alt="O"/>
						</ProductIconBox>
					}
					title={
						<ProductTitle variant="h3" sx={{fontSize: {xs: '24px', lg:'30px'}}}>
							<Trans i18nKey={title} />
						</ProductTitle>
					}
				/>
				<ProductCardContent sx={{height: {xs: '96px', lg: '81px'}, paddingBottom: {xs: '16px', lg: '20px'}}}>
					<ProductDescription sx={{fontSize: {xs: '15px', lg:'18px'}}}>
						<Trans i18nKey={description} components={{span: <span />}}/>
					</ProductDescription>
				</ProductCardContent>
				<ProductCardActions sx={{height: {xs: '55px', lg: '64px'}}} disableSpacing>
					<ProductCardButton
						size="small"
						onClick={() => handler(id)}
						endIcon={<KeyboardArrowRightIcon fontSize="large" sx={{marginRight: '-2px'}} />}>
						<Trans i18nKey={buttonText} />
					</ProductCardButton>
				</ProductCardActions>
			</Grid>
		</ProductCustomCard>
	);
};

export default ProductCard;
