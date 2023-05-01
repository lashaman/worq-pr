import {Box, Container, Grid, styled, Typography} from '@mui/material';
import React from 'react';
import {t} from 'i18next';
import BenefitsBg from '../../../../assets/images/benefits-bg.png';
import Colors from '../../../../config/colors';
import {CustomCardProps} from '../../../../interfaces/custom-card-props.interface';
import BenefitsCard from '../../../../components/BenefitsCard/BenefitsCard';
import {MainButton} from '../../../../components/Buttons/Buttons.component';
import {Trans} from 'react-i18next';


const BenefitsImageBox = styled(Box)`
  width: 100%;
  background-image: url(${BenefitsBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

const BenefitsGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
	@media (min-width: 600px) {
    flex-direction: row-reverse;
  }
	@media (min-width: 1200px) {
		flex-direction: row;
  }
`;

const BenefitsTitle = styled(Typography)`
	font-family: 'Avenir black';
  font-weight: 700;
	& > span {
		color: ${Colors.black};
  }
`;

const DescriptionBox = styled(Box)`
	display: flex;
	width: 100%;
	padding: 20px 0 30px 0;
	flex-direction: row;
	justify-content: start;
	align-items: start;
`;

interface BenefitsProps {
	benefitsList: CustomCardProps[];
	title: string;
}

const Benefits = ({title, benefitsList}: BenefitsProps) => {
	return (
		<Container maxWidth="lg" sx={{padding: {xs:'63px 16px'}}}>
			<BenefitsGrid container spacing={0}>
				<Grid item md={6}>
					<BenefitsImageBox sx={{
						display: {xs: 'none', md: 'flex'},
						height: {md: '467px', lg: '650px'}
					}}>
					</BenefitsImageBox>
				</Grid>
				<Grid item xs={12} md={6} sx={{paddingLeft: {xs: 0 , md: 0, lg: '77px'}}}>
					<Box sx={{height: {xs: '530px', lg: '628px'}}}>
						<DescriptionBox>
							<BenefitsTitle variant="h3" color={Colors.purple} sx={{
								fontSize: {xs: '20px', md: '24px', lg: '36px'},
								width: {xs: '50%', md: '100%'}
							}}>
								<Trans
									i18nKey={title}
									components={{ span: <span />}}
								/>
							</BenefitsTitle>
						</DescriptionBox>
						{benefitsList.map(
							(Benefit, index) => <BenefitsCard key={index} {...Benefit} />
						)}
						<MainButton>{t('bookDemo.short')}</MainButton>
					</Box>
				</Grid>
			</BenefitsGrid>
		</Container>
	);
};

export default Benefits;
