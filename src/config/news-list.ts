import {News} from '../interfaces/news.interface';
import News1 from '../assets/images/news1.png';
import News2 from '../assets/images/news2.png';
import News3 from '../assets/images/news3.png';
export const newsData: News[] = [
	{
		text: 'servicePage.sideBar.newsPanel.news1',
		image: News1,
		date: 1619628810,
		link: 'https://www.google.com',
	},
	{
		text: 'servicePage.sideBar.newsPanel.news2',
		image: News2,
		date: 1612198410,
		link: 'https://www.google.com',
	},
	{
		text: 'servicePage.sideBar.newsPanel.news3',
		image: News3,
		date: 1682700861,
		link: 'https://www.google.com',
	},
];

export const maxTextLength = 48;
