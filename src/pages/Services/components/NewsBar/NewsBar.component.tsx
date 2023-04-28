import React from 'react';
import SidebarPaper from '../../../../components/SidebarPaper/SidebarPaper.component';
import {Box, Card, CardHeader, useMediaQuery, useTheme} from '@mui/material';
import {useTranslation} from 'react-i18next';
import { format } from 'date-fns';
import News1 from '../../../../assets/images/news1.png';
import News2 from '../../../../assets/images/news2.png';
import News3 from '../../../../assets/images/news3.png';
import CardTitle from './components/CardTitle/CardTitle.component';
import Subheader from './components/Subheader/Subheader.component';
import addThreeDots from '../../../../Utils/AddThreeDots.util';
import FormatUnixTimeStamp from '../../../../Utils/FormatUnixTimeStamp';

const News = [
	{
		text: 'servicePage.sideBar.newsPanel.news1',
		image: News1,
		date: 1619628810,
	},
	{
		text: 'servicePage.sideBar.newsPanel.news2',
		image: News2,
		date: 1612198410,
	},
	{
		text: 'servicePage.sideBar.newsPanel.news3',
		image: News3,
		date: 1682700861
	},
];

const maxTextLength = 48;



const NewsBar = () => {
	const {t} = useTranslation();
	const theme = useTheme();
	const isScreenDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	return (
		<SidebarPaper title="servicePage.sidebar.newsPanel.title" fontSize={{xs: '24px', md: '20px', lg: '24px'}}>
			{News.map((news, index) => (
				<Card sx={{backgroundColor: 'transparent', boxShadow: 'none'}} raised={false} key={index}>
					<CardHeader
						sx={{overflow: 'hidden'}}
						avatar={
							<Box component="img" height="86px" src={news.image}  alt="1" />
						}
						title={
							<CardTitle text={addThreeDots(t(news.text), maxTextLength)} />
						}
						subheader={
							isScreenDesktop ? <Subheader date={FormatUnixTimeStamp(news.date)} /> : ''
						}
					/>
				</Card>
			))}
		</SidebarPaper>
	);
};

export default NewsBar;
