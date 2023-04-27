import React from 'react';
import SidebarPaper from '../../../../components/SidebarPaper/SidebarPaper.component';
import {Box, Card, CardContent, CardHeader, Typography} from '@mui/material';
import News1 from '../../../../assets/images/news1.png';
import News2 from '../../../../assets/images/news2.png';
import News3 from '../../../../assets/images/news3.png';

const News = [
	{
		text: 'servicePage.sideBar.newsPanel.news1',
		image: News1,
	},
	{
		text: 'servicePage.sideBar.newsPanel.news2',
		image: News2,
	},
	{
		text: 'servicePage.sideBar.newsPanel.news3',
		image: News3,
	},
];

const NewsBar = () => {
	return (
		<SidebarPaper title="servicePage.sidebar.newsPanel.title" fontSize={{xs: '24px', md: '20px', lg: '24px'}}>
			{News.map((news, index) => (
				<Card sx={{maxWidth: 345}} key={index}>
					<CardHeader
						avatar={<Box component="img" src={news.image}  alt="1" />}
						title={<Typography variant="subtitle1">{news.text}</Typography>} />
				</Card>
			))}
		</SidebarPaper>
	);
};

export default NewsBar;
