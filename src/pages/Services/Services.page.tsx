import {Box, Divider, Grid, Stack, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import React, {useState} from 'react';
import {CustomContainer} from '../../components/CustomMaterialComponents/CustomMaterial.component';
import {ServicesList} from '../../config/services-lists';
import ServicesSidebar from './components/ServicesSidebar/ServicesSidebar.component';
import NewsBar from './components/NewsBar/NewsBar.component';
import Sops from './components/Sops/Sops.component';
import TabPanel from '../../components/TabPanel/TabPanel.component';
import {maxTextLength, newsData} from '../../config/news-list';
import AwesomeServices from './components/AwesomeServices/AwesomeServices.component';
import {Trans} from 'react-i18next';
import ServicesCard from './components/ServicesCard/ServicesCard';
import {serviceCardList} from '../../config/service-card-list';
import Colors from '../../config/colors';


const ServicesTypography = styled(Typography)`
	font-family: 'Poppins Light';
	font-size: 18px;
	& > p {
		padding-top: 10px;
		padding-bottom: 10px;
	}
`;

const Services = () => {
	const [tabValue, setTabValue] = useState(0);
	const theme = useTheme();
	const isScreenTabletOrDesktop = useMediaQuery(theme.breakpoints.up('md'));
	const isScreenDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (<>
		<CustomContainer>
			<Grid container spacing={3.6}>
				<Grid item xs={12} md={4} >
					<Box>
						<ServicesSidebar serviceList={ServicesList} changeHandler={handleTabChange} value={tabValue}/>
					</Box>
					{isScreenTabletOrDesktop && <Box pt="30px" >
						<NewsBar showNewsDate={isScreenDesktop} news={newsData} textMaxLength={maxTextLength}/>
					</Box>}
				</Grid>
				<Grid item xs={12} md={8} >
					<Sops  isDesktop={isScreenTabletOrDesktop} />
					{Array(7).fill(1).map(( item, index) => (
						<TabPanel key={index} value={tabValue} index={index} padding={1}>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="center"
								divider={<Divider orientation="horizontal" flexItem />}
							>
								<Box pb="14px">
									<AwesomeServices />
								</Box>
								<Grid container pt="30px" pb="10px">
									{serviceCardList.map((item, index) => (
										<Grid key={index} xs={12} md={6} item>
											<ServicesCard index={index+1} title={item.title} description={item.description}/>
										</Grid>
									))}
								</Grid>
								<Box pt="14px">
									<ServicesTypography>
										<Trans
											i18nKey="servicePage.awesomeServices.listItem.description"
											components={{ p: <p />}}
										/> {index+1}
									</ServicesTypography>
								</Box>
							</Stack>
						</TabPanel>) )}
				</Grid>
				{!isScreenTabletOrDesktop && <Grid item xs={12}>
					<NewsBar showNewsDate={false} news={newsData} textMaxLength={maxTextLength}/>
				</Grid>}
			</Grid>
		</CustomContainer>
		{!isScreenTabletOrDesktop && <Box sx={{margin: '50px 0 20px 0'}}><Divider orientation="horizontal" sx={{borderColor: Colors.purple}} /></Box>}
	</>
	);
};

export default Services;
