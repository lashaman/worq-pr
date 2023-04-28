import {Box, Container, Grid, Paper, Typography} from '@mui/material';
import React from 'react';
import ServicesSidebar from './components/ServicesSidebar/ServicesSidebar.component';
import NewsBar from './components/NewsBar/NewsBar.component';
import Colors from '../../config/colors';

const Services = () => {
	return (
		<Container maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>

			<Grid container maxWidth="1280px"  sx={{margin: '0 auto'}} spacing={0}>
				<Grid item xs={12} md={4}>
					<ServicesSidebar/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Paper elevation={0} sx={{backgroundColor: Colors.purpleLighter, padding: '20px', borderRadius: '30px'}}>
						<Typography variant="h4">
						</Typography>
						<Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4}>
					<NewsBar/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
