import React from 'react';
import {Box, Card, CardContent, Grid, styled, Typography} from '@mui/material';
import Colors from '../config/colors';
import {useTranslation} from 'react-i18next';

const CustomCard = styled(Card)`
  width: 278px;
  height: 101px;
  background-color: ${Colors.white};
  border-radius: 20px;
  box-shadow: 1px 1px 17px rgba(0, 0, 0, 0.04);
  margin: 0 0 40px 0;
`;

const NotificationCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
`;

const NotificationIcon = styled(Box)`
  width: 40px;
  height: 40px;
  background-color: ${Colors.purpleLighter};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotificationTitle = styled(Typography)`
  font-size: 19px;
  font-weight: 700;
  color: ${Colors.purple};
`;

const NotificationDescription = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.black};
`;

interface NotificationCardProps {
	title: string;
	description: string;
	icon: string;
}

const NotificationCard = ({title, description, icon}: NotificationCardProps) => {
	const {t} = useTranslation();
	return (
		<CustomCard>
			<NotificationCardContent>
				<NotificationIcon>
					<img src={icon} alt="O"/>
				</NotificationIcon>
				<Grid container spacing={0} sx={{paddingLeft: '20px'}}>
					<Grid item xs={12}>
						<NotificationTitle variant="h5"  gutterBottom>
							{t(title)}
						</NotificationTitle>
					</Grid>
					<Grid item xs={12}>
						<NotificationDescription variant="h5"  gutterBottom>
							{t(description)}
						</NotificationDescription>
					</Grid>
				</Grid>
			</NotificationCardContent>
		</CustomCard>
	);
};

export default NotificationCard;
