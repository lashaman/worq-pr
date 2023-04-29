import {Box, Card, CardContent, CardHeader, styled, Typography} from '@mui/material';
import React from 'react';
import Colors from '../../../../config/colors';
import {useTranslation} from 'react-i18next';

const CardIcon= styled(Box)`
	width: 40px;
	height: 40px;
	background-color: ${Colors.purple};
	color: ${Colors.white};
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Poppins Bold';
	font-size: 20px;
`;

const CardTitle = styled(Typography)`
	font-family: 'Avenir Black';
	font-size: 22px;
	color: ${Colors.black};
`;

const CardDescription = styled(Typography)`
	font-family: 'Poppins Light';
	font-size: 16px;
	color: ${Colors.black};
`;


interface ServiceCardProps {
	title: string;
	description: string;
	index: number;
}

const ServiceCard = ({title, index, description}: ServiceCardProps) => {
	const {t} = useTranslation();
	return (
		<Card raised={false} sx={{boxShadow: 'none'}}>
			<CardHeader sx={{paddingBottom: '10px'}} avatar={<CardIcon>{index}</CardIcon>} title={<CardTitle>{t(title)}</CardTitle>}  />
			<CardContent sx={{paddingTop: 0}}>
				<CardDescription>
					{t(description)}
				</CardDescription>
			</CardContent>
		</Card>
	);
};

export default ServiceCard;
