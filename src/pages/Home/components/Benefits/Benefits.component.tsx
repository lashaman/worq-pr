import {Box, Container, Grid, styled, Typography} from '@mui/material';
import React from 'react';
import {t} from 'i18next';
import BenefitsBg from '../../../../assets/images/benefits-bg.png';
import Colors from '../../../../config/colors';
import {CustomCardProps} from '../../../../interfaces/custom-card-props.interface';
import ThumbsUp from '../../../../assets/icons/thumbs-up.svg';
import Delete from '../../../../assets/icons/delete.svg';
import PiggyBank from '../../../../assets/icons/piggy-bank.svg';
import BadgeCheck from '../../../../assets/icons/badge-check.svg';
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
  & > .MuiGrid-item {
    &:nth-child(2) {
      padding-left: 4.810em;
    }
  }
`;

const BenefitsTitle = styled(Typography)`
  display: flex;
  font-weight: 700;
	& > span {
		color: ${Colors.black};
		margin-left: 10px;
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

const Benefits = () => {
	const BenefitsList: CustomCardProps[] = [
		{
			title: t('benefits.list.delightedCustomers.title'),
			description: t('benefits.list.delightedCustomers.description'),
			icon: ThumbsUp,
		},
		{
			title: t('benefits.list.eliminateDefects.title'),
			description: t('benefits.list.eliminateDefects.description'),
			icon: Delete,
		},
		{
			title: t('benefits.list.reduceCosts.title'),
			description: t('benefits.list.reduceCosts.description'),
			icon: PiggyBank,
		},
		{
			title: t('benefits.list.achieveCompliance.title'),
			description: t('benefits.list.achieveCompliance.description'),
			icon: BadgeCheck,
		},
	];

	return (
		<Container maxWidth="lg" sx={{padding: '63px 0'}}>
			<BenefitsGrid container spacing={0}>
				<Grid item xs={6}>
					<BenefitsImageBox sx={{
						height: {sm: '250px', md: '467px', lg: '650px'}
					}}>
					</BenefitsImageBox>
				</Grid>
				<Grid item xs={6}>
					<Box sx={{height: {md: '530px', lg: '628px'}}}>
						<DescriptionBox>
							<BenefitsTitle variant="h3" color={Colors.purple} sx={{
								fontSize: {sm: '20px', md: '24px', lg: '36px'}
							}}>
								<Trans
									i18nKey="benefits.title"
									components={{ span: <span />}}
								/>
							</BenefitsTitle>
						</DescriptionBox>

						{BenefitsList.map(
							(Benefit, index) => <BenefitsCard key={index} {...Benefit} />
						)}

						<MainButton size="small">{t('bookDemo.title')}</MainButton>
					</Box>
				</Grid>
			</BenefitsGrid>
		</Container>
	);
};

export default Benefits;
