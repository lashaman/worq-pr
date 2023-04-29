import React from 'react';
import {Card, CardContent, styled, Typography} from '@mui/material';
import {Trans} from 'react-i18next';

const AwesomeServicesDescription = styled(Typography)`
	font-family: 'Poppins Light';
	& > span {
		font-family: 'Poppins Bold';
  }
`;

const AwesomeServices = () => (
	<Card elevation={0} >
		<CardContent sx={{paddingLeft: 0, paddingRight: 0}}>
			<Typography gutterBottom fontFamily="Avenir Black"  fontSize={{xs: '22px', md: '28px', lg: '36px'}}>
				<Trans i18nKey="servicePage.awesomeServices.title" />
			</Typography>
			<AwesomeServicesDescription fontSize={{xs: '16px', md: '18px', lg: '20px'}}>
				<Trans i18nKey="servicePage.awesomeServices.description" components={{span: <span />}} />
			</AwesomeServicesDescription>
		</CardContent>
	</Card>
);

export default AwesomeServices;
