import React from 'react';
import {Box, Grid, styled, Typography} from '@mui/material';
import {t} from 'i18next';
import Colors from '../config/colors';
import Bastil from '../assets/images/bastil.png';
import Boleir from '../assets/images/boleir.png';
import Darkside from '../assets/images/darkside.png';
import EdgeWater from '../assets/images/edgewater.png';
import FifthFlour from '../assets/images/fifthflour.png';
import {CustomContainer} from '../atoms/custom-components';

const ClientsContainer = styled(CustomContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 67px 0;
  background: rgb(239, 238, 255);
  background: radial-gradient(circle, rgba(239, 238, 255, 1) 64%, rgba(148, 187, 233, 1) 100%, rgba(148, 187, 233, 1) 100%);
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const ServiceBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  align-items: center;
  padding: 100px 0 100px 0;
`;

const ServiceTitle = styled(Typography)`
  font-size: 3rem;
  text-align: left;
  color: ${Colors.purple};
  font-weight: 700;
  border-right: 2px solid ${Colors.purple};
`;

const ImgGrid = styled(Grid)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;


const clients = [
	Boleir,
	EdgeWater,
	Bastil,
	FifthFlour,
	Darkside
];

const Clients = () => {
	return (
		<ClientsContainer maxWidth={false}>
			<ServiceBox>
				<Grid container spacing={4} sx={{width: '100%'}}>
					<Grid item xs={4}>
						<ServiceTitle variant="h3">
							{t('clients.title')}
						</ServiceTitle>
					</Grid>
					<ImgGrid item xs={8}>
						{clients.map((client) => (
							<img src={client} key={client} alt="client" />
						))}
					</ImgGrid>
				</Grid>
			</ServiceBox>
		</ClientsContainer>
	);
};

export default Clients;
