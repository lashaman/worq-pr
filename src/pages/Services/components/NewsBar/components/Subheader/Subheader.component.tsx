import DateRangeIcon from '@mui/icons-material/DateRange';
import Colors from '../../../../../../config/colors';
import Button from '@mui/material/Button';
import React from 'react';
import {styled, Typography} from '@mui/material';

const SubHeaderButton = styled(Button)`
	font-family: 'Avenir Medium';
	color: ${Colors.black};
	text-transform: none;
	font-size: 14px;
`;

interface SubheaderProps {
	date: string;
}

const Subheader = ({date}: SubheaderProps) => {
	return (
		<SubHeaderButton
			startIcon={
				<DateRangeIcon sx={{color: Colors.purpleLight}}/>
			}>
			<Typography mt="3px">{date}</Typography>
		</SubHeaderButton>
	);
};

export default Subheader;
