import React from 'react';
import { styled} from '@mui/material';
import Colors from '../../../../config/colors';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SidebarPaper from '../../../../components/SidebarPaper/SidebarPaper.component';
import {ServiceList} from '../../../../interfaces/service-list.interface';

const ServiceSideBarButton = styled(Button)`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-family: 'Avenir Medium';
	text-transform: none;
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

interface ServicesSidebarProps {
	serviceList:  ServiceList[];
	changeHandler: (event: React.SyntheticEvent, newValue: number) => void;
	value: number;
}

const ServicesSidebar = ({serviceList, changeHandler, value}: ServicesSidebarProps) => (
	<SidebarPaper title="servicePage.sidebar.tabPanel.title" fontSize={{xs: '28px', lg: '36px'}}>
		{serviceList.map((item, index) => (
			<ServiceSideBarButton variant="outlined"
				sx={{
					backgroundColor: value === item.activeStep ? Colors.purple : '',
					color: value === item.activeStep ? Colors.white : Colors.black,
					borderColor: Colors.purpleLight,
					fontSize: {xs: '18px', md: '15px', lg: '18px'},
				}}
				endIcon={<ArrowForwardIosIcon fontSize="large"  sx={{marginRight: '-2px', color: Colors.purpleLight}} />}
				key={index}
				onClick={(e) => changeHandler(e,  item.activeStep)}>
				{item.textContent}
			</ServiceSideBarButton>
		))}
	</SidebarPaper>
);

export default ServicesSidebar;
