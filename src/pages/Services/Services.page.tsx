import {Container, Grid} from '@mui/material';
import React from 'react';
import ServicesSidebar from './components/ServicesSidebar/ServicesSidebar.component';
import NewsBar from './components/NewsBar/NewsBar.component';

const Services = () => {
	return (
		<Container maxWidth={false} sx={{paddingLeft: {xs: 0, md: 0}, paddingRight: {xs: 0, md: 0}}}>

			<Grid container maxWidth="1280px"  sx={{margin: '0 auto'}} spacing={0}>
				<Grid item xs={12} md={4}>
					<ServicesSidebar/>
					<NewsBar/>
				</Grid>
				<Grid item xs={12} md={8}>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
