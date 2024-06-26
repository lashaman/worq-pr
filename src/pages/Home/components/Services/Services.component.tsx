import React from 'react';
import {Box, Container, Grid, styled, Typography} from '@mui/material';
import {Trans} from 'react-i18next';
import Colors from '../../../../config/colors';
import {MainButton, SecondaryButton} from '../../../../components/Buttons/Buttons.component';
import ServicesStepper from '../../../../components/ServiceStepper/ServicesStepper.component';
import TabPanel from '../../../../components/TabPanel/TabPanel.component';
import {ServicesList, TabPanelList} from '../../../../config/services-lists';
import {ServiceListInterface} from '../../../../interfaces/service-list.interface';
import {TabPanelListInterface} from '../../../../interfaces/tabpanel-list.interface';

const ServicesContainer = styled(Container)`
  width: 100%;
	align-items: center;
`;

const ServicesGrid = styled(Grid)`
	padding: 63px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

const ServicesTitle = styled(Typography)`
  font-family: 'Avenir Black';
  display: flex;
  font-weight: 700;
	justify-content: center;
  & > span {
    color: ${Colors.purple};
    margin-left: 10px;
  }
`;

const ServicesDescriptionTitle = styled(Typography)`
	font-weight: 900;
  font-family: 'Avenir Black';
	white-space: pre-wrap;
  & > span {
    color: ${Colors.purple};
  }
`;

const ServicesDescription = styled(Typography)`
	color: ${Colors.black};
	font-family: 'Poppins Light';
	padding-bottom: 20px;
	& > span {
		font-family: 'Poppins Medium';
		font-weight: 900;
  }
`;

const StepperBox = styled(Box)`
	@media (min-width: 600px) {
		transform: scale(0.7);
    & > svg {
      max-width: 100%;
    }
  }
	@media (min-width: 960px) {
		transform: scale(0.89);
    & > svg {
      max-width: 121%;
    }
  }
	
	@media (min-width: 1280px) {
		transform: scale(1);
		& > svg {
			max-width: 110%;
    }
  }
`;


interface ServicesProps {
	title: string;
	servicesList: ServiceListInterface[];
	tabPanelList: TabPanelListInterface[];
}

const Services = ({title, servicesList, tabPanelList}: ServicesProps) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<ServicesContainer maxWidth={false} sx={{height: {xs: 'auto', md: '880px' , lg: '1083px'}, paddingLeft: {md: 0}, paddingRight: {md: 0},}}>
			<ServicesGrid container sx={{
				width: {xs: '100%', lg: '1280px'},
			}}>
				<Grid item xs={12}>
					<ServicesTitle variant="h3" sx={{fontSize: {xs: '28px', md: '40px', lg: '48px'}}}  gutterBottom>
						<Trans
							i18nKey={title}
							components={{ span: <span />}}
						/>
					</ServicesTitle>
				</Grid>
				<Grid item md={7} lg={6} sx={{display: {xs: 'none', md: 'block'}}}>
					<StepperBox>
						<ServicesStepper changeStep={handleChange}/>
					</StepperBox>
				</Grid>
				<Grid item xs={12} sx={{display: {md: 'none'}}}>
					{servicesList.slice(0,2).map((item, index) => (
						<SecondaryButton
							sx={{
								width: '100%',
								margin: '10px 0',
								backgroundColor: value === item.activeStep ? Colors.purple : Colors.purpleLighter,
								color: value === item.activeStep ? Colors.purpleLighter : Colors.black
							}}
							key={index}
							onClick={(e) => handleChange(e,  item.activeStep)}
							variant="contained">
							{item.textContent}
						</SecondaryButton>
					))}
				</Grid>
				<Grid item xs={12} md={5} lg={6}>
					{tabPanelList.map((item, index) => (
						<TabPanel key={index} value={value} index={index}>
							<ServicesDescriptionTitle  sx={{
								fontSize: {xs: '22px', md: '28px', lg: '36px'},
							}} variant="h4" gutterBottom>
								<Trans
									i18nKey={item.title}
									components={{ span: <span />}}
								/>
								Tab {index + 1}
							</ServicesDescriptionTitle>
							<ServicesDescription variant="body1" sx={{
								fontSize: {xs: '16px', md: '16px', lg: '20px'},
							}} gutterBottom>
								<Trans
									i18nKey={item.text}
									components={{ span: <span />}}
								/>
							</ServicesDescription>
							<MainButton variant="contained"  >
								<Trans i18nKey={item.button} />
							</MainButton>
						</TabPanel>
					))}
				</Grid>
				<Grid item xs={12} sx={{display: {md: 'none'}}}>
					{servicesList.slice(2,7).map((item, index) => (
						<SecondaryButton
							sx={{
								width: '100%',
								margin: '10px 0',
								backgroundColor: value === item.activeStep ? Colors.purple : Colors.purpleLighter,
								color: value === item.activeStep ? Colors.purpleLighter : Colors.black
							}}
							key={index}
							onClick={(e) => handleChange(e,  item.activeStep)}
							variant="contained">
							{item.textContent}
						</SecondaryButton>
					))}
				</Grid>
			</ServicesGrid>
		</ServicesContainer>
	);
};

export default Services;
