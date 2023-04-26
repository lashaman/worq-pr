import React from 'react';
import {Box, Container, Fade, Grid, styled, Typography} from '@mui/material';
import {Trans} from 'react-i18next';
import Colors from '../../../../config/colors';
import {MainButton} from '../../../../components/Buttons/Buttons.component';
import ServicesStepper from '../../../../components/ServiceStepper/ServicesStepper.component';

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
  font-size: 3rem;
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

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Fade in={value === index}>
					<Box sx={{ p: 3 , transition: 'all 0.4s ease-in-out'}}>
						{children}
					</Box>
				</Fade>
			)}
		</div>
	);
};


const Services = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		console.log(newValue);
		setValue(newValue);
	};
	return (
		<ServicesContainer maxWidth={false} sx={{height: {xs: 'auto', md: '880px' , lg: '1083px'}, paddingLeft: {sm: 0}, paddingRight: {sm: 0},}}>
			<ServicesGrid container sx={{
				width: {xs: '100%', lg: '1280px'},
			}}>
				<Grid item xs={12}>
					<ServicesTitle variant="h3"  gutterBottom>
						<Trans
							i18nKey="services.title"
							components={{ span: <span />}}
						/>
					</ServicesTitle>
				</Grid>
				<Grid item xs={7} lg={6}>
					<StepperBox>
						<ServicesStepper changeStep={handleChange}/>
					</StepperBox>
				</Grid>
				<Grid item xs={5} lg={6}>
					<TabPanel value={value} index={0}>
						<ServicesDescriptionTitle  sx={{
							fontSize: {xs: '12px', sm: '20px', md: '28px', lg: '36px'},
						}} variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 1
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" sx={{
							fontSize: {xs: '12px', sm: '14px', md: '16px', lg: '20px'},
						}} gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 2
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 3
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 4
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 5
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={5}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 6
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
					<TabPanel value={value} index={6}>
						<ServicesDescriptionTitle variant="h4" gutterBottom>
							<Trans
								i18nKey="services.description.title"
								components={{ span: <span />}}
							/>
							Tab 7
						</ServicesDescriptionTitle>
						<ServicesDescription variant="body1" gutterBottom>
							<Trans
								i18nKey="services.description.text"
								components={{ span: <span />}}
							/>
						</ServicesDescription>
						<MainButton variant="contained"  >
							<Trans i18nKey="services.description.button" />
						</MainButton>
					</TabPanel>
				</Grid>
			</ServicesGrid>
		</ServicesContainer>
	);
};

export default Services;
