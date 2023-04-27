import React from 'react';
import {Box, Paper, styled, Typography} from '@mui/material';
import {Trans, useTranslation} from 'react-i18next';
import {ServicesList} from '../../../../config/services-lists';
import Colors from '../../../../config/colors';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SidebarPaper from '../../../../components/SidebarPaper/SidebarPaper.component';

const ServiceSideBarButton = styled(Button)`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-family: 'Avenir Medium';
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
	&:hover,
	&:focus,
	&:active {
		background-color: ${Colors.purple};
		color: ${Colors.white};
  }
`;

const ServiceSideBarTitle = styled(Typography)`
  color: ${Colors.black};
	padding: 10px 0;
	font-family: 'Avenir Black';
	& > span {
		color: ${Colors.purple};
  }
`;

const ServicesSidebar = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<SidebarPaper title="servicePage.sidebar.title" fontSize={{xs: '28px', lg: '36px'}}>
			{ServicesList.map((item, index) => (
				<ServiceSideBarButton variant="outlined"
					sx={{
						backgroundColor: value === item.activeStep ? Colors.purple : '',
						color: value === item.activeStep ? Colors.white : Colors.black,
						borderColor: Colors.purpleLight,
					}}
					endIcon={<ArrowForwardIosIcon fontSize="large"  sx={{marginRight: '-2px', color: Colors.purpleLight}} />}
					key={index}
					onClick={(e) => handleChange(e,  item.activeStep)}>
					{item.textContent}
				</ServiceSideBarButton>
			))}
		</SidebarPaper>
	);
};

export default ServicesSidebar;
