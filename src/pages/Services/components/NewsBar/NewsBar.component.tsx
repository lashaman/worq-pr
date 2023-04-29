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
import {News} from '../../../../interfaces/news.interface';

interface NewsBarProps {
	news: News[];
	textMaxLength: number;
	isScreenDesktop: boolean;
}

const NewsBar = ({news, textMaxLength, isScreenDesktop}: NewsBarProps) => {
	const {t} = useTranslation();
	return (
		<SidebarPaper title="servicePage.sidebar.newsPanel.title" fontSize={{xs: '24px', md: '20px', lg: '24px'}}>
			{news.map((news, index) => (
				<Card sx={{backgroundColor: 'transparent', boxShadow: 'none'}} raised={false} key={index}>
					<CardHeader
						sx={{overflow: 'hidden'}}
						avatar={
							<Box component="img" height="86px" src={news.image}  alt="1" />
						}
						title={
							<CardTitle text={addThreeDots(t(news.text), textMaxLength)} />
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
