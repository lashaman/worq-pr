import {Box, Paper, styled, Typography} from '@mui/material';
import Colors from '../../config/colors';
import {Trans} from 'react-i18next';
import React from 'react';

interface ServiceSidebarTitleProps {
	title: string;
	fontSize: {xs?: string, md?: string, lg?: string};
	children?: React.ReactNode;
}

const SidebarTitle = styled(Typography)`
  color: ${Colors.black};
	padding: 10px 0;
	font-family: 'Avenir Black';
	& > span {
		color: ${Colors.purple};
  }
`;

const SidebarPaper = ({title, fontSize, children}: ServiceSidebarTitleProps) => {
	return (
		<Paper elevation={0} sx={{backgroundColor: Colors.purpleLighter, padding: '20px', borderRadius: '30px'}}>
			<SidebarTitle sx={{fontSize: fontSize}}>
				<Trans
					i18nKey={title}
					components={{span: <span/>}}
				/>
			</SidebarTitle>
			<Box>
				{children}
			</Box>
		</Paper>
	);
};

export default SidebarPaper;
